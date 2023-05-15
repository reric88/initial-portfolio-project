const subMenu = document.querySelectorAll(".sub-menu");

function audioControl(src, playPause) {
  if (playPause == "play") {
    new Audio(src).play();
  } else {
    new Audio(src).pause();
  }
}

// New Navbar Code

const links = document.querySelectorAll(".navbar-link");
const subLinks = document.querySelectorAll(".sub-link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    const isChanged = link.classList.contains("change");

    links.forEach((link) => {
      link.classList.remove("change");
    });
    subLinks.forEach((sublink) => {
      sublink.classList.remove("show-menu");
    });

    if (!isChanged) {
      link.classList.add("change");
      const index = [].indexOf.call(link.parentNode.children, link);
      subLinks[index].classList.add("show-menu");
    }
  });
});

// #region Navbar Testing

// function getIndex() {
//   document.addEventListener('click', function (e) {
//     var target = e.target;
//     var parent = target.parentNode;
//     var index = [].indexOf.call(parent.children, target);
//     console.log("index:", index);
//   });
//   }
// e.target.parentNode;
// index = [].indexOf.call(link)

//  Old navbar code

// // console.log(document.querySelector('.link-menu').children);
// let inx = [].indexOf.call(parent.children, target);
// let navLinks = document.querySelectorAll('.navbar-link')

// // Listen for and return index of clicked item (document-wide)
// document.addEventListener('click', function (e) {
//   let navLinks = document.querySelectorAll('.navbar-link')
//   let subLinks = document.querySelectorAll('.sub-link')
//   let navLinksDad = document.querySelector('.link-menu');
//   let subLinksMom = document.querySelector('.sub-menu-container');
//   let target = e.target;
//   let parent = target.parentNode;
//   // let index = [].indexOf.call(parent.children, target);

//     let index = [].indexOf.call(navLinksDad.children, target);
//     console.log(index);
//     console.log([].indexOf.call(navLinksDad.children, target));
//     console.log(target);
//         // How each 'link' of navLinks will respond to it being clicked
//         navLinks.forEach((link) => {
//           link.classList.remove('change')
//           console.log(link.classList, 'link.classList');
//         })

//         // How each div will respond when the corresponding link above is clicked
//         // subLinks.forEach((div) => {
//         //     div.classList.remove('show-menu')
//         //     console.log(div.classList, 'div.classList');
//         // })

//         // add class 'change' to the clicked element
//         target.classList.add('change');

//         console.log(target.classList, 'target.classList');

//         // find the matching index of the subLinks
//         for (i= 0; i<=index; i++) {

//           // Remove the show-menu classList from all subLinks
//           subLinks.forEach((div) => {
//             div.classList.remove('show-menu')
//             console.log(div.classList, 'div.classList');
//           })

//           // if the index of both lists match, add show-menu class to the sub-link
//           if (!subLinks[i].classList.contains('show-menu')) {
//             subLinks[i].classList.add('show-menu');
//             }
//       }

//       // Remove the show-menu class from subLink at index 0 because it keeps getting set to show-menu because index is always at least 0
//       if (!document.querySelectorAll('.navbar-link')[0].className.includes('change')) {
//         document.querySelectorAll('.sub-link')[0].classList.remove('show-menu');

//       }
//   });

// ==========

// const links = document.querySelectorAll('.navbar-link');

// links.forEach((link) => {
//     link.addEventListener('click', () => {

//         links.forEach((link) => {
//               link.className = 'navbar-link';

//         });
//         link.classList.add('change');
//     });
// });

// for (n=0, len=links.length; i<len; i++ ) {
//   links[n].onclick = function () {
//     alert(index)
//   }
// }

// links.forEach((link) => {
//   link.addEventListener('click', () => {
//     links.forEach((link) => {
//       for (i=0; i<=subMenu; i++) {
//         if (subMenu[i] == =================)
//       }
//     })
//   })
// })

// #endregion

// #region Cheat Menu Testing

// const cheatBtn = document.querySelector('#cheat-btn')

// cheatBtn.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     handleInput();
//   }
//   });

//   function printUserInput(input) {
//     const cheatInput = document.querySelector('#cheat-input');
//     const activeCheats = document.querySelector('#active-cheats')

//     let p = document.createElement("p");
//     p.innerHTML = input;
//     activeCheats.appendChild(p);
//     activeCheats.scrollTop = activeCheats.scrollHeight;
//     }

