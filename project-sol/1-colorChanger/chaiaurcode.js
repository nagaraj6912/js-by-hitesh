const s = document.querySelectorAll(".button")

for (let i=0;i<s.length;i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", function () {
        let color = s[i].id
        document.querySelector("body").style.backgroundColor=color
    })
}

// let ad= document.querySelectorAll(".button") //select all elements in of same class in on variable
// // let x=Array.from(ad) //converting node list to array and adding in new variable
// for (let i = 0; i < ad.length; i++) {
//     document.querySelectorAll(".button")[i].addEventListener("click", function () {
//         const color=ad[i].id
//         document.querySelector('.canvas').style.backgroundColor=color
//     })
// }

