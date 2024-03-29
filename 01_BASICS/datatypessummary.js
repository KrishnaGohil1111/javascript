//primitive

// 7 types : stringnumber, number , big Int, symbol,undefined,null,boolean

const score = 100
const scorevalue = 100.44

const isloggedin = false
const outsidetemp = null
let useremail;

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id==anotherid);
const bignumber = 1235543676547657n

// ReferenceError(non-primitive):

// array,object,function

const heroes = ["carti", "travis","kanye","ken carson"];

let myobj = {
    name: "krishna",
    age: 19,
}

const myfunction = function () {
    console.log("hello world");
}

console.log(typeof bignumber);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(prmitive), heap(non-primitive)

let name = "krishna"
anothername = name
anothername="manav"
console.log(name);
console.log(anothername);

let userone = {
    email: "google@g.com",
    upi : "ybl@",
}
usertwo = userone
usertwo.email = "krishna9004@gmail.com"
console.log(userone.email);
console.log(usertwo.email);