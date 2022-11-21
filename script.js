const calculator = document.querySelector(".calculator").addEventListener("click", buttonEventInteraction)

function buttonEventInteraction(e) {
    if(e.target.type == 'button'){
        result(e.target.value)
        allClear(e.target.value)
        if(e.target.value != "ac" && e.target.value != "=") {
           let displayCharacters = document.querySelector(".calculator > div > h1").innerHTML += e.target.value
           maxCharacters(displayCharacters, 35)  
        }  
    }
}

const result = (buttonResult) => {
    let totalResult = document.querySelector(".calculator > div > h1").innerHTML
    if(totalResult){
        if(buttonResult == "="){
            document.querySelector(".calculator > div > h1").style.flexDirection = "column-reverse";
            let showResult = document.querySelector(".calculator > div > h1").innerHTML = eval(totalResult)
        } else{
            document.querySelector(".calculator > div > h1").style.flexDirection = "row-reverse";
        }
    }  
}

const allClear = (displayItem) => {
    let totalResult = document.querySelector(".calculator > div > h1").innerHTML
    if(totalResult){
        if(displayItem == "ac"){
            document.querySelector(".calculator > div > h1").innerHTML = ""
        }
    } 
}

const maxCharacters = (characters, limit) => {
    if(characters.length > limit){
        document.querySelector(".calculator > div > h1").innerHTML = ""
    }
}











