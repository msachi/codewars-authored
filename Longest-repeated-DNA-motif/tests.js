// Example tests

Test.assertSimilar(longestMotif('AGTGGGTCATTGCTAGTAGTCGACATTGCAT'),['CATTGC']);
Test.assertSimilar(longestMotif('CGGGTGGAGTCCGTCCCATGAAAGAGACGGTATAGCAAGCGCAACGAAGCGCGATATAATCCTTTTTCTTCCTTTTC'),['TCCTTTT']);
Test.assertSimilar(longestMotif('GCTAGCTTCGGAGGGCGATGAGCATAGCCGCGA'),['TAGC','GCGA']);
Test.assertSimilar(longestMotif('ATGAAAACTCAACGGGCATCGGGCATGGTAC'),['CGGGCAT']);
Test.assertSimilar(longestMotif('ATGTTAAC'),['A','T']);

// Real tests

Test.describe('* Single longest motif *', function() {
  Test.it('Testing for AGGATAGGAATCCAGCCATATGGCGACTACG', function(){
    Test.assertSimilar(longestMotif('AGGATAGGAATCCAGCCATATGGCGACTACG'),['AGGA']);
  });  
  Test.it('Testing for AGATAGCGCGCTAGAGCGCGGGACGGTATCGTTTGA', function(){
    Test.assertSimilar(longestMotif('AGATAGCGCGCTAGAGCGCGGGACGGTATCGTTTGA'),['AGCGCG']);
  });
  Test.it('Testing for CGGGTGGAGTCCGTCCCATGAAAGAGACGGTATAGCAAGCGCAACGAAGCGCGATATAATCCTTTTTCTTCCTTTTC', function(){
    Test.assertSimilar(longestMotif('CGGGTGGAGTCCGTCCCATGAAAGAGACGGTATAGCAAGCGCAACGAAGCGCGATATAATCCTTTTTCTTCCTTTTC'),['TCCTTTT']);
  });

});

Test.describe('* Several longest motifs *', function() {
  Test.it('Testing for GCTAGCTTCGGAGGGCGATGAGCATAGCCGCGA', function(){
    Test.assertSimilar(longestMotif('GCTAGCTTCGGAGGGCGATGAGCATAGCCGCGA'),['TAGC','GCGA']);
  });
  Test.it('Testing for AAGGATTCCTCAGTCTCAATGATGGACTATAATTCATACCTTAATAGGGCTCACGAGTCGTGATCA', function(){
    Test.assertSimilar(longestMotif('AAGGATTCCTCAGTCTCAATGATGGACTATAATTCATACCTTAATAGGGCTCACGAGTCGTGATCA'),['ATTC','CTCA','AGTC','TGAT','TAAT']);
  });
  Test.it('Testing for CTTTAATTCGAACAGGTAAAGGTTCCCCACGAGCCTGGTGTCACAAACTGCGGAGTGACCTATCGAACAGGCAAGCATCATGTCACAAAGAGCACGA', function(){
    Test.assertSimilar(longestMotif('CTTTAATTCGAACAGGTAAAGGTTCCCCACGAGCCTGGTGTCACAAACTGCGGAGTGACCTATCGAACAGGCAAGCATCATGTCACAAAGAGCACGA'),['TCGAACAGG','TGTCACAAA']);
  });
});

Test.describe('* Adjacent & overlapping repeats *', function() {
  Test.it('Testing for ATGAAAACTCAACGGGCATCGGGCATGGTAC', function(){
    Test.assertSimilar(longestMotif('ATGAAAACTCAACGGGCATCGGGCATGGTAC'),['CGGGCAT']);
  });
  Test.it('Testing for CTGACGGTTATTATCTCTGATCCTGA', function(){
    Test.assertSimilar(longestMotif('CTGACGGTTATTATCTCTGATCCTGA'),['CTGA']);
  });
  Test.it('Testing for CCCGTTTCCGAATCGGAATCGGCTTCCCCTTATGCTTAGACCGACCATCCAGCGTGG', function(){
    Test.assertSimilar(longestMotif('CCCGTTTCCGAATCGGAATCGGCTTCCCCTTATGCTTAGACCGACCATCCAGCGTGG'),['GAATCG','AATCGG']);
  });
});

Test.describe('* Single-nucleotide motifs *', function() {
  Test.it('Testing for CGATA', function(){
    Test.assertSimilar(longestMotif('CGATA'),['A']);
  });
  Test.it('Testing for ATGTTAAC', function(){
    Test.assertSimilar(longestMotif('ATGTTAAC'),['A','T']);
  });
  Test.it('Testing for CTAGTCGA', function(){
    Test.assertSimilar(longestMotif('CTAGTCGA'),['C','T','A','G']);
  });
});

Test.describe('* Random Tests *', function() {

  function testSolution (seq) {
  var solution = [];
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

  var nucleos = ['A','T','G','C'];

  for (var i = 0; i < 100; i++) {  
    var seq = '', len = Math.floor(Math.random() * 96) + 5;
    for (var j = 0; j < len; j++) {  
      seq += nucleos[Math.floor(Math.random() * nucleos.length)];
    }
    Test.it('Testing for ' + seq, function(){
      Test.assertSimilar(longestMotif (seq), testSolution (seq));
    });
  }
});