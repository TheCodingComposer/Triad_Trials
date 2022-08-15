//Change flat to sharp / change # to -sharp

function noteEquiv(note) {

    if (note === 'Abb' || note === 'F##') {
      return 'g';
    }
    if (note === 'Ab' || note === 'G#') {
      return 'g-sharp';
    }
    if (note === 'Bbb' || note === 'G##') {
      return 'a';
    }
    if (note === 'Bb' || note === 'A#') {
      return 'a-sharp';
    }
    if (note === 'A##' || note === 'Cb') {
      return 'b';
    }
    if (note === 'B#' || note === 'Dbb') {
      return 'c';
    }
    if (note === 'C#' || note === 'Db') {
      return 'c-sharp';
    }
    if (note === 'C##' || note === 'Ebb') {
      return 'd';
    }
    if (note === 'D#' || note === 'Eb') {
      return 'd-sharp';
    }
    if (note === 'D##' || note === 'Fb') {
      return 'e';
    }
    if (note === 'E#' || note === 'Gbb') {
      return 'f';
    }
    if (note === 'F#' || note === 'Gb') {
      return 'f-sharp';
    }
    return note;
  }
