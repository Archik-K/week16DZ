/* НУЖНО ДОРАБОТАТЬ! */
let arr = []
const selectvalue = document.querySelector('.selectvalue');
const btn = document.querySelector('.button');
const servs = document.querySelector('.servs');
const toplivo = document.querySelector('.toplivo');
const dvigatel = document.querySelector('.input2')
/* dvigatel.addEventListener('change', ()=>{console.log(dvigatel.value);}) */
const ages = document.querySelector('.ages');


const selects = document.querySelectorAll('select')
console.log(selects);
selects.forEach((item, index)=>{
    item.addEventListener('change', ()=>{

        switch (item.value) {
case "ARAI BAYSIDE":
    arr[0] = 138800
    break;
case "HONDA HOKKAIDO":
    arr[0] = 200000
    break;
case "JU GIFU":
    arr[0] = 150000
    break;
case "NPS TOKYO":
    arr[0] = 170000
    break;
case "ORIX ATSUGI":
    arr[0] = 120000
    break;
case "SAA HAMAMATSU":
    arr[0] = 250000
    break;
case "TAA TONOKU":
    arr[0] = 110500
    break;

case "Целый автомобиль":
arr[1]= 20000
break;
case "Распил легковой":
arr[1]=10600
break;
case "Распил рамный":
arr[1]=5000
break;
case "Конструктор легковой":
arr[1]=9600
break;
case "Конструктор джип, м/а, европ. марки":
arr[1]=12340
break;
case "Запчасти на палете":
arr[1]=1000
break;

case "бензин (включая гибрид)":
arr[2]=2500
break;

case "дизельное топливо":
arr[2]=1500
break;

case "электрический":
arr[2]=2000
break;  

case "Меньше 3 лет":
arr[3]=2100
break;  

case "От 3 до 5 лет":
arr[3]=1700
break;  

case "От 5 до 7 лет":
arr[3]=1100
break;  

case "Больше 7 лет":
arr[3]=600
break;  
}
console.log(arr);

})
})


/* function onclick(e){

let radio = document.getElementById("radio").value;
let knopkas = e.target.value;
radio.textContent = "Вы выбрали: " + knopka;
}
for (let i = 0; i < i.length; i++) {
topliv.knopkas[i].addEventListener("click", onclick);
} */

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    const checks = document.querySelectorAll('.check')
    checks.forEach((item,index)=>{
        if(item.checked){
            arr.push(+item.value)
        }
        console.log('okey');
    })
    if(volume>2){
        arr.push(10000)
    }else if (volume<2){
        arr
    }


/*           if(volume > 2){
        arr.push(10000)
    }else if (volume<2){
        arr
    } */
})

/* НУЖНО ДОРАБОТАТЬ! */