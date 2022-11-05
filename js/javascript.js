let columnNum = 2;
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