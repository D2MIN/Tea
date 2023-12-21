let right = document.getElementById("oleft");
let left = document.getElementById("oright");

var headerTitle = document.getElementById("headerTitle");
var tit = document.getElementById("Otitle");
let num = document.getElementById("num");

let index = 0;
let max = 11;

let comment = new XMLHttpRequest();
comment.open('GET', 'comment.json');

comment.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    let jsonData = JSON.parse(this.responseText);
    left.addEventListener("click", ()=>{
        if(index != 0){
            index--;
            tit.style.opacity = 0;
            headerTitle.textContent = jsonData[index]["name"];
            setTimeout(() => {
                num.textContent = "0" + (index+1);
                tit.textContent = jsonData[index]["comment"];
                tit.style.opacity = 1;
              }, 400);
        }
    });

    right.addEventListener("click", ()=>{
        if(index != max-1){
            index++;
            tit.style.opacity = 0;
            headerTitle.textContent = jsonData[index]["name"];
            setTimeout(() => {
                tit.textContent = jsonData[index]["comment"];
                tit.style.opacity = 1;
            }, 400);
        }
        if(index+1 >= 10){
            num.textContent = (index+1);
        }else{
            num.textContent = "0" + (index+1);
        }
    });
    
  }
};

comment.send();