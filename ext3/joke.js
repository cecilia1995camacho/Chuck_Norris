document.querySelector(".get-jokes").addEventListener("click",getNumberOfJk);
let jkNum = document.getElementById("number");
const list = document.querySelector('.jokes');


function getNumberOfJk(e){
xhr = new XMLHttpRequest();
console.log(jkNum.value)
let url = `http://api.icndb.com/jokes/random/${jkNum.value}`;

xhr.open("GET",`${url}`,true);
xhr.onload = function(){

if(this.status === 200){
//console.log(this.responseText);
let obj = this.responseText;
jokeElem = JSON.parse(this.responseText);
jokes = jokeElem.value;
console.log(jokes.id);
//document.getElementById("customer").innerHTML = `<li> ID: ${personArray.value["id"]}</li>
//<li> Joke: ${personArray.value["joke"]}</li>`; */

for(let i=0;i<jokes.length;i++){
let li = document.createElement("li");
li.innerHTML=`ID: ${jokes[i].id}</li>
<li> Joke: ${jokes[i].joke}</li>`;
list.appendChild(li);
            } 
        };
    }
    xhr.send();
e.preventDefault();
}



