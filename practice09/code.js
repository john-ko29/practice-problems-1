function fittingWords (word, arr) {
  const wordChar = word.split('');
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let letterStatus = true;
    for(let i = 0; i < wordChar.length; i++) {
      if (!arr[i].includes(wordChar[i])) {
        letterStatus  = false;
        break;
      }
    }
    if (letterStatus) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}
