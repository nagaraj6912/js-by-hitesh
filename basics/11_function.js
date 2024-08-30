//functions are a block of code that executes whenever we call
// function fun(){
//     console.log("hello")
//     console.log("guys")
// }
// fun()

function sum(a,b){
    let sum=a+b
    return sum
}
x=sum(10,20)
console.log(x)

function username(user="Sam"){
    if(!user){
        console.log("eneter a name")
        return
    }
    return `${user},"hello"`     
}
console.log(username(""))
