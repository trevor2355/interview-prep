function sockMerchant(n, ar) {
  var totalPairs = 0;
  var colors = {};
  for (var i = 0; i < n; i++) {
    var currentSock = ar[i]
    if (colors[currentSock] === undefined) {
    colors[currentSock] = 0;
    }
    colors[currentSock]++;
    if (colors[currentSock] === 2) {
      colors[currentSock] = 0;
      totalPairs++;
    }
  }
  
  return totalPairs
}