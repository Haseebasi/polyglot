const inputForm = document.getElementById('input-form')
const outputForm = document.getElementById('output-form')
const userInput = document.getElementById('user-input')
const aiOutput = document.getElementById('ai-output')
// const langRadio = document.getquerySelectorAll('input[name="choose-language"]:checked')
// const langValue = langRadio.value

await function inputFormHandler(){
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

        await getTranslation(userInput.value,langValue)

        inputForm.classList.add('hide')
        outputForm.classList.remove('hide')
     }else if(userInput.value){
        alert('select a language')
     }else{
        alert('input some text')
     }
}
async function getTranslation(text,lang){
      setLoading(true);
  try {
    const gift = await fetch('/api/translate',{
      method:"POST",
      headers:
        {
          "content-type":"application/json"
        }
      ,
      body:JSON.stringify({text:text,lang:lang})
    })
    
    const data  = await gift.json()
    const TranslatedText =  data.translated

    const html = marked.parse(TranslatedText);

    const safeHTML = DOMPurify.sanitize(html);

    aiOutput.innerHTML = safeHTML;
    return  true
  } catch (error) {
    console.error(error);
    aiOutput.textContent =
      "Sorry, I can't Translate now ,Try again later";
      return false
  } finally {
    if (typeof setLoading === 'function') setLoading(false);
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