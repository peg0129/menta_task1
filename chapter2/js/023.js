window.addEventListener('load', init);
function init(){

let a = Math.random();
let b = Math.floor(Math.random() * 100); //掛けて小数点以下切り捨てて整数取り出し
let c = Math.floor(Math.random() * 10);
console.log(a,b,c);


const rectangle = document.querySelector('.rectangle');

document.querySelector('.button').addEventListener('click',onClickButton);

function onClickButton(){
  const randomHue = Math.trunc(Math.random() * 360);

  const randomColorStart = `hsl(${randomHue},100%,50%)`;
  const randomColorEnd = `hsl(${randomHue + 40},100%,50%)`;

  rectangle.style.setProperty('--start',randomColorStart);
  rectangle.style.setProperty('--end',randomColorEnd);
}
}
