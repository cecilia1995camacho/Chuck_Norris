
const goalAchieved = true;

let goalAchieved = confirm("Did you get the grades?");

/////////////////////////
////PROMISE
/////////////////////////

let willIGetMyCar = new Promise(myNewCarProm)

function nyNewCarProm(resolve, reject){
    if(goalAchieved){
        car = {
            brand: "ferrari",
            model: "488 GTB",
            color: "red"
        };
        resolve(car)
    }else{
        reject("You got nothing");
    }
    }

let askParent = function(){
    willIGetMyCar
    .then(function(myNewCar){
        // console.log(myNewCar);
        document.body.innerHTML = `Congratulations, you got a new car
        <li>${myNewCar.brand}</li>
        <li>${myNewCar.color}</li>
        <li>${myNewCar.model}</li>
        `;

    })
    .catch(function(err){
        console.log(err);
        document.body.innerHTML = `${err}, try harder next time`;
    });
};

// askParent();