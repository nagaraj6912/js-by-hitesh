// there are two types of memory allocation
//stack memory used for premitive datatypes
//def => it sends the copy of value to variable that doesn't affect if we modify the derived variables
let x="abc@gmail.com"
let n="name"
let y=x
console.log(y)
y="hello"
console.log(x,n,y)//here the x value not changed bcz it sends the copy to y

//heap memory used for non-premative datatypes
//def => in heap memory the variable directly get values by actual reference and any modification in variable affect refernce also
let a={
    mail:"abc@gmail.com",
    name:"abc",
}
let b=a
console.log(b.name,b.mail)
b.name="xyz"
b.mail="xyz.com"
console.log(a.name,a.mail)//here the name and mail value of a obejct also changed bcz it send actual refernce to b