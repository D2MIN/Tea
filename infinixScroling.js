const content = document.querySelector('.content');
const items = document.querySelectorAll('.item');
let img = document.getElementById("image");
let imgStyle = window.getComputedStyle(img);
let img_size = parseInt(imgStyle.getPropertyValue('height'));
let predel = (img_size + 15)-((img_size + 15)+(img_size + 15));

let xPos = 230;
let animationId;

let step = 2;
let i = xPos;
function animate() {
  xPos -= step;
  i -= step;
  content.style.transform = `translateX(${xPos}px)`;
  if (i <= predel) { // Регулируйте этот порог по вашим нуждам
    let it = content.children[0];
    i = 5;
    setTimeout(()=>{
        content.removeChild(it);
        content.appendChild(it);
        xPos = (predel/100)-40*step;

        //console.log((predel/100)-25*step);
    },700);
  }

  animationId = requestAnimationFrame(animate);
}

animate();
