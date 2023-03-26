// #region Navbar
const links = document.querySelectorAll('.navbar-link');

links.forEach((link) => {
    link.addEventListener('click', () => {
        
        links.forEach((link) => {
        link.className = 'navbar-link';
        });
        link.classList.add('change');

    });
});
// #endregion

// #region About/Contact/projects
let index = 0;



function show1(){
    document.getElementById('about-p').style.display ='block';
    document.getElementById('contact-div').style.display ='none';
    document.getElementById('projects-p').style.display ='none';
  }

  function show2(){
    document.getElementById('about-p').style.display ='none';
    document.getElementById('contact-div').style.display = 'block';
    document.getElementById('projects-p').style.display ='none';
  }

  function show3(){
    document.getElementById('about-p').style.display ='none';
    document.getElementById('contact-div').style.display ='none';
    document.getElementById('projects-p').style.display ='block';

  }

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


index = 0;
let text = `'The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of the darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy My brothers. And you will know I am the Lord when I lay My vengeance upon you.'
Now... I been sayin' that shit for years. And if you ever heard it, that meant your ass. You'd be dead right now. I never gave much thought to what it meant. I just thought it was a cold-blooded thing to say to a motherfucker before I popped a cap in his ass. But I saw some shit this mornin' made me think twice. See, now I'm thinking: maybe it means you're the evil man. And I'm the righteous man. And Mr. 9mm here… he's the shepherd protecting my righteous ass in the valley of darkness. Or it could mean you're the righteous man and I'm the shepherd and it's the world that's evil and selfish. And I'd like that. But that shit ain't the truth. The truth is you're the weak. And I'm the tyranny of evil men. But I'm tryin', Ringo. I'm tryin' real hard to be the shepherd.`;
let speed = 15;

function typingText() {
    if (index < text.length) {
      document.getElementById('about-p').innerHTML += text.charAt(index);
      index ++;
      setTimeout(typingText, speed);
    }
    if (index >= text.length) {
        
    }
  }
  



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
const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;
// const slidesLength = slideRight.document.querySelectorAll('div').length;
console.log(slidesLength);
let activeSlideIndex = 0;

// slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
const sliderHeight = sliderContainer.clientHeight;
console.log(sliderHeight);
if(direction === 'up') {
    activeSlideIndex ++;
    if (activeSlideIndex > slidesLength - 1) {
        activeSlideIndex = 0;
    }
    } else if (direction === 'down') {
        activeSlideIndex --;
    if (activeSlideIndex < 0) {
        activeSlideIndex = slidesLength - 1;
    }
}
slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}
// #endregion











