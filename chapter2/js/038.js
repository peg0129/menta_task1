const userName = '鈴木';
const tag = `<div class="container">こんにちは${userName}</div>`;
console.log(tag);

const str2 = `123 × 123は${123*123}だよ。`;
console.log(str2);

window.addEventListener('load', init);
  function init(){
    const today = new Date();

    document.querySelector('#ppp').innerHTML = `<h1>今日${today.getMonth() + 1}/${today.getDate()}の天気</h1>
                                                <p>東京は晴れでしょう</p>`;
  }
