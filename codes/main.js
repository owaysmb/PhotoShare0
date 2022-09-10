// let div = document.querySelector(".Hel");

// function countdown(){
//     div.innerHTML -= 1;
//     if(div.innerHTML === "0"){
//         clearInterval(counter)
        
//     }
// }
// let counter = setInterval(countdown ,1000);



// let lis = document.querySelectorAll("ul li")
// let hel = document.querySelector(".active")
// let gre= document.getElementsByClassName("green")
// let blu = document.getElementsByClassName("blue")
// let exp = document.querySelector(".experiment")

// if(window.localStorage.getItem("color")){
//     exp.style.backgroundColor = window.localStorage.getItem("color")
// }

// lis.forEach((li) => {
//     li.addEventListener("click", (e) =>{
//         // console.log(e.currentTarget.dataset.color)
//         lis.forEach((li) =>{
//             li.classList.remove("active")
//         })
//         e.currentTarget.classList.add("active")
//         window.localStorage.setItem("color", e.currentTarget.dataset.color)
//         exp.style.backgroundColor = e.currentTarget.dataset.color
//     })
// })

// if(window.localStorage.getItem("color")){
//     // document.body.style.backgroundColor = window.localStorage.getItem("color")
// }
// hel.onclick = function(){
//     window.localStorage.setItem("color", "#f00");
//     window.localStorage.getItem("color")
//     document.body.style.backgroundColor = window.localStorage.getItem("color")
// }
// gre.onclick = function(){
//     document.body.style.backgroundColor = "";
// }

// document.querySelector(".name").addEventListener('keydown' , done)

// function done(event){
//     sessionStorage.setItem("input-name", event.target.value)
// }


// const element = document.querySelector('#element');

// const toggleColor = (isEntering) => {
//     element.style.background = isEntering ? 'orange' : 'black';
// };

// element.onmouseover = function(){
//     element.style.background = 'orange'
// }
// element.onmouseleave = function(){
//     element.style.background = 'black'
// }

// element.onmouseover = function(){
//     toggleColor(true)
// }

// element.onmouseleave = function(){
//     toggleColor(false)
// }
// element.onmouseover = function isEntering(){
//     toggleColor(true)
// }
// element.onmouseleave = function isEntering(){
//     toggleColor(false)
// }


// const button = document.querySelector('#wrapper button');

// const changeInput = () => {
// const input = document.querySelector('#inputEl');
//     if(input) {
//     input.value = 'Hello World';
// }
// };

// button.addEventListener('click', changeInput);

// let Myid  = document.querySelector("#wrapper input")

// Myid.setAttribute("id" , "inputEl   ")

// type in your code here


// expects button to be child of element with id 'wrapper'


// const element = document.querySelector('#element');
// const wrapper = document.querySelector('#wrapper');

// const moveRight = () => {
//     const wrapperWidth = wrapper.getBoundingClientRect().width;
//     const elementWidth = element.getBoundingClientRect().width;
//     const currentPosition = parseInt(element.style.left || 0, 10);
//         if (currentPosition <= wrapperWidth - elementWidth) {
//     element.style.left = `${currentPosition + 1}px`;
// }
// };

// wrapper.onmousemove = function moveRight(){
//     const wrapperWidth = wrapper.getBoundingClientRect().width;
//     const elementWidth = element.getBoundingClientRect().width;
//     const currentPosition = parseInt(element.style.left || 0, 10);
//         if (currentPosition <= wrapperWidth - elementWidth) {
//     element.style.left = `${currentPosition + 1}px`;
// }
// }

// const button = document.getElementById('button');
// let stopped = false;

// function move(isReturning) {
//     const width = button.parentNode.clientWidth;
//     const left = parseInt(button.style.left , 10) || 0;
//     if (!stopped) {
//     button.style.left = (isReturning ? left - 1 : left + 1) + 'px';
//     setTimeout(() => move ((isReturning && left > 0) || left === width - button.clientWidth ), 10);
// };
// };

// move();

// button.addEventListener('click', () => {
//     stopped = true;
//     if(!stopped){
//         move ((isReturning && left > 0) || left === width - button.clientWidth)
//         stopped = false;
//     }else{
//         return;
//     }

// });

// stopped = true;
//     if(!stopped){
//         move((isReturning && left > 0) || left === width - button.clientWidth)
//         stopped = true;
//     }else{
//         stopped = false;
//     }



const imageinput = document.querySelector(".inp");
imageinput.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector(".test").style.backgroundImage = `url(${uploaded_image})`;
  });
    reader.readAsDataURL(this.files[0]);
});

const imageinp = document.querySelector(".imageinpu");
imageinp.addEventListener("change", function() {
    const reader1 = new FileReader();
    reader1.addEventListener("load", () => {
    const uploadedimage = reader1.result;
    document.querySelector(".avatar").src = uploadedimage
  });
    reader1.readAsDataURL(this.files[0]);
});



function thenumber2(thenumber){
    if(thenumber % 2 == 0){
      console.log('even')
    }else{
      console.log("odd")
    }
}

