//immediately invoked function expression it is used to avoid the pollution in global scope

//named iife
(function name(){
    console.log("hello guys")
})();
//we must add ; to end function
name()

//unnamed iife
(()=>{
    console.log("greetings")
})();


//passing arguments
((name)=>{
    console.log(`hello ${name} how are you`)
})(name="adarsh")
