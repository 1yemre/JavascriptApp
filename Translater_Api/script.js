const fromLang=document.querySelector("#from-lang");
const ToLang=document.querySelector("#to-lang");
const btnTranslate=document.querySelector("#BtnTranslate");
const fromText= document.querySelector("#from-text");
const toText= document.querySelector("#to-text");
const exchange=document.querySelector(".exchange");

for(let lang in languages)
{
     //console.log(lang,languages[lang]);
     let option=
     `<option value="${lang}">${languages[lang]}</option>`;
     fromLang.insertAdjacentHTML("beforeend",option);
     ToLang.insertAdjacentHTML("beforeend",option);


     fromLang.value="tr-TR";
     ToLang.value="en-GB"
}

btnTranslate.addEventListener("click",()=>{
    let text=fromText.value;
    let from=fromLang.value;
    let to=ToLang.value;
    const url=`https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`;
 
    fetch(url)
       .then(res =>res.json())
       .then(data=>
          {
               toText.value=data.responseData.translatedText;
          });

});

exchange.addEventListener("click",()=>{
   let text =fromText.value;
   fromText.value=toText.value;
   toText.value=text;


   let lang=fromLang.value;
   fromLang.value=ToLang.value;
   ToLang.value=lang;



});