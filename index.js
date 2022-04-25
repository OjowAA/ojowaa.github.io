const b = document.body;
const objI = document.querySelector("#I");
const objII = document.querySelector("#II");
const objIII = document.querySelector("#III");
const objIV = document.querySelector("#IV");

document.addEventListener("scroll", event => {
  var rect = objI.getBoundingClientRect();
  if(rect.top < 90 && rect.top > 1){
    objI.style.transform = "scale(40%)";
  }
  else if(rect.top >= 90 ){
    objI.style.transform = "scale(100%)";
  }
  else{
    objI.style.transform = "scale(1%)";
  }
}, false);

document.addEventListener("scroll", event => {
  var rect = objII.getBoundingClientRect();
  if(rect.top < 90 && rect.top > 1){
    objII.style.transform = "scale(20%)";
  }
  else if(rect.top >= 90 ){
    objII.style.transform = "scale(100%)";
  }
  else{
    objII.style.transform = "scale(1%)";
  }
}, false);

document.addEventListener("scroll", event => {
  var rect = objIII.getBoundingClientRect();
  if(rect.top < 90 && rect.top > 1){
    objIII.style.transform = "scale(20%)";
  }
  else if(rect.top >= 90 ){
    objIII.style.transform = "scale(100%)";
  }
  else{
    objIII.style.transform = "scale(1%)";
  }
}, false);

document.addEventListener("scroll", event => {
  var rect = objIV.getBoundingClientRect();
  if(rect.top < 90 && rect.top > 1){
    objIV.style.transform = "scale(20%)";
  }
  else if(rect.top >= 90 ){
    objIV.style.transform = "scale(100%)";
  }
  else{
    objIV.style.transform = "scale(1%)";
  }
}, false);

document.addEventListener("scroll", event => {
  var height = Math.round(Math.abs(document.querySelector("#break").getBoundingClientRect().top));
  document.querySelector("#particles-js").style.background = `linear-gradient(black, rgb(${Math.round(Math.sin(height*0.001)*130)}, ${Math.round(Math.sin(height*0.001)*130)}, ${Math.round(Math.sin(height*0.001)*130)}), black)`;
  
}, false);