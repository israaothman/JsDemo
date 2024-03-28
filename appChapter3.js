// document.write("<p> test </p>");

// let username = prompt("Enter your name");
// let sectionOne = document.getElementById("sectionOne");

// let p = document.getElementById("paragraph1");
// console.log(p);
// p.textContent = `Username is : ${username}`;


// let div = document.createElement("div");
// let p2 = document.createElement("p");
// p2.textContent = "test the div";

// div.appendChild(p2);
// sectionOne.appendChild(div);


// let h3 = document.getElementsByTagName("h3");
// console.log(h3[0]);
// h3.textContent = "Copyright &copy;";




let form = document.getElementById("taskForm");
let table = document.getElementById("tasksTable");

form.addEventListener("submit",(event)=>{
    event.preventDefault();


   let taskInput = event.target.task;
//    let date = event.target.date;

   if(taskInput.value !== "" ){
    createRow(taskInput.value );
       taskInput.value = "";
    //    date.value = "";
   }else{
    alert("Enter a task")
   }
 

})


const createRow = (task, date) =>{

   let tr = document.createElement("tr");
   let tdTask = document.createElement("td");
   let tdDate = document.createElement("td");
   let del = document.createElement("button");
   let update = document.createElement("input");

   update.setAttribute("type", "text");

   tdTask.textContent = task;
   tdDate.textContent = date;
   del.textContent = "Delete"


   del.addEventListener("click",()=>{
   tr.setAttribute("style", "text-decoration: line-through");
   update.addEventListener("change", ()=>{
    console.log('test');

    tdTask.textContent = update.value;
   })

    //  table.removeChild(tr)
   })
 
   tr.appendChild(tdTask);
   tr.appendChild(del);
   tr.appendChild(update);
//    tr.appendChild(tdDate);

   table.appendChild(tr);
}