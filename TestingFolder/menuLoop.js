// Define variables for the game
let currentRoom = 1;
let lastRoom = 0;
let prevRoom = currentRoom;
let inventory = [];





















function died() {
  let startBtn = document.querySelector('#s-btn');
  let reloadBtn = document.querySelector('#r-btn');
  let outputDiv = document.getElementById('output');
  alert('You have died.')
  outputDiv.innerHTML = ''
  currentRoom = 1;
  startBtn.className = 'play-btn';
  reloadBtn.className = 'hide-btn';
}

function win() {
  let startBtn = document.querySelector('#s-btn');
  let reloadBtn = document.querySelector('#r-btn');
  let outputDiv = document.getElementById('output');
  currentRoom = 1;
  startBtn.className = 'play-btn';
  reloadBtn.className = 'hide-btn';
  outputDiv.innerHTML = ''
}
// [...document.getElementsByClassName('control')].forEach(function(btnPress){
//   document.button 
// })



north = document.getElementById("north").addEventListener("click", function() {
  handleInput("north");
});

south = document.getElementById("south").addEventListener("click", function() {
  handleInput("south");
});

east = document.getElementById("east").addEventListener("click", function() {
  handleInput("east");
});

west = document.getElementById("west").addEventListener("click", function() {
  handleInput("west");
});

lookb = document.getElementById("look").addEventListener("click", function() {
  handleInput("look");
});




// #region ROOMS

// Define function for printing room description
function printRoomDescription() {
  let description;
  switch (currentRoom) {
    case 1:
      description = 'You are in a small clearing of the forest.';
      // look = 'You are surrounded by trees on nearly all sides. Birds and squirrels are flitting about in the treetops and you can hear the leaves rustling. There is a clear path to the north and you can make out a building in the distance. There is also an overgrown path to the east, leading deeper into the forest.'
      break;
    case 2:
      description = "There is a large shack ahead.";
      // look = 'You see a large shack ahead and the door is slightly ajar. You can hear some slow shuffling coming from inside. A dense line of trees are to the east and to the west. There is a path to the south.'
      break;
    case 3:
      description = "The forest is bearing down on you.";
      // look = 'The canopy blocks most of the light here and you can barely see past the wall of brush and brambles around you. But you can make out a narrow dirt track on the ground leading west, as well as north and south. There is a hollowed out tree to the east. There seems to be a small white box lying on the ground there.'
      break;
    case 4:
      description = 'The tree\'s are thinner and a brook lies here.';
      // look = 'You can see some sunlight coming through the tops of the trees. There is a brook nearby and the light is glinting off the water with a quiet briliance. The brook leads north. There is a path to the south leading north beside the brook. There is what looks to be a bears den to the west. You\'d best stay away from there. There is a impassable cliff wall to the east.'
      break;
    case 5:
      description = 'You are halfway through the bushes when the ground below you gives way and you tumble down a steep hill. You hit the bottom with great force and are dazed for a moment. After sitting up you rub your already aching head and look over yourself at all your new scrapes, cuts and bruises. Sighing first, you groan as you stand up and look ahead. You\'ve entered a clearing with a spring in the center.';
      // look = 'The gentle sound of nature here soothes you, and the forest seems to be getting thinner. A brook runs from the spring to the south, there is an impassable cliff wall to the east and a steep drop to the north. A well-worn path leads from the spring to the west.'
      break;
    case 6:
      description = 'You are at the entrance to the forest.'
      // look = ''
      break;
    case 7:
      description = 'A dilapidated manor stands before you.';
      // look = ''
      break;
    case 8:
      description = 'You are in the foyer of the manor.';
      // look = ''
      break;
    case 9:
      description = 'There is a staircase here.';
      // look = ''
      break;
    case 10:
      description = 'The cellar reeks of earth and mildew.';
      // look = ''
      break;
    case 11:
      description = 'It is pitch black.';
      // look = ''
      break;
    case 12:
      description = 'You are in a small cave.';
      // look = ''
      break;
    case 13:
      description = 'You are in large a cistern.';
      // look = ''
      break;
    case 14:
      description = 'You are at the top landing.';
      // look = ''
      break;
    case 15:
      description = 'You are in an antechamber.';
      // look = ''
      break;
    case 16:
      description = `You slowly push the door open as you peek inside. The door groans and squeaks loudly as flakes of rust fall from the hinges onto the floor. 
      \n
      It\'s pitch black in here and you cannot see very well. As you push past the door and your eyes adjust to the dark, you notice a hole in the floor surrounded by splintered wood. Below the hole is yet another hole bored deep into the earth. 
      \n
      You slowly step forward being careful so as not to fall in. Suddenly, a large, dark hand reaches up and encircles your entire body, pulling you down into the abyss.`;
      break;
    case 17:
      description = '';
      break;
    case 18:
      description = '';
      break;
    case 19:
      description = '';
      break;
    case 20:
      description = '';
      break;
    case 21:
      description = '';
      break;
    default:
      description = "You are lost.";
      break;
  }
  console.log(description);
  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML += "<p>" + description + "</p>";
  outputDiv.scrollTop = outputDiv.scrollHeight;
}
// #endregion


