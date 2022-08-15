const notes = [['G##', 'A', 'Bbb'], ['A#', 'Bb'], ['A##', 'B', 'Cb'], ['B#', 'C', 'Dbb'], ['C#', 'Db'], ['C##', 'D', 'Ebb'], ['D#', 'Eb'], ['D##', 'E', 'Fb'], ['E#', 'F', 'Gbb'], ['F#', 'Gb'], ['F##', 'G', 'Abb'], ['G#', 'Ab']];


function getMajorTriad(root) {
  let triad = [root];
  let index1 = 0;
  let index2 = 0;
  //find out if root is index 0 or 1 of array
  for (var i = 0; i < notes.length; i++) {
        for (var j = 0; j < 3; j++) {
          if (root === notes[i][j]) {

              index1 = i;
              index2 = j;


              // Natural Notes
              if (index2 == 1 && notes[index1].length == 3) {
                if (notes[(index1 + 4) % 12].length !== 2) {
                    triad.push(notes[(index1 + 4) % 12][j]);
                } else {
                    triad.push(notes[(index1 + 4) % 12][j - 1]);
                }
                if (notes[(index1 + 7) % 12].length !== 2) {
                    triad.push(notes[(index1 + 7) % 12][j]);
                } else {
                    triad.push(notes[(index1 + 7) % 12][j - 1]);
                }
                // Eb, Gb, Ab
              } else if (index2 == 1 && notes[(index1 + 7) % 12].length == 2) {
                  if (notes[(index1 + 4) % 12].length !== 2) {
                      triad.push(notes[(index1 + 4) % 12][j]);
                  } else {
                      triad.push(notes[(index1 + 4) % 12][j]);
                  }
                      triad.push(notes[(index1 + 7) % 12][j]);


              } else if (index2 == 2) {
                if (notes[(index1 + 4) % 12].length !== 2) {
                    triad.push(notes[(index1 + 4) % 12][j]);
                } else {
                    triad.push(notes[(index1 + 4) % 12][j - 1]);
                }
                if (notes[(index1 + 7) % 12].length !== 2) {
                    triad.push(notes[(index1 + 7) % 12][j]);
                } else {
                    triad.push(notes[(index1 + 7) % 12][j - 1]);
                }

              } else {
                  triad.push(notes[(index1 + 4) % 12][j]);
                  triad.push(notes[(index1 + 7) % 12][j]);
              };
              console.log(triad);
              return triad;
              //If C or F
          // } else {
          //   index1 = i;
          //   index2 = j;
          //   triad.push(notes[(index1 + 4) % 12][0]);
          //   triad.push(notes[(index1 + 7) % 12][j]);
          //   console.log(triad);
          // }
        }
      }
    }
}


// FOR REFERENCE
// const notes = [['G##', 'A', 'Bbb'], ['A#', 'Bb'], ['A##', 'B', 'Cb'], ['B#', 'C', 'Dbb'], ['C#', 'Db'], ['C##', 'D', 'Ebb'], ['D#', 'Eb'], ['D##', 'E', 'Fb'], ['E#', 'F', 'Gbb'], ['F#', 'Gb'], ['F##', 'G', 'Abb'], ['G#', 'Ab']];