//   document.addEventListener('DOMContentLoaded', function() {
//   const customCursor = document.getElementById('cursor');
//   document.addEventListener('mousemove', function(event) {
//     const mouseX = event.clientX;
//     const mouseY = event.clientY;
//     const invertedX = window.innerWidth - mouseX;
//     const invertedY = window.innerHeight - mouseY;
//     customCursor.style.left = invertedX + 'px';
//     customCursor.style.top = invertedY + 'px';
//   });
// });

// #endregion

if (document.body.innerText.includes("Blurred Screen")) {
  document
    .querySelector(".body-overlap")
    .setAttribute("style", "display: block;");
  // document.querySelector('#cursor').setAttribute('style', 'display: block;')
} else {
  document
    .querySelector(".body-overlap")
    .setAttribute("style", "display: none;");
  // document.querySelector('#cursor').setAttribute('style', 'display: none;');
}

if (document.body.innerText.includes("Infinite Scrolling")) {
  infiniteScroll();
}

// ===== Cheats Array
const existingCheats = [
  "Big-Head Mode",
  "Unlimited Clicking",
  "Infinite Scrolling",
  "Paintball Mode",
  "X-Ray Mode",
  "Blurred Screen",
  "Plumber SFX",
  "Elf SFX",
];

// ===== Cheat Form & Input
const cheatForm = document.getElementById("cheat-form");
const cheatInput = document.getElementById("cheat-input");

// ===== Display Active Cheats
const activeCheatsDiv = document.getElementById("active-cheats");

// ===== Listen for Cheat Submit
const cheatBtn = document.getElementById("cheat-btn");
cheatBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // ===== Get user input
  const userInput = cheatInput.value;

  const newCheatsA = document.createElement("a");
  // ===== Big Head Mode
  if (userInput === "ILikeBigHeads") {
    newCheatsA.textContent = existingCheats[0];
    activeCheatsDiv.appendChild(newCheatsA);
  }
  // ===== Unlimited Clicking
  else if (userInput === "TriggaFinga") {
    newCheatsA.textContent = existingCheats[1];
    activeCheatsDiv.appendChild(newCheatsA);
    unlimitedClicking();
  }
  // ===== Infinite Scrolling
  else if (userInput === "NoLimit") {
    newCheatsA.textContent = existingCheats[2];
    activeCheatsDiv.appendChild(newCheatsA);
    infiniteScroll();
  }
  // ===== Paintball Mode
  else if (userInput === "SplatterHouse") {
    newCheatsA.textContent = existingCheats[3];
    activeCheatsDiv.appendChild(newCheatsA);
  }
  // ===== Wireframe Mode
  else if (userInput === "WireFrame") {
    newCheatsA.textContent = existingCheats[4];
    activeCheatsDiv.appendChild(newCheatsA);
  }
  // ===== Drunk Mode
  else if (userInput === "SryUmDrink") {
    newCheatsA.textContent = existingCheats[5];
    activeCheatsDiv.appendChild(newCheatsA);
    document
      .querySelector(".body-overlap")
      .setAttribute("style", "display: block;");
  }
  // ===== Plumber Sound Effects
  else if (userInput === "SupraMaria") {
    newCheatsA.textContent = existingCheats[6];
    activeCheatsDiv.appendChild(newCheatsA);
  }
  // ===== Lelda Sound Effects
  else if (userInput === "LonkNotZonk") {
    newCheatsA.textContent = existingCheats[7];
    activeCheatsDiv.appendChild(newCheatsA);
  } else {
    alert("Invalid cheat code!");
  }
  cheatInput.value = "";
});

// ===== Listen for enter key
cheatInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();

    // ===== Listen for mouse click
    cheatBtn.click();
  }
});
// #endregion

let index = 0;

function show1() {
  document.getElementById("about-p").style.display = "block";
  document.getElementById("contact-div").style.display = "none";
  document.getElementById("projects-p").style.display = "none";
}

function show2() {
  document.getElementById("about-p").style.display = "none";
  document.getElementById("contact-div").style.display = "block";
  document.getElementById("projects-p").style.display = "none";
}

function show3() {
  document.getElementById("about-p").style.display = "none";
  document.getElementById("contact-div").style.display = "none";
  document.getElementById("projects-p").style.display = "block";
}

const aboutMe = `Hey! I am Eric Collard and I have recently transitioned into web development from a background in carpentry and construction. After completing a rigorous coding bootcamp, Commonwealth Coders, I have gained a solid foundation in web development and am excited to continue growing my skills in this field.

While my background may not be typical for a web developer, I bring a unique set of skills and experiences to the table. I am a detail-oriented problem solver with experience in project management and a passion for learning and implementing new technologies.

I am excited to contribute my expertise in building and construction to web development, leveraging my experience in creating strong foundations and attention to detail to build reliable and robust web applications.

Overall, I am dedicated to delivering high-quality results and constantly improving my skills to become a valuable member of any development team.`;
let speed = 15;
index = 0;

