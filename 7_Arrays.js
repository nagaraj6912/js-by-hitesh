// array is a non-premitive datatype
//declaration of array
arr=[1,2,3,4,5]
console.log(arr)
//built-in functions in array
newarr= arr
console.log(newarr.length)
console.log(newarr.slice(1,3))
console.log(arr)
console.log(newarr.splice(1,3))
console.log(arr)//the value of main array also change bcz of refernce value

newarr.push("hello",3)
newarr.unshift(0)
console.log(newarr)
console.log(newarr.indexOf(3))
console.log(newarr.includes(3))
console.log(newarr.shift())
console.log(arr)

//part 2
heros=["superman","ironman","batman"]
villans=["loki","thanos","joker"]
//character=heros.concat(villans)//adds two arrays 
character=[...heros, ...villans]//spread the values of many array into new array

console.log(character)
news=heros+villans
console.log(typeof(news))

//flat to remove the sub arrays in an array
arrx=[ 1,2,3, [ 1,2] ,4,5, [6,7] , [7,8, [9]]]
console.log(arrx)
arry=arrx.flat(3)
console.log(arry)

//is,from,of
console.log(Array.isArray("superman"))
console.log(Array.from("array"))
console.log(Array.of("array"))

//sort,reverse
let arrayx=[1,343,2,23,34,444]
console.log(arrayx.sort())
console.log(arrayx.reverse())

//still more in array

