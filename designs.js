//listens for click
function isClicked(evt){
    alert('current node is ' + evt.target.nodeValue + ' and its color is' + evt.target.style.backgroundColor);
    
}

function makeGrid(){
    event.preventDefault();
    let tableRef = document.getElementById('pixelCanvas');
    for (x = 0; x <= 5; x ++){
        let newRow = tableRef.insertRow();
        for (y = 0; y <= 8; y ++){
                let newCell = newRow.insertCell();
        }
    }
}


function swapColor(currentColor){
    if(currentColor = colorPicker.value){
        return "#ffffff";
    } else {
        return colorPicker.value;
    }
}

// Select color input
const colorPicker = document.getElementById('colorPicker');
console.log(colorPicker.value);

// Select size input
const sizePicker = document.getElementById('sizePicker');
console.log(sizePicker.value);

//select header text
const headText = document.querySelector('h1');

const drawingGrid = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', makeGrid);
                        
//changes color of text to selected color. Done to verify the correct value was being passed to the variable.
colorPicker.addEventListener('change', function(clr){
    console.log(clr.target.value);
    headText.style.color = clr.target.value;
})

drawingGrid.addEventListener('click', isClicked);

