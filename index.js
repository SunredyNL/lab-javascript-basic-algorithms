// Iteration 1: Names and Input
const hacker1="Krystian";
const hacker2="Max";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length>hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker2.length>hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else{
 console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops
let result1="";
let result2="";

for (let i=0;i<hacker1.length;i++){
  result1+=hacker1[i]+" ";
}
console.log(result1.toUpperCase());

for (let j=hacker2.length-1;j>=0;j--) {
  result2+=hacker2[j];
}
console.log(result2);

let compare=hacker1.localeCompare(hacker2);

if (compare<0){
  console.log("The driver's name goes first.");
}
else if (compare>0){
  console.log("Yo, the navigator goes first, definitely.");
}
else {
  console.log("What?! You both have the same name?");
}

// Bonus 1
let longText=`Quisque gravida augue nec elit faucibus, eget dictum libero scelerisque. Cras sit amet pulvinar augue, in pulvinar risus. Aenean nisi libero, mollis non cursus sed, faucibus ut tortor. Pellentesque non elit sit amet lorem feugiat aliquam. Sed non eros scelerisque, semper quam id, imperdiet metus. Sed nec lacus vitae nibh tristique semper. Etiam ultrices lacus vitae odio viverra, id vehicula velit auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vehicula pharetra elit sit amet finibus. Cras a pharetra massa, ut facilisis mi. Sed eu tincidunt est. Donec et elit quis dui faucibus feugiat. Vestibulum massa sem, laoreet placerat consequat in, sollicitudin porttitor tortor. Maecenas id enim enim. Aenean bibendum metus id nisi tincidunt sagittis. Sed blandit felis quam, quis bibendum quam convallis viverra. Vestibulum luctus mattis luctus. Pellentesque egestas est et purus faucibus, ut venenatis augue volutpat. Donec sed sagittis augue. Morbi nec volutpat risus. Suspendisse lacinia ornare faucibus. Duis scelerisque ipsum eu venenatis ornare. Duis pharetra neque eget placerat iaculis. Integer volutpat enim non metus auctor auctor. In et porttitor lectus. Proin porta maximus quam eget posuere. Phasellus rhoncus dignissim ex a laoreet. `

let counter=0;

for (let i=0; i<longText.length;i++){
  if (longText[i]===" "){
    counter++;
  }
  else {
    continue;
  }
}

console.log(counter);

let counter2=0;
for (let i=0; i<longText.length;i++){
  const word= longText[i] + longText[i+1] + longText[i+2] + longText[i+3];
  if (word===" et "){
    counter2++;
  }
}

console.log(counter2);

// Bonus 2:
const phraseToCheck="A man, a plan, a canal, Panama!";
let forwardString="";
for (let i=0;i<phraseToCheck.length;i++) {
  switch (phraseToCheck[i]){
    case " ":
    case ".":
    case ",":
    case "!":
    case "?":
    case "-":
    case `'`:
      continue;
    default:
      forwardString+=phraseToCheck[i];
  }
}
forwardString=forwardString.toLowerCase();

let backwardsString="";

for(let j=forwardString.length-1;j>=0;j--){
  backwardsString+=forwardString[j];
}

if (forwardString===backwardsString){
  console.log("Slay, this word is a palindrome. Pop off sis");
}
else {
  console.log("Boop, not a palindrome.");
}