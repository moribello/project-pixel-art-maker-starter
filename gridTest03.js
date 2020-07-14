// JavaScript Document

var colorChoice = '#ffffff';
// Select color input
const colorPicker = document.getElementById('colorPicker');

const designGrid = document.querySelector('#pixelCanvas');

function addRow(){
    let tableRef = document.getElementById('pixelCanvas');
    for (x = 0; x <= 5; x ++){
        let newRow = tableRef.insertRow();
        for (y = 0; y <= 8; y ++){
                let newCell = newRow.insertCell();
                newCell.style.backgroundColor = colorChoice;
//                newCell.addEventListener('click', isClicked)
//                newCell.style.backgroundColor = colorChoice;
//                newCell.onclick = isClicked;
        }
    }
}


//listens for click
function isClicked(evt){
    var currentColor = window.getComputedStyle(evt.target, null).backgroundColor;
    console.log("Current color of square is " + currentColor);
    var rgbValues = (currentColor.slice(4,-1)).split(",");
    var currentHex = convertToHex(rgbValues);
    console.log(currentHex);
 /*   if(currentColor !== 'rgb(255, 255, 255)' || currentColor != colorChoice){
        evt.target.style.backgroundColor = colorChoice;
        console.log('current color is ' + evt.target.style.backgroundColor); */
     if (currentHex == '#ffffff'){
        console.log("Changing color from white to "+ colorChoice);
        evt.target.style.backgroundColor = colorChoice;
    } else {
        evt.target.style.backgroundColor = '#ffffff';
            } 
}

var convertToHex = function (rgbValues) { 
    var r = Number(rgbValues[0]).toString(16);
    if (r.length < 2) {
       r = "0" + r;
  }
    var g = Number(rgbValues[1]).toString(16);
    if (g.length < 2) {
       g = "0" + g;
  }
    var b = Number(rgbValues[2]).toString(16);
    if (b.length < 2) {
       b = "0" + b;
  }
    hex = "#" + r + g + b;
    return hex;
};

colorPicker.addEventListener('change', function(clr){
    var newcolorChoice = clr.target.value;
    console.log(newcolorChoice);
    colorChoice = newcolorChoice;
})

designGrid.addEventListener('click', isClicked);

addRow('pixelCanvas');


