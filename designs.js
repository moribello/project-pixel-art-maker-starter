//PixelPaint Javascript file. This is where all the magic happens.

// Declare variables

/* Assigns hex value for white as default color - this will be passed
to each cell when it's initially created, then used to update the color*/
var colorChoice = '#ffffff';
// Select color input

// Create an element for the color picker
const colorPicker = document.getElementById('colorPicker');

// Select size input
const sizePicker = document.getElementById('sizePicker');

// Select pixelCanvas table
const drawingGrid = document.getElementById('pixelCanvas');

//functions are declared here

//Creates grid from user-selected variables
function makeGrid() {
    event.preventDefault(); //I had to put this in to prevent the page from reloading
    
    // Remove any previous rows, if they exist
    var currentRows = drawingGrid.childElementCount;
    if (currentRows > 0){
        for(r = 0; r < currentRows; r++){
            drawingGrid.removeChild(drawingGrid.lastElementChild)
        }
    }
    
    // Create a new grid
    var h = document.querySelector('#inputHeight').value;
    var w = document.querySelector('#inputWidth').value;

    for (x=1; x<=h; x++){
        var rows = document.createElement('tr');
        for (y = 0; y<w; y++){
            var cell = document.createElement('td');
            cell.style.backgroundColor = '#ffffff';
                /* This line is important because if no color is assigned to the cell
                the EventListener will return a color value in "rgba" format and not
                "rgb". This will cause problems with the convertToHex function as it 
                slices from a specific index*/
            rows.appendChild(cell);
        }
        drawingGrid.appendChild(rows);
    }
}

// Called when grid square is clicked and toggles between chosen color and default
function isClicked(evt){
    var currentColor = window.getComputedStyle(evt.target, null).backgroundColor;
//    console.log("Current color of square is " + currentColor);
    var rgbValues = (currentColor.slice(4,-1)).split(",");
    var currentHex = convertToHex(rgbValues);
//    console.log(currentHex);
     if (currentHex == '#ffffff'){
//        console.log("Changing color from white to "+ colorChoice);
        evt.target.style.backgroundColor = colorChoice;
    } else {
        evt.target.style.backgroundColor = '#ffffff';
            } 
}

/* Converts the really annoying "rgb(r, g,b)" string that JavaScript returns into 
something useable - a hex value. It's passed an array that represents the r, g, and 
b values and changed them to hex values, then concatenates them together with a 
"#" at the beginning so it looks like a hex value.*/
function convertToHex(rgbValues) { 
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

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', makeGrid);

// listens for click
drawingGrid.addEventListener('click', isClicked);

// listens for color picker change
colorPicker.addEventListener('change', function(clr){
    var newcolorChoice = clr.target.value;
//    console.log(newcolorChoice);
    colorChoice = newcolorChoice;
})
