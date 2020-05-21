
function sumArray(array){
  let total = 0;
	for (let i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total;
}

function fitWithinVal(array, number){
  let total = 0;
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    if ((total + currentValue) < number) {
      total += currentValue;
      newArray.push(currentValue)
    }
  }
  return newArray;
}

function getAllNamesShorterThan(arr, num){
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < num) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function makeLabel(){

}
