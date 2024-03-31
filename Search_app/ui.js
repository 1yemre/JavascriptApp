class UI{
       constructor(){
          this.profileContainer=
           document.querySelector("#profileContainer");
           this.alert=document.querySelector("#alert");

       }


    showProfile(profile)
    {
         this.profileContainer.innerHTML=`
             <div class="card card-body">
                   <div class="row">
                       <div class="col-md-3">
                       <a href="https://placeholder.com">
                       <img src="https://via.placeholder.com/350*150" class="img-thumbnail"></img>
                         </a>
                        </div>
                        <div class="col-md-9">
                            <h4>Contact</h4>
                            <ul class="list-group">


                            </ul>

                        </div>
                   </div>
             </div>
         
         `;
    }





}