function arrayFactors(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const factors = [];
    for (let k = 0; k < arr.length; k++) {
      if (arr[i] % arr[k] === 0 && arr[i] !==  arr[k])  {
        factors.push(arr[k]);
      }
    }
    obj[arr[i]] =  factors;
  }
  return obj;
}
