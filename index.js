//iteration 1
let hacker1 = "Mattia"
let hacker2 = "Yvo"

console.log("The driver's name is " + hacker1)
console.log("The navigator's name is " + hacker2)

//iteration2
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker2.length > hacker1.length) {
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

//iteration3
console.log(hacker1.toUpperCase())

let reversedHacker1 = "";
for (let i = hacker1.length - 1; i>= 0; i--) {
  reversedHacker1 += hacker1[i];
}

console.log(reversedHacker1);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}