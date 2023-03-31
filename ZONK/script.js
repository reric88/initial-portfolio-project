// Define variables for the game
let currentRoom = 1;
let lastRoom = 0;
let prevRoom = currentRoom;
let inventory = [];
let startBtn = document.querySelector('#s-btn');
let reloadBtn = document.querySelector('#r-btn');
let inputControls;
// const shackImage = displayImage('Images/shack.png')
const outputDiv = document.getElementById("output");
let ethnoamb = document.getElementById('forest-ambience');
// #region Starting the game
console.log(document.getElementById('forest-ambience'));
// let ethnoamb = document.getElementById('forest-ambience');
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
        // pauseAudio('Sounds/forestEthnoAmbience.wav');
        pauseLoop();
        
        
      }
    }, 150);
  }

  // document.getElementById('forest-ambience')
  function startGame() {
    // audio.play();
    // playAudio();
    // playAudio('Sounds/forestEthnoAmbience.wav');
    playLoop();
    console.log("Welcome to the game! Type 'help' for a list of commands.");
    document.getElementById("output").innerHTML +=
      "<p>Welcome to the game! Type 'help' for a list of commands. Actually don't bother, just use the buttons.</p>" + '<p>You awaken, confused. Your head aches with the furor of Jack Rebney.</p>';
  
    printRoomDescription();
  }
// #endregion


function audioControl(src, playPause) {
if (playPause == 'play') {
  new Audio(src).play();
} else {
  new Audio(src).pause();
}
}






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
  audioControl(document.getElementById('forest-ambience'), 'pause')
}



function playAudio(src) {
  const audio = new Audio(src);
  audio.play()
  }

function playLoop() {
  ethnoamb.loop = true;
  ethnoamb.play()
  }

  function pauseLoop() {
    ethnoamb.loop = false;
    ethnoamb.pause();
    ethnoamb.currentTime = 0;
  }




function displayImage(src) {
const img = document.createElement("img");
img.src = src;
const textElement = document.querySelector("#output");
textElement.appendChild(img);
}






function openBag() {
  invIndex = 0;
  speed = 50;
  outputDiv.innerHTML += '<br>' + 'You are carrying:' + '<br>';
  outputDiv.scrollTop = outputDiv.scrollHeight;
  let audioInv = new Audio('Sounds/openBag.mp3')
  audioInv.play();
  printInventory();




}


function printInventory() {
 
  let audioType = new Audio('Sounds/keyboardKey.wav')
  if (invIndex < inventory.toString().length) {
    outputDiv.innerHTML += inventory.toString().charAt(invIndex);
    console.log(inventory.toString().charAt(invIndex));
    console.log(inventory.toString().length);
    invIndex++;
    audioType.play();
    setTimeout(printInventory, speed);
    
    if (invIndex >= inventory.toString().length) {
      outputDiv.innerHTML += '<br>' + '<br>';

    }
  }
  outputDiv.scrollTop = outputDiv.scrollHeight;
}





// let invIndex = -1;

// let speed = 50;
// function printInventory() {
//   console.log(inventory);
//  console.log(invIndex);
// if (invIndex < 0) {
// }
//   let audioType = new Audio('Sounds/keyboardKey.wav')
//   if (invIndex < inventory[0].length) {
//     invIndex++;
//     outputDiv.innerHTML += inventory[0].charAt(invIndex);
//     console.log(inventory[0].charAt(invIndex));
//     console.log(inventory[0].length);
//     audioType.play();
//     setTimeout(printInventory, speed);
    
//     if (invIndex >= inventory[0].length - 1) {
//       outputDiv.innerHTML += '<br>' + '<br>';
//       // index++;
//       // setTimeout(typingText, speed);

//     }
//   }
//   outputDiv.scrollTop = outputDiv.scrollHeight;
// }









// function displayImage() {
// const img = document.createElement("img");
// img.src = 'Images/shack.png';
// const textElement = document.querySelector("#output");
// textElement.appendChild(img);
// }

  // const imgPath = "Images/shack.png";
// const img = document.createElement("img");
// img.src = imgPath;





// function displayImage(src, width, height) {
//   let img = new Image();
//   img.src = src;
//   img.width = width;
//   img.height = height;
//   document.body.appendChild(img);
// }
// function displayImage(src, width, height) {
//   let img = document.createElement('img');
//   img.src = src;
//   img.width = width;
//   img.height = height;
//   document.body.appendChild(img);
// }


// if (document.querySelector('#s-btn').className === 'hide-btn') {}

// [...document.getElementsByClassName('control')].forEach(function(btnPress){
  //   document.button 
  // })
  






