function numericToggle(num) {
  const arr = [];
  let number = num;
  for(let i = 0; i < 8; i++) {
    if (i < 2) {
      arr.push(number += 2)
    } else if (i < 4) {
      if(i === 2) {
        number *= -1
      }
      arr.push(number -= 3);
    } else if (i < 6) {
      if (i === 4) {
        number *= -1
      }
      arr.push(number += 4);
    } else if (i < 8) {
      if (i === 6) {
        number *= -1
      }
      arr.push(number -= 5);
    }
  }
  return arr;
}
