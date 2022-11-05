let columnNum = 15;
let rowNum = columnNum;

const gridContainer = document.querySelector(".gridContainer");


function makeDivs(numDivs){
    for (let i=0; i<numDivs; i++) {
        let boxes = document.createElement('div');
        gridContainer.style.gridTemplateColumns = `repeat(${columnNum},1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${columnNum},1fr)`;
        gridContainer.appendChild(boxes).className = "boxes";
    }
}


makeDivs((columnNum*rowNum));

const boxes = document.getElementsByClassName('boxes');
// boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
       boxes.style.background = 'black'; 
    });
    box.addEventListener('mouseout', () => {
       boxes.style.background = 'pink'; 
    });
// });
// });
// // boxes.forEach((box) => {
