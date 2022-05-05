function romanize (num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

const b = document.body;

for (var i = 1; i < 26; i++) {
  let obj = "#"+romanize(i);
  document.addEventListener("scroll", event => {
  var rect = document.querySelector(obj).getBoundingClientRect();
  if(rect.top < 90 && rect.top > 1){
    document.querySelector(obj).style.transform = "scale(40%)";
  }
  else if(rect.top >= 90 ){
    document.querySelector(obj).style.transform = "scale(100%)";
  }
  else{
    document.querySelector(obj).style.transform = "scale(1%)";
  }
}, false); 
}

document.addEventListener("scroll", event => {
  var height = Math.round(Math.abs(document.querySelector("#break").getBoundingClientRect().top));
  document.querySelector("#particles-js").style.background = `linear-gradient(black, rgb(${Math.round(Math.sin(height*0.001)*130)}, ${Math.round(Math.sin(height*0.001)*130)}, ${Math.round(Math.sin(height*0.001)*130)}), black)`;
  
}, false);