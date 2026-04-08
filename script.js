const container = document.getElementById("container")

for(let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div")
    newDiv.classList.add("grid-square")
    newDiv.addEventListener("mouseenter", function() {
        newDiv.style.backgroundColor = "red"
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
        newDiv.style.width = `${800 / resizeSize}px`
        newDiv.style.height = `${800 / resizeSize}px`
        newDiv.addEventListener("mouseenter", function() {
        newDiv.style.backgroundColor = "red"
    })
    container.appendChild(newDiv)
   }
})






   