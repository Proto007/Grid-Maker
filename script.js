// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
let gridTable;
let gridCells;

// Add a row
function addR() {
    //Initialize gridTable by matching it with its element id "grid" in index.html
    gridTable=document.getElementById("grid");
    //Insert a new row in gridTable
    gridTable.insertRow(-1);
    // Increment numCols by 1 if there are no existing columns (numCols is 0)
    if(numCols===0){
        numCols++;
    }
    //Insert numcols+1 number of cells in the new row that is created
    for(let i=0;i<numCols;i++){
        gridTable.rows[numRows].insertCell(-1);
    }
    //Increment numRows by 1 to keep track of the total rows
    numRows++;
    //Add onclick events to the newly added cells
    addOnCLickCell();
}

// Add a column
function addC() {
    //Initialize gridTable by matching it with its element id "grid" in index.html
    gridTable=document.getElementById("grid");
    //Insert a new row and increment numRows if there are no existing rows(numRows is 0)
    if(numRows===0){
        gridTable.insertRow(-1);
        numRows++;
    }
    //Insert a cell in all rows in the grid
    for(let i=0;i<numRows;i++){
        gridTable.rows[i].insertCell(-1);
    }
    //Increment numCols by 1 to keep track of the total columns
    numCols++;
    //Add onclick events to the newly added cells
    addOnCLickCell();
}

// Remove a row
function removeR() {
    //Initialize gridTable by matching it with its element id "grid" in index.html
    gridTable=document.getElementById("grid");
    //Delete the last row in the gridTable
    gridTable.deleteRow(-1);
    //Decrement numRows if numRows is greater than 0(there is atleast one row)
    if(numRows>0){
        numRows--;
        //If numRows becomes 0 after the decrement, change numCols to 0 as well(reset grid)
        if(numRows===0){
            numCols=0;
        }
    }
}

// Remove a column
function removeC() {
    //Initialize gridTable by matching it with its element id "grid" in index.html
    gridTable=document.getElementById("grid");
    //Delete the last cell of each row in the gridTable
    for(let i=0;i<numRows;i++){
        gridTable.rows[i].deleteCell(-1);
    }
    //Decrement numCols if numCols is greater than 0(there is atleast one column)
    if(numCols>0){
        numCols--;
        //If numCols becomes 0 after the decrement, change numRows to 0 as well(reset grid)
        if(numCols===0){
            numRows=0;
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
}

// Fill all uncolored cells
function fillU(){
    //Initialize gridCells as elements with tag name "td"(all cells)
    gridCells=document.getElementsByTagName("td");
    //Iterate through all cells in gridCells
    for(let i=0;i<gridCells.length;i++){
        //Assign backgroundColor to ith cell as colorSelected if ith cell has no color
        if(gridCells[i].style.backgroundColor===""){
            gridCells[i].style.backgroundColor=colorSelected;
        }
    }
}

// Fill all cells
function fillAll(){
    //Initialize gridCells as elements with tag name "td"(all cells)
    gridCells=document.getElementsByTagName("td");
    //Iterate through all cells in gridCells and assign backgroundColor
    for(let i=0;i<gridCells.length;i++){
        gridCells[i].style.backgroundColor=colorSelected;
    }
}

// Clear all cells
function clearAll(){    
    //Initialize gridCells as elements with tag name "td"(all cells)
    gridCells=document.getElementsByTagName("td");
    for(let i=0;i<gridCells.length;i++){
        //Change background color of ith cell to empty
        gridCells[i].style.backgroundColor="";
    }
}

//Adds onclick events to all the cells
function addOnCLickCell(){
    //Initialize gridCells as elements with tag name "td"(all cells)
    gridCells=document.getElementsByTagName("td");
    //Loop through gridCells and assign onclick event
    for(let i=0;i<gridCells.length;i++){
        //Change background color of ith cell to colorSelected when ith cell is clicked
        gridCells[i].onclick=function(){gridCells[i].style.backgroundColor=colorSelected};
    }
}
