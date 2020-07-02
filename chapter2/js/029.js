const a = 'jacascriptを覚えよう';

const a1 = a.indexOf('t');
console.log(a1);

const a2 = a.indexOf('覚えよう');
console.log(a2);

const a3 = a.indexOf('jacascript');
console.log(a3);

const b1 = a.indexOf('html'); //-1 = false
console.log(b1);

const b2 = a.indexOf('J');
console.log(b2);

const ppp = 'Javascriptを覚えよう';
const c1 = ppp.indexOf('Java',4); //4文字目から開始
console.log(c1);


window.addEventListener('load', init);
  function init(){
    const targetString = document.querySelector('.h1');
    const targetString1 = targetString.innerHTML;
    document.querySelector('.result1').innerHTML = targetString1.indexOf('Javascript');
    document.querySelector('.result2').innerHTML = targetString1.indexOf('覚えよう');
  }
