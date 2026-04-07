const btn = document.querySelector('.btn');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
btn.addEventListener('click', () => {
    box1.classList.toggle('rot'); 
    box2.classList.toggle('rot'); 
    box3.classList.toggle('rot'); 
    box4.classList.toggle('rot'); 
});