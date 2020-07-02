const a = 'TEST';
const b = a.toLowerCase();
console.log(b);

const c = 'test';
const d = c.toUpperCase();
console.log(d);

window.addEventListener('load', init);
  function init(){
    const nameInput = document.querySelector('.name-input');
    const warningMessage = document.querySelector('.warning-message');

    nameInput.addEventListener('input',() => {
      const inputStr = nameInput.value;
      const normalStr = inputStr.toLowerCase();

      if(normalStr.includes('test') === true){
        warningMessage.textContent = '「test」が含まれてます';
      }else{
        warningMessage.textContent = '';
      }
    });
  }
