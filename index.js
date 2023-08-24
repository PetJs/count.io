let countEl = document.getElementById("count-no")
let count = 0

function increase(){
    count++
    countEl.innerText = count 
    console.log(count)
}

increase()