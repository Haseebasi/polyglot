const inputForm = document.getElementById('input-form')
const outputForm = document.getElementById('output-form')
const userInput = document.getElementById('user-input')
// const langRadio = document.getquerySelectorAll('input[name="choose-language"]:checked')
// const langValue = langRadio.value

function inputFormHandler(){
    const french = document.getElementById("french")
        const spanish = document.getElementById("spanish")
        const japanese = document.getElementById("japanese")
        let langValue = ""
        if(french.checked){
            langValue = french.value
        }
        else if(spanish.checked){
            langValue = spanish.value
        }
        else if(japanese.checked){
            langValue = japanese.value
        }
            
     if(userInput.value && langValue){
        console.log(userInput.value)
        console.log(langValue)
        inputForm.classList.add('hide')
        outputForm.classList.remove('hide')
     }else if(userInput.value){
        alert('select a language')
     }else{
        alert('input some text')
     }
}
function outputFormHandler(){
        inputForm.classList.remove('hide')
        outputForm.classList.add('hide')
}


document.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(e.target.id)
    if(e.target.id === 'input-form'){
            inputFormHandler()
        }
    if(e.target.id === 'output-form'){
        outputFormHandler()
    }
})