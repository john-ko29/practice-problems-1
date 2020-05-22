

function countOccurences(arr, word){
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(word)) {
      count++
    }
  }
  return count;
}

function wordLengths(arr){
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].length);
  }
  return newArr;
 }

function getMinMaxMean(arr){
  const obj = {};
  let min = Infinity;
  let max = -Infinity;
  let mean = 0;
  for(let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i]
    }
    if (max < arr[i]) {
      max = arr[i]
    }
    mean += arr[i]
  }
  console.log(min, max, mean/arr.length)
  obj.min = min;
  obj.max = max;
  obj.mean = mean/arr.length;
  return obj;
}

function findMode(){

}
