const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");
let count = 0 , tot = 0;
function listen(){
    count += 1;
    countEl.innerText = count;
}
function save(){
    tot += count;
    let var1 = count + " - ";
    saveEl.textContent += var1;
    countEl.innerText = 0;
    count = 0;
}
function total(){
    countEl.innerText = "Total = " + tot;
}

