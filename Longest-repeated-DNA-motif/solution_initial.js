seq = 'TTTCGGTCAGTGGGTCATTGCTAGTAGTCGACATTGCAT'

console.log(seq.length);

function findLongest (seq) {
  var array = [];
  for (var i = seq.length-1; i > 0; i--) {
    for (var j = 0; j < seq.length - i + 1; j++) {
      //console.log(seq.substring(0+j,i+j))
      if (array.indexOf(seq.substring(0+j,i+j)) === -1) array.push(seq.substring(0+j,i+j));
      else return seq.substring(0+j,i+j);
    }
  }
}

console.log(findLongest('CTTTAATTCGAACAGGTAAAGGTTCCCCACGAGCCTGGTGTCACAAACTGCGGAGTGACCTATCGAACAGGCAAGCATCATGTCACAAAGAGCACGA'));