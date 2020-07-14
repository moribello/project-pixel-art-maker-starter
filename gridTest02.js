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
//                newCell.addEventListener('click', isClicked)
                newCell.style.backgroundColor = colorChoice;
                newCell.onclick = isClicked;
        }
    }
}


//listens for click
function isClicked(evt){
    var currentColor = window.getComputedStyle(evt.target, null).backgroundColor;
    console.log("Current color of square is " + currentColor);
    if(currentColor !== 'rgb(255, 255, 255)' || currentColor != colorChoice){
        evt.target.style.backgroundColor = colorChoice;
        console.log('current color is ' + evt.target.style.backgroundColor);
    } else if (currentColor == 'rgb(255, 255, 255)'){
        evt.target.style.backgroundColor = colorChoice;
    } else {
        evt.target.style.backgroundColor = 'rgb(255, 255, 255)';
               }
}

colorPicker.addEventListener('change', function(clr){
    var newcolorChoice = clr.target.value;
    console.log(newcolorChoice);
    colorChoice = newcolorChoice;
})

addRow('pixelCanvas');


