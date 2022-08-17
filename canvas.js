
const paintbrushRed = document.getElementById("paintbrush-red");
const paintbrushGreen = document.getElementById("paintbrush-green");
const paintbrushBlue = document.getElementById("paintbrush-blue");
const paintbrushEraser = document.getElementById("paintbrush-eraser");


function draw(){

  var canvas = document.getElementById('quadro');
  var header = document.querySelector('header');
  
  let paintbrushcolor = "";

  paintbrushRed.addEventListener('click', function(){
    paintbrushcolor = "#FF0000";
  });
  
  paintbrushGreen.addEventListener('click', function(){
    paintbrushcolor = "#00FF00";
  });

  paintbrushBlue.addEventListener('click', function(){
    paintbrushcolor = "#0000ff";
  });

  paintbrushEraser.addEventListener('click', function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);;
  });
  

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
          ctx.strokeStyle = paintbrushcolor;
        }
  }
  
    const movimentoInicio = function (evt) {
      ctx.beginPath();
      ctx.lineWidth = "3";
      ctx.moveTo(evt.clientX, evt.clientY-inicioAltura);
      // console.log(evt.clientX)
      // console.log(evt.clientY)
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
        ctx.strokeStyle = paintbrushcolor;
        ctx.stroke();
      }
    }, false);
  
    canvas.addEventListener('touchmove', function(event) {
      event.preventDefault();
    }, false); 

  }

}