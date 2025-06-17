//Creating the divs for the grid//

function makeDivs(number) {

    for (let i=0; i < (number*number)/2; i++) {
        let divRow = document.createElement("div");
        divRow.id = "boxRow";
        divRow.className = "box";
        divRow.style.width = `calc(650px/${number})`;
        divRow.style.height = `calc(650px/${number})`;

        const container = document.getElementById("container");
        container.appendChild(divRow);
    }

    for (let i=0; i < (number*number)/2; i++) {
        let divCol = document.createElement("div");
        divCol.id = "boxCol";
        divCol.className = "box";
        divCol.style.width = `calc(650px/${number})`;
        divCol.style.height = `calc(650px/${number})`;
        const container = document.getElementById("container");
        container.appendChild(divCol);
    }

    //Hover over grid//

    const box = document.querySelectorAll(".box");

    box.forEach(box => {
        box.addEventListener("mouseover", () => {
            let hexCode = "#" + Math.random().toString(16).substring(2, 8);
             box.style.backgroundColor = hexCode;
    });
    } );
}

makeDivs(16);


// Button prompt for user to create a new sized grid

const button = document.getElementById("button1");

button.addEventListener("click", () => {

    let userInput = prompt("Choose the size of you grid! Pick an even number from 2 - 100!");

    function makeNewGrid(userInput) {
    
    let boxes = document.getElementsByClassName("box");

    let i = 0;
    while(boxes.length) {
        boxes[0].remove();
        i++;
    }

    let inputNo = Number(userInput);

    if (inputNo % 2 == 0 && 1 < inputNo <101) {
            makeDivs(inputNo);
        } else if (inputNo % 2 !==0) {
            alert("Please enter an even number!");
            makeDivs(16);
        } else if (inputNo < 2 || inputNo > 100) {
            alert("Please enter an even number between 2 and 100!");
            makeDivs(16);
        } else {
            alert("Please enter an even number between 2 and 100!");
            makeDivs(16);
        }

};

makeNewGrid(userInput);

})

//reset grid//

const reset = document.getElementById("resetButton");

reset.addEventListener("click", () => {
    let boxes = document.getElementsByClassName("box");

    let i = 0;
    while(boxes.length) {
        boxes[0].remove();
        i++;}
    makeDivs(16);
});