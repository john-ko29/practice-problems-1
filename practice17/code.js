function skippyNumbers(num) {
  const arr = [];
  let number = num;
  arr.push(num);
  for(let i = 0; i < 7; i++) {
    if (i % 2 === 0) {
      number += 1;
    }  else {
      number += 2;
    }
    arr.push(number);
  }
  return arr;
}
