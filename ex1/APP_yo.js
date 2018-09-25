const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector('h5');
const list = document.querySelector('ul.collection');

form.addEventListener('submit', runEvent);// taskInput.addEventListener("keydown", onKey);

function runEvent(e) {
    if(taskInput.value ===""){
        alert("No task!!");
    }else{

        const li = document.createElement('li');

        li.setAttribute("class", "collection-item");li.innerHTML = `${taskInput.value}<a href="#" class="delete-item secondary-content"><i class="fa fa-times"></i></a>`

        list.appendChild(li);

        console.log(e.type);   e.preventDefault();

        taskListLocal.push(`${taskInput.value}`);
        stringObject = JSON.stringify(taskListLocal);
        localStorage.setItem('taskList',stringObject); 
         }
};
// ----------------------------------
// --------------ELIMINAR------------
// ----------------------------------

const bodyNode = document.body;bodyNode.addEventListener("click",eventHandler)

// BORRAR UNA LINEA DANDO CLICK EN LA X
function eventHandler(e){

   if(e.target.className === "fa fa-times"){
       e.target.parentElement.parentElement.remove();

   }

//     // console.log(e.type);// console.log(e.target.parentElement.className);
// console.log(e.target.parentElement.classList);
//VER SI UNA LISTA DE CLASES EXISTE// if(e.target.classList.contains("fa-times")){
//     console.log("it works");
//     e.target.parentElement.parentElement.remove();
// }

};

// --------------------------------------
// ---------BOTON CLEAR TAKS-------------
// --------------------------------------

const target = document.querySelector(".clear-tasks");

target.addEventListener("click", eventHandler_clear);
function eventHandler_clear(e) {

 e.preventDefault();

 let lis = document.querySelectorAll("li");
 lis.forEach(function(element) {

   element.remove();

 });
 
//   targetObj = e.target;
//   target.innerText = "Stop it!";
//   target.style.color = "blue";//   target.style.backgroundColor = "red";    //   console.log("click");
//   console.log(e);
//   console.log(e.target);
//   console.log(e.type);
//   console.log(e.x, e.y);

}

// const name = prompt("nombre");
// let name = "monica"
// window.localStorage.setItem("firstName", name);
// localStorage.removeItem("firtsName", name);
// localStorage.removeItem("firtsName");

///OJO///para guardar info

let clientName = ["Hector", "monica", "laura"];
stringyObject = JSON.stringify(clientName);

localStorage.setItem('clientName', stringyObject);
clientName.push("Ignacion");
localStorage.setItem("clientName", stringyObject);


///guardar tasks
let taskListLocal=[];

      
      
