const a = (0.333333).toFixed(2);
console.log(a);
const b = (123.456).toFixed(1);
console.log(b);
const c = (2.4).toFixed(4);
console.log(c);
const d = (0.333333).toPrecision(2);
console.log(d);
const e = (123.456).toPrecision(2);
console.log(e);

window.addEventListener('load', init);
  function init(){
    const secondElement = document.querySelector('.second');
    const goalTime = new Date().getTime() + 15 * 1000;
    console.log(goalTime);

    update();
    function update(){
      const currentTime = new Date().getTime();
      const leftTime = goalTime - currentTime;

      secondElement.innerText = (leftTime / 1000).toFixed(2);
      requestAnimationFrame(update);
    }
  }
