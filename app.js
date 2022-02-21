// var btnTranslate=document.querySelector("#btn-translate")

// btnTranslate.addEventListener("click", function clickEventHandler()
// {
//     console.log("clicked")
// })


// This is another way to handle the event
var btnTranslate=document.querySelector("#btn-translate")

function clickEventHandler(){
    console.log("clicked")
}

btnTranslate.addEventListener("click", clickEventHandler)