if (document.querySelector('#r-btn').className === 'play-btn') {
  

}







 
  // if (startBtn.className === 'hide-btn') {
    document.getElementById("north").addEventListener("click", function() {
      handleInput("north");
    });
  
    document.getElementById("south").addEventListener("click", function() {
      handleInput("south");
    });
  
    document.getElementById("east").addEventListener("click", function() {
      handleInput("east");
    });
  
    document.getElementById("west").addEventListener("click", function() {
      handleInput("west");
    });
  
    document.getElementById("look").addEventListener("click", function() {
      handleInput("look");
    });
  
    document.getElementById("take").addEventListener("click", function() {
      handleInput("take");
    });
  
    document.getElementById("inventory").addEventListener("click", function() {
      // handleInput("inventory");
      openBag();
    });
  
    // SUBMIT BUTTON
    document.getElementById("submit").addEventListener("click", function () {
      handleInput(document.getElementById("input").value.toLowerCase());
    });
  
    document.getElementById("input").addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        handleInput();
      }
    });
  // }
  

document.getElementById("input").addEventListener("keydown", function (event) {
if (event.key === "Enter") {
  handleInput();
}
});

// #region print users input
function printUserInput(input) {
let inputDiv = document.getElementById("input");
let p = document.createElement("p");
p.innerHTML = input;
inputDiv.appendChild(p);
inputDiv.scrollTop = inputDiv.scrollHeight;
}

// #endregion


if (currentRoom === 2) {
  // const shackImageElement = document.querySelector("#shack-image")
  // shackImageElement.appendChild(img)
  displayImage('Images/shack.png')
}




// #region ROOMS

