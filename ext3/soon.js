// / API URL
urlAPI = "https://api.icndb.com/jokes/random";

// Grab the button
document.querySelector(".get-jokes").addEventListener("click", getJokes);

const form = document.querySelector("form");
const name = document.getElementById("name");
const lastName = document.getElementById("lastName");
const logOut = document.getElementById("logout");

form.addEventListener('submit', runEvent);


//  Add name to proceed

document.getElementById("titulo").style.display = "none";
document.getElementById("number").style.display = "none";
document.getElementById("boton").style.display = "none";
document.getElementById("boton2").style.display = "none";
document.getElementById("first-name").style.display = "none";
document.getElementById("last-name").style.display = "none";
document.getElementById("ces").style.display = "none";

function aja(){
    document.getElementById("titulo").style.display = "block";
    document.getElementById("number").style.display = "block";
    document.getElementById("boton").style.display = "block";
    document.getElementById("boton2").style.display = "block";
    document.getElementById("first-name").style.display = "block";
    document.getElementById("last-name").style.display = "block";
    document.getElementById("ces").style.display = "block";
};

function chandler(){
document.getElementById("ohsi").style.display = "none";
document.getElementById("simone").style.display = "none";
document.getElementById("name").style.display = "none";
document.getElementById("joey").style.display = "none";
document.getElementById("lastName").style.display = "none";
};

function runEvent(e) {

    if(name.value ==="Cecy" && lastName.value ==="Barron"){
    aja();
    chandler();
    }
    else{
        alert("Add the correct name!!");     
    }
};


function getJokes(e) {
  
  const number = document.querySelector("input[type=number]").value;
  const xhr = new XMLHttpRequest();
  url = `${urlAPI}/${number}`;
  xhr.open("GET", url, true);
  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(this.responseText);

      //UNCOMMENT TO SHOW JOKES IN WEB PAGE
      let output = "";
      if (response.type === "success") {
        response.value.forEach(function(joke) {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += `<li> Something Went Wrong!</li>`;
      }
      document.querySelector(".jokes").innerHTML = output;
    }
  };
  xhr.send();
  e.preventDefault();
}

///PERSONALIZED/////

//http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe


// Grab the button
document.querySelector(".get-jokess").addEventListener("click", getPJokes);

// / API URL
urlAPI2 =  "https://api.icndb.com/jokes/random/" + "?firstName=" + John + "&amp;lastName=" + Doe;

John = document.getElementById("first-name").value;
Doe = document.getElementById("last-name").value;

function getPJokes(e) {
  
    const number = document.querySelector("input[type=number]").value;
    const xhr = new XMLHttpRequest();
    url2 = `${urlAPI2}/${number}`;
    xhr.open("GET", url2, true);
    xhr.onload = function() {
      if (this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log(this.responseText);
  
        //UNCOMMENT TO SHOW JOKES IN WEB PAGE
        let output = "";
        if (response.type === "success") {
          response.value.forEach(function(joke) {
            output += `<li>${joke.joke}</li>`;
          });
        } else {
          output += `<li> Something Went Wrong!</li>`;
        }
        document.querySelector(".jokes").innerHTML = output;
      }
    };
    xhr.send();
    e.preventDefault();
  }
  
    

          