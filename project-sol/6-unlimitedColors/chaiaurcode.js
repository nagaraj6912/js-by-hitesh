let body = document.querySelector("body");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
let change;
let bgColor;

function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    return bgColor;
};

function changeColor(){
    if(!change){
        change = setInterval(changebg, 1000);
    }
    
    function changebg(){
        body.style.backgroundColor=randomColor();
    }
}

function stopColor(){
    clearInterval(change);
    change=null;
}

start.addEventListener("click", function () {
    changeColor()
});
stop.addEventListener("click", function () {
    stopColor()
});