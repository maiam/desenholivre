

function draw(){
  var canvas = document.getElementById('quadro');
  var header = document.querySelector('header');
  
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    var inicioAltura = header.clientHeight;
    var largura = canvas.clientWidth;
    var altura = canvas.clientHeight;
  
    canvas.setAttribute("width", largura);
    canvas.setAttribute("height", altura);
  
    var desenhando = false;

    const movimento = function (evt) {
      if (desenhando) {
          ctx.lineTo(evt.clientX, evt.clientY-inicioAltura);
          ctx.stroke();
      }
  }
  
    const movimentoInicio = function (evt) {
      ctx.moveTo(evt.clientX, evt.clientY-inicioAltura);
      console.log(evt.clientX)
      console.log(evt.clientY)
      desenhando = true;
  }
  
    const movimentoFim = function () {
      desenhando = false;
  }
    
    canvas.onmousedown = movimentoInicio;
    canvas.onmousemove = movimento;
    canvas.onmouseup = movimentoFim;

  
  canvas.addEventListener('touchmove', function(event) {
      for (var i = 0; i < event.touches.length; i++) {
        var touch = event.touches[i];
        ctx.lineTo(touch.pageX, touch.pageY-inicioAltura);
        ctx.stroke();
      }
    }, false);
  
    canvas.addEventListener('touchmove', function(event) {
      event.preventDefault();
    }, false); 

  }

}