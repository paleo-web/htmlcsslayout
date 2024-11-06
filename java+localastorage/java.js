let form = document.getElementById("form")
let Usname = document.getElementById("Usname")
let Uspassword =document.getElementById("Uspassword")
let btn1 = document.getElementById("btn1")
let SignIn = document.getElementById("Sign-in")

form.addEventListener("submit", function(e){

    e.preventDefault()
    SingIn()
})

function SingIn(){


    let id ={
        _name1:Usname.value,
        password1: Uspassword.value
    }

    localStorage.setItem( "student",JSON.stringify(id))

    if(id._name1 === "" && id.password1 === ""){
        alert("fill the form")
        return
    }

    form.style.display = "none"
    SignIn.style.display = "block"

}

SignIn.addEventListener("submit", function(e){

    e.preventDefault()
    Handlesubmit()
})

function Handlesubmit(){

    let name12 = Usname.value
    let name2 = Uspassword.value

   let same = JSON.parse(localStorage.getItem("student"))

    if(name12 == same._name1 && name2 == same.password1){
        alert("welcome")
    }else{
        alert("create your acount")
        window.location.href = "form"
    }


}
