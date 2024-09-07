//to calculate an array using callback function
const arr=[1,2,4,5]

//call back function
function circum(radi){
    return 2*(Math.PI)*radi
}

//higher order function
function calculate(radi){
    let x=[]
    for (let i=0; i<radi.length; i++) {
        x.push(circum(radi[i]))
    }
    console.log(`the circumference of a circle is ${x}`)
    console.log(x)

}


// calculate(arr)
// console.log(arr.map(circum))

//to iterate over array
let newar=[arr.map(circum)]
for (const i of newar) {
    // console.log(i)
}

//for in to iterate object
const object ={
    name:"abc",
    age:"20",
    gender:"male"
}
for (const key in object) {
    // console.log(`key value of object is ${key} and value is ${object[key]}`)
}

arrin=[12,23,34,40]

for (const i in arrin) {
    console.log(arrin[i])
}

