[![Work in Repl.it](https://classroom.github.com/assets/work-in-replit-14baed9a392b3a25080506f3b7b6d57f295ec2978f6f33ec97e36a161684cbe9.svg)](https://classroom.github.com/online_ide?assignment_repo_id=3630784&assignment_repo_type=AssignmentRepo)
# Assignment 4 - Functions

Prompt the user for their name.

Use the .length property to determine the number of characters in their name.

Set the background color of the *div* based on their name length with a minimum of 2 and maximum of 12. You can use any 10 colors you want.

*hint: `Document.querySelector("div").className = classNameforBackgroundColor`*

Prompt the user for the day they were born.

Set the font-family for *p* based on their choice:
*	1-5 – font 1
*	6-10 – font 2
*	11 – 15 – font 3
*	16 – 20	- font 4
*	21 – 25 – font 5
*	26 – 31 – font 6

Set an image based on a random number generated using the length of their name as the stopping point. The images are included in your assignment and have the following format, image-2.jpg where “2” is replaced by the generated random number. If the number generated is 12 or greater it will get image-12.jpg 

*hint: `Document.querySelector("figure").innerHtml = "<img src='image-*random number*.jpg' alt="random image">`*
