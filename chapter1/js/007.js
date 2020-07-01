const myName = '鈴木';
alert(myName);

const myString = '鈴木';
const myFunction = () => console.log('関数です');

/*
myName = '高橋'; //letと違ってconstは再代入不可 変数＝let　定数＝const
*/

const number1 = 10,number2 = 20;
const sum = number1 + number2;
console.log(sum);

const familyName = '鈴木';
const firstName ='ひかる';
const fullName = familyName + firstName;
console.log(fullName);

const myArray = ['鈴木','田中','高橋']; //配列の1番目を再定義
myArray[0] = '後藤';
console.log(myArray[0]);

const myObject = {id:20,name:'武村'}; //定数nameを再定義
myObject.name = 'マイティーキング';
console.log(myObject.name);

//基本的に再代入しているか否かを区別するため、constスタンダードで使用
