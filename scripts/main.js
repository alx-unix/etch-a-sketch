function createGrid(grids){
    const mainContainer = document.querySelector(".container");
    mainContainer.style.height = "960px";
    mainContainer.style.display = "flex";
    mainContainer.style.width = "960px"
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
                gridItem.style.backgroundColor ="yellow"
            })
        }
        mainContainer.appendChild(row);
        
    }
}
createGrid(20)

function deleteGrid(){
    const mainContainer = document.querySelector(".container");
    mainContainer.innerHTML=""
}

const myButton = document.getElementById('btn')
myButton.addEventListener('click',()=>{
    const userPromt = prompt("How many grids would you like to put");
    deleteGrid()
    createGrid(userPromt)
})













