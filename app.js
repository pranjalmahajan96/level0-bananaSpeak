var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


function clickEventHandler()
{
   outputDiv.innerText = "bababababababab " + txtInput.value; 
}

btnTranslate.addEventListener("click", clickEventHandler)




