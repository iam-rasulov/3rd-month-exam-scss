var elBtn = document.querySelector(".right__btn")
var elHero = document.querySelector(".hero")
var elImg = document.querySelector(".inner__img")
var elList = document.querySelector(".right__list2")

elBtn.addEventListener("click" , function (){
    elHero.classList.toggle("d-none")
    elImg.classList.toggle("d-none")
    elList.classList.toggle("d-block")

})


