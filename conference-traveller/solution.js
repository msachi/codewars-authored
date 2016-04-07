function conferencePicker (citiesVisited, citiesOffered) {
  for (var i = 0; i < citiesOffered.length; i++) {
    if (citiesVisited.indexOf(citiesOffered[i]) == -1)
      return citiesOffered[i];
  }
  return 'No worthwhile conferences this year!';
}