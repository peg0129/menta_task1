const a = Math.PI;
console.log(a);
//角度から2辺の比を算出
const b = Math.cos((90 * Math.PI) / 180);
console.log(b);
const c = Math.sin((90 * Math.PI) / 180); //限りなく0に近い
console.log(c);
const d = Math.tan((45 * Math.PI) / 180); //限りなく1に近い
console.log(d);
//2辺の比から角度を算出
const e = Math.acos(1);
console.log(e);
const f = (Math.atan(1,1) * 180) / Math.PI;
console.log(f);


window.addEventListener('load', init);

function init(){
  const box = document.querySelector('.box');
  let degree = 0; //角度
  const distance = 500; //半径

  loop();

  function loop(){
    const rotation = (degree * Math.PI) / 180;
    const targetX = (window.innerWidth / 2) + ((distance * Math.cos(rotation)) / 2);
    const targetY = (window.innerWidth / 2) + ((distance * Math.sin(rotation)) / 2);

    console.log(targetX);
    console.log(targetY);

    box.style.left = `${targetX}px`;
    box.style.top = `${targetY}px`;

    degree += 1;

    requestAnimationFrame(loop);
  }
}
