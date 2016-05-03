function longestMotif (seq) {
  solution = [];
  for (var i = seq.length/2; i > 0; i--) {
    for (var j = 0; j < seq.length - i + 1; j++) {
      var curr = seq.slice(0+j,i+j);
      var left = seq.slice(0,0+j);
      var right = seq.slice(i+j);
      if (left.indexOf(curr) != -1 || right.indexOf(curr) != -1) {
        if (solution.indexOf(curr) == -1) solution.push(curr);
      }
    }
    if (solution.length > 0) return solution;
  }
}

console.log(longestMotif('abcdabcdabcdabcd'))