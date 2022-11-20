const headerButton = document.querySelector(".header-body_button");
const modal =document.querySelector(".modal")
const filter =document.querySelector(".filter")


headerButton.addEventListener("click",modalDisplay)

function modalDisplay(){
    modal.classList.add("display");
    filter.classList.add("display");
}

const closeButton = document.querySelector(".modal-close");
closeButton.addEventListener("click",modalClose)

function modalClose(){
    modal.classList.remove("display")
    filter.classList.remove("display")

}

const modalButton = document.querySelector(".modal-button");
const loader = document.querySelector(".loader");
const modalBody = document.querySelector(".modal-body");
const check = document.querySelector(".modal-check");
modalButton.addEventListener("click",record) 


function record(){
    loader.classList.add("display");
    modalBody.classList.add("hidden");
    modalButton.classList.add("hidden");
    setTimeout(function(){
        loader.classList.remove("display")
        check.classList.add("display");
    },3000)
}