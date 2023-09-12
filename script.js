let gridSize = 50;
let gridResolution = 16;
let gridContainer = document.getElementById("gridContainer");
let currentGridText = document.getElementById("currentGridText");

createGrid();

function createGrid(){
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }


    for(i=0; i < gridResolution; i++){
        for(j=0; j < gridResolution; j++){
            const div = document.createElement('div');
            div.style.width = `${gridSize}px`;
            div.style.height = `${gridSize}px`;
            div.classList.add("grid");
            //div.style.backgroundColor = "black";
            div.addEventListener("mouseover", hoverOnGrid);
            gridContainer.appendChild(div);
        }
    }
}


function hoverOnGrid(event){
    let gridDiv = event.target;
    gridDiv.style.backgroundColor = "black";
    console.log(gridDiv);
}

function setGridResolution(){
    let newResolution = Number(prompt("Please enter a new resolution between 1 and 100"));
    
    console.log(typeof newResolution);
    if(typeof newResolution == "number" && newResolution > 0 && newResolution < 101){
        console.log(typeof newResolution);
        gridResolution = newResolution;
        gridSize = 800/gridResolution;
        currentGridText.innerText = `Current grid is ${newResolution}x${newResolution}`;
        createGrid();
    } else{
        alert("Invalid input");
    }
}