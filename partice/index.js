let btn = document.getElementById("btn")
let input = document.getElementById("input")
let ul = document.getElementById("ul")



btn.addEventListener("click" ,Add)
let myList =[]
function Add(e){
    
    if(ul.children[0].className === "Empty-Messaage"){
        ul.children[0].remove()
    }
    
    

    let CurrentBtn = e.currentTarget
    let TakingInPut = CurrentBtn.previousElementSibling 

    

    let TakingValue = TakingInPut.value
    let lis = document.createElement("li")
        
    lis.innerHTML =
    `
    
    <h3>${TakingValue}</h3>
    <Button onclick="Editbtn(this)" > Edit </Button>
    <Button onclick="RemoveLis(this)" > Remove </Button>

    `
    
    ul.appendChild(lis)
    myList.push(TakingValue)

    TakingInPut.value = ""
console.log(myList)
    
    localStorage.setItem("names" ,myList)
    localStorage.getItemItem("names")
}

function RemoveLis(e){
    let removebtn = e
    removebtn.parentElement.remove()

   if(ul.children.length <= 0){
        let h4 = document.createElement("h4")
        h4.classList.add("Empty-Messaage")
        h4.textContent = "Enter your Name"
        ul.appendChild(h4)
        

    }

}


function Editbtn(e){
    if(e.textContent == "save"){
        e.textContent = "Edit"
        let input1 = e.previousElementSibling
        let input1Value = input1.value
        let h3 = document.createElement("h3")
        h3.textContent = input1Value

        console.log(input1Value)
        e.parentElement.replaceChild( h3,input1)
    }else{
        e.textContent = "save"
    let h3 = e.previousElementSibling
    let h3Value = h3.textContent
    let input2 = document.createElement("input")
    input2.type = "text"
    
    input2.value = h3Value
    
    e.parentElement.replaceChild( input2,h3)

    console.log(input)
    }
}
