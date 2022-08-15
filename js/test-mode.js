const modeForm = document.getElementById('mode-form');


modeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  $('.dropdown').css('display', 'flex');

  console.log('mode button clicked');
});


$('#dropdown-item-1').click( () => {
  $('#mode-text').text('Easy');
  $('.dropdown').css('display', 'none');
  $('#test-btn').text('Start Quiz');
  modeSelected = true;
  mode = 'easy';
});


$('#dropdown-item-2').click( () => {
  $('#mode-text').text('Med.');
  $('.dropdown').css('display', 'none');
  $('#test-btn').text('Start Quiz');
  modeSelected = true;
  mode = 'medium';
});

$('#dropdown-item-3').click( () => {
  $('#mode-text').text('Hard');
  $('.dropdown').css('display', 'none');
  $('#test-btn').text('Start Quiz');
  modeSelected = true;
  mode = 'hard';
});

$('#dropdown-item-4').click( () => {
  $('#mode-text').text('Pro');
  $('.dropdown').css('display', 'none');
  $('#test-btn').text('Start Quiz');
  modeSelected = true;
  mode = 'pro';
});

$('#dropdown-item-5').click( () => {
  $('#mode-text').text('Prod.');
  $('.dropdown').css('display', 'none');
  $('#test-btn').text('Start Quiz');
  modeSelected = true;
  mode = 'prodigy';
});




$('body > *').not('body > #mode-form').click( () => {
  $('.dropdown').css('display', 'none');
});
