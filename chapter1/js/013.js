function calcFunction(price,tax=0.08){
  const result = price + price * tax;
  return result;
}
//初期値指定してる場合はそれ以外指定でOK
const result1 = calcFunction(100);
console.log(result1);
//初期値を再指定場合はそれを優先
const result2 = calcFunction(100,0.1);
console.log(result2);
