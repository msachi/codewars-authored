/*
This is an idea for an advanced version of the Conference Traveller kata.

Lucy now uses three criteria to decide where to go (from most to least important):
1) Conference in continent she hasn't been to
2) Conference in city she hasn't been to
3) Conference relevant to her field of research (citiesOffered already sorted)

Find a conference for Lucy to go to.
*/

// Database of cities

var cities = {
  Australia: ['Melbourne','Sydney'],
  NorthAmerica: ['NYC','San Francisco','LA','Chicago'],
  SouthAmerica: ['Brasil','Rio','Buenos Aires'],
  Europe: ['Berlin','Paris','London','Madrid'],
  Africa: ['Johannesburg']
};

// Example input

var citiesVisited = ['NYC', 'Rio', 'Johannesburg','Paris','London'];
var citiesOffered = ['LA','Chicago'];

// Solution

function decideOnCity(citiesVisited,citiesOffered) {
  for (var i = 0; i < citiesVisited.length; i++) {
    for (var continent in cities) {
      var a = cities[continent].indexOf(citiesVisited[i]);
      if (a !== -1) {
        cities[continent].splice(a,a+1);
        cities[continent].push("beenHere");
      }
    }
  }
  for (var j = 0; j < citiesOffered.length; j++) {
      for (var continent in cities) {
          if (cities[continent].indexOf("beenHere") == -1
          && cities[continent].indexOf(citiesOffered[j]) != -1)
            return citiesOffered[j];
      }
  }
  for (var j = 0; j < citiesOffered.length; j++) {
    for (var continent in cities) {
      if (cities[continent].indexOf(citiesOffered[j]) != -1)
        return citiesOffered[j];
    }
  }
}

// --> returns 'LA'

