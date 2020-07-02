const a = '5'.padStart(3,'0');
console.log(a);
const b = 'ff'.padEnd(6,'0');
console.log(b);
const c = '123'.padStart(3,'0');
console.log(c);
const d = 'ff'.padStart(6);
console.log(d);

window.addEventListener('load', init);
  function init(){
    const hourElement = document.querySelector('.hour');
    const minuteElement = document.querySelector('.minute');
    const secondElement = document.querySelector('.second');

    update();

    function update(){
      const currentTime = new Date();
      const second = currentTime.getSeconds();
      secondElement.innerText = addZeroPadding(second);
      requestAnimationFrame(update);
    }

    function addZeroPadding(a){ //引数理解しなおした方がいいかも
      return String(a).padStart(2,'0');
    }
  }
