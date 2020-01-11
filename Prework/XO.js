      let x = 0;
      let o = 0;


function XO(str) {
    //code here
       x = 0;
       o = 0;
    
      for (var i = 0; i < str.length; i++) {
      currentCharacter = str.charAt(i);
        if (currentCharacter == "x" || currentCharacter == "X") {
           x += 1;
          }
        if (currentCharacter == "o" || currentCharacter == "O") {
           o += 1;
          }
        }
        
        console.log(x);
         console.log(o);
        
        if (x === o) {
        return true;
        } else{
        return false;
        }
}