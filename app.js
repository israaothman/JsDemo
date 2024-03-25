// data types 
// int  => Numbers =>   1 5 9 120595
// string => "test" 'test'  `test` "10"
// double  => 2.5 3.66 
// boolean => true false 


// variables 
var username = "Esra";
username = "Esraa";

var age = 28;
var password; // decleration
password = "as656asxcd" // inistialization 

// ES6  EcmaScript6 
let username2 = "Ahmad";
username2= "Mohammad";

const pi = 3.14 ;

/* const pi;
 pi = 3.14;
 Uncaught SyntaxError: Missing initializer in const declaration */





// outputs :

console.log("this is the username : "  ,  username);
let x = 5;
let y = 10;

console.log(x+y);



document.write("<p> Ahmad </p>");
document.write("<p> " + username2 + "</p>"); //concatenation 
// ES6
document.write(`<p> name: ${username2} <br> age : ${age} </p> `);  



// popup boxes

// alert 
// alert("Welcome to our class");

// prompt 
// let name = prompt("Enter your name :)");
// alert(`Welcome ${name}`);

// confirm 
// HomeWork 




// functions
// block of code I can use more than one time 


// function decleration
function funName () {
    // code 
}

// function execution
funName();


function greating(){
    let username = prompt("Whta's your name ? ");
    alert(`Welcome ${username}`);

}

// greating();
// greating();
// console.log(greating());

// let num1 = prompt("Enter the first number ");
// let num2 = prompt("Enter the second number ");
// console.log( "type of num1 before",typeof num1);
// num1 = parseInt(num1);
// console.log( "type of num1 after",typeof num1);

function summation(a,b){
     a = parseInt(a);
     b = parseInt(b);

    let result = a + b ;

    return result;
}

// console.log(summation(num1,num2));
summation(1,"6");


// ES6 
// arrow function  
// =>
const sub = (a,b) => {
    return a-b;
}

console.log(sub(5,1));
console.log(sub(50,11));



