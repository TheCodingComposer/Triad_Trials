//for Github Pages

const c4 = new Audio('https://audio.jukehost.co.uk/w3rgL319RonS2umZrESWRAkNmKEbdXLt');
const cSharp4 = new Audio('https://audio.jukehost.co.uk/l3hFc4kdvTtutJN5aJCZ9QJPYj1F8Khn')
const d4 = new Audio('js/Piano_mp3/D4.mp3');
const dSharp4 = new Audio('js/Piano_mp3/D-sharp4.mp3');
const e4 = new Audio('js/Piano_mp3/E4.mp3');
const f4 = new Audio('js/Piano_mp3/F4.mp3');
const fSharp4 = new Audio('js/Piano_mp3/F-sharp4.mp3');
const g4 = new Audio('js/Piano_mp3/G4.mp3');
const gSharp4 = new Audio('js/Piano_mp3/G-sharp4.mp3');
const a4 = new Audio('js/Piano_mp3/A4.mp3');
const aSharp4 = new Audio('js/Piano_mp3/A-sharp4.mp3');
const b4 = new Audio('js/Piano_mp3/B4.mp3');
const c5 = new Audio('js/Piano_mp3/C5.mp3');
const cSharp5 = new Audio('js/Piano_mp3/C-sharp5.mp3');
const d5 = new Audio('js/Piano_mp3/D5.mp3');
const dSharp5 = new Audio('js/Piano_mp3/D-sharp5.mp3');
const e5 = new Audio('js/Piano_mp3/E5.mp3');
const f5 = new Audio('js/Piano_mp3/F5.mp3');
const fSharp5 = new Audio('js/Piano_mp3/F-sharp5.mp3');
const g5 = new Audio('js/Piano_mp3/G5.mp3');


//Back-up sounds, for logo animation
const backupA = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/yA4.mp3');
const backupA2 = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/zA4.mp3');
const backupC = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/zC5.mp3');
const backupF = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/zF4.mp3');

// for local use
// const c4 = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/C4.mp3');
// const cSharp4 = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/C-sharp4.mp3')
// const d4 = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/D4.mp3');
// const dSharp4 = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/D-sharp4.mp3');
// const e4 = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/E4.mp3');
// const f4 = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/F4.mp3');
// const fSharp4 = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/F-sharp4.mp3');
// const g4 = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/G4.mp3');
// const gSharp4 = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/G-sharp4.mp3');
// const a4 = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/A4.mp3');
// const aSharp4 = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/A-sharp4.mp3');
// const b4 = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/B4.mp3');
// const c5 = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/C5.mp3');
// const cSharp5 = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/C-sharp5.mp3');
// const d5 = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/D5.mp3');
// const dSharp5 = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/D-sharp5.mp3');
// const e5 = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/E5.mp3');
// const f5 = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/F5.mp3');
// const fSharp5 = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/F-sharp5.mp3');
// const g5 = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/G5.mp3');
//
//
// //Back-up sounds, for logo animation
// const backupA = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/yA4.mp3');
// const backupA2 = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/zA4.mp3');
// const backupC = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/zC5.mp3');
// const backupF = new Audio('/Users/matthew/Documents/Atom_Files/Triad_Trials/Triad_Trials/js/Piano_mp3/zF4.mp3');





function playSound(key) {
  switch (key) {
    case 'c4':
      c4.play();
      break;
    case 'c-sharp4':
      cSharp4.play();
      break;
    case 'd4':
      d4.play();
      break;
    case 'd-sharp4':
      dSharp4.play();
      break;
    case 'e4':
      e4.play();
      break;
    case 'f4':
      f4.play();
      break;
    case 'f-sharp4':
      fSharp4.play();
      break;
    case 'g4':
      g4.play();
      break;
    case 'g-sharp4':
      gSharp4.play();
      break;
        case 'a4':
          a4.play();
          break;
    case 'a-sharp4':
      aSharp4.play();
      break;
    case 'b4':
      b4.play();
      break;
    case 'c5':
      c5.play();
      break;
      case 'c-sharp5':
        cSharp5.play();
        break;
        case 'd5':
          d5.play();
          break;

      case 'd-sharp5':
        dSharp5.play();
        break;
      case 'e5':
        e5.play();
        break;
      case 'f5':
        f5.play();
        break;
      case 'f-sharp5':
        fSharp5.play();
        break;
      case 'g5':
        g5.play();
        break;

        case 'backupA':
          backupA.play();
          break;
        case 'backupC':
          backupC.play();
          break;
        case 'backupA2':
          backupA2.play();
          break;
          case 'backupF':
            backupF.play();
            break;

    default:
      console.log('not working');
      break;
  }
};

