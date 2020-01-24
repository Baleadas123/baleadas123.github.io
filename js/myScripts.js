var v=2
while(v < 8){
  var ans= Math.random(v);
  document.write(ans + "<br/>");
  v++;
}
var k; 
for(k=0; k<1; k++){
  var ans= Math.sqrt(256);
  document.write(ans + "<br/>");
}

function myLoop(){
var start= document.getElementById("start").value;
var end = document.getElementById("end").value;
  var jump = document.getElementById("jump").value;
  
  console.log(typeof start);
  console.log(typeof end);
  console.log(typeof jump);
  
  start=Number(start);
  end=Number(end);
  jump=Number(jump);
  
   console.log(typeof start);
  console.log(typeof end);
  console.log(typeof jump);
  
for(var i = start; i <= end; i+=jump)
{document.write('<p>' + i + '</p>');
}
}
