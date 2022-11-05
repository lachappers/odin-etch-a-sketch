

const gridContainer = document.querySelector(".gridContainer");

function makeDivs(numDivs){
    for (let i=0; i<numDivs; i++) {
        let boxes = document.createElement('div');
        gridContainer.appendChild(boxes).className = "boxes";
    }
}


makeDivs((2*2));