 let btn = document.getElementById("btn")
 let x = document.getElementById("x")
let form= document.getElementById("form-wrapper")

x.addEventListener("click" ,function(){
    btn.style.display = ("block")
    form.style.display = ("none")

})
btn.addEventListener("click", function(){
    form.style.display = ("block")
    btn.style.display = ("none")
})