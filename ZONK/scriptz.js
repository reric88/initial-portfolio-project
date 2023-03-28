// Text Adventure Game

const enter = 'Please enter your answer.';
const gameOver = 'SORRY, YOU LOSE!';
const start = 'Welcome to ZONK: The Adequate Above Ground Empire. Click "OK" to start.';
const rNorth = ['north', 'up', '1', '8'];
const rSouth = ['south', 'down', '2'];
const rWest = ['west', 'left', '3'];
const rEast = ['east', 'right', '4', '6'];
const rLook = ['look', 'search', 'observe', '5'];

// #region QUESTIONS

// #region QUESTION 1
const q1 = `You awaken surrounded by a dense wall of trees. Just north of you is a small shack. There is a path leading East.
1. North
2. East
5. Look

${enter}`;

const a1Look = `You take a look at your surroundings, trying to get your bearings straight. You are surrounded by a thick forest with a small shack to the north. There is a narrow dirt trail heading east. To the west you see birds and squirrels flitting about in the tree limbs. To the south is a large pile of old, dried up brush, logs and limbs.
1. North
2. East
3. Look

${enter}`;


const r1Look = rLook;
const r1North = rNorth;
const r1East = rEast;
// const gameOver1 = `...

// ${gameOver}`;
// #endregion


// #region QUESTION 2
const q2 = `You head north to the small shack. The door is slightly ajar and you can hear some shuffling inside. There is a southward path behind you.
1. North
2. South
3. Look

${enter}
`;

const a2Look = `You peer into the shack as best you can and notice a figure pass in front of the small opening of the doorway. A dense line of trees are to the east and west. You feel very uneasy about this place. There is a path to the south.
1. North
2. South
3. Look

${enter}`;

const gameOver2 = `You slowly open the door to the shack and peek inside. You don't see anything out of the ordinary and the shuffling has stopped. 

As you enter the shack, the floorboards creak loudly. 

They can't hold your weight and break away in splinters, causing you to fall into a deep cavern, never to be seen again.

${gameOver}
`;

const r2North = rNorth;
const r2South = rSouth;
const r2Look = rLook;
// #endregion


// #region QUESTION 3
const q3 = `You awaken surrounded by a dense wall of trees. Just north of you is a small shack. There is a path leading East.
1. North
2. East
3. South
4. Look

${enter}`;

const a3Look = `You take a look at your surroundings, trying to get your bearings straight. You are surrounded by a thick forest with a small shack to the north. There is a narrow dirt trail heading east. To the west you see birds and squirrels flitting about in the tree limbs. To the south is a large pile of old, dried up brush, logs and limbs.
1. North
2. East
3. Look

${enter}`;


const r3North = ['north', 'up', '1', '8'];
const r3East = ['east', 'right', '2'];
const r3South = ['south', 'down', '3']
const r3Look = ['look', 'search', 'observe', '3']
// #endregion


// #region QUESTION 4

// #endregion

// #region WIN
const win = 'Slimer was sucked into the Ghost Trap and it quickly closed itself. Congratulations! You caught Slimer!';
// #endregion

// #endregion

// console.log(r1a);

// Alert the user to start the game
// alert(start);

// Sets the value of userInput to the users entry and assigns it to the variable
// userInput = userInput.toLowerCase().trim();
// let userInput2 = userInput1.toLowerCase

// Nested conditional statements



// while (!quest1a.toString().toLowerCase().includes(userInput).trim()) {
    //     userInput = prompt("Please enter a valid input");
  
//     if (userInput === null || userInput === "") {
//     userInput = prompt("Please enter a valid input");
//     }
//   }



score = (Math.floor(Math.random() *1000) + 1);
console.log(score);
alert(start);
// Question 1
// North
// userInput;

// #region Text Game
while (true) {
    let userInput = prompt(q1).toLowerCase().trim();
    while (!r1North.includes(userInput.toLowerCase().trim())) {
        userInput = prompt(`Please use a correct entry. \n \n ${q1}`);
    }
    if (r1North.includes(userInput.toLowerCase().trim())) {
        userInput = prompt(q2)
        while (!r2North.includes(userInput.toLowerCase().trim())) {
            userInput = prompt(`Please use a correct entry. \n \n ${q2}`);
        }
    }

        if (r2North.includes(userInput.toLowerCase().trim())) {
            alert(gameOver2 + `Your Score This Run: ${(Math.floor(Math.random() *1000) + 1)}`);
            alert(start);
            userInput = prompt(q1);
        }
        if (r2South.includes(userInput.toLowerCase().trim())){
            userInput = prompt(q1)
        }
        if (r2Look.includes(userInput.toLowerCase().trim())){
            alert(a2Look);
            userInput = prompt(q4);
    }
    if (r1East.includes(userInput.toLowerCase().trim())) {
        userInput = prompt(q)
    }
    if (r1Look.includes(userInput.toLowerCase().trim())) {
        userInput = prompt(q)
        break;
    } else {
        continue;
    }
}

// score = (Math.floor(Math.random() *1000) + 1);
// console.log(score);
// alert(start);

// while (true) {
//     let userInput = prompt(q1).toLowerCase().trim();

//     while (!r1North.includes(userInput.toLowerCase().trim())) {
//         userInput = prompt(`Please use a correct entry. \n \n ${q1}`);
//     }

//     if (r1North.includes(userInput.toLowerCase().trim())) {
//         userInput = prompt(q2);

//         while (!r2North.includes(userInput.toLowerCase().trim())) {
//             userInput = prompt(`Please use a correct entry. \n \n ${q2}`);
//         }
//     }

//     if (r2North.includes(userInput.toLowerCase().trim())) {
//         alert(gameOver2 + `Your Score This Run: ${(Math.floor(Math.random() *1000) + 1)}`);
//         alert(start);
//         userInput = prompt(q1);
//     }
//     if (r2South.includes(userInput.toLowerCase().trim())) {
//         userInput = prompt(q1);
//     }
//     if (r2Look.includes(userInput.toLowerCase().trim())) {
//         alert(a2Look);
//         userInput = prompt(q4);
//     }
//     if (r1East.includes(userInput.toLowerCase().trim())) {
//         userInput = prompt(q);
//     }
//     if (r1Look.includes(userInput.toLowerCase().trim())) {
//         userInput = prompt(q);
//         break;
//     } else {
//         continue;
//     }
// }

