function getMinorTriad(root) {
  let triad = [root];
  let index1 = 0;
  let index2 = 0;
  //find out if root is index 0 or 1 of array
  for (var i = 0; i < notes.length; i++) {
        for (var j = 0; j < 3; j++) {
          if (root === notes[i][j]) {

              index1 = i;
              index2 = j;



              //NATURAL NOTES
              if (index2 == 1 && notes[index1].length == 3) {

                    triad.push(notes[(index1 + 3) % 12][j]);

                // A, C, D, E, G
                if (notes[(index1 + 7) % 12].length !== 2) {
                    triad.push(notes[(index1 + 7) % 12][j]);
                  // B
                } else {
                    triad.push(notes[(index1 + 7) % 12][j - 1]);
                }

                // Eb, Gb, Ab
              } else if (index2 == 1 && notes[(index1 + 7) % 12].length == 2) {
                  if (notes[(index1 + 3) % 12].length !== 2) {
                      triad.push(notes[(index1 + 3) % 12][j + 1]);
                  } else {
                      triad.push(notes[(index1 + 3) % 12][j]);
                  }
                      triad.push(notes[(index1 + 7) % 12][j]);


              } else if (index2 == 2) {
                if (notes[(index1 + 3) % 12].length !== 2) {
                    triad.push(notes[(index1 + 3) % 12][j]);
                } else {
                    triad.push(notes[(index1 + 3) % 12][j - 1]);
                }
                if (notes[(index1 + 7) % 12].length !== 2) {
                    triad.push(notes[(index1 + 7) % 12][j]);
                } else {
                    triad.push(notes[(index1 + 7) % 12][j - 1]);
                }

                // F# / G#
              } else {
                  triad.push(notes[(index1 + 3) % 12][j + 1]);
                  triad.push(notes[(index1 + 7) % 12][j]);
              };
              console.log(triad);
              return triad;
              //If C or F
          // } else {
          //   index1 = i;
          //   index2 = j;
          //   triad.push(notes[(index1 + 4) % 12][0]);
          //   triad.push(notes[(index1 + 7) % 12][j]);
          //   console.log(triad);
          // }
        }
      }
    }
}


[['G##', 'A', 'Bbb'], ['A#', 'Bb'], ['A##', 'B', 'Cb'], ['B#', 'C', 'Dbb'], ['C#', 'Db'], ['C##', 'D', 'Ebb'], ['D#', 'Eb'], ['D##', 'E', 'Fb'], ['E#', 'F', 'Gbb'], ['F#', 'Gb'], ['F##', 'G', 'Abb'], ['G#', 'Ab']];

function getDiminishedTriad(root) {
  let triad = [root];
  let index1 = 0;
  let index2 = 0;
  //find out if root is index 0 or 1 of array
  for (var i = 0; i < notes.length; i++) {
        for (var j = 0; j < 3; j++) {
          if (root === notes[i][j]) {

              index1 = i;
              index2 = j;



              //NATURAL NOTES
              if (index2 == 1 && notes[index1].length == 3) {

                    triad.push(notes[(index1 + 3) % 12][j]);

                // A, C, D, E, G
                if (notes[(index1 + 6) % 12].length !== 2) {
                    triad.push(notes[(index1 + 6) % 12][j]);
                  // B
                } else {
                    triad.push(notes[(index1 + 6) % 12][j]);
                }

                // Eb, Gb, Ab
              } else if (index2 == 1 && notes[(index1 + 6) % 12].length == 2) {
                  if (notes[(index1 + 3) % 12].length !== 2) {
                      triad.push(notes[(index1 + 3) % 12][j + 1]);
                  } else {
                      triad.push(notes[(index1 + 3) % 12][j]);
                  }
                      triad.push(notes[(index1 + 6) % 12][j]);


              } else if (index2 == 2) {
                if (notes[(index1 + 3) % 12].length !== 2) {
                    triad.push(notes[(index1 + 3) % 12][j]);
                } else {
                    triad.push(notes[(index1 + 3) % 12][j - 1]);
                }
                if (notes[(index1 + 6) % 12].length !== 2) {
                    triad.push(notes[(index1 + 6) % 12][j]);
                } else {
                    triad.push(notes[(index1 + 6) % 12][j - 1]);
                }

                // F# / G#
              } else {
                  // Bb
                  if (index2 == 1) {
                    triad.push(notes[(index1 + 3) % 12][j]);
                  }
                  else {
                    triad.push(notes[(index1 + 3) % 12][j + 1]);
                  }

                  triad.push(notes[(index1 + 6) % 12][j + 1]);
              };
              console.log(triad);
              return triad;
              //If C or F
          // } else {
          //   index1 = i;
          //   index2 = j;
          //   triad.push(notes[(index1 + 4) % 12][0]);
          //   triad.push(notes[(index1 + 7) % 12][j]);
          //   console.log(triad);
          // }
        }
      }
    }
}


