const btn = document.querySelector("#btn")
const boxes=document.querySelectorAll(".box")

function getRandomColor(){
    let letters= "0123456789abcdef"
    let color= "#"
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)]
    }
    return color
}

btn.addEventListener("click",()=>{
    boxes.forEach((item)=>{
        const color= getRandomColor()
        item.style.background= color
        item.innerHTML=color
    })
})
