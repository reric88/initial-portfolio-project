let one = [document.querySelector('#one').children]
let two = document.querySelector('#two').children;
let onec = document.getElementById('one').children;
let twoc = document.getElementById('two').children;

// console.log(changed, 'changed');
// console.log(unchanged, 'unchanged');

























// one.forEach((onec) => {
//     addEventListener('click', () => {
//         one.forEach((onec) => {
//             onec.className = 'poop';
//         });
//         one.classList.add('doo-doo');
//     });
// });


// const links = document.querySelectorAll('.navbar-link');
// const subs = document.querySelectorAll('.sub-link');
// console.log(links);

// links.forEach((link) => {
//     link.addEventListener('click', () => {        
//         links.forEach((link) => {
//               link.className = 'navbar-link';
//         });
//         link.classList.add('change');
//     });
// });














const qall = document.querySelectorAll('.navbar-link')
const jall = document.querySelectorAll('.sub-link')

document.addEventListener('click', function (e) {
    var target = e.target;
    var parent = target.parentNode;
    var index = [].indexOf.call(parent.children, target);
    console.log("index:", index);
    console.log(target);
    console.log(parent.children);

        qall.forEach((link) => {
            link.classList.add('hide')
            link.classList.remove('show')

        })

        jall.forEach((link) => {
            link.classList.add('hide')
            link.classList.remove('show')
        })
        for (i=0; i<=index; i++) {
            console.log(jall[index]);
            jall[index].classList.add('show')
            jall[index].classList.remove('hide')
            
        }
            target.classList.remove('hide')
        target.classList.add('show');

  });





  // if (document.querySelector('.changed')) {
  //     document.querySelector('.changed').className = 'navbar-link';
  // } else if (document.querySelector('.navbar-link')) {
  //     document.querySelector('.navbar-link').classList.add('changed');
  // }
function SwitchMenu() {
//     if('clicked') {
        
//         e.target.className.add('doodoo')
//     }
//     console.log('filler');
// }
// for (i=0; i<one[0].length; i++) {
//     if (one.includes('changed')){
        console.log(one.length);
    }
// }

// function menuButton () {
//     if () {
//         document
//     }
// }


































//   ind = [].indexOf.call(link);
//   for (n=0; n<=subMenu.length -1; n++) {
//     if (ind == subMenu[n]) {
    
    //     }
    //   }
//     subs = [].indexOf.call(document.getElementsByClassName('two').children);
// console.log(subs);
// document.addEventListener('click', function (e) {
//     var target = e.target;
//     var parent = target.parentNode;
//     var index = [].indexOf.call(parent.children, target);

//     for (i=0; i<subs.length;i++ )
//     if (i === index) {
//         console.log(subs[i]);
//     }
//     console.log("index:", index);
//     console.log(object);
//   });

// document.getElementsByClassName('one').children


    // function findMatch(array_1_small, array2_large) {
    //     var ary = new Array();
    //     for(i = 0;i < array2_large.length; i++)
    //     {
    //       for(z = 0; z < array_1_small.length; z++)
    //       {
    //         if(array2_large[i] == array_1_small[z])
    //         {
    //           ary.push(i);
    //         }
    //       }
        
    //     }
    //     return ary;
    //     }



























    
    // const links = document.querySelectorAll('.navbar-link');
    // const changed = document.querySelectorAll
    // const subMenu = document.querySelectorAll('.sub-link');
// link.className = 'navbar-link';

// document.addEventListener('click', function (e) {
//     var target = e.target;
//     var parent = target.parentNode;
//     var index = [].indexOf.call(parent.children, target);
//     console.log("index:", index);
//   });


// links.forEach((link) => {
//     link.addEventListener('click', () => {
//         links.forEach((link) => {
//             link.className = 'navbar-link';


//         });
//         link.classList.add('change');
//     });
// });

// alink = document.getElementsByClassName('navbar-link')

// for (i=0; i<alink.parentNode; i++) {
//     console.log([i]);
//     console.log(i);
//     n = i;
    // console.log([i]);

// }

// for (n=0; n<links; n++) {
//     if (links[n] === [].indexOf)
// }

// for (i=0; i<subMenu.length; i++) {
//     if (subMenu[i] &= [].indexOf.links = links.className('changed')) {
//         subMenu[i].classList.add('poop'); 
//     }
// }

// console.log(document.getElementsByClassName('poop'));












// const links = document.querySelectorAll('.navbar-link');


// links.forEach((link) => {
//     link.addEventListener('click', () => {
        
//         // console.log(ind,  ' one');
//         links.forEach((link) => {

//             link.className = 'navbar-link';
//             // console.log(ind,  ' two');
//         });
//         // console.log(ind,  ' three');
//         link.classList.add('change');
//         // console.log(ind,  ' four');
//     });
    
//     console.log(ind,  ' five');
// });



// ind = [].indexOf.call(link);
    //     for (n=0; n<=subMenu.length -1; n++) {
    //         if (ind == subMenu[n]) {
    //             link.className = 'navbar-link';
    //             subMenu.className = 'navbar-link';
    // };
    //     };
        
        // subMenu[n].classList.add('.change')
        


        // link.classList.add('change');












// document.addEventListener('click', function (e) {
//     var target = e.target;
//     var parent = target.parentNode;
//     var index = [].indexOf.call(parent.children, target);
//     console.log("index:", index);
//   });






// function getIndex(el) {
//     return [...el.parentElement.children].indexOf(el);
// };

// const index = getElementIndex(element)



// for (n=0, len=links.length; i<len; i++ ) {
//     links[n].onclick = function () {
//       alert(index)
//     }
//   }
  
  
  
//   links.forEach((link) => {
//     link.addEventListener('click', () => {
//       links.forEach((link) => {
//         for (i=0; i<=subMenu; i++) {
//           if (subMenu[i] == =================)
//         }
      
  
//       })
//     })
//   })


// body = document.getElementsByTagName('body');
// link = document.getElementsByTagName('a')

// document.addEventListener('click', function (e) {
//     var target = e.link;
//     var parent = target.body;
//     var index = [].indexOf.call(parent.children, target);
//     console.log("index:", index);
//   });