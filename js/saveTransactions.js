function saveHashes(){
  var data = hash[0] + "\n";
  for (rowsToSave = 1;rowsToSave<hash.length;rowsToSave++ ){
    data = data + hash[rowsToSave] + "\n";
  }
const blob = new Blob([data], { type: 'text/csv;charset=utf-8' });
saveAs(blob, 'hashes.csv');
}
