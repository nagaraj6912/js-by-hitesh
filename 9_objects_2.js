//object constructor
const obj={}
obj.name="xyz"
obj.age=21
obj.mail="abc@gmail.com"
// console.log(obj)

const newobj={
    name:"abc",
    fullname: {
        lastname: {
            lastname:"def"
        }
    }
}
// console.log(newobj.fullname.lastname.lastname)

ob1={1:"hello",2:"guys"}
ob2={3:"hey",4:"guys"}
// ob3={ob1,ob2}
// const ob3=Object.assign({},ob1,ob2)
const ob3={...ob1,...ob2}
console.log(ob3)


//obects in array
arr=[
    {
        1:"name",
        2:"age",
    },
    {
        3:"Sex",
        age:"marriage"
    }
]
console.log(arr[1][3])

// to get keys and values
console.log(Object.keys(arr))
console.log(Object.values(newobj))
console.log(Object.entries(arr))

console.log(arr.hasOwnProperty("1"))