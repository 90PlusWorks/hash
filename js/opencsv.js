let reader = new FileReader();
//let is more restricted {let ... } scope is inside{}
    picker = document.getElementById("loadTransactions");
// (A) READ CSV ON FILE PICK or LOAD or READ
picker.onchange = () => reader.readAsText(picker.files[0]);
// (B) READ CSV & GENERATE hashes
let hash = [];
reader.onloadend = () => {
    var ij = 0;
  for (let row of CSV.parse(reader.result)) {
      hash[ij] = hash(col);      
    }
  ij = ij + 1;
  }
// (C) SAVE hashes
saveHashes();
