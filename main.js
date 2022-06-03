function EnterCode(){
    var inputValue = document.querySelector("#code-input").value;

    if(inputValue.toLowerCase().trim() == "godis"){
        document.querySelector("#output").style.display = "block";
    }
    
}