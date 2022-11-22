// This is how we navigate the DOM

let main = document.getElementById('main');
console.log(main);
                                             
let nav = document.getElementById('nav');
console.log(nav);


let containers = document.getElementsByClassName('container');
console.log(containers);


let sel = document.querySelector('.container');  // Here we use css selector to navigate DOM  
console.log(sel);                               // But queryselector return the fist value according to series


// let sel1 = document.querySelector('#nav');
// console.log(sel1);

// let sel2 = document.querySelector('#nav>li');
// console.log(sel2);

let sel2 = document.querySelectorAll('#nav>li');
console.log(sel2);