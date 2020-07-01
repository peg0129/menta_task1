function calcSum(...prices){
  let result = 0;
  for(const value of prices){
    result += value;
  }
  return result;
}

const aaa = calcSum(10,20);
console.log(aaa);

const bbb = calcSum(10,20,30);
console.log(bbb);
