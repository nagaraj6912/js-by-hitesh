const form=document.querySelector("form")
form.addEventListener("submit",function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector("#height").value);
    const weight=parseInt(document.querySelector("#weight").value);
    const result=document.querySelector("#results")

    if(height===''|| height<0 || isNaN(height)){
        result.innerHTML=`enter a valid height ${height}`
    }else if(weight===''|| weight<0 || isNaN(weight)){
        result.innerHTML=`enter a valid weight ${weight}`
    }else{
        const z=(weight/((height*height)/10000)).toFixed(2);
        if(z<18.6){
            result.innerHTML=`Under Weight = ${z}`
        }else if(z<24.9){
            result.innerHTML=`Normal Range = ${z}`
        }else{
            result.innerHTML=`Overweight = ${z}`
        }
    }

})