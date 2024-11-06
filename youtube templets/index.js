let btn = document.getElementById("btn")
let icon = document.getElementById("icon-bar")
let closebtn = document.getElementById("close-btn")

btn.addEventListener("click" , function(){
    icon.style.left = 0
})

closebtn.addEventListener("click" , function(){
    icon.style.left = "-17%"
})