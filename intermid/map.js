const area=function(radius){
    return Math.PI*(radius*radius)
}
const circum=function(radius){
    return 2*(Math.PI*(radius))
}
radius=4
const calculate=function(){
    const arcirm=circum(4)
    const are=area(4)
    console.log(are.toFixed(2))
    console.log(typeof are)
    console.log(arcirm)
    
}
calculate(area)