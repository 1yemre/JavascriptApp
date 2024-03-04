const api_key="your_Api_key";
const url ="https://v6.exchangerate-api.com/v6/"+api_key;

const Currency_one=document.getElementById("Currency_one");
const Currency_two=document.getElementById("Currency_two");
const list_one= document.getElementById("list_one");
const list_two= document.getElementById("list_two");
const amount=document.getElementById("amount");
const Calculate=document.getElementById("Calculate");
const result=document.getElementById("result");


fetch(url+"/codes")
.then(res=>res.json())
.then(data=>
    {
    const items=data.supported_codes;
    let options;
    for(let item of items)
        {
            options+=`<option value=${item[0]}>${item[1]}</option>`;
        }
     list_one.innerHTML=options;   
     list_two.innerHTML=options;   
    });
 
Calculate.addEventListener("click",function(){
  const exchange1=Currency_one.value;
  const exchange2=Currency_two.value;
  const amountt=amount.value;

    fetch(url+"/latest/"+exchange1)
    .then(res=>res.json())
    .then(data=>{
           const sonuc= (data.conversion_rates[exchange2]*amountt).toFixed(3);
           result.innerHTML=`
           <div class="card border-primary">
                <div class="card-body text-center" style="font-size:30px;;">
                        ${amountt} ${exchange1}=${sonuc} ${exchange2}
                </div> 
          </div>
  `;
    
    })
});