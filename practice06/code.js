function fibSequence(num) {
  let sequence =''
  const arr = []
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      sequence += 0;
      arr.push(i);
    }
    if (i === 1) {
      sequence += ' ' + 1;
      arr.push(i);
    }
    if (i > 1) {
      const nextNum = arr[i-2] + arr[i-1];
      sequence +=  ' ' + nextNum;
      arr.push(nextNum);
    }
  }

  return sequence;
}
