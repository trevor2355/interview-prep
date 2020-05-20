function hourglassSum(arr) {
  var maxSum;
  for (var i = 0; i < arr.length - 2; i++) {
      for (var j = 0; j < arr[i].length - 2; j++) {
          var sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
          if (maxSum === undefined) {
              maxSum = sum;
          }
          if (sum > maxSum) {
              maxSum = sum;
          }
      }
  }
  return maxSum
}