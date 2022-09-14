let number = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const colorName = document.getElementById("color-name");


btn.addEventListener("click", ()=>{
    let newNumber = "#";
    for(let i=0;i<6;i++){
        newNumber += number[randomNumber()];
    }
    document.body.style.backgroundColor = newNumber;
    colorName.innerText= newNumber;
})

function randomNumber(){
    return Math.floor(Math.random()*number.length);
}