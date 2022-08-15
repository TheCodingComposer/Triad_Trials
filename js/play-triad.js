
//Get rid of repetition - turn note equivalence into its own function

function playTriad(root, quality, mode) {
// function playTriad(root, Triad quality, mode) {


// if (quality === Triad.Major) {
  if (quality === 'Major' || quality === 'major') {


  let getMajTriad = getMajorTriad(root);
  let majorTriad = [];

  //n = original note name
  getMajTriad.forEach((n, index) => {

    //Change flat to sharp / change # to -sharp

    let note = noteEquiv(n);


  if (root === 'E#' || root === 'F' || root === 'F#' || root === 'Gb' || root === 'G') {

    if (index === 2) {
      note = note + "5";
    } else {
      note = note + "4";
    }

  } else if (root === 'G#' || root === 'Ab' || root === 'A' || root === 'A#' || root === 'Bb' || root === 'B' || root === 'Cb') {

    if (index === 1 || index === 2) {
      note = note + "5";
    } else {
      note = note + "4";
    }

  } else {
    note = note + "4";
  }


  majorTriad.push(note.toLowerCase());
  let noteNum = (index + 1);
  let noteId = "#note-" + noteNum.toString();
  $(noteId).text(note[0]);

  });
  console.log("notes = " + majorTriad);

  majorTriad.forEach((note) => {
    playSound(note);

    if (mode !== 'pro' && mode !== 'prodigy') {
    toggleClass(note);
  }
  })

  // Minor Triad

// } else if (quality === Triad.Minor) {
} else if (quality === 'Minor' || quality === "minor") {


  let getMinTriad = getMinorTriad(root);
  let minorTriad = [];

  //Assign range to notes and
  getMinTriad.forEach((n, index) => {


  note = noteEquiv(n);



  if (root === 'F' || root === 'F#' || root === 'Gb' || root === 'G' || root === 'G#' || root === 'Ab') {

    if (index === 2) {
      note = note + "5";
    } else {
      note = note + "4";
    }

  } else if (root === 'A' || root === 'A#' || root === 'Bb' || root === 'B' || root === 'Cb') {

    if (index === 1 || index === 2) {
      note = note + "5";
    } else {
      note = note + "4";
    }

  } else {
    note = note + "4";
  }


  minorTriad.push(note.toLowerCase());
  let noteNum = (index + 1);
  let noteId = "#note-" + noteNum.toString();
  $(noteId).text(note[0]);

  });
  console.log("notes = " + minorTriad);

  minorTriad.forEach((note) => {
    playSound(note);
    if (mode !== 'pro' && mode !== 'prodigy') {
    toggleClass(note);
  }
  })


} else if (quality === 'diminished') {


  let getDimTriad = getDiminishedTriad(root);
  let dimTriad = [];

  //Assign range to notes and
  getDimTriad.forEach((n, index) => {

    note = noteEquiv(n);

  if (root === 'F#' || root === 'Gb' || root === 'G' || root === 'G#' || root === 'Ab') {

    if (index === 2) {
      note = note + "5";
    } else {
      note = note + "4";
    }

  } else if (root === 'A' || root === 'A#' || root === 'Bb' || root === 'B' || root === 'Cb') {

    if (index === 1 || index === 2) {
      note = note + "5";
    } else {
      note = note + "4";
    }

  } else {
    note = note + "4";
  }


  dimTriad.push(note.toLowerCase());
  let noteNum = (index + 1);
  let noteId = "#note-" + noteNum.toString();
  $(noteId).text(note[0]);

  });
  console.log("notes = " + dimTriad);

  dimTriad.forEach((note) => {
    playSound(note);
    if (mode !== 'pro' && mode !== 'prodigy') {
    toggleClass(note);
  }
  })



} else if (quality === 'augmented') {

  let getAugTriad = getAugmentedTriad(root);
  let augTriad = [];


  getAugTriad.forEach((n, index) => {

    let note = noteEquiv(n);

  if (root === 'E' || root === 'Fb' ||  root === 'E#' || root === 'F' || root === 'F#' || root === 'Gb' || root === 'G') {

    if (index === 2) {
      note = note + "5";
    } else {
      note = note + "4";
    }

  } else if (root === 'G#' || root === 'Ab'  || root === 'A' || root === 'A#' || root === 'Bb' || root === 'B' || root === 'Cb') {

    if (index === 1 || index === 2) {
      note = note + "5";
    } else {
      note = note + "4";
    }

  } else {
    note = note + "4";
  }


  augTriad.push(note.toLowerCase());
  let noteNum = (index + 1);
  let noteId = "#note-" + noteNum.toString();
  $(noteId).text(note[0]);

  });
  console.log("notes = " + augTriad);

  augTriad.forEach((note) => {
    playSound(note);
    if (mode !== 'pro' && mode !== 'prodigy') {
    toggleClass(note);
  }
  })

} else {
  alert('not a valid triad');
}




}