function getAugmentedTriad(root) {
  let triad = [root];
  let index1 = 0;
  let index2 = 0;
  //find out if root is index 0 or 1 of array
  for (var i = 0; i < notes.length; i++) {
        for (var j = 0; j < 3; j++) {
          if (root === notes[i][j]) {

              index1 = i;
              index2 = j;



              //NATURAL NOTES
              if (index2 == 1 && notes[index1].length == 3) {

                    triad.push(notes[(index1 + 4) % 12][j]);

                // A, C, D, E, G
                if (notes[(index1 + 8) % 12].length !== 2) {
                    triad.push(notes[(index1 + 8) % 12][j]);
                  // B
                } else {
                    triad.push(notes[(index1 + 8) % 12][j - 1]);
                }

                // Eb, Gb, Ab
              } else if (index2 == 1 && notes[(index1 + 8) % 12].length == 2) {
                  if (notes[(index1 + 4) % 12].length !== 2) {
                      triad.push(notes[(index1 + 4) % 12][j + 1]);
                  } else {
                      triad.push(notes[(index1 + 4) % 12][j]);
                  }
                      triad.push(notes[(index1 + 8) % 12][j]);


              } else if (index2 == 2) {
                if (notes[(index1 + 4) % 12].length !== 2) {
                    triad.push(notes[(index1 + 4) % 12][j]);
                } else {
                    triad.push(notes[(index1 + 4) % 12][j - 1]);
                }
                if (notes[(index1 + 8) % 12].length !== 2) {
                    triad.push(notes[(index1 + 8) % 12][j]);
                } else {
                    triad.push(notes[(index1 + 8) % 12][j - 1]);
                }

                // F# / G#
              } else {
                  triad.push(notes[(index1 + 4) % 12][j + 1]);
                  triad.push(notes[(index1 + 8) % 12][j]);
              };
              console.log(triad);
              return triad;
              //If C or F
          // } else {
          //   index1 = i;
          //   index2 = j;
          //   triad.push(notes[(index1 + 4) % 12][0]);
          //   triad.push(notes[(index1 + 7) % 12][j]);
          //   console.log(triad);
          // }
        }
      }
    }
}



// ANIMATE FOOTER

let playing = false;

$('#staff-logo').mouseover(function() {
  footerToggle();
});

function footerToggle() {


  if (playing == false) {
    playing = true;
  e5.volume = .4;
  playSound('e5');
  $('#letter-1').css("color", 'white');


  setTimeout(function() {
    c5.volume = .5;
    playSound('c5');
    $('#letter-2').css("color", 'white');
  }, 150);

  setTimeout(function() {
    a4.volume = .6;
    playSound('a4');
    $('#letter-3').css("color", "white");
  }, 300);

  setTimeout(function() {
    f4.volume = .7;
    playSound('f4');
    $('#letter-4').css("color", "white");
  }, 450);

  setTimeout(function() {
    backupA.volume = .8;
    playSound('backupA');
    $('#letter-5').css("color", "white");
  }, 600);

  setTimeout(function() {
    backupC.volume = .9;
    playSound('backupC');
    $('#letter-6').css("color", "white");
  }, 900);

  setTimeout(function() {
    e5.volume = .8;
    playSound('e5');
    $('#letter-7').css("color", "white");
  }, 1050);

  setTimeout(function() {
    c5.volume = .7;
    playSound('c5');
    $('#letter-8').css("color", "white");
  }, 1200);

  setTimeout(function() {
    backupA2.volume = 0.6;
    playSound('backupA2');
    $('#letter-9').css("color", "white");
  }, 1350);

  setTimeout(function() {
    f4.volume = 0.5;
    playSound('backupF');
    $('#letter-10').css("color", "white");
  }, 1500);

  setTimeout(function() {
    a4.volume = 0.4;
    playSound('a4');
    $('#letter-11').css("color", "white");
  }, 1650);

  setTimeout(function() {
    g5.volume = 0.2;
    playSound('g5');
    $('#letter-12').css("color", "white");
  }, 2100);

  setTimeout(function() {
    g5.volume = 1;
    backupA2.volume = 1;
    backupF.volume = 1;
    a4.volume = 1;
    f4.volume = 1;
    c5.volume = 1;
    $(".letter").css("color", "#F8B195");
  }, 3100);

  setTimeout(function() {
    playing = false;


  }, 4000);


};



};
