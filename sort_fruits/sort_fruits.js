let appleBtn = document.getElementById("apple-btn");
let orangeBtn = document.getElementById("orange-btn");

let fruits = ["🍊","🍎","🍊","🍊","🍎","🍊","🍎"];

function sortFruits() {
    for(let i = 0; i < fruits.length; i++){
        if(fruits[i] === "🍎"){
            appleBtn.textContent += "🍎";
        }
        else{
            orangeBtn.textContent += "🍊";
        }
    }
}
sortFruits();