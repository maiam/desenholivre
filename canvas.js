const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

var largura = window.innerWidth;
var altura = window.innerHeight;

canvas.setAttribute("width", largura);
canvas.setAttribute("height", altura);

var desenhando = false;

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
