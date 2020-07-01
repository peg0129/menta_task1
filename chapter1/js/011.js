//関数定義
function myFunction(a) {
  const result = a + 2;
  return result;
}
//関数実行結果（return）を取得するには、左辺：返り値（return）の箱　右辺：関数の引数を指定　で取り出せる。
//左辺：入れ物定義（入れ物にはreturnで定義しているresultが入る）　右辺：欲しい結果のある関数とその引数
const test = myFunction(8);
console.log(test);


function calcSum(a,b,c){
  const bbb = a + b + c;
  return bbb;
}
const bbb = calcSum(1,2,3);
console.log(bbb);


function ppp(){
  return 100;
  console.log('hello'); //returnで抜けるから実行されない
}
ppp(); //返り値がなくコマンドしかない場合はこれでもOK


function eee(a,b){
  if(a >= 100){
    return a;
  }
  return b;
}
const fff = eee(100,50);
console.log(fff);
