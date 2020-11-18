//Prompt the user for their name.
let name = prompt('What is your name?');

//Use the .length property to determine the number of characters in their name.
const nameLength = name.length;
console.log("name length = " + nameLength);

//Set the background color of the *div* based on their name length with a minimum of 2 and maximum of 12. You can use any 10 colors you want.
//*hint: `Document.querySelector("div").className = classNameforBackgroundColor`*

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

//Prompt the user for the day they were born.


/*Set the font-family for *p* based on their choice:
*	1-5 â€“ font 1
*	6-10 â€“ font 2
*	11 â€“ 15 â€“ font 3
*	16 â€“ 20	- font 4
*	21 â€“ 25 â€“ font 5
*	26 â€“ 31 â€“ font 6
*/
let birthday = prompt('What day of the month were you born?');
console.log("birthday = " + birthday);

// function fontType (birthday) {

// birthday = parseInt(birthday);

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

//Set an image based on a random number generated using the length of their name as the stopping point. The images are included in your assignment and have the following format, image-2.jpg where â€œ2â€ is replaced by the generated random number. If the number generated is 12 or greater it will get image-12.jpg 
//*hint: `Document.querySelector("figure").innerHtml = "<img src='image-*random number*.jpg' alt="random image">`*

let randomNumber = Math.floor( Math.random() * nameLength ) + 2;

if (randomNumber > 12){ randomNumber = 12; }

console.log("random number = " + randomNumber);

document.querySelector("figure img").src = `images/image-${randomNumber}.jpg`; 
