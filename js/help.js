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
  if (currentHelp == 6) {
    $('.help-overlay').css('display', 'none');
    $('.main-wrapper').not('.help-overlay').css('opacity', '1');
    overlay = false;
    currentHelp = 1;
  }
  currentHelp++;
  displayHelp(currentHelp);
});


function displayHelp(currentHelp) {

  console.log(currentHelp);
  let text = currentHelp + '/6';
  pageNum.text(text);

  switch (currentHelp) {

    case 1:
      helpText.html('<h1>Welcome to Triad Trials!</h1><br> <p class="help-p">This simple web app is a virtual playground for learning about and testing your knowledge of triads, the basic building blocks of chords.</p><br><p class="help-p">The <strong> HOME </strong> page allows you to play triads from the Triad Input section and use the virtual keyboard to test your knowledge before heading to the <strong> TEST </strong> page. Visit the <strong>LEARN</strong> page to learn more about how triads are constructed.</p>');
      break;
    case 2:
      helpText.html('<h1>Playing the Virtual Piano</h1><img src="/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/images/keyboard-notes.png" alt="image of piano keyboard with corresponding computer keys" style="width: 350px; margin-bottom:10px;"></img><p class="help-p-small">The row of computer keys starting from a and ending on "enter" represent the white keys of the piano from C4 to G5. Pressing any of these keys will "play" the corresponding piano key.</p><br><p class="help-p-small">The row of computer keys above, starting with q and ending with "]", represent the black keys of the piano. Note that not all computer keys in this row will have an associated piano key, i.e. between the notes B and C and E and F.</p>');
      break;
    case 3:
        helpText.children().css('text-align', 'left');
        helpText.html('<h1>Keyboard Hotkeys</h1>  <p class="help-p-small"><strong>1</strong> - Show <strong>Computer Keys</strong> associated with piano keys (a = C4, etc.)</p><p class="pad-p">&nbsp;</p><p class="help-p-small"><strong>2</strong> - Show <strong>Note Names</strong> on piano keys</p><p class="pad-p">&nbsp;</p><p class="help-p-small"><strong>3</strong> - Display accidentals as <strong>sharps</strong> on piano keys/music staff</p><p class="pad-p">&nbsp;</p><p class="help-p-small"><strong>4</strong> - Display accidentals as <strong>flats</strong> on piano keys/music staff</p> <p class="pad-p">&nbsp;</p><p class="help-p-small"><strong>5</strong> - Keep notes displayed on music staff after sound concludes.</p><p class="pad-p">&nbsp;</p><p class="help-p-small"><strong>6</strong> - Return keyboard colors to original state.</p><p class="pad-p">&nbsp;</p><p class="help-p-small"><strong>7</strong> - "Synesthesia Mode". For when you&#39;re tired of music and just want to party.</p>');
      // helpText.html('<h1>Keyboard Hotkeys</h1>     <img src="/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/images/computer_keyboard.jpeg" style="width: 350px;"> </img>    <p style="">The "Computer Keys" toggle (1) and the "Note Names" toggle (2)</p> ');
      break;
    case 4:
      helpText.html('<h1>Show Computer Keys/Notes</h1> <img src="/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/images/note-toggle.png" style="width: 17%; float: left;">    </img>          <div style="">  <p class="help-p-med" style="margin-left:30%;">The "Computer Keys" toggle (1) allows you to show or hide the computer keys associated with each piano keys. </br> </br> The "Note Names" toggle (2) allows you to show or hide the note names for each piano key.</p> </div>   <img class="help-image-resize" src="/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/images/keyboard-notes.png" style="width: 390px; margin-top: 15px"></img>')
      break;
    case 5:
      helpText.html('<h1>Music Staff</h1> <img src="/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/images/staff.png" style="width: 100px; float: left; margin-right:15px">    </img>            <p class="help-p-med"">The "Music Staff" region shows where notes are located on a conventional music staff. By default, accidentals are shown as sharps. Press the 4 key to display accidentals as flats, and press the 3 key to return to sharps.</p><br><p class="help-p-med">Press the 5 key to continue displaying notes on the staff after the sound has stopped.')
      break;
    case 6:
      helpText.html('<h1>Triad Input</h1> <img src="/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/images/input.png" style="width: 300px; margin-bottom:15px">  </img>            <p class="help-p" style="">Click on the "Root" dropdown to choose the root note of a chord (C, C#, etc.) and the "Quality" dropdown to choose the chord quality (Major, Minor, etc.). Click "Get Triad" to hear the triad played on the virtual piano and displayed in the staff box.</p> <br> <p class="help-p-med"> Note that a triad belonging to a sharp key will change the music staff display to sharps, and a triad belonging to a sharp key will change the display to flats.')
      break;


  }

}
