const container = document.getElementById("container")

for(let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div")
    newDiv.classList.add("grid-square")
    let hoverCounter = 0 
    let r = randomNumber()
    let g = randomNumber()
    let b = randomNumber()
    newDiv.addEventListener("mouseenter", function() {
        hoverCounter = hoverCounter + 1
        newDiv.style.backgroundColor = `rgb(${Math.max(0,r * (1 - hoverCounter * 0.1))}, ${Math.max(0, g * (1 - hoverCounter * 0.1))}, ${Math.max(0, b * (1 - hoverCounter * 0.1))})`
    }) 
    container.appendChild(newDiv)
}

const resetBtn = document.getElementById("resetBtn")
resetBtn.addEventListener("click", function() {
   let resizeSize = prompt("Please choose the size of your grid. Must be from 1-100")
    if(resizeSize === null) {
        return
    }
   while(resizeSize > 100 || resizeSize <= 0 || isNaN(resizeSize)) {
    resizeSize = prompt("Number must be from 1 - 100")
   }
    container.innerHTML = ""
    for(let i = 0; i < resizeSize * resizeSize; i++) {
        const newDiv = document.createElement("div")
        newDiv.classList.add("grid-square")
        let hoverCounter = 0 
        let r = randomNumber()
        let g = randomNumber()
        let b = randomNumber()
        newDiv.style.width = `${800 / resizeSize}px`
        newDiv.style.height = `${800 / resizeSize}px`
        newDiv.addEventListener("mouseenter", function() {
        hoverCounter = hoverCounter + 1
        newDiv.style.backgroundColor = `rgb(${Math.max(0,r * (1 - hoverCounter * 0.1))}, ${Math.max(0, g * (1 - hoverCounter * 0.1))}, ${Math.max(0, b * (1 - hoverCounter * 0.1))})`
    })
    container.appendChild(newDiv)
   }
})

function randomNumber() { 
    let value = Math.floor(Math.random() * 256) 
    return value
}





   