// const task = document.gerElementById("task-title");
// console.log(taskT);
// console.log(taskT.className);
// console.log(taskT.id);

// taskT.style.color = "blue";
// taskT.style.background = "aqua";
// taskT.style.padding = "5px";

// taskT.textContent.color = "This is a new Title for Tasks";
// taskT.innerText = "Inner Text";
// taskT.innerHTML = "Inner HTML";

// const t5 = document.getElementById("text");

// t5.textContent = "Thid is the new ID";

// const element = document.querySelector('#task-title');
// console.log(element);

// const li = document.querySelector("li:nth-child(even)");

// const li = document.querySelector("label");
// console.log(li);
// // li.style.color = "blue";
// // li.style.background = "red";
// // li.textContent = "This is a custom list item!!";
// label.textContent = "This is a custom label!!";





// const items = document.getElementsByClassName("collection-item");
// // console.log(items);
// // console.log(items[0]);

// items[0].style.color = "blue";
// items[0].style.background = "grey";
// items[0].innerText = "blue element";

// let itemArray = Array.from(items);

// console.log(itemArray);

// itemArray.forEach(function(item, index){
//     item.innerText = `Element # ${index}`;
//      item.style.background = `rgb(${(index +5) * 30}, ${10 * index}, ${index * 20 - 2}`;
// });
// item.style.color = `rgb(${index  * 10}, ${(index + 5) * 30}, ${index * 20 - 2}`);



// const ul = document.getElementsByClassName("collection");
// const list = document.getElementsByTagName("li");
// console.log(list);
// console.log(list[3].style.color = "blue");
// arrayList = Array.from(list);


// const varElements = document.querySelectorAll(
//     "il.collection li.collection-item"
// );
// let rgb;
// let red, green, blue;
// varElement.forEach((li,i) =>}
// arrayList.forEach(li,index) => {
//     li.textContent = `${index}: Item`;
//     li.textContent = `rgb(${index}${index}${index}: Item`;
// }


// let val;
// const list = document.querySelector("ul.collection");
// // const listItem = document.querySelector("li.collection-item:first.child");
// // console.log(listItem);

// node = document.querySelector("Title");
// console.log(node);
// console.log(node.firstChild);
// console.log(node.fristChild.nodeValue);
// console.log(node.fristNode[0].nodeValue);

// type = document.querySelector("ul.collection").childNodes[0].nodeType;
// console.log(type);

// type = document.querySelector("ul.collection").childNodes[1].nodeType;
// console.log(type);

// val = list.childNodes;
// console.log(list.nextSibling);

// console.log(listItem.nextElementSibling.nextElementSibling.nextElement)


//aiuda

////create an element
const li = document.createElement("li");

console.log(li);
//add class
li.className = "collection-item s12";
//add id
li.id = "new-li-item";
///Add atributte
li.setAttribute("title", "New li Item");
///create a text node
newTextNode = document.createTextNode("This is a new LI");

li.appendChild(newTextNode);
///add li to ul (append child)
list = document.querySelector("ul.collection");
list.appendChild(li);

//se agrego
const a = document.createElement("a");
a.href = "#";
a.className = "delete-item secondary-content";

const i = document.createElement("i");
i.className = "fa fa-plane";

a.appendChild(i);
li.appendChild(newTextNode);
li.appendChild(a);

// li.appendChild(i);


///remover hijos

// const newHeading = document.createElement("h2");
// newHeading.id = "task-title";
// textParaph = document.createTextNode("This is a new title");
// newHeading.id = 

// let li = document.querySelector("li");
// let list = document.querySelector("ul");

// list.removeChild(li[1]);

///Add atributte

// link.setAttribute("title", "Exercise!");

//como registrar un evento

console.log("hello");

const clearTaskButton = document.querySelector(".clear-tasks");

clearTaskButton.addEventListener('click',eventHandler);

function eventHandler(e){
    console.log("click!");
    
    e.preventDefault();//prevents reload of page

    //Target
    targetObj = e.target;

    targetObj.innerText = "Stop It!";
    // targetObj.style.backgroundColor = "Red";
    // targetObj.style.color = "blue";
    // targetObj.style.background = "red";

    // console.log(targetObj.className);
    // console.log(e.timestamp);
    console.log(targetObj.id);
    
    // console.log(e);
    // console.log(e.target);
    // console.log(e.type);
    // console.log(e.x, e.y);


}


















