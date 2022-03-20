// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
let gridTable;

// Add a row
function addR() {
    //Innitialize a gridTable by matching it with its element id "grid" in index.html
    gridTable=document.getElementById("grid");
    //Insert a new row in gridTable
    gridTable.insertRow();
    //Insert numcols+1 number of cells in the new row that is created
    for(let i=0;i<=numCols;i++){
        gridTable.rows[numRows].insertCell();
    }
    //Increment numRows by 1 to keep track of the total rows
    numRows++;
}

// Add a column
function addC() {
    
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
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