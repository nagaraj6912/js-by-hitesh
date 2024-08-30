//this is handy thing date and time
let date=new Date()
console.log(date.toUTCString())
console.log(date.toJSON())
console.log(date.getFullYear())
console.log(date.toLocaleDateString())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getHours())
console.log(date.getTime())
console.log(date.toLocaleTimeString())


//we can add more than one property to date using objects
let dat=new Date()
x=dat.toLocaleString('default',{
    dateStyle:"medium"
})
time=dat.toLocaleTimeString('default',{
    timeStyle:"medium"
})
console.log(x)
console.log(time)