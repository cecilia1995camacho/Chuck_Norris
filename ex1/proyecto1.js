const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector('h5');
const list = document.querySelector('ul.collection');

form.addEventListener('submit', runEvent);

///ADD///

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

///ELIMINAR///

const bodyNode = document.body;bodyNode.addEventListener("click",eventHandler)
function eventHandler(e){
   if(e.target.className === "fa fa-times"){
       e.target.parentElement.parentElement.remove();
   }
};

//--------le decimos que hacer con el boton--------//
const target = document.querySelector(".clear-tasks");
target.addEventListener("click", eventHandler_clear);
function eventHandler_clear(e) {
 e.preventDefault();
 let lis = document.querySelectorAll("li");
 lis.forEach(function(element) {
   element.remove();
 });
}

///SAVE///
let taskListLocal=[];

///Filter///

//INPUT ELEMENT//

    let filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    let filterValue=
    document.getElementById('filterInput').value.toUpperCase();

    let ul = document.getElementById('names');
    let li = ul.querySelectorAll('li.collection-item');
    for ( let i=0; i < li.legth; i++){
        let a = li[i].getElementsByTagName('a')[0];

        if (a.innerHTML.toUpperCase().innerOf(filterValue) > -1){
            li[i].style.display =  '';
        }else{
            li[i].style.display = 'none';
        }
    }
}


  