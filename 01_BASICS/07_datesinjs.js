let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

// let mycreateddate = new Date(20,3,23)
// let mycreateddate = new Date(20,0,23,5,3)
// let mycreateddate = new Date("2023-1-14")
let mycreateddate = new Date("01-14-2023")
console.log(mycreateddate.toDateString());

let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(mycreateddate.getTime());


