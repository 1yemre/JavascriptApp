const profile=new Profile ();
const searchProfile=document.querySelector("#searchProfile");
const ui=new UI();


searchProfile.addEventListener("keyup",(event)=>{
   let text= event.target.value;
   if(text!=='')
   {
     profile.getProfile(text)
     .then(res=>{
            if(res.profile.lenght===0)
            {

            }else{
                 ui.showProfile(res.profile[0]);
            }
        })
   }
});