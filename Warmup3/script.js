
var button = document.querySelector('.btn');
var tri1 = document.querySelector('.tri1');
var tri2 = document.querySelector('.tri2');

button.onclick = function() {
  if (tri1.style.animationPlayState === 'paused') {
    tri1.style.animationPlayState = 'running';
  } else {
    tri1.style.animationPlayState = 'paused';
  }
  if (tri2.style.animationPlayState === 'paused') {
    tri2.style.animationPlayState = 'running';
  } else {
    tri2.style.animationPlayState = 'paused';
  }
};
