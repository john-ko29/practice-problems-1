function characterConvert(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result +=  str[i].charCodeAt(0)
  }
  return result;
}
