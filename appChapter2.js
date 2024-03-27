// conditions: 

// mathmatical operations 
// +
// -
// * 
// / 


// x = 5 assignment operation  
// x + y == 5 Compression 
// 5 === "5"   Compression with datatype console.log(5 == "5");
// console.log(5 == "5");
// true 
// console.log(5 === "5");
// false


// logical operatores 
// and && 
// or || 
// not ! 


// <
// >
// <=
// >=

// let x = 5;
// let y = 5;

// if (x > y) {
//     console.log("x is bigger than y ")
// }

// if(x>y){
//     console.log("x is bigger than y ")
// }else{
//     console.log("y is bigger than x")
// }

// if (x > y) {
//     console.log("x is bigger than y ")
// } else if (x < y) {
//     console.log("y is bigger than x")
// } else {
//     console.log("y is equal to x")
// }


// let username = "Ahmad";
// let age = 28;

// if (username == "Ahmad" && age == 25) {
//     alert("Welcome Ahmad")
// } else if (username == "Esraa" || age == 20) {
//     alert("Welcoeme Esraa ")
// } else {
//     alert("Welcome")
// }


// 90-100 A 
// 80-89 B
// 70-79 C 
// 69 and below F

// Switch 

// let mark = 88;
// let result;

// switch (true) {
//     case (mark <= 100 && mark >= 90):
//         result = "A"
//         break;
//     case (mark < 90 && mark >= 80):
//         result = "B"
//         break;
//     case (mark < 80 && mark >= 70):
//         result = "C"
//         break;
//     default:
//         result = "F";
// }

// switch(mark){
//     case 88 :
//         result = "B";
//         break;
// }


// let z = "0";

// switch (z) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }
// console.log(result);



// console.log("welcome")
// console.log("welcome")
// console.log("welcome")
// console.log("welcome")
// console.log("welcome")


// for (let i = 0; i < 5; i++) {

//     console.log(i);

// }


// let user = prompt("Enter your name ");

// while(user != "esraa"){
//     user = prompt("Enter your name ");
// }

// let j = 0;
// while (j < 5) {
//     console.log("welcome j");
//     j++;
// }

// let user;

// do {
//     user = prompt("Enter your name ");
// } while (user != "esraa")



// for (let i = 0; i < 5; i++) {
//     if(i == 3 ) continue;
//    console.log(i);
// }


// for (let i = 0; i < 5; i++) {
//     if(i == 3 ) break;
//    console.log(i);
// }



let username = "Esraa";
// let age = 10;
// let location = "Amman";

//Arrays 
 let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu","Fri"];
                //  0      1       2     3      4    5 

console.log(weekDays[0]);
console.log(weekDays[3]);
console.log(weekDays.length);
console.log(weekDays[weekDays.length-1]);
weekDays[6]= "Sat";
weekDays.push("test") // add value to the end of the array
weekDays.pop();  // remove value from the end of the array
// shift 
// unshift
console.log(weekDays);



for(let i=0; i <= weekDays.length-1 ; i++){
    console.log("day : " + i + weekDays[i]);
} 


weekDays.forEach((val,idx)=>console.log(val));


// map filter reduce 
// time complicty 
// clean code 

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
// let arr2 =[];
// for(let i=0; i < arr.length ; i++) {
//     if(arr[i]%2 == 0) {
//         arr2.push(arr[i]);
//     } 
// }
// console.log(arr2);

// let arr3 = arr.filter((val)=>{
//     if(val%2 == 0){
//        return val;
//     }   
// })
// console.log(arr3);

// let arr4= arr.map((val)=>{
//     if(val%2 == 0){
//        return val;
//     }   else{
//         return "odd"
//     }
// })
// console.log(arr4);





//Objects 
// let obj = {key:value}
let user = {username:"ahmad",age:10,location:"Amman"}
console.log(user.username);
user.age = 20;
console.log(user.age);
user.gender="Male";
console.log(user);



// Task : 
// - Create javaScript file called `app.js` and link it with `index.html`.
//    - When the home page is running you will do the following requirements in `app.js`:
//       - Ask the user to enter his/her name as input. keep asking until he/she enters a name 
//       - Ask the user to enter his/her gender as input. The answer should be either (male or female).
//       - Ask the user to enter his/her age as input and alert the user if the age is less than or equal to zero.
//       - Alert a welcoming message with the name of the user 



