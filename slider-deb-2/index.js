let slideindex =  0

function slidecontrol(x){
    slideindex = slideindex + x
    slideshow(slideindex)
}

 

function slideshow(num){

let slides = document.getElementsByClassName("slide")

if( num == slides.length ){
    slideindex = 0
    num = 0
}

if (num < 0){
    slideindex = slides.length -1
    num = slides.length -1
}

for(let i of slides){
    i.style.display = "none"

}
slides[slideindex].style.display= "block"
}

slideshow(slideindex)