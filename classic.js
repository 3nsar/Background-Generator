let colors= ["red","blue","green","gray","purple","orange"];
const btn = document.getElementById("btn");
const colorName = document.getElementById("color-name");


btn.addEventListener("click",()=>{
    let color = colors[randomColor()];
    document.body.style.backgroundColor = color;
    colorName.innerText= color;
})

function randomColor(){
    return Math.floor(Math.random()*colors.length);
}