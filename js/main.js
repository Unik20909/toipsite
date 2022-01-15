let paralax = document.getElementById("paralax")
let colorCircle = document.getElementById("color")
let block = document.getElementById("block")
let text = document.getElementById("text")
let btn = document.getElementById("btn")
//добавлаяем событие движения мышки на блок
block.addEventListener("mousemove",(event)=>{
    //изменяем стили элементов при движении мыши
paralax.style.transform=`rotateX(${event.clientY/50}deg) rotateY(${-35+event.clientX/20}deg)`
colorCircle.style.opacity="1"
block.style.background="#2d01f7"
block.style.boxShadow="0 0 100px #2d01f7"
block.style.borderRadius="50px"

text.style.transform=`rotateX(${event.clientY/50}deg) rotateY(${-35+event.clientX/20}deg)`
btn.style.transform=`rotateX(${event.clientY/50}deg) rotateY(${-35+event.clientX/20}deg)`

})
//добавлаяем событие при при уходе  мышки с блока
block.addEventListener("mouseleave",(event)=>{
     //изменяем стили элементов при уходе  мышки с блока
    colorCircle.style.opacity="0"
    block.style.background="#000"
    block.style.boxShadow="none"
    block.style.borderRadius="0px"


})