console.log("hello")
//data types
//premitive def:-(predefined DataTypes)

//String => to store a sequence of characters
//Boolean => to store a boolean value true/false
//Number => to store a int/float values
//null => it stores nothing and its type is an object
//Undefined => value is not defined 
//Symbol => it contais unique id
//BigInt => used to store a big integer value
const string="hello"
const bool=true
const num=12
const nul=null
const undefine=undefined
const id=Symbol("hello")
const Bint=BigInt(100000000000000000000000000000008)
// console.log(`${string}\n${bool}\n${num}\n${nul}\n${undefine}\n${Symbol}\n${Bint}`)

//non-premitive def:-User Defined or Reference Type

//Array => used to store set of different or same type of data
//Obect => used to create a key value pairs and methods
//Functions => used to run a set of work any number of times we can return also

const arr=["string1",2,true]

const obj = {
    name:"xyz",
    age:20,
    male:true,
}

function fun(a,b) {
    c=a+b
    return c;
}
