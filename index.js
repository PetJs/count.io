let countEl = document.getElementById("count-no")
let elEntry = document.getElementById("save-el")

let count = 0

function increase(){
    countEl.textContent = count++ 
}

function save(){
    let entry = " " + count + " - "
    elEntry.textContent = elEntry.textContent + entry
    countEl.textContent = 0
    count = 0
}

// let welcomeEl = document.getElementById("welcome-el")

// let name = "Peter Fagoroye"
// let greeting = "Welcome to Microsoft "
// let greet = greeting + name

// function wel(){
//     welcomeEl.textContent = greet
//     alert(greet)
// }