function printLook() {
  let look;
  switch (currentRoom) {
    case 1:
      look = 'You are surrounded by trees on all sides. Birds and squirrels are flitting about in the treetops, chirping and chittering without a care in the world. The leaves rustle in the wind and you get a strong wiff of pine needles, damp leaves and dirt. There is a clear path to the <span>north</span> and you can make out a building in the distance. There is also an overgrown path to the <span>east</span>, leading deeper into the forest.'
      break;
    case 2:
      look = 'You see a large shack ahead; the door is slightly ajar and you can hear some slow shuffling and scraping on wood coming from inside. Could it be someone who can help you, or could it be your assailant? As you ponder this, a dark silhouette passes across the gap between the door and the doorframe. A dense line of trees are to the east and to the west. There is a path to the <span>south</span> leading deeper into the forest and a path to the <span>north</span> leading into the shack.'
      break;
    case 3:
      look = 'The canopy blocks most of the light here and you can barely see past the wall of brush and brambles around you. The forest floor is covered in a thick layer of leaves and sticks; the overgrowth is suffocating. You can barely make out a narrow track of dirt on the ground leading <span>west</span>, as well as to the <span>north</span> and to the <span>south</span>. There is a hollowed out tree to the <span>east</span>. There seems to be a small white box lying on the ground there.'
      break;
    case 4:
      look = 'You can see some sunlight coming through the tops of the trees. There is a brook nearby and the light is glinting off the water with a quiet briliance. You wouldn\'t really mind staying here forever and you consider the option. After a few moments you snap out of your thoughts and rub your eyes. This place is bewitching and must hold some dark magic as it would be insane to stop here considering you can see what appears to be a bears den to the <span>west</span>. However, you are very thirsty... There is a path to the <span>south</span> through a dense wall of brambles and a path leading <span>north</span> alongside the brook. There is a impassable cliff wall to the east.'
      break;
    case 5:
      look = 'There is a hill to the south which is much to steep to climb. The gentle sound of nature here soothes you and the forest seems to be getting thinner. A refreshing breeze blows across your face and through your disheveled hair. A brook winds down the hill in a zig-zag, babbling over a bed of stones and pebbles before entering spring. There are a few fish darting about beneath the surface of the spring, that water is clear enough you can see to the bottom. There is an impassable cliff wall to the east and a steep drop to the north. A well-worn path leads from the spring to the <span>west</span>.'
      break;
    case 6:
      look = 'The trees sparsely line the side of the path, their trunks and limbs creating a natural archway. The forest floor is carpeted with a thin layer of fallen leaves and twigs, and shafts of sunlight filter through the branches overhead. The powerful aroma of pine needles and damp earth fills the air around you. There is a clear path leading <span>west</span> and through the archway you can see a manor in the distance. The path extends into the <span>east</span>, leading deeper into the forest. The edge of a cliff lies to the north and a thicket of trees to the south.';
      break;
    case 7:
      description = 'The manor is very old and falling apart. Boards hang from the walls at different angles, barely holding on by nails that are nearly rusted away. The rafters and purlins above the porch are bowed down as if a giant were resting on the roof. The balusters have nearly fallen away and the handrail is supported by the few remaining. There is a door to the <span>south</span> leading into the manor, and an open doorway on the porch to the <span>west</span> also leading inside. There is a path with few pieces of gravel embedded in the dirt leading to the east into a forest.';
      look = ''
      break;
    case 8:
      description = 'The foyer is littered with broken items and covered in a thick later of dust. Taking a closer look at the items laying about the floor, you can see what appears to be a rapier sticking halfway out of the floorboards. It would be useful to have a weapon, but you aren\'t sure if it would be wise to retrieve it not knowing who the owner is, or why it is stuck into the floor. There is an open doorway to the <span>north</span> and a staircase to the <span>south</span>.';
      look = ''
      break;
    case 9:
      description = 'R9';
      look = ''
      break;
    case 10:
      description = 'R10';
      look = ''
      break;
    case 11:
      description = 'R11';
      look = ''
      break;
    case 12:
      description = 'R12';
      look = ''
      break;
    case 13:
      description = 'R13';
      look = ''
      break;
    case 14:
      description = 'R14';
      look = ''
      break;
    case 15:
      description = 'R15';
      look = ''
      break;
  }
  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML += "<p>" + look + "</p>";
  outputDiv.scrollTop = outputDiv.scrollHeight;
}




