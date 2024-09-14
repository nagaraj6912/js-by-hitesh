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