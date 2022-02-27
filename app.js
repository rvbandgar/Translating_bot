// var btnTranslate=document.querySelector("#btn-translate")

// btnTranslate.addEventListener("click", function clickEventHandler()
// {
//     console.log("clicked")
// })


// This is another way to handle the event
/*
var btnTranslate=document.querySelector("#btn-translate")

function clickEventHandler(){
    console.log("clicked")
}

btnTranslate.addEventListener("click", clickEventHandler)
*/

var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("Error occured", error);
    alert("Something wrong with server! try again after some time")
}

function clickHandler() {
    var inputText=txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then (json=>{
        var traslatedText=json.contents.translated;
        outputDiv.innerText=traslatedText;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)