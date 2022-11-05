let columnNum = 5;
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

const boxes = document.querySelectorAll('.boxes');

    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = 'blueviolet';
        });
    });
        //     document.getElementsByClassName("boxes").style.backgroundColor = "red"; 
        // });
        // boxes[box].addEventListener('mouseout', (e) => {
        //     e.target.style.background = 'black'; 
        //     });
    // });
    // console.log(boxes);
