// Help Overlay

let testOverlay = false;

$('.test-help').click( () => {
  $('.test-help-overlay').css({'display':'flex',"opacity":"1"});
  $('.main-wrapper:not(.test-help-overlay)').css('opacity', '.3');
  displayTestHelp(currentTestHelp);
  // stop next handler from being called
  setTimeout(() => {
    testOverlay = true;
  }, 100);
});

// If user clicks elsewhere on page, closes help overlay

$('.main-wrapper').click( () => {
  if (testOverlay == true) {

  $('.test-help-overlay').css('display', 'none');
  $('.main-wrapper').not('.test-help-overlay').css('opacity', '1');
  testOverlay = false;
  currentTestHelp = 1;

}
});


$('.x-button').click( () => {

  $('.test-help-overlay').css('display', 'none');
  $('.main-wrapper').not('.test-help-overlay').css('opacity', '1');
  testOverlay = false;
  currentTestHelp = 1;
})


// Back / Next Buttons
let currentTestHelp = 1;
const testHelpText = $('.test-help-text-wrapper');
const testPageNum = $('.help-nav-p');

$('.back-arrow').click( () => {
  console.log('back arrow clicked');
  if (currentTestHelp != 1) {
    currentTestHelp--;
    displayTestHelp(currentTestHelp);
  };
});

$('.next-arrow').click( () => {
  currentTestHelp++;
  displayTestHelp(currentTestHelp);
});


function displayTestHelp(currentTestHelp) {

  console.log(currentTestHelp);
  let text = currentTestHelp + '/3';
  testPageNum.text(text);

  switch (currentTestHelp) {

    case 1:
      testHelpText.html('<h1>Triad Trials</h1> <p class="help-p">Test your level of triad knowledge with a ten-question quiz!</p>');
      $('.test-grid').css("display", "none");
      break;
    case 2:
      testHelpText.html('<h1>Difficulty Levels</h1> <p class="help-p">Test your level of triad knowledge with a ten-question quiz!</p>');
      $('#test-grid-1').css("display", "grid");
      $('#test-grid-2').css("display", "none");
      // testHelpText.html('<h1>Playing the Virtual Piano</h1><img src="/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/images/keyboard-notes.png" alt="image of piano keyboard with corresponding computer keys" style="width: 350px"></img><p class="help-p-small">The row of computer keys starting from a and ending on "enter" represent the white keys of the piano from C4 to G5. Pressing any of these keys will "play" the corresponding piano key.</p><p class="help-p-small">The row of computer keys above, starting with q and ending with "]", represent the black keys of the piano. Note that not all computer keys in this row will have an associated piano key, i.e. between the notes B and C and E and F.</p>');
      break;
    case 3:
      testHelpText.html('<h1>Difficulty Levels (cont.)</h1> <p class="help-p">Test your level of triad knowledge with a ten-question quiz!</p>');
      $('#test-grid-1').css("display", "none");
      $('#test-grid-2').css("display", "grid");
      // testHelpText.html('<h1>Playing the Virtual Piano</h1><img src="/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/images/keyboard-notes.png" alt="image of piano keyboard with corresponding computer keys" style="width: 350px"></img><p class="help-p-small">The row of computer keys starting from a and ending on "enter" represent the white keys of the piano from C4 to G5. Pressing any of these keys will "play" the corresponding piano key.</p><p class="help-p-small">The row of computer keys above, starting with q and ending with "]", represent the black keys of the piano. Note that not all computer keys in this row will have an associated piano key, i.e. between the notes B and C and E and F.</p>');
      break;



  }

}
