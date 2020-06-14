function groupArray(arr) {
  const newArr = [];
  const stringArr = [];
  const numArr = [];
  const booleanArr = [];
  for (let i = 0; i < arr.length; i++) {
    const dataType = typeof(arr[i])
    switch (dataType) {
      case 'string':
        stringArr.push(arr[i]);
        break;
      case 'number':
        numArr.push(arr[i]);
        break;
      case 'boolean':
        booleanArr.push(arr[i]);
        break;
      default:
        break;
    }
  }
  newArr.push(stringArr);
  newArr.push(numArr);
  newArr.push(booleanArr);

  return newArr;
}
