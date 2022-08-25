
let currentTriad = "";
let quizState = false;
let quizEnd = false;
let modeSelected = false;
let mode = '';

let questionNum = 0;
let correctNum = 0;
let incorrectNum = 0;
let answered = false;
var correctAnswer = '';
let missedAnswers = [];
let correctAnswers = [];

let randomRoot = '';
let randomQuality = '';
var buttonText = $('#test-btn');
var answerText = $('#response');
var scoreText = $('#score');
const startTest = document.getElementById("startTest");
const answerForm = document.getElementById('answerForm');
const returnForm = document.getElementById('returnToTest');

const allNotes = ['c4', 'c-sharp4', 'd4', 'd-sharp4', 'e4', 'f4', 'f-sharp4', 'g4', 'g-sharp4', 'a4', 'a-sharp4', 'b4', 'c5', 'c-sharp5', 'd5', 'd-sharp5', 'e5', 'f5', 'f-sharp5', 'g5'];

const mediumKeys = ['C', 'F', 'Bb', 'Eb', 'G', 'D', 'A'];
const hardKeys = ['C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'G', 'D', 'A', 'E', 'B'];


// Update root if necessary based on mode
function rootMode(root) {

  if (mode === 'easy') {
    if (root.length != 1) {
      return getRandomRoot();
    }
  }

  //Max 3 sharps or flat in Medium Mode

  if (mode === 'medium') {
    if (mediumKeys.includes(root) !== true) {
      console.log(root);
      return getRandomRoot();
    }
  }
  //Max 5 sharps or flats in Hard Mode

  if (mode === 'hard') {
    if (mediumKeys.includes(root) !== true) {
      return getRandomRoot();
    }
  }

  return root;
}


function getRandomRoot() {
  let rootIndex = notes[Math.floor(Math.random() * 12)];
  //choose random enharmonic equivalent, excluding double sharps/flats
  let root = rootIndex[Math.floor(Math.random() * rootIndex.length)];

  root = rootMode(root);
  //Only Natural notes in Easy Mode


  if (root.length > 2 && rootIndex.length > 2) {
    root = rootIndex[1];
  };


  return root;
  console.log(root);
};


function toggleGreen(id) {
  let key = '#' + id;
  console.log(key);
  $(key).addClass('green');
  setTimeout(function() {
    $(key).removeClass('green');
  }, 1000);
};


//Randomly select between quality of triad

function getRandomQuality() {

  let randomQuality = "";
  let randomNum = Math.floor(Math.random() * 8);

  if (mode === 'easy') {

    if (randomNum >= 0 && randomNum <= 3) {
      randomQuality = 'major';
    }  else {
      randomQuality = 'minor';
    }
    return randomQuality;

  } else if (mode === 'medium') {

      if (randomNum >= 0 && randomNum <= 2) {
        randomQuality = 'major';
      } else if (randomNum >= 3 && randomNum <= 5) {
        randomQuality = 'minor';
      } else {
        randomQuality = 'diminished';
      }
  } else  {

  if (randomNum >= 0 && randomNum <= 2) {
    randomQuality = 'major';
  } else if (randomNum >= 3 && randomNum <= 5) {
    randomQuality = 'minor';
  } else if (randomNum === 6) {
    randomQuality = 'diminished';
  } else {
    randomQuality = 'augmented';
  }
  }

  return randomQuality;

};



startTest.addEventListener('submit', (e) => {

  e.preventDefault();

// start quiz / initiate next question

  if (modeSelected == true) {

  if (quizState == false) {
    quizState = true;
    buttonText.text('Replay');
    answerText.text('');


    if (questionNum != 0) {
      scoreText.text('Score: ' + correctNum + ' / ' + (questionNum));
    }

    // reset keyboard display
    $('.response-container').css('display', 'none');
    // $('#mode-btn').css('box-shadow', '0 0 0');
    $('.white').css('background-color', 'ivory');
    $('.key').css('border', '1px solid black');

    randomRoot = getRandomRoot();
    randomQuality = getRandomQuality();

    correctAnswer = randomRoot + ' ' + randomQuality;
    $('#quiz-triad').text(correctAnswer);

    // toggle sharp or flat

    switch (randomQuality){

      case 'major':
          accMode(getMajorTriad(randomRoot));
          break;
      case 'minor':
          accMode(getMinorTriad(randomRoot));
          break;
      case 'diminished':
          accMode(getDiminishedTriad(randomRoot));
          break;
      case 'augmented':
          accMode(getAugmentedTriad(randomRoot));
          break;

    }


    playTriad(randomRoot, randomQuality, mode);
    questionNum ++;
    return;
  }

  if (quizState == true) {
    console.log('play triad again');
    playTriad(randomRoot, randomQuality);
  }

  if (answered == true) {
    buttonText.text('Next');
  }



} else {
  alert('Choose a Mode');
}

});


answerForm.addEventListener('submit', (e) => {

  e.preventDefault();
  console.log('answer button pressed');

  if (quizState == true) {

  const answerData = new FormData(answerForm);

  let rootAnswer = answerData.get('root');
  let qualityAnswer = answerData.get('quality');
  qualityAnswer = qualityAnswer.toLowerCase();
  let answer = rootAnswer + ' ' + qualityAnswer;

  console.log(correctAnswer);

  //for enharmonic equivalence, so that, for example, answering 'Gb' for 'F#' is accepted
  let alternateCorrect1 = '';

  let alternateCorrect2 = '';

  for (let i = 0; i < notes.length; i++) {
    for (let j = 0; j < notes[i].length; j++) {
      if (notes[i][j] === randomRoot) {
        if (notes[i][j - 1]) {
          alternateCorrect1 = notes[i][j - 1] + " " + randomQuality;
        }
        if (notes[i][j + 1] && alternateCorrect1 === '') {
          alternateCorrect1 = notes[i][j + 1]  + " " + randomQuality;
        } else {
          alternateCorrect2 = notes[i][j + 1]  + " " + randomQuality;
        }
        if (notes[i][j + 2]) {
          alternateCorrect2 = notes[i][j + 2]  + " " + randomQuality;
        }
      }
    }
  }

  correctAnswers.push(correctAnswer);

//Correct/Wrong Answer Animation



  if (answer === correctAnswer || answer === alternateCorrect1 || answer === alternateCorrect2) {
    answerText.text('Correct!');

    playSound(allNotes[correctNum]);
    toggleGreen(allNotes[correctNum]);
    setTimeout(function() { playSound(allNotes[correctNum + 3]); toggleGreen(allNotes[correctNum + 3]); }, 100);
    setTimeout(function() { playSound(allNotes[correctNum + 6]); toggleGreen(allNotes[correctNum + 6]); }, 200);
    setTimeout(function() { playSound(allNotes[correctNum + 11]); toggleGreen(allNotes[correctNum + 11]); }, 300);
    setTimeout(function() {
          $('.white').css('background-color', 'rgb(255, 255, 240, .2)');
          $('.key').css('border', '1px solid rgb(0, 0, 0, .2)');
          $('.response-container').css('display', 'block');
          $('#mode-btn').css('box-shadow', '0 0 10px rgb(181, 226, 245)');
        }, 1300);
    correctNum ++;
    missedAnswers.push('');
  } else {
    answerText.text('Wrong! Correct Answer: ' + correctAnswer);
    incorrectNum ++;
    missedAnswers.push(answer);


    $('.white').addClass('red');
    $('.black').addClass('dark-red');
    allNotes.forEach( (note) => {
      playSound(note);
    });
    setTimeout(function() {
      $('.white').removeClass('red');
      $('.black').removeClass('dark-red');
      $('.response-container').css('display', 'block');
      $('.white').css('background-color', 'rgb(255, 255, 240, .2)');
      $('.key').css('border', '1px solid rgb(0, 0, 0, .2)');
      $('#mode-btn').css('box-shadow', '0 0 10px rgb(181, 226, 245)');
    }, 1000);
  }

}

if (questionNum == 10) {

  questionNum ++;
  quizText(mode, correctNum);

      setTimeout(function() {
      buttonText.text('Retry');
      toggleResults();
      correctNum = 0;
      quizState = false;
      return;
    }, 1500);

  }



buttonText.text('Next');
quizState = false;



});



function toggleResults() {

  if (quizEnd == false) {
    $('body').children().addClass("opaque");
    $('#overlay').css('display', 'flex');
  }
  else {
    $('body').children().removeClass('opaque');
    quizEnd = true;
  }

}

showResults.addEventListener('submit', (e) => {
  e.preventDefault();

  $('#scoreResults').css({'margin-top':'0', 'margin-bottom':'0'});
  // format results to insert into #score-p-1 element
  let formattedResults = '';
  for (let i = 0; i < correctAnswers.length; i++) {
    console.log(missedAnswers[i]);
    if (missedAnswers[i].length != 0) {
    formattedResults += '<div style="display:grid; grid-template-columns: 1fr 1fr; width: 300px;"><div><p class="result-p"><strong>#' + (i + 1) + ' ' + '</strong><span style="color:red;">' + missedAnswers[i] + '</span></div>     <div><p class="result-p">Correct: <span style="color:green;">' + correctAnswers[i] + '</span></p></div></div>';
  }
  }

  $('#scoreResults').text('Missed:');
  $('#score-p-1').css({'font-size':'1.1rem', 'text-align':'left'});
  $('#score-p-1').html(formattedResults);
  $('.result-p').css('margin-top', '12px');
  $('#showResults').css('display', 'none');
})


returnToTest.addEventListener('submit', (e) => {
  e.preventDefault();

  $('body').children().removeClass("opaque");
  $("#overlay").css('display', 'none');
  $('#showResults').css('display', 'inherit');
  quizEnd = false;
  questionNum = 0;
})
