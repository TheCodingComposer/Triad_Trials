const colors = ['red', 'green', 'blue', '#b00b00', '#de1e7e', '#e1e100', '#BADA55', '#F0FEAF', '#ac1d1c', '#facade', '#34568B', '#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1', '#955251', '#B565A7', '#955251', '#009B77', '#DD4124', '#D65076', '#45B8AC', '#EFC050', '#5B5EA6', '#9B2335', '#BC243C', '#7FCDCD', '#E15D44', '#C3447A','#98B4D4', '#92B558', '#578CA9', '#F6D155', '#004B8D', '#F2552C', '#CE3175', '#5A7247', '#CFB095', '#6B5B95', '#944743', '#DBB1CD', '#00A591', '#6B5B95', '#BFD641', '#DD4132', '#FE840E', '#8D9440', '#D69C2F', '#343148', '#F7CAC9', '#92A8D1', '#F7786B', '#034F84', '#98DDDE','#B18F6A', '#79C753', '#FAE03C', '#9BD770', '#FC7307', '#FEAB6D', '#A33AF2', '#700CBC'];

let usedColors = [];


function getRandomColor() {

  let num = Math.floor(Math.random() * colors.length);
  let color = colors[num];

  return color;
}



function randomColors() {

  $('.key').each(function(i, obj) {


    let included = true;


    while (included == true) {
      color = getRandomColor();
      if (!usedColors.includes(color)) {
        included = false;
      }
     };
     usedColors.push(color);
     console.log(usedColors);
      // $(this).addClass('clicked');
      $(this).css('background-color', color);
    }
  );
  usedColors = [];
};


function normalColors() {
  $('.white').each(function(i, obj) {


      // $(this).addClass('clicked');
      $(this).css('background-color', 'ivory');
    }
  );

  $('.black').each(function(i, obj) {

      // $(this).addClass('clicked');
      $(this).css('background-color', 'black');
    }
  );
}
