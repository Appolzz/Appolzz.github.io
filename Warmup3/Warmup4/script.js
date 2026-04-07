const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");

box1.addEventListener("click", () => {
    box2.style.animationPlayState = (box2.style.animationPlayState === 'running' || box2.style.animationPlayState === '') ? 'paused' : 'running';
});

box2.addEventListener("click", () => {
    box1.style.animationPlayState = (box1.style.animationPlayState === 'running' || box1.style.animationPlayState === '') ? 'paused' : 'running';
});
