let columnNum = 5;
let rowNum = columnNum;


const gridContainer = document.querySelector(".gridContainer");
const resize = document.getElementById('resize');
const boxes = document.querySelectorAll('.boxes');


makeDivs((columnNum*rowNum));


resize.addEventListener('click', () => {
    removeAllChildNodes(gridContainer);
    let ask = prompt("Pick a size for the grid from 1-100", 50);
        if ((ask > 0) && (ask < 101)){
            let columnNum = ask;
            let rowNum = ask;
            makeDivs((columnNum*rowNum));
        }
        else {
            alert(`Please enter a number between 1 and 100 to play`);
        }
    });

function makeDivs(numDivs){
    for (let i=0; i<numDivs; i++) {
        let boxes = document.createElement('div');
        gridContainer.style.gridTemplateColumns = `repeat(${Math.sqrt(numDivs)},1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${Math.sqrt(numDivs)},1fr)`;
        gridContainer.appendChild(boxes).className = "boxes";
    }
}

boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = 'blueviolet';
    });

});

const reset = document.getElementById('reset');
    reset.addEventListener('click', () => {
        boxes.forEach((box) => {
        box.style.backgroundColor = 'transparent';
        });
    });

function removeAllChildNodes(parent) {
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }}