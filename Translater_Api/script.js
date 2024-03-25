const fromLang=document.querySelector("#from-lang");
const ToLang=document.querySelector("#to-lang");

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