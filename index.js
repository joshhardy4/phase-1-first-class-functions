function receivesAFunction(callback , spy){
    return callback(spy)
  } 
  function returnsANamedFunction(fn ='hello') {
       function fn(){

       }

    return fn
  }
  

 


  function returnsAnAnonymousFunction(name = '') {
   function name(){
       
   }
   return () =>{
       
   }
  }
  
  