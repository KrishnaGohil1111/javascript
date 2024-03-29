const name = "krishna"
const repocount = 50
// console.log(name + repocount + "value");

// console.log(`hello my name is ${name} and my repo count id ${repocount}`);

const gamename = new String("krishna")
// console.log(gamename[0]);
// console.log(gamename.__proto__);
// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(2));
// console.log(gamename.indexOf('i'));


const newstring = gamename.substring(0,4)
console.log(newstring);
const anotherstring = gamename.slice(-8,4)
console.log(anotherstring);

const newstringone = "      krishna     "
console.log(newstringone);
console.log(newstringone.trim());


const url = "https//krishna.com/krish%20gohil"
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));
console.log(gamename.split('-'));