function deadEnd() {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML += "<p>" + "You can't go that way." + "</p>";
    outputDiv.scrollTop = outputDiv.scrollHeight;
}





// #region Controls

// DIRECTIONS
function handleInput(input) {



  switch (input) {
    
 // NORTH
    case "north":
      if (currentRoom === 1) {
        lastRoom = currentRoom;
        currentRoom = 2;
        printRoomDescription();
      } else if (currentRoom === 2){
    lastRoom = currentRoom;
        currentRoom = 16;
        printRoomDescription();
        died();
      } else if (currentRoom === 3) {
    lastRoom = currentRoom;
        currentRoom = 4;
        printRoomDescription();
      } else if (currentRoom === 4) {
    lastRoom = currentRoom;
        currentRoom = 5;
        printRoomDescription();
      } else if (currentRoom === 8) {
    lastRoom = currentRoom;
        currentRoom = 7;
        printRoomDescription();
      } else if (currentRoom === 9) {
    lastRoom = currentRoom;
        currentRoom = 8;
        printRoomDescription();
      } else if (currentRoom === 10) {
    lastRoom = currentRoom;
        currentRoom = 9
        printRoomDescription();;
      } else if (currentRoom === 15) {
    lastRoom = currentRoom;
        alert('You Win!');
        win();
      } else
      {
        deadEnd();
      }
      break;

 // SOUTH
      case "south":
      if (currentRoom === 2) {
        lastRoom = currentRoom;
        currentRoom = 1;
        printRoomDescription();
      } else if (currentRoom === 3) {
    lastRoom = currentRoom;
        currentRoom = 12;
        printRoomDescription();
      } else if (currentRoom === 4) {
    lastRoom = currentRoom;
        currentRoom = 3;
        printRoomDescription();
      } else if (currentRoom === 5) {
    lastRoom = currentRoom;
        currentRoom = 4;
        printRoomDescription();
      } else if (currentRoom === 7) {
    lastRoom = currentRoom;
        currentRoom = 8;
        printRoomDescription();
      } else if (currentRoom === 8) {
    lastRoom = currentRoom;
        currentRoom = 9;
        printRoomDescription();
      } else if (currentRoom === 9) {
    lastRoom = currentRoom;
        currentRoom = 10;
        printRoomDescription();
      } else if (currentRoom === 11) {
    lastRoom = currentRoom;
        alert('GAME OVER');
        died();
      } else if (currentRoom === 15) {
    lastRoom = currentRoom;
        alert('You win!')
        win();
      } else
      {   deadEnd();
      }
      // console.log(currentRoom);
      break;
      
 // EAST      
      case "east":
      if (currentRoom === 1) {
    lastRoom = currentRoom;
        currentRoom = 3;
        printRoomDescription();
      } else if (currentRoom === 3) {
    lastRoom = currentRoom;
        alert('GAME OVER');
        died();
      } else if (currentRoom ===6) {
    lastRoom = currentRoom;
        currentRoom = 5;
        printRoomDescription();
      }  else if (currentRoom ===7) {
    lastRoom = currentRoom;
        currentRoom = 6;
        printRoomDescription();
      }  else if (currentRoom ===10) {
    lastRoom = currentRoom;
        currentRoom = 11;
        printRoomDescription();
      }  else if (currentRoom ===11) {
    lastRoom = currentRoom;
        currentRoom = 12;
        printRoomDescription();
      }  else if (currentRoom ===12) {
    lastRoom = currentRoom;
        alert('GAME OVER');
        died();
      }  else if (currentRoom ===14) {
    lastRoom = currentRoom;
        currentRoom = 19;
        printRoomDescription();
      } else
      {
        deadEnd();
      }
      // console.log(currentRoom);
      break;
      
 // WEST      
      case "west":
      if (currentRoom === 3) {
    lastRoom = currentRoom;
        currentRoom = 1;
        printRoomDescription();
      }  else if (currentRoom ===5) {
    lastRoom = currentRoom;
        currentRoom = 6;
        printRoomDescription();
      }  else if (currentRoom ===6) {
    lastRoom = currentRoom;
        currentRoom = 7;
        printRoomDescription();
      }  else if (currentRoom ===7) {
    lastRoom = currentRoom;
        alert('GAME OVER');
        died();
      }  else if (currentRoom ===9) {
    lastRoom = currentRoom;
        currentRoom = 14;
        printRoomDescription();
      }  else if (currentRoom ===10) {
    lastRoom = currentRoom;
        currentRoom = 13;
        printRoomDescription();
      }  else if (currentRoom ===11) {
    lastRoom = currentRoom;
        currentRoom = 10;
        printRoomDescription();
      }  else if (currentRoom ===12) {
    lastRoom = currentRoom;
        currentRoom = 11;
        printRoomDescription();
      }  else if (currentRoom ===13) {
    lastRoom = currentRoom;
        currentRoom = 15;
        printRoomDescription();
      }  else if (currentRoom ===15) {
    lastRoom = currentRoom;
        alert('YOU WIN!');
        win();
      } else
      {
        deadEnd();
      }

      break;

 // LOOK
      case "look":
        if (currentRoom === 1){
        printLook();

        } else if (currentRoom === 2) {
        printLook();
          
        } else if (currentRoom === 3) {
        printLook();
          
        } else if (currentRoom === 4) {
        printLook();
          
        } else if (currentRoom === 5) {
        printLook();
          
        } else if (currentRoom === 6) {
        printLook();
          
        } else if (currentRoom === 7) {
        printLook();
          
        } else if (currentRoom === 8) {
        printLook();
          
        } else if (currentRoom === 9) {
        printLook();
          
        } else if (currentRoom === 10) {
        printLook();
          
        } else if (currentRoom === 11) {
        printLook();
          
        } else if (currentRoom === 12) {
        printLook();
          
        } else if (currentRoom === 13) {
        printLook();
          
        } else if (currentRoom === 14) {
        printLook();
          
        } else if (currentRoom === 15) {
        printLook();
          
        } else {
          console.log("error");
        }
        break;
    // add more cases for each direction
    
    



 // ITEMS
    case "pick up key":
      if (currentRoom === 2) {
        inventory.push("key");
        console.log("You picked up a key.");
        let outputDiv = document.getElementById("output");
        outputDiv.innerHTML += "<p>" + "You picked up a key." + "</p>";
        outputDiv.scrollTop = outputDiv.scrollHeight;
      } else {
        console.log("There's nothing to pick up here.");
        let outputDiv = document.getElementById("output");
        outputDiv.innerHTML +=
          "<p>" + "There's nothing to pick up here." + "</p>";
        outputDiv.scrollTop = outputDiv.scrollHeight;
      }
      break;
    // add more cases for each item that can be picked up

    



 // DONT UNDERSTAND COMMAND
    default:
      console.log("I don't understand that command.");
      let outputDiv = document.getElementById("output");
      outputDiv.innerHTML +=
      "<p>" + "I don't understand that command." + "</p>";
      outputDiv.scrollTop = outputDiv.scrollHeight;

      break;
  }



  document.getElementById("input").value = "";
  
  

  console.log(currentRoom, lastRoom, 'Before function end');
}

