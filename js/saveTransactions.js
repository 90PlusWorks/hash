function saveTransactions(){
  var data = "1" + "," + table.rows[1].cells[1].innerHTML + "," + table.rows[1].cells[2].innerHTML + "," + table.rows[1].cells[3].innerHTML + "," + table.rows[1].cells[4].innerHTML + "," + table.rows[1].cells[5].innerHTML + "\n";
  for (rowsToSave = 2;rowsToSave<myrow;rowsToSave++ ){
    data = data + rowsToSave + "," + table.rows[rowsToSave].cells[1].innerHTML + "," + table.rows[rowsToSave].cells[2].innerHTML + "," + table.rows[rowsToSave].cells[3].innerHTML + "," + table.rows[rowsToSave].cells[4].innerHTML + "," + table.rows[rowsToSave].cells[5].innerHTML + "\n";
    console.log(data);
  }
    for (rowsToSave = myrow;rowsToSave<100;rowsToSave++ ){
    data = data + rowsToSave + "," + table.rows[rowsToSave].cells[1].innerHTML + ",D," + table.rows[rowsToSave].cells[3].innerHTML + "," + table.rows[rowsToSave].cells[4].innerHTML + "," + table.rows[rowsToSave].cells[5].innerHTML + "\n";
    console.log(data);
  }
//const dataString1 = Papa.stringify(data);
//const dataString = Papa.unparse(data);
const blob = new Blob([data], { type: 'text/csv;charset=utf-8' });
saveAs(blob, 'myfile.csv');
}