function createPhoneNumber(numbers){

  let phone = "(";
  
   for (var i = 0; i < numbers.length; i++) {
           
          switch(i) {
          case 3:
          phone += ") ";
          break;
          case 6:
          phone += "-";
          break;
          }
          
         phone += numbers[i]
        }
        
   return(phone) 
}