// Example tests

Test.assertEquals(checkDNA('GTCTTAGTGTAGCTATGCATGC','GCATGCATAGCTACACTACGAC'),false);
Test.assertEquals(checkDNA('GCGCTGCTAGCTGATCGA','ACGTACGATCGATCAGCTAGCAGCGCTAC'),true);
Test.assertEquals(checkDNA('CGATACGAACCCATAATCG','CTACACCGGCCGATTATGG'),false);
Test.assertEquals(checkDNA('AGTCTGTATGCATCGTACCC','GGGTACGATGCATACAGACT'),true);
Test.assertEquals(checkDNA('GTCACCGA','TCGGCTGAC'),false);
Test.assertEquals(checkDNA('TAGCATCGCCAAATTATGCGTCAGTCTGCCCG','GGGCA'),true);

// Real tests

Test.describe('* Basic Tests *', function() {
  Test.it('Testing for GTCTTAGTGTAGCTATGCATGC and GCATGCATAGCTACACTACGAC', function(){
    Test.assertEquals(checkDNA('GTCTTAGTGTAGCTATGCATGC','GCATGCATAGCTACACTACGAC'),false);
  });
  Test.it('Testing for ATGCTACG and CGTAGCAT', function(){
    Test.assertEquals(checkDNA('ATGCTACG','CGTAGCAT'),true);
  });
  Test.it('Testing for AGTCTGTATGCATCGTACCC and GGGTACGATGCATACAGACT', function(){
    Test.assertEquals(checkDNA('AGTCTGTATGCATCGTACCC','GGGTACGATGCATACAGACT'),true);
  });
  Test.it('Testing for TGCTACGTACGATCGACGATCCACGAC and GTCGTGGATCGTCGATCGTACGTAGCA', function(){
    Test.assertEquals(checkDNA('TGCTACGTACGATCGACGATCCACGAC','GTCGTGGATCGTCGATCGTACGTAGCA'),true);
  });
  Test.it('Testing for ATGCCTACGGCCATATATATTTAG and CTAAATATGTATGGCCGTAGGCAT', function(){
    Test.assertEquals(checkDNA('ATGCCTACGGCCATATATATTTAG','CTAAATATGTATGGCCGTAGGCAT'),false);
  });
  Test.it('Testing for GTCACCGA and TCGGCTGAC', function(){
    Test.assertEquals(checkDNA('GTCACCGA','TCGGCTGAC'),false);
  });
  Test.it('Testing for TAATACCCGACTAATTCCCC and GGGGAATTTCGGGTATTA', function(){
    Test.assertEquals(checkDNA('TAATACCCGACTAATTCCCC','GGGGAATTTCGGGTATTA'),false);
  });
  Test.it('Testing for GCTAACTCGAAGCTATACGTTA and TAACGTATAGCTTCGAGGTTAGC', function(){
    Test.assertEquals(checkDNA('GCTAACTCGAAGCTATACGTTA','TAACGTATAGCTTCGAGGTTAGC'),false);
  });  
});

Test.describe('* Sequences of different length *', function() {
  Test.it('Testing for GCGCTGCTAGCTGATCGA and ACGTACGATCGATCAGCTAGCAGCGCTAC', function(){
    Test.assertEquals(checkDNA('GCGCTGCTAGCTGATCGA','ACGTACGATCGATCAGCTAGCAGCGCTAC'),true);
  });
  Test.it('Testing for GCTAGCACCCATTAGGAGATAC and CTCCTAATGGGTG', function(){
    Test.assertEquals(checkDNA('GCTAGCACCCATTAGGAGATAC','CTCCTAATGGGTG'),true);
  }); 
  Test.it('Testing for TAGCATCGCCAAATTATGCGTCAGTCTGCCCG and GGGCA', function(){
    Test.assertEquals(checkDNA('TAGCATCGCCAAATTATGCGTCAGTCTGCCCG','GGGCA'),true);
  });
  Test.it('Testing for ACGACTACGTGCGCCGCTAATATT and GCACGGGTCGT', function(){
    Test.assertEquals(checkDNA('ACGACTACGTGCGCCGCTAATATT','GCACGGGTCGT'),false);
  });  
});

Test.describe('* Strands only partially bonded *', function() {
  Test.it('Testing for CGATACGAACCCATAATCG and CTACACCGGCCGATTATGG', function(){
    Test.assertEquals(checkDNA('CGATACGAACCCATAATCG','CTACACCGGCCGATTATGG'),false);
  });
  Test.it('Testing for CGACATCGAGGGGGCTCAGAAGTACTGA and CATGGCGTCAGTACTTCTGAGCC', function(){
    Test.assertEquals(checkDNA('CGACATCGAGGGGGCTCAGAAGTACTGA','CATGGCGTCAGTACTTCTGAGCC'),false);
  });
  Test.it('Testing for GAGCAGTTGGTAGTTT and GTATCGAAACTACCA', function(){
    Test.assertEquals(checkDNA('GAGCAGTTGGTAGTTT','GTATCGAAACTACCA'),false);
  });
  Test.it('Testing for TACGATCCAAGGCTACTCAGAG and GGGATACTCTGAGTAGCCTTGGAA', function(){
    Test.assertEquals(checkDNA('TACGATCCAAGGCTACTCAGAG','GGGATACTCTGAGTAGCCTTGGAA'),false);
  }); 
});

Test.describe('* Random Tests *', function() {

  // solution function
  function testSolution (seq1, seq2) {
    return (seq1.indexOf(complement(seq2)) != -1 || complement(seq2).indexOf(seq1) != -1);
  }

  // function to generate complementary sequence
  function complement (seq) {
    var comp = '';
    for (var i = 0; i < seq.length; i++) { 
      if (seq[i] == 'A') comp = 'T' + comp;
      if (seq[i] == 'T') comp = 'A' + comp;
      if (seq[i] == 'G') comp = 'C' + comp;
      if (seq[i] == 'C') comp = 'G' + comp;  
    }
    return comp;
  }

  // provide nucleotides to pick from
  var nucleos = 'ATGC';

  // test solution 100 times
  for (var i = 0; i < 100; i++) {  
    // define sequence variables and lengths
    var seq1 = '', seq2 = '';
    var len1 = Math.floor(Math.random() * 100) + 6;
    var len2 = Math.floor(Math.random() * 100) + 6;
    // generate a random seq1
    for (var j = 0; j < len1; j++) {  
      seq1 += nucleos[Math.floor(Math.random() * nucleos.length)];
    }
    // sometimes generate a random seq2
    if (len2%3 === 0) {
      for (var j = 0; j < len2; j++) {
        seq2 += nucleos[Math.floor(Math.random() * nucleos.length)];
      }
    }
    // sometimes generate a complementary seq2
    else {
      var sliceStart = Math.floor(Math.random() * seq1.length / 3);
      var sliceEnd = Math.floor(Math.random() * seq1.length * 2/3 + seq1.length / 3 + 1);
      seq2 = complement(seq1).slice(sliceStart,sliceEnd);
    }
    // test user's solution against provided solution
    Test.it('Testing for ' + seq1 + ' and ' + seq2, function(){
      Test.assertEquals(checkDNA (seq1, seq2), testSolution (seq1, seq2));
    });
  }
});