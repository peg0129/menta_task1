const a = 'test';
const b = a.length;
console.log(b);

const c = 'ウェブデザイン';
const d = c.length;
console.log(d);

window.addEventListener('load', init);
  function init(){

    let textarea = document.querySelector('.textarea');
    let string_num = document.querySelector('.string_num');

    textarea.addEventListener('keyup',onKeyUp);

    function onKeyUp(){
      const inputText = textarea.value;
      string_num.innerText = inputText.length;
      console.log(inputText);
  }
}

//*絵文字等のサロゲートペアは1文字4バイトの倍情報の為、2文字カウント　.length使用時
//*なので種類ごとに1文字なるよう別途処理必要
