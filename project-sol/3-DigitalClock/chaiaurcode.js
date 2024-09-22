const clock=document.querySelector("#clock")
setInterval(function(){
    const x=new Date();
    clock.innerHTML=x.toLocaleTimeString()
},1000);
