const imageName = 'image1.png';
const a = imageName.replace('1.png','2.png');
console.log(a);

const inputText = '鈴木\n一郎';
const b = inputText.replace('\n','');
console.log(b);

let phoneNumber = '000-0000-0000';
const c = phoneNumber.replace(/-/g,''); // /〇/gで〇全体消去
console.log(c);

window.addEventListener('load', init);
  function init(){
    document.querySelector('#submitButton').addEventListener('click',(event) => {
      const phoneNumber = document.querySelector('#phoneNumberText').value;
      console.log(phoneNumber);

      const trimmedPhoneNumber = phoneNumber.replace(/-/g,'');

      alert(`電話番号は${trimmedPhoneNumber}です`);

      event.preventDefault();
    });
  }
