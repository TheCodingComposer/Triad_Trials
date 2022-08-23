//IDE recognizes as a type, not a string

// enum Triad {
//   Major,
//   Minor,
//   Diminished,
//   Augmented
// }

const form1 = document.getElementById('homeForm');

form1.addEventListener('submit', (e) => {
  //prevent page from reloading on submit

  e.preventDefault();

  const formData = new FormData(form1);



  // if (formData.get('quality') === Triad.Major) {
  if (formData.get('quality') === 'Major' || formData.get('quality') === 'major') {


    let majorRoot = formData.get('root');
    playTriad(majorRoot, 'major');
    //Determine if sharp or flat mode to accurately spell chord
    accMode(getMajorTriad(majorRoot));


} else if (formData.get('quality') === 'Minor' || formData.get('quality') === 'minor') {

  let minorRoot = formData.get('root');
  playTriad(minorRoot, 'minor');
  accMode(getMinorTriad(minorRoot));

} else if (formData.get('quality') === 'Diminished' || formData.get('quality') === 'diminished' || formData.get('quality') === 'Dim' || formData.get('quality') === 'dim') {

  let dimRoot = formData.get('root');
  playTriad(dimRoot, 'diminished');
  accMode(getDiminishedTriad(dimRoot));

} else if (formData.get('quality') === 'Augmented' || formData.get('quality') === 'augmented' || formData.get('quality') === 'Aug' || formData.get('quality') === 'aug') {

  let augRoot = formData.get('root');
  playTriad(augRoot, 'augmented');
  accMode(getAugmentedTriad(augRoot));

} else {
  alert('not a valid triad');
  return;
}


});


// Show "Dim." and "Aug." in form box

// function focus() {
//   [].forEach.call(this.options, function(o) {
//     o.textContent = o.getAttribute('value') + o.getAttribute('data-descr');
//   });
// }
//
// function blur() {
//   [].forEach.call(this.options, function(o) {
//     o.textContent = o.getAttribute('value');
//   });
// }
// [].forEach.call($('.short-select'), function(s) {
//   s.addEventListener('focus', focus);
//   s.addEventListener('blur', blur);
//
// })
