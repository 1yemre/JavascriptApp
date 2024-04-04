class Course{
      constructor(title,instructor,image){
        this.courseId=Math.floor(Math.random()*1000);
        this.title=title;
        this.instructor=instructor;
        this.image=image;
         
      }
}

class UI{
        addCourseTolist(course){
            const list=document.getElementById("course-list");
            var html=`
                <tr>  
                   <td><img src="img/${course.image}"/></td>
                   <td>${course.title}</td>
                   <td>${course.instructor}</td>
                   <td><a href="#" data-id="${course.courseId}" class="btn btn-danger btn-sm delete">Delete</td>
                </tr>  
            
            `;
            list.innerHTML +=html;
        }
        clearControls(){

            const title=document.getElementById("title").value="";
            const instructor=document.getElementById("instructor").value=" ";
            const image =document.getElementById("image").value="";
        }
        deleteCourse(element){
            if(element.classList.contains('delete'))
            {
                element.parentElement.parentElement.remove();
                return true;
            }
        }
        showAlert(message,className){
            var alert=
    `
    <div class="alert alert-${className}" role="alert">
      ${message}
    </div>
    `;


    const row= document.querySelector(".row");
    //beforeBegin,afternBegin,beforeEnd,afterEnd
    row.insertAdjacentHTML('beforeBegin',alert);

    setTimeout(()=>{
          document.querySelector(".alert").remove();
    },2000) 
        }

}

class Storage{
      static getCourses(){
        let courses;

      if(localStorage.getItem('courses')===null)
      {
          courses=[];  
      }else{
        courses=JSON.parse(localStorage.getItem('courses'));
      }

        return courses;
          
      }
      static displayCourse(){
          const courses=Storage.getCourses();
          courses.forEach(course => {
              const ui=new UI();
              ui.addCourseTolist(course);
          });
         
      }
      static AddCourse(course)
      {
         const courses= Storage.getCourses();
         courses.push(course);
         localStorage.setItem('courses',JSON.stringify(courses));

      }
      static deleteCourse(element)
      {
         if(element.classList.contains('delete'))
         {
            const id=element.getAttribute('data-id');

            const courses=Storage.getCourses();

            courses.forEach((course,index)=>{
               if(course.courseId==id)
               {
                 courses.splice(index,1);
               }
            });

            localStorage.setItem('courses',JSON.stringify(courses));
         }

      }
}

document.addEventListener('DOMContentLoaded',Storage.displayCourse);


document.getElementById("new-course").addEventListener('submit',
function(e){

   const title=document.getElementById("title").value;
   const instructor=document.getElementById("instructor").value;
   const image =document.getElementById("image").value;

   //create Course Object
   const course =new Course(title,instructor,image);

   // create UI 
   const ui=new UI();

  // console.log(ui);

    if(title==='' || instructor===''|| image==='')
    {
        ui.showAlert('Please Complete The Form!','warning');
        
    }else{
        ui.addCourseTolist(course);
       //save to localStorage
        Storage.AddCourse(course);

        ui.clearControls();
        ui.showAlert('The Course has added','success');
    }
    

    e.preventDefault();
});

document.getElementById("course-list").addEventListener('click',function(e){
     const ui=new UI();
     //delete course
    if(ui.deleteCourse(e.target)==true){
        //delete  from localStorage
        Storage.deleteCourse(e.target);
        ui.showAlert("The Course has been deleted!",'danger');
    }

});