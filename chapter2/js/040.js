const word = 'javascript';
const a = /j/.test(word);
console.log(a);
const b = /^jj/.test(word);
console.log(b);
const c = /\o/.test(word);
console.log(c);
const d = /ja.*/.test(word);
console.log(d);
const e = /ja.*pt/.test(word);
console.log(e);
const f = /\d+-\d+-\d+/.test('000-0000-0000');
console.log(f);

window.addEventListener('load', init);
  function init(){
    const phoneNumberText = document.querySelector('#phoneNumberText');
    const warningMessage = document.querySelector('#warningMessage');

    phoneNumberText.addEventListener('keyup',() => {
      const phoneNumber = phoneNumberText.value;
      const trimmedPhoneNumber = phoneNumber.replace(/-/g,'');

      if(/^[0][0-9]{9,10}$/.test(trimmedPhoneNumber) === false){
        warningMessage.innerHTML = '電話番号を確認してください';
      }else{
        warningMessage.innerHTML = '';
      }
    });
  }