function typingText() {
  if (index < aboutMe.length) {
    document.getElementById("about-p").innerHTML += aboutMe.charAt(index);
    index++;
    setTimeout(typingText, speed);
  }
}

// #region About Test Code

// function growBox(){
//   document.getElementById('textbox')
// }

// function pulpTextColor() {
//     text = event.target.value;
//     if (text.indexOf('righteous') >- 1) {
//         text = text.replace('righteous', `<span class='tWhite'>righteous</span>`);
//     }
//     if (text.indexOf('evil') >- 1) {
//         text = text.replace('evil', `<span class='tRed'>evil</span>`);
//     }
//     if (text.indexOf('charity') >- 1) {
//         text = text.replace('charity', `<span class='tYellow'>charity</span>`);
//     }
//     if (text.indexOf('good will') >- 1) {
//         text = text.replace('good will', `<span class='tGreen'>good will</span>`);
//     }
//     if (text.indexOf('strike') >- 1) {
//         text = text.replace('strike', `<span class='tYellow tGrow'>strike</span>`);
//     }
//     if (text.indexOf('great vengeance') >- 1) {
//         text = text.replace('great vengeance', `<span class='tGreen tGrow'>great vengeance</span>`);
//     }
//     if (text.indexOf('furious anger') >- 1) {
//         text = text.replace('furious anger', `<span class='tRed tGrow'>furious anger</span>`);
//     }
//     if (text.indexOf('I am the') >- 1) {
//         text = text.replace('I am the', `<span class='tWhite tGrow'>I am the</span>`);
//     }
//     if (text.indexOf('Lord') >- 1) {
//         text = text.replace('Lord', `<span class='tYellow tGrowBig'>Lord</span>`);
//     }

// }

// `'The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of the darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy My brothers. And you will know I am the Lord when I lay My vengeance upon you.'
// Now... I been sayin' that shit for years. And if you ever heard it, that meant your ass. You'd be dead right now. I never gave much thought to what it meant. I just thought it was a cold-blooded thing to say to a motherfucker before I popped a cap in his ass. But I saw some shit this mornin' made me think twice. See, now I'm thinking: maybe it means you're the evil man. And I'm the righteous man. And Mr. 9mm here… he's the shepherd protecting my righteous ass in the valley of darkness. Or it could mean you're the righteous man and I'm the shepherd and it's the world that's evil and selfish. And I'd like that. But that shit ain't the truth. The truth is you're the weak. And I'm the tyranny of evil men. But I'm tryin', Ringo. I'm tryin' real hard to be the shepherd.`;

// const aboutMe1 = `Hey! I am Eric Collard and I have recently transitioned into web development from a background in carpentry and construction. After completing a rigorous coding bootcamp, Commonwealth Coders, I have gained a solid foundation in web development and am excited to continue growing my skills in this field.`;
// const aboutMe2 = `While my background may not be typical for a web developer, I bring a unique set of skills and experiences to the table. I am a detail-oriented problem solver with experience in project management and a passion for learning and implementing new technologies.`;
// const aboutMe3 = `I am excited to contribute my expertise in building and construction to web development, leveraging my experience in creating strong foundations and attention to detail to build reliable and robust web applications.`;
// const aboutMe4 = `Overall, I am dedicated to delivering high-quality results and constantly improving my skills to become a valuable member of any development team.`;

// let aboutIndex = 0;
// let text = '';
// let index1 = 0;
// let index2 = 0;
// let index3 = 0;
// let index4 = 0;
// function typingText() {
//   let aboutP = document.getElementById('about-p').innerHTML;
//     if (index < aboutMe1.length) {
//       document.getElementById('about-p').innerHTML += aboutMe1.charAt(index);
//       index ++;
//       setTimeout(typingText, speed);
//       // aboutMe.scrollTop = aboutMe.scrollHeight;
//       while (index >= aboutMe1.length) {
//         if (index <= (aboutMe1.length + aboutMe2.length)) {
//       document.getElementById('about-p').innerHTML += aboutMe2.charAt(index);
//       index ++;
//       setTimeout(typingText, speed);
//         }
//       }
//       while (index >= (aboutMe2.length + aboutMe1.length)) {
//         if (index <= (aboutMe1.length + aboutMe2.length + aboutMe3.length)) {
//       document.getElementById('about-p').innerHTML += aboutMe2.charAt(index);
//       index ++;
//       setTimeout(typingText, speed);
//         }
//       }
//       while (index >= (aboutMe3.length + aboutMe2.length + aboutMe1.length)) {
//         if (index <= (aboutMe1.length + aboutMe2.length + aboutMe3.length + aboutMe4.length)) {
//       document.getElementById('about-p').innerHTML += aboutMe2.charAt(index);
//       index ++;
//       setTimeout(typingText, speed);
//         }
//       }
//     }
//  }

