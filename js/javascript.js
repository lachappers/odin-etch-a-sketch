

const gridContainer = document.querySelector(".gridContainer");

function makeDivs(numDivs){
    for (let i=0; i<numDivs; i++) {
        let boxes = document.createElement('div');
        gridContainer.appendChild(boxes);
    }
}


makeDivs((16*16));