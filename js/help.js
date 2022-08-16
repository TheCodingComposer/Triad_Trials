// Help Overlay

let overlay = false;

$('.help').click( () => {
  $('.help-overlay').css({'display':'flex',"opacity":"1"});
  $('.main-wrapper:not(.help-overlay)').css('opacity', '.3');
  displayHelp(currentHelp); 
  // stop next handler from being called
  setTimeout(() => {
    overlay = true;
  }, 100);
});

// If user clicks elsewhere on page, closes help overlay

$('.main-wrapper').click( () => {
  if (overlay == true) {

  $('.help-overlay').css('display', 'none');
  $('.main-wrapper').not('.help-overlay').css('opacity', '1');
  overlay = false;
  currentHelp = 1;

}
});


$('.x-button').click( () => {

  $('.help-overlay').css('display', 'none');
  $('.main-wrapper').not('.help-overlay').css('opacity', '1');
  overlay = false;
  currentHelp = 1;
})


// Back / Next Buttons
let currentHelp = 1;
const helpText = $('.help-text-wrapper');
const pageNum = $('.help-nav-p');

$('.back-arrow').click( () => {
  console.log('back arrow clicked');
  if (currentHelp != 1) {
    currentHelp--;
    displayHelp(currentHelp);
  };
});

$('.next-arrow').click( () => {
  currentHelp++;
  displayHelp(currentHelp);
});


function displayHelp(currentHelp) {

  console.log(currentHelp);
  let text = currentHelp + '/10';
  pageNum.text(text);

  switch (currentHelp) {

    case 1:
      helpText.html('<h1>Welcome to Triad Trials!</h1> <p>This simple web app is a virtual playground for learning about and testing your knowledge of triads, the basic building blocks of chords.</p>');
      break;
    case 2:
      helpText.html('<h1>Playing the Virtual Piano</h1><img src="/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/images/keyboard-notes.png" alt="image of piano keyboard with corresponding computer keys" style="width: 350px"></img><p>The row of computer keys starting from a and ending on "enter" represent the white keys of the piano from C4 to G5. Pressing any of these keys will "play" the corresponding piano key.</p><p>The row of computer keys above, starting with q and ending with "]", represent the black keys of the piano. Note that not all computer keys in this row will have an associated piano key, i.e. between the notes B and C and E and F.</p>');
      break;
    case 3:
        helpText.children().css('text-align', 'left');
        helpText.html('<h1>Keyboard Hotkeys</h1>     <p><strong>1</strong> - Show <strong>Computer Keys</strong> associated with piano keys (a = C4, etc.)</p><p><strong>2</strong> = Show <strong>Note Names</strong> on piano keys</p><p><strong>3</strong>Display accidentals as <strong>sharps</strong> on piano keys/music staff</p><p><strong>3</strong>Display accidentals as <strong>flats</strong> on piano keys/music staff</p>');
      // helpText.html('<h1>Keyboard Hotkeys</h1>     <img src="/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/images/computer_keyboard.jpeg" style="width: 350px;"> </img>    <p style="">The "Computer Keys" toggle (1) and the "Note Names" toggle (2)</p> ');
      break;
    case 4:
      helpText.html('<h1>Show Computer Keys/Notes</h1> <img src="/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/images/note-toggle.png" style="width: 60px; float: left;">    </img>            <p style="padding-left:15px;">The "Computer Keys" toggle (1) and the "Note Names" toggle (2)</p>    <img src="/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/images/keyboard-notes.png" style="width: 370px; margin-top: 20px"></img>')
      break;
    case 5:
      helpText.html('<h1>Music Staff</h1> <img src="/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/images/staff.png" style="width: 100px; float: left;">    </img>            <p style="padding-left:15px;">The "Computer Keys" toggle (1) and the "Note Names" toggle (2)</p>    ')
      break;


  }

}
