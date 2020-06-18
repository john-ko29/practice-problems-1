function math_sequence(num1, num2)   {
  const arr = [];
  arr.push(`${num1}+${num2}=${num1 + num2}`);
  arr.push(`${num1}-${num2}=${num1 - num2}`);
  arr.push(`${num1}*${num2}=${num1 * num2}`);
  arr.push(`${num1}/${num2}=${num1 / num2}`);
  return arr;
}
