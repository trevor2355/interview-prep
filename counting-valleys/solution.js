function countingValleys(n, s) {
  var currentElevation = 0;
  var inValley = false;
  var vallies = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === 'D') {
      currentElevation--
    }
    if (s[i] === 'U') {
      currentElevation++
    }
    if (!inValley && currentElevation < 0) {
      vallies++
      inValley = true
    }
    if (currentElevation >= 0) {
      inValley = false;
    }
  }
  return vallies;
}