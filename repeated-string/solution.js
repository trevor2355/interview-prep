function repeatedString(s, n) {
  var countInSubstring = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      countInSubstring++
    }
  }
  var remainder = n % s.length;
  var timesRepeated = Math.floor(n / s.length);
  var count = timesRepeated * countInSubstring;
  var endingPartialString = s.substring(0, remainder)
  for (var i = 0; i < endingPartialString.length; i++) {
      console.log(endingPartialString[i])
    if (endingPartialString[i] === 'a') {
      count++
    }
  }
  return count;
}