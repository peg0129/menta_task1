const a = 10;
const b = 20;

console.log(a < b);
console.log(a > b);

//navigator.userAgent　ユーザーエージェント情報を取得
//.includes 指定した文字列等が含まれているか調べる
const isIOs = navigator.userAgent.includes('iphone');
//true条件
if(isIOs){
  console.log('iphone');
}else{
  console.log('no iphone');
}


const userName = '小林';
if(userName){
  console.log(`ようこそ${userName}さん`); //${}は''じゃなく``を使わないと適応されない
}

const userAdress = '';
if(userAdress){
  console.log(`あなたは${userAdress}に住んでる？`);
}

const flg = 'Javascript'.includes('a');
console.log(!flg);

console.log(!'鈴木'); //！を付けると結果が反転し、内容が真偽値になる true or false
console.log(!24);
console.log(![1,2,3]);
console.log(!![1,2,3]); //！を二個つけると内容が真偽値になるだけになる。反転はない。
