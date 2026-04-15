
var button = document.querySelector('.btn');
var box = document.querySelector('.box');

button.onclick = function() {
  if (box.style.animationPlayState === 'paused') {
    box.style.animationPlayState = 'running';
  } else {
    box.style.animationPlayState = 'paused';
  }
};
