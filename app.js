const all = document.querySelector(".all")
const cord = document.querySelector(".cords")
const image = document.querySelector(".circle")


all.addEventListener("mousemove", (e)=>{
let x = e.clientX
let y = e.clientY
cord.innerHTML = `X : ${x} , Y : ${y}`
image.style.opacity = "1"
image.style.clipPath = `circle(100px at ${x}px ${y}px)`

})
