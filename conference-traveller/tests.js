// Example tests

Test.assertEquals(conferencePicker(['Mexico City','Johannesburg','Stockholm','Osaka','Saint Petersburg','London'],['Stockholm','Paris','Melbourne']),'Paris');
Test.assertEquals(conferencePicker(['Buenos Aires','Mexico City','Johannesburg'],['Melbourne','Moscow']),'Melbourne');
Test.assertEquals(conferencePicker(['Tokyo','Madrid','Melbourne','Sydney','Rio De Janeiro','Saint Petersburg','Brisbane','Paris','Houston'],['Sydney','Chicago','Paris']),'Chicago');
Test.assertEquals(conferencePicker([],['Philadelphia','Osaka','Tokyo','Melbourne']),'Philadelphia','Should work if no cities visited');
Test.assertEquals(conferencePicker(['London','Berlin','Mexico City','Melbourne','Buenos Aires','Hong Kong','Madrid','Paris'],['Berlin','Melbourne']),'No worthwhile conferences this year!','Should work if all offered cities previously visited');

// Real tests

Test.describe("Basic Tests", function() {
	Test.assertEquals(conferencePicker(['Mexico City','Johannesburg','Stockholm','Osaka','Saint Petersburg','London'],['Stockholm','Paris','Melbourne']),'Paris');
	Test.assertEquals(conferencePicker(['Buenos Aires','Mexico City','Johannesburg'],['Melbourne','Moscow']),'Melbourne');
	Test.assertEquals(conferencePicker(['Tokyo','Madrid','Melbourne','Sydney','Rio De Janeiro','Saint Petersburg','Brisbane','Paris','Houston'],['Sydney','Chicago','Paris']),'Chicago');
	Test.assertEquals(conferencePicker(['New York City','Johannesburg','Chicago'],['Johannesburg','Mumbai']),'Mumbai');
	Test.assertEquals(conferencePicker(['Lisbon','San Francisco','Mexico City','Sydney','Mumbai','Brussels','Saint Petersburg','Osaka','Rio De Janeiro','Hong Kong','London','Paris'],['Saint Petersburg','Melbourne','New York City']),'Melbourne');
	Test.assertEquals(conferencePicker(['New York City','Los Angeles','Houston','Moscow','Ankara','Philadelphia'],['Ankara','Osaka']),'Osaka');
	Test.assertEquals(conferencePicker(['Mexico City','Sydney','Brussels','Saint Petersburg','Stockholm'],['Los Angeles','Singapore']),'Los Angeles');
	Test.assertEquals(conferencePicker(['Brisbane','Delhi','Osaka','Johannesburg','Lisbon','Brussels','Houston','New York City','Seoul'],['San Francisco','Madrid']),'San Francisco');
	Test.assertEquals(conferencePicker(['Brussels','Beijing','Paris','San Francisco','Sydney','Osaka','Brisbane','Melbourne','Ankara','Hong Kong','Los Angeles'],['Ankara','Madrid','Madrid']),'Madrid');
	Test.assertEquals(conferencePicker(['Osaka','Brussels','Stockholm','Lisbon','Dubai','Tokyo','Ankara','London','Rio De Janeiro','Paris'],['Beijing','Osaka','Brisbane']),'Beijing');
});

Test.describe("No cities visited", function() {
	Test.assertEquals(conferencePicker([],['Philadelphia','Osaka','Tokyo','Melbourne']),'Philadelphia','Should work if no cities visited');
	Test.assertEquals(conferencePicker([],['Brussels','Madrid','London']),'Brussels','Should work if no cities visited');
	Test.assertEquals(conferencePicker([],['Sydney','Tokyo']),'Sydney','Should work if no cities visited');
});

Test.describe("No new cities", function() {
	Test.assertEquals(conferencePicker(['London','Berlin','Mexico City','Melbourne','Buenos Aires','Hong Kong','Madrid','Paris'],['Berlin','Melbourne']),'No worthwhile conferences this year!','Should work if all offered cities previously visited');
	Test.assertEquals(conferencePicker(['Beijing','Johannesburg','Sydney','Philadelphia','Hong Kong','Stockholm','Chicago','Seoul','Mexico City','Berlin'],['Stockholm','Berlin','Chicago']),'No worthwhile conferences this year!','Should work if all offered cities previously visited');
	Test.assertEquals(conferencePicker(['Mexico City','Dubai','Philadelphia','Madrid','Houston','Chicago','Delhi','Seoul','Mumbai','Lisbon','Hong Kong','Brisbane','Stockholm','Tokyo','San Francisco','Rio De Janeiro'],['Lisbon','Mexico City']),'No worthwhile conferences this year!','Should work if all offered cities previously visited');
});

Test.describe("Random Tests", function() {
  
  var cities = ['Ankara','Beijing','Berlin','Brisbane','Brussels','Buenos Aires','Chicago','Delhi','Dubai','Hong Kong','Houston','Johannesburg','Lisbon','London','Los Angeles','Madrid','Mexico City','Melbourne','Moscow','Mumbai','New York City','Osaka','Paris','Philadelphia','Rio De Janeiro','Saint Petersburg','San Francisco','Seoul','Singapore','Stockholm','Sydney','Tokyo']
  
  function testSolution (citiesVisited, citiesOffered) {
	for (var i = 0; i < citiesOffered.length; i++) {
		if (citiesVisited.indexOf(citiesOffered[i]) == -1)
			return citiesOffered[i];
	}
	return 'No worthwhile conferences this year!';
  }

  for (var j = 0; j < 100; j++) {  
    var citiesVisited = [], citiesOffered = [];
    for (var k = 0; k < Math.floor(Math.random() * 50); k++) {
      var l = Math.floor(Math.random() * cities.length);
      if (citiesVisited.indexOf(cities[l]) == -1) citiesVisited.push(cities[l]);
    }
    for (var m = 0; m < Math.floor(Math.random() * 3) + 2; m++) {
      var n = Math.floor(Math.random() * cities.length);
      if (citiesOffered.indexOf(cities[n]) == -1) citiesOffered.push(cities[n]);
    }
    Test.assertEquals(conferencePicker (citiesVisited, citiesOffered), testSolution (citiesVisited, citiesOffered), 'Should work for random tests');
   }
 });