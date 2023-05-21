let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

console.log(saveEl)

function increment() {
    
    count += 1
    countEl.textContent = count
    console.log(count)

}

function save() {
    let saveCount = count + " - "
    // saveEl.innerText += saveCount, innerText ne prend en compte que le texte et ignore les éléments des balises, y compris les espaces
    saveEl.textContent += saveCount // Dans ce cas là, textContent lui est préférable
    countEl.textContent = 0
    count = 0
    console.log(count)
}