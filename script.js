const container = document.getElementById("container")

for(let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div")
    newDiv.classList.add("grid-square")
    newDiv.addEventListener("mouseenter", function() {
        newDiv.style.backgroundColor = "red"
    }) 
    container.appendChild(newDiv)
}