// #endregion




document.getElementById("submit").addEventListener("click", function() {
  handleInput(document.getElementById("input").value.toLowerCase());
});
// SUBMIT BUTTON
// document.getElementById("submit").addEventListener("click", handleInput);

// document.getElementById("input").addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     handleInput();
//   }
// });

// #region print users input
function printUserInput(input) {
  let inputDiv = document.getElementById("input");
  let p = document.createElement("p");
  p.innerHTML = input;
  inputDiv.appendChild(p);
  inputDiv.scrollTop = inputDiv.scrollHeight;
}
// #endregion


// #region Starting the game
function startGame() {
  console.log("Welcome to the game! Type 'help' for a list of commands.");
  document.getElementById("output").innerHTML +=
    "<p>Welcome to the game! Type 'help' for a list of commands. Actually don't bother, just use the buttons.</p>" + '<p>You awaken, confused. Your head aches with the furor of Jack Rebney.</p>';

  printRoomDescription();
}

function hideBtn() {
  let startBtn = document.querySelector('#s-btn');
  let reloadBtn = document.querySelector('#r-btn');
  let outputDiv = document.getElementById('output');
  setTimeout(() => {
    if (
      startBtn.className === 'play-btn' &&
      reloadBtn.className === 'hide-btn'
    ) {
      startBtn.className = 'hide-btn';
      reloadBtn.className = 'play-btn';
      startGame();
    } else if (
      startBtn.className === 'hide-btn' &&
      reloadBtn.className === 'play-btn'
    ) {
      startBtn.className = 'play-btn';
      reloadBtn.className = 'hide-btn';
      outputDiv.innerHTML = ''

    }
  }, 150);
}
// #endregion
















































// #region Working Navbar Code
// const qall = document.querySelectorAll('.navbar-link')
// const jall = document.querySelectorAll('.sub-link')

// document.addEventListener('click', function (e) {
//     var target = e.target;
//     var parent = target.parentNode;
//     var index = [].indexOf.call(parent.children, target);
//     console.log("index:", index);
//     console.log(target);
//     console.log(parent.children);

//         qall.forEach((link) => {
//             link.classList.add('hide')
//             link.classList.remove('show')

//         })

//         jall.forEach((link) => {
//             link.classList.add('hide')
//             link.classList.remove('show')
//         })
//         for (i=0; i<=index; i++) {
//             console.log(jall[index]);
//             jall[index].classList.add('show')
//             jall[index].classList.remove('hide')
            
//         }
//             target.classList.remove('hide')
//         target.classList.add('show');

//   });
// #endregion