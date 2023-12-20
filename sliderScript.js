let l = document.getElementById("left");
let r = document.getElementById("right");

let ht = document.getElementById("headTitle");
let cell = document.getElementById("cell");
let title = document.getElementById("title");

let flag = 2;
let set = [
    ["ЭрлГрей 30г","Ирландский виски 30г","English Breakfast 30г","Уда Пусселава 30г"],
    ["Апельсин с имбирём 30г","Гречишный чай 30г","Анчан 30г","Витаминный чай 30г","Ночные грёзы 15шт"],
    ["Печёное яблочко 30г","Бабушкин пирок 30г","Персиковый сад 30г","Улун белые ночи 30г","Солнечный 30г"]
];
let cellArr = ["1197 рублей","1347 рублей","1797 рублей"];
let name = ["Для завтрака","Антистрес","Фруктовый"]


l.addEventListener("click", ()=>{
    flag--;
    if(flag < 1){
        flag = 3;
    }
    if(flag > 3){
        flag = 1;
    }
    console.log(flag)
    if(flag == 1){
        ht.textContent = name[0];
        title.innerHTML = `
            <p>${set[0][0]}</p>
            <p>${set[0][1]}</p>
            <p>${set[0][2]}</p>
            <p>${set[0][3]}</p>
        `;
        cell.textContent = cellArr[0];
    }
    if(flag == 2){
        ht.textContent = name[1];
        title.innerHTML = `
            <p>${set[1][0]}</p>
            <p>${set[1][1]}</p>
            <p>${set[1][2]}</p>
            <p>${set[1][3]}</p>
            <p>${set[1][4]}</p>
        `;
        cell.textContent = cellArr[1];
    }
    if(flag == 3){
        ht.textContent = name[2];
        title.innerHTML = `
            <p>${set[2][0]}</p>
            <p>${set[2][1]}</p>
            <p>${set[2][2]}</p>
            <p>${set[2][3]}</p>
            <p>${set[2][4]}</p>
        `;
        cell.textContent = cellArr[2];  
    }
});

r.addEventListener("click", ()=>{
    flag++;
    if(flag < 1){
        flag = 3;
    }
    if(flag > 3){
        flag = 1;
    }
    console.log(flag)
    if(flag == 1){
        ht.textContent = name[0];
        title.innerHTML = `
            <p>${set[0][0]}</p>
            <p>${set[0][1]}</p>
            <p>${set[0][2]}</p> 
        `;
        cell.textContent = cellArr[0];
    }
    if(flag == 2){
        ht.textContent = name[1];
        title.innerHTML = `
            <p>${set[1][0]}</p>
            <p>${set[1][1]}</p>
            <p>${set[1][2]}</p>
        `;  
        cell.textContent = cellArr[1];
    }
    if(flag == 3){
        ht.textContent = name[2];
        title.innerHTML = `
            <p>${set[2][0]}</p>
            <p>${set[2][1]}</p>
            <p>${set[2][2]}</p>
        `;
        cell.textContent = cellArr[2];
    }
});