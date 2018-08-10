$(document).ready(function() {
  var filas=4;
  var columnas=4;
	var numMiniaturas=filas*columnas;
	for( var i=1; i<=numMiniaturas;i++){
		var newListItem= "<div id='apartado"+i+"' class='crop-img'> <img id='imagen"+i+"' src='http://img2.rtve.es/v/1451521/'' /> </div>";
		$('#resultado').append(newListItem);
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
     $('#apartado'+i).css({ 'width':recortex+'px','height':recortey+'px' })
  }
  
  var cont=1;
  for(var i=0;i<columnas;i++){
    for(var j=0;j<filas;j++){
      $('#apartado'+cont).css({ 'top': j*50+'%','left':i*50+'%' });
      cont++;
    }
  }
  

  
  var cont=1;
  for(var i=0;i<columnas;i++){
    for(var j=0;j<filas;j++){
      $('#imagen'+cont).css({ 'margin-top': -j*recortey+'px','margin-right': (columnas-1-i)*recortex+'px', 'margin-bottom': (filas-1-j)*recortey+'px','margin-left': -i*recortex+'px' });
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
	var arrayImages= new Array();
	var numMiniaturas=miniaturas;
	for(var i=1;i<=numMiniaturas;i++){
		arrayImages.push("imagen"+i);
	}
	var posicionSiguienteActual=function(){
		if (cursor < numMiniaturas){
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
		
	});
	
}



  






  