//   let placeIndex = 0;
//   let placeText = "Now... I been sayin' that shit for years. And if you ever heard it, that meant your ass. You'd be dead right now. I never gave much thought to what it meant. I just thought it was a cold-blooded thing to say to a motherfucker before I popped a cap in his ass. But I saw some shit this mornin' made me think twice. See, now I'm thinking: maybe it means you're the evil man. And I'm the righteous man. And Mr. 9mm here… he's the shepherd protecting my righteous ass in the valley of darkness. Or it could mean you're the righteous man and I'm the shepherd and it's the world that's evil and selfish. And I'd like that. But that shit ain't the truth. The truth is you're the weak. And I'm the tyranny of evil men. But I'm tryin', Ringo. I'm tryin' real hard to be the shepherd.";

//   function placeType() {
//   if (placeIndex < placeText.length) {
//       document.getElementById('projects-p').innerHTML += placeText.charAt(placeIndex);
//       placeIndex ++;
//       setTimeout(placeType, speed);
//     }
//   }
// #endregion

// #region Image Slider
const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;
// const slidesLength = slideRight.document.querySelectorAll('div').length;
console.log(slidesLength);
let activeSlideIndex = 0;

// slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  console.log(sliderHeight);
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }
  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
// #endregion


// vvvvvvvvvv Unlimited Clicking Function vvvvvvvvvv
// unlimitedClicking();

function unlimitedClicking() {
  // Create the array for the images
  const bImages = [];
  // Declate interval variable
  let intervalCount;
  // Check if function is running
  let isFunctionRunning = false;
  // Declare the default audio sound
  const sound = new Audio("Sounds/HMG-SuperPhat.wav");

  // Listen for mouse or touch events
  document.addEventListener("mousedown", start);
  document.addEventListener("touchstart", start);
  document.addEventListener("mouseup", end);
  document.addEventListener("touchend", end);
  document.addEventListener("touchmove", move);
  document.addEventListener("mousemove", move);

  function start(event) {
    isFunctionRunning = true;
    intervalCount = setInterval(() => {
      // Create the bullet hole image
      let img = document.createElement("img");
      img.src = "Images/bulletHole2.png";
      img.style.position = "fixed";
      img.style.zIndex = "9999";

      // Randomize the bullet hole placement
      const xOffset = Math.floor(Math.random() * 201) - 125;
      const yOffset = Math.floor(Math.random() * 201) - 125;

      // Get mouse or finger position
      const x = event.clientX || event.touches[0].clientX;
      const y = event.clientY || event.touches[0].clientY;

      // Set the offset origin fora bullet holes
      img.style.left = x + xOffset + "px";
      img.style.top = y + yOffset + "px";

      // Add the images to an array
      document.body.appendChild(img);
      bImages.push(img);

      // Play the firing sound
      sound.play();
    }, 100);

    // Reset the sound to 0 after the timer to avoid overlap
    sound.currentTime = 0;
  }

  function move(event) {
    event.preventDefault();
  }

  // Function to end the sound
  function end() {
    sound.pause();
    sound.currentTime = 0;
    clearInterval(intervalCount);

    // Play the end sound when releasing button or touch
    new Audio("Sounds/endHMG-SuperPhat.wav").play();

    // Remove the bullet holes after button or touch release
    // bImages.forEach((img) => {
    //   img.parentNode.removeChild(img);
    // });

    // bImages.length = 0;
  }

  // Function to prevent unintended scrolling while active
}

// ^^^^^^^^^^ Unlimited Clicking Function ^^^^^^^^^^

function infiniteScroll() {
  // Create a new div element to hold the duplicated body
  const newBody = document.createElement("div");

  // Copy the existing body
  const clonedBody = document.body.cloneNode(true);
  newBody.appendChild(clonedBody);

  // Add the new div to the bottome of the body
  document.body.appendChild(newBody);

  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  // Set a scroll listener
  window.addEventListener("scroll", () => {
    // Get the current scroll position
    let scrollPos = window.scrollY;

    // If the scroll position is greater than or equal to the height of the document, set it to 0
    if (scrollPos >= docHeight) {
      scrollPos = 0;
    }

    // Set the new scroll position
    window.scrollTo(0, scrollPos);
  });
}
