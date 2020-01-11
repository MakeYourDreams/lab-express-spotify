// Rover Object Goes Here
// ======================
let Rover = {
  direction: "N",
  x: 0,
  y: 0,
  command: "rffrfflfrff",
}

let travellog = [];

// ======================

function CallRover(rover){

  for (var i = 0; i < Rover.command.length; i++) {
      
       currentRoverCommand = Rover.command.charAt(i);
      
          switch(currentRoverCommand) {
        case "f":
          moveForward()
          break;
        case "r":
          turnRight()
          break;
        case "l":
          turnRight()
          break;
      }
  }
}

function turnLeft(rover){
  console.log("turnLeft was called!");
  
    switch(Rover.direction) {
      case "N":
        Rover.direction = "W";
        break;
      case "W":
        Rover.direction = "S";
        break;
      case "S":
        Rover.direction = "E";
        break;
      case "E":
        Rover.direction = "N";
        break;
    }
    
}

function turnRight(rover){
  console.log("turnRight was called!");
  
    switch(Rover.direction) {
      case "N":
        Rover.direction = "E";
        break;
      case "E":
        Rover.direction = "S";
        break;
      case "S":
        Rover.direction = "W";
        break;
      case "W":
        Rover.direction = "N";
        break;
    }
    
}

function moveForward(rover){
  console.log("moveForward was called");
  
      switch(Rover.direction) {
      case "N":
        Rover.y -= 1;
        break;
      case "E":
        Rover.x += 1;
        break;
      case "S":
        Rover.y += 1;
        break;
      case "W":
        Rover.x -= 1;
        break;
    }
    
// Enforce boundaries
    if (Rover.y > 9) {
    Rover.y = 9
    }
    if (Rover.y < 0) {
    Rover.y = 0
    }
    if (Rover.x > 9) {
    Rover.x = 9
    }
    if (Rover.x < 0) {
    Rover.x = 0
    }        
    
 // Travel log
    travellog.push(Rover.x, Rover.y);
}


