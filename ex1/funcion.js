let car = {
    brand: "Nissan",
    year: 2011,
    plate: "XYZ-1234",
    state: "LN",
    isRunning: false,
    clean: false,
    startEngine: function(){
       this.isRunning = true; 
       return true;
    },
    stopEngine: function(){
        this.isRunning = false;
    },
    cleancar: function(){
    this.clean = true;
    },
    cambiaplate: function(){
        this.plate = prompt("ingresa nueva placa");
    }

};

console.log(car.isRunning);
car.startEngine();
console.log(car.isRunning);
car.stopEngine();
console.log(car.isRunning);
console.log(car.clean);
car.cleancar();
console.log(car.clean);
car.cambiaplate();
console.log(car.plate);







