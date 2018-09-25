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
document.getElementById("logout").style.display = "none";

function aja(){
    document.getElementById("titulo").style.display = "block";
    document.getElementById("number").style.display = "block";
    document.getElementById("boton").style.display = "block";
    document.getElementById("logout").style.display = "block";
};

function runEvent(e) {

    if(name.value ==="Cecy" && lastName.value ==="Barron"){
    aja();
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

  //Validates HTTP Response
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



        
