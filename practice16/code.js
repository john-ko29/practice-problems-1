function factorOfSequence(num) {
  const arr = [];
  for (let i = 2; i < 13; i++) {
    if (i % 3 === 0) {
      arr.push(i);
    } else {
      arr.push(0);
    }
  }
  return arr;
}
