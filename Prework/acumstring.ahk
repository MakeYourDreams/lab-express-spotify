let accumString = "";
let loopIndex = 0;

function accum(s) {
	accumString = "";
  
      for (var i = 0; i < s.length; i++) {
        
          loopIndex = (i + 1);
          currentCharacter = s.charAt(i);
          
          for (var ii = 0; ii < loopIndex; ii++){
              if (ii > 0){
              currentCharacter = currentCharacter.toLowerCase()
              }else{
              currentCharacter = currentCharacter.toUpperCase()
              }             
          accumString += currentCharacter;
          }
		  
          if (loopIndex != s.length){
            accumString += "-" ;
            }
			
        }


return(accumString)
}