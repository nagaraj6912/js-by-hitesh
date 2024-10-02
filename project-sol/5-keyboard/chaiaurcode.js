const start = document.querySelector(".start")
const stop = document.querySelector(".stop")



// let interval;

// function fun(){
//     // i--
//     // console.log(i)
//     console.log("hi")
// }
// function int(){
//     interval=setInterval(fun,2000);
//     return interval;
// };
// // let i=5;
// function cle(){
//     const clear=clearInterval(interval);
//     console.log("interval stopped")
//     return clear;
// }

// start.addEventListener("click", function () {
//     int()
// });

// stop.addEventListener("click", function () {
//     cle(interval)
// });

let x=document.querySelector("h1")
let time=document.querySelector("#time")
let timeout;
let i=5;
let interval;

function times(){

    interval=setInterval(function(){
        i--
        time.innerHTML=i
        if(i<1){
            clearInterval(interval)
        }
    },1000);
    return interval;
}
function sto(){
    clearTimeout(timeout)
    clearInterval(interval)
    i=5
}

function star(){

    if(i>0){
        times()
    }
    timeout=setTimeout(function(){
        x.innerHTML="It was changed";
    },5000)
}