const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F",];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const test = document.querySelector(".container h3.color");

btn.addEventListener('click', function(){
    let hexColor="#";
    for(let i=0; i<6; i++){
        hexColor += hex[hexRand()]
    };
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    color.style.color = hexColor;
    test.style.color = hexColor;
});

function hexRand(){
    return Math.floor(Math.random()*hex.length);
}