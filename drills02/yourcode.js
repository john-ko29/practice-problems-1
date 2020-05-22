

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

function getMinMaxMean(){

}

function findMode(){

}
