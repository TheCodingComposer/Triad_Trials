// Since test JS files are not linked to this page, hideKeyPress has to be declared
//in order for playTriad function to work playTriad function to work
let hideKeyPress = false;


$('#major-img').click(() => {
  playTriad('C', 'major');
});

$('#minor-img').click(() => {
  playTriad('C', 'minor');
});

$('#dim-img').click(() => {
  playTriad('C', 'diminished');
});

$('#aug-img').click(() => {
  playTriad('C', 'augmented');
});
