// const x = document.querySelector("h1")
// x.addEventListener("click", function (e) {
//     console.log(d.type)
// })
// type:The type property sets or returns the value of the type attribute of an <object> element.
// timeStamp:it returns the number of milliseconds from document was finished loading until the event created
// preventDefault():Prevent a link from opening the URL, and check if preventDefault() was called
// stopPropgation() : it prevents an event from bubling
// target: The target attribute specifies where to open the linked document:
// toElement target element where event occured
// screenX co-ordinates of a mouse pointer in x axis
// screenY co-ordinates of a mouse pointer in y axis
// altkey Was the ALT key pressed when the event occurred?
// cltrkey Was the cltr key pressed when the event occurred?
// shiftkey Was the shift key pressed when the event occurred?

// event bubbling :- when event is called it comes from last component to first
// by default it was false
// document.querySelector(".one").addEventListener("click",function(){
//     alert("component 1 is clicked")
// });
// document.querySelector(".two").addEventListener("click",function(){
//     alert("component 2 is clicked")
// });
// document.querySelector(".three").addEventListener("click",function(e){
//     // e.stopPropagation(); it stops event from bubling
//     alert("component 3 is clicked")
// })


// capturing : It is the opposite of bubbling. The event handler is first on its parent component and then on the component where it was actually wanted to fire that event handler. 
// document.querySelector(".one").addEventListener("click",function(){
//     alert("component 1 is clicked")
// },true);
// document.querySelector(".two").addEventListener("click",function(){
//     alert("component 2 is clicked")
// },true);
// document.querySelector(".three").addEventListener("click",function(e){
//     alert("component 3 is clicked")
// },true)


// mini proj
document.querySelector(".one").addEventListener("click",function(e){
    let x=e.target.tagName
    if(x == "H1"){
        e.target.parentNode.remove()
    }
})