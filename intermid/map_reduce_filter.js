//map is a method of array object which creates new array by calling a function and iterate on each element of a main array

arr = [11, 2, 33, 44, 5]

function double(x) {
    return x + x
}

newarr = arr.map(double)

//arrow function in map
const newarray = arr.map((x) => x = x + x + x);

//convert to binary
const newar = arr.map((x) => x.toString(2))
// console.log(newar)

//filter makes new array and push the only satisfied values from function to array

const out = arr.filter((x) => x > 10)
// console.log(out)

//Reduce it contains accumulator,current value and index value and function also 
const red = arr.reduce((acc, curr, index) => acc = acc + curr)
const reduc = arr.reduce((acc) => acc)
// console.log(reduc)

//find max
const max = arr.reduce((acc, cur) => {
    if (acc < cur) {
        acc = cur
    }
    //  console.log(acc) //accumulator contains the return value
    return acc
})
// console.log(max)
const user = [
    {firstname: "akshay",lastname: "saini",age: 2},
    {firstname: "donald",lastname: "trump",age: 75},
    {firstname: "elon",lastname: "musk",age: 50},
    {firstname: "deepika",lastname: "padukone",age: 26},
];
