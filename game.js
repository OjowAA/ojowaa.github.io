function closeOut(){
  document.getElementById("rules").style.display = "none";
}

const list = ["Quark", "Boson", "Photon", "Electron", "Proton", "hydrogen_atom", "Molecule", "dna", "corona_virus", "sperm_cell", "red_blood_cell", "skin_cell", "human_egg", "Apple", "Human", "blue_whale", "mount_everest", "Astroid", "Moon", "Earth", "Sun", "scuti", "aolar_system", "milky_way", "Universe"];
var left = 0;
var right = 0;
var hs = 0;
var current = 0;
const rightName = document.getElementById("rightName");
const leftName = document.getElementById("leftName");
const curtain = document.getElementById("curtain");
const hsText = document.getElementById("hs");
const overScreen = document.getElementById("overScreen");
const bannerRight = document.getElementById("bannerRight");
const bannerLeft = document.getElementById("bannerLeft");

window.onload = function() {
  setup();
}

function setup(){
  right = Math.floor(Math.random()*list.length);
  rightName.innerHTML = list[right];
  bannerRight.style.backgroundImage = `url(${list[right].toLowerCase()}.jpg)`;
  
  let temp = Math.floor(Math.random()*list.length);
  while (temp == right){
    temp = Math.floor(Math.random()*list.length);
  }
  left = temp;
  leftName.innerHTML = list[left];
  bannerLeft.style.backgroundImage = `url(${list[left].toLowerCase()}.jpg)`;
}

function game(input){
  let winCon = 0;
  if (left > right){
    winCon = 1;
  }
  else {
    winCon = -1;
  }

  if (input == winCon){
    current += 1;
    curtain.style.animationName = "goingUp";
    setTimeout(function(){
      curtain.style.animationName = "goingDown";
      setup();
}, 1500);
  }
  else {
    gameOver();
  }
}

function gameOver(){
  if (current > hs){ 
    hs = current;
    hsText.innerHTML = "High Score: " + hs;
  }
  overScreen.style.animationName = "goingUp";
  overScreen.style.top = "76px";
}

function reset(){
  overScreen.style.top = "120vh";
  overScreen.style.animationName = "doingDown";
  current = 0;
  setup();
}
