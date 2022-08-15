function quizText(mode, correctNum) {


  if (mode === 'easy') {

    if (correctNum >= 0 && correctNum <= 2) {
      $('#score-p-1').text("That's okay! Review the Learn page and practice some on the Home keyboard!");
    } else if (correctNum === 3){
      $('#score-p-1').text('Decidely not awful!');
    } else if (correctNum === 4 || correctNum === 5) {
      $('#score-p-1').text("Not bad! You're getting there.");
    } else if (correctNum === 6 || correctNum === 7) {
      $('#score-p-1').text("Nice job! Keep at it.");
    } else if (correctNum === 8 || correctNum === 9) {
      $('#score-p-1').text("Great! Try again, or give the next level a shot.");
    } else {
      $('#score-p-1').text("Great! You're ready for the next level.");
    }

  } else if (mode === 'medium') {

    if (correctNum >= 0 && correctNum <= 2) {
      $('#score-p-1').text("Easy mode misses you.");
    } else if (correctNum === 3){
      $('#score-p-1').text('Decidely not awful!');
    } else if (correctNum === 4 || correctNum === 5) {
      $('#score-p-1').text("Not bad! You're getting there.");
    } else if (correctNum === 6 || correctNum === 7) {
      $('#score-p-1').text("Nice job! Keep at it.");
    } else if (correctNum === 8 || correctNum === 9) {
      $('#score-p-1').text("Great! Try again, or give the next level a shot.");
    } else {
      $('#score-p-1').text("Great! You're ready for the next level.");
    }

  } else if (mode === 'hard') {

    if (correctNum >= 0 && correctNum <= 2) {
      $('#score-p-1').html("A journey of a thousand miles begins with a single step. <br> <br> And you have yet to take that step.");
    } else if ( correctNum === 1 || correctNum || 2 ) {
      $('#score-p-1').text("Medium mode misses you.");
    } else if (correctNum === 3){
      $('#score-p-1').text('Decidely not awful!');
    } else if (correctNum === 4 || correctNum === 5) {
      $('#score-p-1').text("Not bad! You're getting there.");
    } else if (correctNum === 6 || correctNum === 7) {
      $('#score-p-1').text("Nice job! Keep at it.");
    } else if (correctNum === 8 || correctNum === 9) {
      $('#score-p-1').text("Great! Try again, or give the next level a shot.");
    } else {
      $('#score-p-1').text("Great! You're ready for the next level.");
    }


  } else if (mode === 'pro') {

    if (correctNum >= 0 && correctNum <= 2) {
      $('#score-p-1').text("…But your resume said that you’re a “pro”?");
    } else if (correctNum === 1) {
      $('#score-p-1').text("“A journey of ten correct triads begins with one correct triad.” - Discount Fortune Cookie ™");
    } else if (correctNum === 2 || correctNum === 3){
      $('#score-p-1').text('I see they’re letting anyone call themselves pro these days.');
    } else if (correctNum === 4 || correctNum === 5) {
      $('#score-p-1').html("Could be worse. <br> <br> Could be better!");
    } else if (correctNum === 6 || correctNum === 7) {
      $('#score-p-1').text("Nice job! Keep at it.");
    } else if (correctNum === 8 || correctNum === 9) {
      $('#score-p-1').text("Great! Try again, or give the next level a shot.");
    } else {
      $('#score-p-1').html("You did it! Your award will arrive in the mail! (Please allow 5 musician working days* <br> <br> <br> <span font-size: .7rem> *You may never get it...</span>");
    }

  } else {

    if (correctNum === 0) {
      $('#score-p-1').text("You’re a prodigy! At not getting the correct answer!");
    } else if (correctNum === 1) {
      $('#score-p-1').html("1 out of 10 ain't... <br>  well... <br> <br> Keep trying champ!");
    } else if (correctNum === 2){
      $('#score-p-1').html('Talking the talk = 10/10 <br> <br> Walking the walk = ...needs improvement.');
    } else if (correctNum === 3) {
      $('#score-p-1').text('When Triad Trials gives you lemons, sell those lemons to take out a loan and get a better music education.');
    } else if (correctNum === 4 || correctNum === 5) {
      $('#score-p-1').text("Fantastically mediocre!");
    } else if (correctNum === 6 || correctNum === 7) {
      $('#score-p-1').html("I'm impressed. <br> <br> And I'm a keyboard.");
    } else if (correctNum === 8 || correctNum === 9) {
      $('#score-p-1').html("<em>Almost</em> prodigious.");
    } else {
      let num = Math.floor(Math.random() * 2);
      if (num === 0) {
        $('#score-p-1').text("That's it! You've solved music!");
      } else {
        $('#score-p-1').text("Amazing! Carnegie Hall should make its debut at YOU!");
      }
    }

  }


  $('#scoreResults').text('You got ' + correctNum + " / 10 Correct");

  console.log(mode, correctNum);

}
