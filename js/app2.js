var rotationAngle= localStorage.getItem("rotationAngle");
var boxSize= localStorage.getItem("boxSize");
var quadratSize= localStorage.getItem("quadratSize");
localStorage.clear();
$(document).ready(function() {
	
  //alert(rotationAngle);
  //alert(boxSize);
  //alert(quadratSize);

  var filas=4;
  var columnas=4;
	var numMiniaturas=filas*columnas;
	for( var i=1; i<=numMiniaturas;i++){
		var newListItem= "<div id='apartado"+i+"' class='crop-img'> <img id='imagen"+i+"' src='http://img2.rtve.es/v/1451521/'' /> </div>";
		$('#resultado').append(newListItem);
		var newListItem1="<div id='super-apartado"+i+"' class='crop-img'> <img id='super-imagen"+i+"' src='imagen/image.png'' /> </div>";
		$('#resultado').append(newListItem1);
	}
  
  
});

function lanzadera(){
	dividir_imagen();
	var galeria =new Galeria(16);
}

window.onload = lanzadera;

function dividir_imagen() { 
  var filas=4;
  var columnas=4;
  var numMiniaturas=filas*columnas;
  var height = $('#imagen1').height();
  var width = $('#imagen1').width();
  
  var recortex=width/columnas;
  var recortey=height/filas;
  var bot=(100*recortey)/recortex;
  var cont=1;
  for(var i=1;i<=numMiniaturas;i++){
     $('#apartado'+i).css({ 'width':recortex+'px','height':recortey+'px' });
     $('#super-apartado'+i).css({ 'width':recortex+'px','height':recortey+'px' });
  }

  $('#super-fondo').css({'width':recortex+'px','height':recortey+'px'});
  $('#super-imagen').css({'width':recortex+'px','height':recortey+'px'});
  var cont=1;
  for(var i=0;i<columnas;i++){
    for(var j=0;j<filas;j++){
      $('#apartado'+cont).css({ 'top': j*50+'%','left':i*50+'%' });
      $('#super-apartado'+cont).css({ 'top': j*50+'%','left':i*50+'%' });
      cont++;
    }
  }
  

  
  var cont=1;
  for(var i=0;i<columnas;i++){
    for(var j=0;j<filas;j++){
      $('#imagen'+cont).css({ 'margin-top': -j*recortey+'px','margin-right': (columnas-1-i)*recortex+'px', 'margin-bottom': (filas-1-j)*recortey+'px','margin-left': -i*recortex+'px' });
       $('#super-imagen'+cont).css({'width':recortex+'px','height':recortey+'px'});
      cont++;
    }
  }
}  

var Galeria= function(miniaturas){
    var filas=4;
    var columnas=4;
    var numMiniaturas=filas*columnas;
    var height = $('#imagen1').height();
    var width = $('#imagen1').width();
  
    var recortex=width/columnas;
    var recortey=height/filas;
	var cursor= 0;
	var cursorEtiqueta=0;
	var cursorParticulas=1;
	var arrayImages= new Array();
	var numMiniaturas=miniaturas;
	for(var i=1;i<=numMiniaturas;i++){
		arrayImages.push("imagen"+i);
	}

	var etiquetaImagen= new Array();
	for(var i=1;i<=numMiniaturas;i++){
		etiquetaImagen.push("Imagen "+i);
	}


	
	

	var etiquetaSiguienteActual=function(){
		if (cursorEtiqueta < numMiniaturas-1){
			cursorEtiqueta++;
			return etiquetaImagen[cursorEtiqueta];
		}else{
			cursorEtiqueta=0;
			return etiquetaImagen[cursorEtiqueta];
		}
	}
	var etiquetaAnteriorActual= function(){
		if(cursorEtiqueta>0){
			cursorEtiqueta--;
			return etiquetaImagen[cursorEtiqueta];
		}else{
			cursorEtiqueta=numMiniaturas-1;
			return  etiquetaImagen[cursorEtiqueta];
		}
	}
	var posicionSiguienteActual=function(){
		if (cursor < numMiniaturas-1){
			cursor++;
			return arrayImages[cursor];
		}else{
			cursor=0;
			return arrayImages[cursor];
		}
	}
	var posicionAnteriorActual= function(){
		if(cursor>0){
			cursor--;
			return arrayImages[cursor];
		}else{
			cursor=numMiniaturas-1;
			return  arrayImages[cursor];
		}
	}
	var posCursorActual=function(){
		return cursorParticulas;
	}
	
	var moverCursorParticulasAdelante=function(){
		if(cursorParticulas==numMiniaturas){
			cursorParticulas=1;
		}
		else{
			cursorParticulas++;
		}
		
	}
	var moverCursorParticulasAtras=function(){
		if(cursorParticulas==1){
			cursorParticulas=miniaturas;
		}
		else{
			cursorParticulas--;
		}
		
	}
	
	var inicializarImagen =function(){
		var margin_top= $('#imagen1').css('margin-top');
		var margin_right= $('#imagen1').css('margin-right');
		var margin_bottom= $('#imagen1').css('margin-bottom');
		var margin_left= $('#imagen1').css('margin-left'); 
		
		$('#fondo').css({
			'width': recortex+'px','height':recortey+'px'
		});
		
		
		
		$('#imagen').css({
			 'margin-top' : margin_top,'margin-right' : margin_right,'margin-bottom' : margin_bottom,'margin-left' : margin_left
		});
		
		$('#etiqueta-imagen').html('Imagen 1');
	
	}
	inicializarImagen();
	$('#next').click(function(){
		var pos=posicionSiguienteActual();
		var margin_top= $('#'+pos).css('margin-top');
		var margin_right= $('#'+pos).css('margin-right');
		var margin_bottom= $('#'+pos).css('margin-bottom');
		var margin_left= $('#'+pos).css('margin-left'); 
		$('#imagen').css({
			 'margin-top' : margin_top,'margin-right' : margin_right,'margin-bottom' : margin_bottom,'margin-left' : margin_left
		});
		$('#etiqueta-imagen').html(etiquetaSiguienteActual());
		var posActual=posCursorActual();
		var numParticulas=$('#numeroParticulasCapturadas').val();
		localStorage.setItem('imagen'+posActual,numParticulas);
		var p=localStorage.getItem('imagen'+posActual);
		$('#numeroParticulasCapturadas').val(localStorage.getItem(pos));
		moverCursorParticulasAdelante();
	});
	$('#previous').click(function(){
		var pos=posicionAnteriorActual();
		var margin_top= $('#'+pos).css('margin-top');
		var margin_right= $('#'+pos).css('margin-right');
		var margin_bottom= $('#'+pos).css('margin-bottom');
		var margin_left= $('#'+pos).css('margin-left'); 
		$('#imagen').css({
			 'margin-top' : margin_top,'margin-right' : margin_right,'margin-bottom' : margin_bottom,'margin-left' : margin_left
		});
		$('#etiqueta-imagen').html(etiquetaAnteriorActual());
		var posActual=posCursorActual();
		var numParticulas=$('#numeroParticulasCapturadas').val();
		localStorage.setItem('imagen'+posActual,numParticulas);
		var p=localStorage.getItem('imagen'+posActual);
		$('#numeroParticulasCapturadas').val(localStorage.getItem(pos));
		moverCursorParticulasAtras();
	});
	
}



  






  