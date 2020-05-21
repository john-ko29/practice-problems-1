
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

function makeLabel(info){
  console.log(info)
  console.log(info["home address"])
  const name = `${info.greeting} ${info.givenName} ${info.familyName}\n`
  const address = `${info["home address"].streetNumber} ${info["home address"].streetName}\n${info["home address"].city}, ${info["home address"].state} ${info["home address"].zip}`;
  return name + address
}
