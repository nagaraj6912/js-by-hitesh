//passing an object and array as an argument in function

// obj={
//     name:"Abc",
//     age:20,
//     year:2000
// }
// function detail(obect){
//     return `name:${obect.name} age:${obect.age}`
// }
// console.log(detail(obj))

//direct method to access object array

// function dets(obect){
//     return `name:${obect.name} age:${obect.age}`
// }
// console.log(dets({name:"abc",age:29}))

function arr(array){
    return array[1]
}
const x=arr([1,2,3,4])
// console.log(arr([1,2,3,4]))
// console.log(x)

//spreading multiple arguments into an array
function multipleSum(...num){
    return num
}
// console.log(multipleSum(100,200,300,400,500))
// console.log(multipleSum({name:10,sum:29,abc:20},[1,2,3,4,]))