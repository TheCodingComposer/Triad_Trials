// Display / Hide Noteheads in Music Staff box


let showNotehead = false;
let keepNotehead = false;



function displayNotehead(note) {

  $(note + '-notehead').addClass('notehead-show');
  $(note + '-notehead-inner').addClass('notehead-inner-show');
  $(note + '-accidental').addClass('accidental-show');


  if (keepNotehead == false) {

  setTimeout(function() {


      $(note + '-notehead').removeClass('notehead-show');
      $(note + '-notehead-inner').removeClass('notehead-inner-show');
      $(note + '-accidental').removeClass('accidental-show');

    }, 1000);
  } else {
    if ($('.key').hasClass('clicked') == false) {
      // $(note + '-notehead').removeClass('notehead-show');
      // $(note + '-notehead-inner').removeClass('notehead-inner-show');
      // $(note + '-accidental').removeClass('accidental-show');
      }

  }

};
