const myString = 'Javascriptを覚えよう';

const a1 = myString.includes('Javascript');
console.log(a1);

const a2 = myString.startsWith('覚えよう');
console.log(a2);

const a3 = myString.endsWith('覚えよう');
console.log(a3);

window.addEventListener('load', init);
  function init(){
    const targetString = 'Javascriptを覚えよう';

    document.querySelector('.result1').innerHTML = targetString.includes('Javascript');
    document.querySelector('.result2').innerHTML = targetString.endsWith('覚えよう');
  }
