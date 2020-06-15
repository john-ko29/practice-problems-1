function translate(word) {
  const arr = word.split(' ');
  for (let i = 0; i < arr.length; i++) {
    const letter = arr[i].slice(0, 1);
    arr[i] = arr[i].substr(1) + letter + "ay";
  }
  arr.join(' ');
  return arr;
}
