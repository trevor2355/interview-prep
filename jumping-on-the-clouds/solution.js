function jumpingOnClouds(c) {
  var minJumps = 0;
  var i = 0;
  while( i < c.length - 1) {
    if (c[i+2] === 0) {
      i+=2
    } else {
      i++
    }
    minJumps++
    console.log('i: ', i)
    console.log('minJumps: ', minJumps)
  }
  return minJumps;
}