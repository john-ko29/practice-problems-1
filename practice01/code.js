function biggerWords(word, arr) {
  const wordLength = word.length;
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if(wordLength < arr[i].length) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}
