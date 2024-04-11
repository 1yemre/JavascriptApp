//Stroge Controller
const StrogeController=(function(){



    
})();


// Product Controller
const ProductController=(function(){

//Private
  const  Product=function(id,name,price){
     this.id=id;
     this.name=name;
     this.price=price;
  }

  const data ={
       products:
            [
                {id:0,name:'monitor',price:100},
                {id:0,name:'ram',price:30},
                {id:0,name:'klavye',price:10},
            ],

            selectedProduct:null,
            totalPrice:0
       
  }

 //public
 return{
    getProduts:function(){
          return data.products;

    },
    getData:function(){
        return data;
    }

 }


})();

// UI Controller

const UIController=(function(){




})();


// App Controller
const App=(function(ProductCtrl,UICtrl){
return {
     init:function(){
           console.log('starting app...');
           const products=ProductController.getProduts();
           UICtrl.createProctList(products);

     }
}
   



})(ProductController,UIController);
App.init();