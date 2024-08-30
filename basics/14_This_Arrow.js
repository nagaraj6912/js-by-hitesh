//this
const obj={
    username:"abcd",
    age:20,
    detail:function(){
        console.log(`the usernameis ${this.username} the age of user${this.age}`)
        // console.log(this)

    }
}
// obj.detail()//we can call a method directly
// obj.username="xyz"
// obj.detail()
// console.log(this)

//Arrow functions support default parameters, allowing predefined values if no argument is passed, making JavaScript function definitions more flexible and concise

const arrowfn=()=>{
    console.log("hello")
}
// arrowfn()
//implicit arrow function
const imparrow=()=> console.log("hello guys")
// imparrow()
const sumarrow=(num1,num2)=> (num1+num2)
// obects in arrow function
const objarrow=()=>({name:"abc",date:10})
console.log(objarrow())

const multiarrow=(num1,num2)=>{
    return num1*num2
}
console.log(multiarrow(10,20))