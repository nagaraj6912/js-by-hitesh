//scopes global scope and local scope 
//global scope
let a=10
var b=20

function myfun(){
    let a=20 //a variable which declared in a function is called local scope                                                
    console.log(a)
}
myfun()
console.log(a)

if(a){
    //variable declared within if/for/while loop is called as block scope
    let a=100
    const b=200
    var c=300 //var sometimes dont follow scope levels in local scope instead we use let
    // console.log(c)
}
// console.log(c)//here var c is printing its value out of the scope also

// console.log(a)
// console.log(b)

//scope level
//in multiple scope level child node can access the value of parent but parent cant access the child nodes value

function one(){
    let username="abc"
    function two(){
        let work="devlopment"
        console.log(username + work)
    }
    two()
    // console.log(work)
}
// console.log(username)
one()

// he built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution.
fun()
function fun(){
    console.log("hello")
}