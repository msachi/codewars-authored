function checkDNA (seq1, seq2) {
  var seq3 = '';
  for (var i = 0; i < seq2.length; i++) {
    if (seq2[i] == 'A') seq3 = 'T' + seq3;
    if (seq2[i] == 'T') seq3 = 'A' + seq3;
    if (seq2[i] == 'G') seq3 = 'C' + seq3;
    if (seq2[i] == 'C') seq3 = 'G' + seq3;  
  }
  return (seq1.indexOf(seq3) != -1 || seq3.indexOf(seq1) != -1);
}