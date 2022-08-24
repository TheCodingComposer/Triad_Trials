let toggle1Clicked = false;
let toggle2Clicked = false;
let toggle3Clicked = false;


function toggle1() {
  if (toggle1Clicked == false) {
  $('#toggle-btn-1').addClass('toggle-right');
  $('#toggle-1').css({'background-color':'#612f69', 'opacity':'1'});
  setTimeout(() => {
      $('.key-letter').css('display', 'block');
  }, 200);

  toggle1Clicked = true;

  } else {
  $('#toggle-btn-1').removeClass('toggle-right');
  $('#toggle-1').css({'background-color':'gray', 'opacity':'.5'});
  setTimeout(() => {
      $('.key-letter').css('display', 'none');
  }, 200);


  toggle1Clicked = false;

  }

}

$("#toggle-1").click( () => {
  toggle1();
})


function toggle2() {
  if (toggle2Clicked == false) {
  $('#toggle-btn-2').addClass('toggle-right');
  $('#toggle-2').css({'background-color':'#612f69', 'opacity':'1'});
  setTimeout(() => {
      $('.key-note').css('display', 'block');
  }, 200);

  toggle2Clicked = true;

} else {
  $('#toggle-btn-2').removeClass('toggle-right');
  $('#toggle-2').css({'background-color':'gray', 'opacity':'.5'});
  setTimeout(() => {
      $('.key-note').css('display', 'none');
  }, 200);


  toggle2Clicked = false;

}

}


$("#toggle-2").click( () => {
  toggle2();
})


//Keep Noteheads toggle

function toggle3() {
  if (toggle3Clicked == false) {
    $('#toggle-btn-3').addClass('toggle-right-btn-3');
    $('#toggle-3').css({'background-color':'#612f69', 'opacity':'1'});
  keepNotehead = true;
  toggle3Clicked = true;

} else {
  $('#toggle-btn-3').removeClass('toggle-right-btn-3');
  $('#toggle-3').css({'background-color':'gray', 'opacity':'.5'});

  setTimeout(function() {
    $('.notehead').removeClass('notehead-show');
    $('.notehead-inner').removeClass('notehead-inner-show');
    $('.accidental').removeClass('accidental-show');
  }, 150);

  keepNotehead = false;
  toggle3Clicked = false;

}

}

$("#toggle-3").click( () => {
  toggle3();
})



// Toggle between Sharps and Flat on music staff

//Don't forget C4 Notehead


const blackKeyLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];


//Change Black Keys to sharps if toggle button is clicked

let sharpMode = false;

var SharpLetters = {
  'D': 'C',
  'E': 'D',
  'G': 'F',
  'A': 'G',
  'B': 'A'
}

$('#testSharpToggle').click(() => {
  sharpToggle();
});

function sharpToggle() {
  if (sharpMode == false ) {
    $('.sharp-sign').css('display', 'block');
    $('.flat-sign').css('display', 'none');
    $('#testSharpToggle').css('background-color', '#612f69');
    $('#testFlatToggle').css('background-color', 'rgb(211, 211, 211, 1)');
    $('.flat-notehead').css('top', '-5px');
    $('.flat-notehead-space').css('top', '0');
    $('.acc-key-p').text('♯');

    //Avoid changing D# to C#, etc. if sharp mode is triggered before flat mode
    if (flatMode == true) {
    $('.black-key-first-letter').each(function()  {
      var index = $(this).text();
      $(this).text(SharpLetters[index]);
    } );
  };

    sharpMode = true;
    flatMode = false;
  }

}



// Change black keys to flats if toggle button is clicked
$('#flatToggle').click(() => {

  flatToggle();

});

var FlatLetters = {
  'C': 'D',
  'D': 'E',
  'F': 'G',
  'G': 'A',
  'A': 'B'
}

let flatMode = false;

function flatToggle() {

  if (flatMode == false) {
    $('.flat-sign').css('display', 'block');
    $('.sharp-sign').css('display', 'none');
    $('.flat-notehead').css('top', '-11px');
    $('.flat-notehead-space').css('top', '-5px');
    $('#sharpToggle').css('background-color', 'rgb(211, 211, 211, 1)');
    $('#flatToggle').css('background-color', '#612f69');
    $('.black-key-first-letter').each(function()  {
      var index = $(this).text();
      $(this).text(FlatLetters[index]);
    } );
    $('.acc-key-p').text('♭');
    flatMode = true;
    sharpMode = false;
  }
}
