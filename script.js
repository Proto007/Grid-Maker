// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
let gridTable;

// Add a row
function addR() {
    //Innitialize gridTable by matching it with its element id "grid" in index.html
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
}

// Add a column
function addC() {
    //Innitialize gridTable by matching it with its element id "grid" in index.html
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
}

// Remove a row
function removeR() {
    //Innitialize gridTable by matching it with its element id "grid" in index.html
    gridTable=document.getElementById("grid");
    //Delete the last row in the gridTable
    gridTable.deleteRow(-1);
    //Decrement numRows if numRows is greater than 0(there is atleast one row)
    if(numRows>0){
        numRows--;
    }
}

// Remove a column
function removeC() {
    //Innitialize gridTable by matching it with its element id "grid" in index.html
    gridTable=document.getElementById("grid");
    //Delete the last cell of each row in the gridTable
    for(let i=0;i<numRows;i++){
        gridTable.rows[i].deleteCell(-1);
    }
    //Decrement numCols if numCols is greater than 0(there is atleast one column)
    if(numCols>0){
        numCols--;
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}