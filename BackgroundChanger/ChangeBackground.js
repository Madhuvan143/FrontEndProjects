let button = document.getElementById('btn');
let body = document.querySelector('body');
const color =['red','pink','blue','yellow','lime','green','grey'];
body.style.backgroundColor='black';
button.addEventListener('click',()=>{
    const colorindex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorindex];
    body.style.transition = '1s linear';
})
