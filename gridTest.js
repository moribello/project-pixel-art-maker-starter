// JavaScript Document


const pixelCanvas = document.querySelector('#pixelCanvas');

const grid02 = document.createElement('table')
    for(x = 1; x <= 5; x++){
        var newRow = document.createElement('tr');
        for(y = 1; y <= 8; y++){
            var newCell = document.createElement('td');
            newRow.appendChild(newCell);
        }
        pixelCanvas.appendChild(newRow);
    }



//listens for click
function isClicked(evt){
    alert('current class is ' + evt.target.className + ' and its color is' + evt.target.style.backgroundColor);
    
}


console.log(pixelCanvas.classList);
//const cell = document.querySelector("td");

pixelCanvas.addEventListener('click', isClicked);
