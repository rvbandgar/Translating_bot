

var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/dothraki.json"
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