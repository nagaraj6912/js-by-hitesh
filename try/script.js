

// document.querySelector("body").style.backgroundImage=

function fun(image){
    let img=document.querySelector("body").style.backgroundImage=`url(${image})`
}
async function random(e) {
    try{
        let x=await fetch("https://dog.ceo/api/breeds/image/random")
        let random=await x.json()
        let image=random.message
        console.log(image)
        fun(image)
    }
    catch{
        console.log("error",Error)
    }    
}

random()