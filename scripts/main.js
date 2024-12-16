function createGrid(grids){
    
    
    const mainContainer = document.querySelector(".container");
    mainContainer.style.height = "720px";
    mainContainer.style.display = "flex";
    mainContainer.style.width = "720px"
    mainContainer.style.flexDirection = "column";
    mainContainer.style.backgroundColor = "white";
    
    for (let i= 0; i<grids;i++){
        const row = document.createElement("div");
        row.classList.add("row");
        row.style.display ="flex"
        row.style.width = "100%";
        row.style.flex = "1";
        
        for (let j=0; j<grids; j++){
            const gridItem = document.createElement("div");
            gridItem.classList.add("gridItem")
            gridItem.style.flex = "1";
            gridItem.style.height ="100%";
            gridItem.style.border = "1px solid rgb(160,160,255)";
            row.appendChild(gridItem);

            gridItem.addEventListener("mouseenter",()=>{
                gridItem.style.backgroundColor =`rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
            })
        }
        mainContainer.appendChild(row);
        
    }
}

function deleteGrid(){
    const mainContainer = document.querySelector(".container");
    mainContainer.innerHTML=""
}

function clearGrid(){
    const grids = document.querySelectorAll(".gridItem")
    grids.style.backgroundColor = "white"
}


createGrid(20)

const myButton = document.getElementById('btn');
myButton.addEventListener('click',()=>{
    const userPromt = prompt("How many grids would you like to put");
    deleteGrid()
    createGrid(userPromt)
})

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click',()=>{
    const grids = document.querySelectorAll(".gridItem");
    for (let i=0; i < grids.length; i++){
        grids[i].style.backgroundColor = "white";
    }
})












