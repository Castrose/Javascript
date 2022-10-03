let countEl = document.getElementById("count")
let inctxt = document.getElementById("increment-text")

let count = 0
function Increment() {
    count = count + 1
    countEl.innerHTML = `${count}`
}

function save() {
    inctxt.innerHTML += ` ${count} - `
}

function reset(){
    count = 0
    inctxt.innerHTML = ''
    countEl.innerHTML = '0'
} 