let countEl = document.getElementById("count-no")
let saveEl = document.getElementById("save-btn")
let count = 0

function increase(){
    countEl.innerText = count++  
}

function save(){
    alert("The number of People is " + count)
}
