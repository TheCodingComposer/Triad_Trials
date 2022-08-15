// Toggle sharp or flat mode depending on given triad - to accurately spell chords


function accMode(triad) {

  triad.forEach((note, index) => {

    console.log(note);

    if (note[note.length - 1] === '#') {
      sharpToggle();
    }
    if (note[note.length - 1] === 'b') {
      flatToggle();
    }

  });


}
