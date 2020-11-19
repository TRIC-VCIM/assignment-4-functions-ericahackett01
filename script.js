
let name = prompt('What is your name?');

const nameLength = name.length;
console.log("name length = " + nameLength);

function backgroundColor(length) {
  let color = "unknown";
  if (length === 2) {
   color = "green"; 
  } else if (length === 3) {
  color = "cyan";
  } else if (length === 4) {
    color = "yellow";
  } else if (length === 5) {
    color = "purple";
  } else if (length === 6) {
    color = "magenta";
  }  else if (length === 7) {
    color = "rose"; 
  } else if (length === 8) {
   color = "blue";
  } else if (length === 9) {
    color = "pastel-green";
  } else if (length === 10) {
    color = "berry";
  } else if (length === 11) {
    color = "indigo";
  } else if (length >= 12) {
    color = "orange";
  } 
  console.log("color selected = " + color);
  return color;
}

let colorSelected = backgroundColor(nameLength);
document.querySelector("div").className = colorSelected;

let birthday = prompt('What day of the month were you born?');
console.log("birthday = " + birthday);


let font = "unknown";
  if (birthday >= 1 && birthday <= 5 ) {
    font = "dancing-script";
  } else if (birthday >= 6 && birthday <= 10 ) {
    font = "pangolin";
  } else if (birthday >= 11 && birthday <= 15 ) {
    font = "amatic-sc";
  } else if (birthday >= 16 && birthday <= 20 ) {
    font = "rock-salt";
  } else if (birthday >= 21 && birthday <= 25 ) {
    font = "merienda";
  } else if (birthday >= 26 && birthday <= 31 ) {
    font = "mali";
  }
  console.log("font = "+ font);
  return font;
}
let fontClass = fontType(birthday); 
document.querySelector("p").className = fontClass;


let randomNumber = Math.floor( Math.random() * nameLength ) + 2;

if (randomNumber > 12){ randomNumber = 12; }

console.log("random number = " + randomNumber);

document.querySelector("figure img").src = `images/image-${randomNumber}.jpg`; 