// function stopSound(key) {
//   switch (key) {
//     case 'c4':
//       console.log('c4 stopped');
//       c4.pause();
//       break;
//     default:
//       break;
//
//     }
// };


//Play sound and "depress" key when key clicked. Show note on staff if toggled on.
$(".key").click(function(event) {

  //prevent clicking black key from triggering parent white key
  event.stopPropagation();

  let key = this.id;
  console.log(this);
  playSound(key);

  $('#' + key).first().addClass('clicked');



  setTimeout(function() {
    $('#' + key).removeClass('clicked');

  }, 1000);

});

// add and remove grayed key
function toggleClass(id) {
  let key = '#' + id;

  if ($('.key').hasClass('clicked') == false) {
    $('.notehead').removeClass('notehead-show');
    $('.notehead-inner').removeClass('notehead-inner-show');
    $('.accidental').removeClass('accidental-show');
    }

    displayNotehead(key);

  $(key).addClass('clicked');


  setTimeout(function() {
    $(key).removeClass('clicked');

  }, 1000);


};

// turn key gray and play sound for one second when triggered
$(document).keypress(function() {

  //turn off function when using input
  var el = document.activeElement;
  if (el && el.selectionStart !== undefined || el.isContentEditable) {
       console.log('skip');
       return; // active element has caret, do not proceed
   }
  console.log(event.key);

  switch (event.key) {
    case 'a':
      toggleClass('c4');
      playSound('c4');
      break;
    case 'w':
      toggleClass('c-sharp4');
      playSound('c-sharp4');
      break;
    case 's':
      toggleClass('d4');
      playSound('d4');
      break;
    case 'e':
      toggleClass('d-sharp4');
      playSound('d-sharp4');
      break;
      case 'd':
        toggleClass('e4');
        playSound('e4');
        break;
        case 'f':
          toggleClass('f4');
          playSound('f4');
          break;
    case 't':
      toggleClass('f-sharp4');
      playSound('f-sharp4');
      break;
    case 'g':
      toggleClass('g4');
      playSound('g4');
      break;
      case 'y':
        toggleClass('g-sharp4');
        playSound('g-sharp4');
        break;
        case 'h':
          toggleClass('a4');
          playSound('a4');
          break;
          case 'u':
            toggleClass('a-sharp4');
            playSound('a-sharp4');
            break;
      case 'j':
        toggleClass('b4');
        playSound('b4');
        break;
      case 'k':
        toggleClass('c5');
        playSound('c5');
        break;
        case 'o':
          toggleClass('c-sharp5');
          playSound('c-sharp5');
          break;
          case 'l':
            toggleClass('d5');
            playSound('d5');
            break;
            case 'p':
              toggleClass('d-sharp5');
              playSound('d-sharp5');
              break;
        case ';':
          toggleClass('e5');
          playSound('e5');
          break;
        case "'":
          toggleClass('f5');
          playSound('f5');
          break;
          case ']':
            toggleClass('f-sharp5');
            playSound('f-sharp5');
            break;
          case 'Enter':
            toggleClass('g5');
            playSound('g5');
            break;

        case '1':
          toggle1();
          break;
        case '2':
          toggle2();
          break;
        case '3':
          sharpToggle();
          break;
        case '4':
          flatToggle();
          break;
        case '5':
          toggle3();
        case '6':
        normalColors();
        break;
        case '7':
        randomColors();
        break;


  }

});




// $(document).keyup(function() {
//
//   //turn off function when using input
//   var el = document.activeElement;
//   if (el && el.selectionStart !== undefined || el.isContentEditable) {
//        console.log('skip');
//        return; // active element has caret, do not proceed
//    }
//    console.log(event.key);
//
//   switch (event.key) {
//     case 'a':
//       toggleClass('c4');
//       stopSound('c4');
//       break;
//     default:
//       break;
//
//   }
//
// });
