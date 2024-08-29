//obects contains key value pairs and prototype , property and types it is non-premitive type
//we are creating obejct by object literals it is singleton which means a change made in object effects to entire script
const symbl=Symbol("k   value")

obj={
    name:"abc",
    age:29,
    born:2000,
    mail:"xyz@gmail.com",
    [symbl]:2,
    isin:false,
}
console.log(obj.name)
obj.name="xyz"
console.log(obj.name)


//yet another method to call a key value pair
console.log(obj["isin"])
console.log(obj["name"])

//to call a symbol
console.log(obj[symbl])


// freeze
// Object.freeze(obj)
console.log(obj)

//object function
obj.one=function(){
    console.log("hello guys");
}
console.log(obj.one())
obj.two=function(){
    console.log(`hello ${this.name}`);
}
console.log(obj.two())