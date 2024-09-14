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


//find the name of people with same age
//find the number of people and their name whose age is 50 or above 50

const user = [{
    firstname: "akshay",
    lastname: "saini",
    age: 26
},
{
    firstname: "donald",
    lastname: "trump",
    age: 75
},
{
    firstname: "elon",
    lastname: "musk",
    age: 50
},
{
    firstname: "deepika",
    lastname: "padukone",
    age: 26
},
];

const output = user.reduce(function (acc, cur) {
    // console.log(cur.age)
    if (acc[cur.age]) {
        let newage = cur.age
        // console.log(cur.firstname)
        acc[cur.age] = ++acc[cur.age];
        const names = user.filter((j) => {
            if (j.age == newage) {
                // console.log(j.firstname, " ", j.age)
            }
        })
    } else {
        acc[cur.age] = 1
    }
    return acc
}, {},);
// console.log(output)


const name=user.filter(function(i){
    let dets

    if(i.age>=50){
        dets=i.age+i.firstname+i.lastname
    }
    // console.log(dets)
    return dets;
}).map((j)=>{
    // console.log(j.firstname+" "+j.lastname+" "+j.age)
})