// Define function for printing room description
function printRoomDescription() {
  let description;
  switch (currentRoom) {
    case 1:
      description = 'You are in a small clearing of the forest.';  
      break;
    case 2:
      description = "There is a large shack ahead.";
      break;
    case 3:
      description = "The forest is bearing down on you.";
      break;
    case 4:
      description = 'The trees are thinner and a brook lies here.';
      break;
    case 5:
      description = 'You fall down the hill or something.';
      // 'You are halfway through the bushes when the ground below you gives way and you tumble down a steep hill. You hit the bottom with great force and are dazed for a moment. After sitting up you rub your already aching head and look over yourself at all your new scrapes, cuts and bruises. Sighing first, you groan as you stand up and look ahead. You\'ve entered a clearing with a spring in the center.';
      break;
    case 6:
      description = 'You are at the entrance to the forest.'
      break;
    case 7:
      description = 'A dilapidated manor stands before you.';
      break;
    case 8:
      description = 'You are in the foyer of the manor.';
      break;
    case 9:
      description = 'There is a staircase here.';
      break;
    case 10:
      description = 'The cellar reeks of earth and mildew.';
      break;
    case 11:
      description = 'It is pitch black.';
      break;
    case 12:
      description = 'You are in a small cave.';
      break;
    case 13:
      description = 'You are in large a cistern.';
      break;
    case 14:
      description = 'You are at the top landing.';
      break;
    case 15:
      description = 'You are in an antechamber.';
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
  // console.log(description);
  // index = 0;
  // if (index < typedDescription) {
  //   outputDiv.innerHTML += typedDescription.charAt(index);
  //         index ++;
  //         setTimeout(typingText, speed);
  //       }
  // outputDiv.scrollTop = outputDiv.scrollHeight;
  const outputDiv = document.getElementById('output');
  let typedDescription = description;
  let index = 0;
  const speed = 50;
  // outputDiv.innerHTML = '';
  function typingText() {
    let audio = new Audio('Sounds/keyboardKey.wav')
    if (index < typedDescription.length) {
      outputDiv.innerHTML += typedDescription.charAt(index);
      index++;
      audio.play();
      setTimeout(typingText, speed);
      
      if (index >= typedDescription.length) {
        outputDiv.innerHTML += '<br>' + '<br>';
        // index++;
        // setTimeout(typingText, speed);
  
      }
    }
    outputDiv.scrollTop = outputDiv.scrollHeight;
  }
  typingText();
}





// }
// #endregion




const imgPath = "Images/shack.png";
const img = document.createElement("img");
img.src = imgPath;

const textElement = document.querySelector("#output");





const roomDescription = {
    1: `You are surrounded by trees on all sides. Birds and squirrels are flitting about in the treetops, chirping and chittering without a care in the world. The leaves rustle in the wind and you get a strong wiff of pine needles, damp leaves and dirt. There is a clear path to the "<span>"north"</span> and you can make out a building in the distance. There is also an overgrown path to the <span>east</span>, leading deeper into the forest.`,

    2: `You see a large shack ahead; the door is slightly ajar and you can hear some slow shuffling and scraping on wood coming from inside. Could it be someone who can help you, or could it be your assailant? As you ponder this, a dark silhouette passes across the gap between the door and the doorframe. A dense line of trees are to the east and to the west. There is a path to the <span>south</span> leading deeper into the forest and a path to the <span>north</span> leading into the shack.`,
    
    3: 'The canopy blocks most of the light here and you can barely see past the wall of brush and brambles around you. The forest floor is covered in a thick layer of leaves and sticks; the overgrowth is suffocating. You can barely make out a narrow track of dirt on the ground leading <span>west</span>, as well as to the <span>north</span> and to the <span>south</span>. There is a hollowed out tree to the <span>east</span>. There seems to be a small white box lying on the ground there.',
    
    4: 'You can see some sunlight coming through the tops of the trees. There is a brook nearby and the light is glinting off the water with a quiet briliance. You wouldn\'t really mind staying here forever and you consider the option. After a few moments you snap out of your thoughts and rub your eyes. This place is bewitching and must hold some dark magic as it would be insane to stop here considering you can see what appears to be a bears den to the <span>west</span>. However, you are very thirsty... There is a path to the <span>south</span> through a dense wall of brambles and a path leading <span>north</span> alongside the brook. There is a impassable cliff wall to the east.',
   
    5: 'There is a hill to the south which is much to steep to climb. The gentle sound of nature here soothes you and the forest seems to be getting thinner. A refreshing breeze blows across your face and through your disheveled hair. A brook winds down the hill in a zig-zag, babbling over a bed of stones and pebbles before entering spring. There are a few fish darting about beneath the surface of the spring, that water is clear enough you can see to the bottom. There is an impassable cliff wall to the east and a steep drop to the north. A well-worn path leads from the spring to the <span>west</span>.',
    
    6: 'The trees sparsely line the side of the path, their trunks and limbs creating a natural archway. The forest floor is carpeted with a thin layer of fallen leaves and twigs, and shafts of sunlight filter through the branches overhead. The powerful aroma of pine needles and damp earth fills the air around you. There is a clear path leading <span>west</span> and through the archway you can see a manor in the distance. The path extends into the <span>east</span>, leading deeper into the forest. The edge of a cliff lies to the north and a thicket of trees to the south.',
   
    7: 'The manor is very old and falling apart. Boards hang from the walls at different angles, barely holding on by nails that are nearly rusted away. The rafters and purlins above the porch are bowed down as if a giant were resting on the roof. The balusters have nearly fallen away and the handrail is supported by the few remaining. There is a door to the <span>south</span> leading into the manor, and an open doorway on the porch to the <span>west</span> also leading inside. There is a path with few pieces of gravel embedded in the dirt leading to the east into a forest.',
    
    8: 'The foyer is littered with broken items and covered in a thick later of dust. Taking a closer look at the items laying about the floor, you can see what appears to be a rapier sticking halfway out of the floorboards. It would be useful to have a weapon, but you aren\'t sure if it would be wise to retrieve it not knowing who the owner is, or why it is stuck into the floor. There is an open doorway to the <span>north</span> and a staircase to the <span>south</span>.',
   
    9: 'No description yet.',
    
    10: 'No description yet.',
    
    11: 'No description yet.',
    
    12: 'No description yet.',
    
    13: 'No description yet.',
    
    14: 'No description yet.',
    
    15: 'No description yet.',
    
    16: 'No description yet.',
   
    17: 'No description yet.',

}




// function printLook() {
  //     const description = roomDescription[currentRoom];
  let typedDescription = roomDescription;
  let index = 0;
  
  
  
  function printLook() {
      console.log(roomDescription[1].length);
      let speed = 50;
      let audio = new Audio('Sounds/keyboardKey.wav')
      const typedDescription = roomDescription[currentRoom]
      if (index < typedDescription.length) {
        outputDiv.innerHTML += typedDescription.charAt(index);
        index++;
        audio.play();
        setTimeout(printLook, speed);
        
        if (index >= typedDescription.length) {
          outputDiv.innerHTML += '<br>' + '<br>';
          // index++;
          // setTimeout(typingText, speed);
    
        }
      }
      outputDiv.scrollTop = outputDiv.scrollHeight;
    }

    // outputDiv.innerHTML += "<p>" + description + "</p>";
    // outputDiv.scrollTop = outputDiv.scrollHeight;
// }




const itemList = {
    1: ' Stick',
    2: ' Rusted Key',
    3: ' Dirty Twinkie',
    4: ' Jamie Flynt',
    5: ' John Hunter',
    6: ' Your Mom',
    7: ' What even is this?',
    8: 'No item yet.',
    9: 'No item yet.',
    10: 'No item yet.',
    11: 'No item yet.',
    12: 'No item yet.',
    13: 'No item yet.',
    14: 'No item yet.',
    15: 'No item yet.',
    16: 'No item yet.',
    17: 'No item yet.',
    18: 'No item yet.',
    19: 'No item yet.',
    20: 'No item yet.',
    21: 'No item yet.',
}

function takeItem() {

    const roomItem = itemList[currentRoom];

    if (roomItem === undefined) {
      playAudio('Sounds/error.wav');
        outputDiv.innerHTML += "<p>" + 'There is nothing worth taking.' + "</p>";
    outputDiv.scrollTop = outputDiv.scrollHeight;
    return;
    } 

    if (inventory.includes(roomItem)) {
      playAudio('Sounds/error.wav');
        outputDiv.innerHTML += "<p>" + 'You have already searched this room.' + "</p>";
    outputDiv.scrollTop = outputDiv.scrollHeight;
    return;
    }

    inventory.push(roomItem);
    itemList[currentRoom] = undefined;
    playAudio('Sounds/success4.wav');

    outputDiv.innerHTML += "<p>" + 'You picked up a ' + roomItem + "</p>";
    outputDiv.scrollTop = outputDiv.scrollHeight;
  }
// #region Controls



// DIRECTIONS



function handleInput(input) {

    const roomTransitions = {
        1: {
            north: 2,
            east: 3,
            look: 'look',
            take: 'take',
        },
    
        2: {
            north: 16,
            south: 1,
            look: 'look',
            take: 'take',
        },
       
        3: {
            north: 4,
            south: 12,
            east: 16,
            west: 1,
            look: 'look',
            take: 'take',
        },
       
        4: {
            north: 5,
            south: 3,
            west: 16,
            look: 'look',
            take: 'take',
        },
       
        5: {
            west: 6,
            look: 'look',
            take: 'take',
            
        },
    
        6: {
            east: 5,
            west: 7,
            south: 16,
            look: 'look',
            take: 'take',
        },
    
        7: {
            east: 6,
            west: 16,
            south: 8,
            look: 'look',
            take: 'take',
        },
    
        8: {
            north: 7,
            south: 9,
            look: 'look',
            take: 'take',
        },
       
        9: {
            north: 8,
            south: 10,
            west: 14,
            look: 'look',
            take: 'take',
        },
       
        10: {
            north: 9,
            west: 13,
            east: 11,
            look: 'look',
            take: 'take',
        },
    
        11: {
            west: 10,
            east: 12,
            south: 16,
            look: 'look',
            take: 'take',
        },
    
        12: {
            east: 16,
            west: 11,
            look: 'look',
            take: 'take',
        },
    
        13: {
            west: 15,
            look: 'look',
            take: 'take',
        },
    
        14: {
            east: 9,
            look: 'look',
            take: 'take',
        },
       
        15: {
            north: 'win',
            south: 'win',
            west: 'win',
            look: 'look',
            take: 'take',
        }
      };
      
      const transition = roomTransitions[currentRoom]?.[input];
      if (transition === 'look') {
        printLook();
      } else if (transition === 'take') {
        takeItem();
      } else
      if (transition === undefined) {
        deadEnd();
      } else if (transition === 'win') {
        alert('You Win!');
        win();
      } else {
        lastRoom = currentRoom;
        currentRoom = transition;
        playAudio('Sounds/footstepsGravel.mp3')
        printRoomDescription();
        if (currentRoom === 16) {
          died();
        }
      }
    


      // DONT UNDERSTAND COMMAND
  // switch (input) {    
  //   default:
  //     console.log("I don't understand that command.");
  //     outputDiv.innerHTML +=
  //     "<p>" + "I don't understand that command." + "</p>";
  //     outputDiv.scrollTop = outputDiv.scrollHeight;
  //     break;
  // }



  document.getElementById("input").value = "";
  
  

  console.log(currentRoom, lastRoom, 'Before function end');
}

function deadEnd() {
    playAudio('Sounds/error.wav');
    outputDiv.innerHTML += "<p>" + "You can't go that way." + "</p>";
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

// #endregion

// document.getElementById('ppp').appendChild += displayImage(shack.png, 160, 144);





















































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