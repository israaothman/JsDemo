// document.write("<p> test </p>");

let username = prompt("Enter your name");
let sectionOne = document.getElementById("sectionOne");

let p = document.getElementById("paragraph1");
console.log(p);
p.textContent = `Username is : ${username}`;


let div = document.createElement("div");
let p2 = document.createElement("p");
p2.textContent = "test the div";

div.appendChild(p2);
sectionOne.appendChild(div);


// let h3 = document.getElementsByTagName("h3");
// console.log(h3[0]);
// h3.textContent = "Copyright &copy;";




