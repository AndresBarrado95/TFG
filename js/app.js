$(document).ready(function() {
  $('#guardar').click(function(){
  		var rotationAngle= $('#rotationAngle').val();
  		var boxSize= $('#boxSize').val();
  		var quadratSize= $('#quadratSize').val();
  		localStorage.setItem("rotationAngle",rotationAngle);
  		localStorage.setItem("boxSize",boxSize);
  		localStorage.setItem("quadratSize",quadratSize);
  });
 

  
});

