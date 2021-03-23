const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

var largura = window.innerWidth;
var altura = window.innerHeight;

canvas.setAttribute("width", largura);
canvas.setAttribute("height", altura);

var desenhando = false;

canvas.addEventListener('touchmove', function(event) {
    for (var i = 0; i < event.touches.length; i++) {
      var touch = event.touches[i];
      //ctx.beginPath();
      //ctx.arc(touch.pageX, touch.pageY, 2, 0, 2*Math.PI, true);
      ctx.lineTo(touch.pageX, touch.pageY);
      //ctx.fill();
      ctx.stroke();
    }
  }, false);

  canvas.addEventListener('touchmove', function(event) {
    event.preventDefault();
  }, false); 


const movimento = function (evt) {
    if (desenhando) {
        ctx.lineTo(evt.clientX, evt.clientY);
        ctx.stroke();
    }
}

const movimentoInicio = function (evt) {
    ctx.moveTo(evt.clientX, evt.clientY);
    desenhando = true;
}

const movimentoFim = function () {
    desenhando = false;
}

canvas.onmousedown = movimentoInicio;
canvas.ontouchstart = movimentoInicio;

canvas.onmouseup = movimentoFim;
canvas.ontouchend = movimentoFim;

canvas.onmousemove = movimento;
canvas.ontouchmove = movimento;
