// Example tests

Test.assertEquals(regex.test('1'),true);
Test.assertEquals(regex.test('1234'),true);
Test.assertEquals(regex.test('1232'),false);
Test.assertEquals(regex.test('10284'),true);
Test.assertEquals(regex.test('79222'),false);
Test.assertEquals(regex.test('6924015'),true);
Test.assertEquals(regex.test('6060606'),false);
Test.assertEquals(regex.test('2596108347'),true);
Test.assertEquals(regex.test('25961088347'),false);
Test.assertEquals(regex.test('25961508347'),false);

// Real tests

Test.describe('* Basic Tests *', function() {
  Test.it('Testing for 1', function(){
    Test.assertEquals(regex.test('1'),true);  
  });
  Test.it('Testing for 1234', function(){
    Test.assertEquals(regex.test('1234'),true);
  });
  Test.it('Testing for 1232', function(){
    Test.assertEquals(regex.test('1232'),false);
  });
  Test.it('Testing for 10284', function(){
    Test.assertEquals(regex.test('10284'),true);
  });
  Test.it('Testing for 79222', function(){
    Test.assertEquals(regex.test('79222'),false);
  });
  Test.it('Testing for 6924015', function(){
    Test.assertEquals(regex.test('6924015'),true);
  });
  Test.it('Testing for 6060606', function(){
    Test.assertEquals(regex.test('6060606'),false); 
  });
  Test.it('Testing for 2596108347', function(){
    Test.assertEquals(regex.test('2596108347'),true);
  });
  Test.it('Testing for 25961088347', function(){
    Test.assertEquals(regex.test('25961088347'),false);
  });
  Test.it('Testing for 25961508347', function(){
    Test.assertEquals(regex.test('25961508347'),false);
  });
});

Test.describe('* Random Tests *', function() {
  for (var i = 0; i < 100; i++) {
    var digits = Math.ceil(Math.random()*8);
    var number = Math.ceil(Math.random()*Math.pow(10,digits)).toString();
    Test.it('Testing for ' + number, function(){
      Test.assertEquals(regex.test(number), /^(?:(\d)(?!.*\1))+$/.test(number));
    });
  }
});