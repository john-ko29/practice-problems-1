function evenodd(arr) {
  const odd = [];
  const even = [];
  const evenOdd = {};
  for(let i = 0; i < arr.length; i++) {
    if (even.includes(arr[i]) || odd.includes(arr[i])) {
      continue;
    }
    if(typeof(arr[i]) === 'number') {
      if(arr[i]  % 2 === 0) {
        even.push(arr[i]);
      } else {
        odd.push(arr[i]);
      }
    }
  }
  evenOdd.even = even;
  evenOdd.odd =  odd;
  return evenOdd;
}
