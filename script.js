function insert_Row() {
    //Write your code here
  const table = document.getElementById("sampleTable");

  // insert new row at index 0 (top)
  const newRow = table.insertRow(0);

  // insert cells
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  // set cell values
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
  
}
