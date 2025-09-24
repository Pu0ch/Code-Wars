/*
  You get an array of numbers, return the sum of all of the positives ones.


*/
function positiveSum(arr) {
  let sum = arr.filter(num=>num>0).reduce((a,b)=> a+b,0)
  return sum
}
console.log(positiveSum([-1,4,2,4,-5,6]))
