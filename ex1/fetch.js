document.getElementById('getText').addEventListener("click", getText);

//////event handler for get text

function getText(e){
    fetch('textData.txt')
    .then(function(response){
       return response.text() //stream .then .catch
    }).then(function(text){
// console.log(text);
document.getElementById('output').innerHTML = `
<b>Fetch Text</b>: [${text}]
`;
    })
    .catch(function(error){
        console.log(new Error("Something went wrong"));
    });
    
}

///fetch json file

document.getElementById("getJson").addEventListener("click", getJson);

//event handler for json button

function getJson(e){
    fetch("customer.json")
    .then(function(response){
        return response.json(); //stream json
    })
    .then(function(data){
        console.log(data);
        data.forEach(function(person){
            output += `<li>${person.name} works for ${person.company}<li>`;
        });
        document.getElementById("output").innerHTML = output;
    })
    .catch(function(error){console.log('something went wrong')})
}

//// fetch api for bitcoin

document.getElementById("getAPI").addEventListener("click", getAPI);

function getAPI(e){
    fetch("http://api.coinmarketcap.com/v2/ticker/1/")
    .then(function(response){
        return response.json(); //stream json
    })
    .then(function(coin){
        console.log(coin.data);
        btc = coin.data
            output = `<li>${btc.symbol} ${btc.name}<li>`;
        });
        document.getElementById("output").innerHTML = output;
    })
    .catch(function(error){console.log('something went wrong')})
}
