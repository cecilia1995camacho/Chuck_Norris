// let roberto = {
// firstName: "robert"
// };

// // console.log(robert);

// function Person(name, apellido, dob){
//     this.firstName = name;
//     this.lastName = apellido;
//     this.birthday = new Date(dob);
//     this.calculateAge = function(){
//         const diff = Date.now() - this.birthday.getTime()
//         const ageDate = new Date(diff);
//         return ageDate.getUTCFullYear() - 1970;
//         };
// }

// roberto = new Person("roberto", "Montelongo", "01/JN/2001");
// // const juan = new Person("juan");
// // const jose = new Person("jose");

// Ejemplo

// const
// console.log(nombre);
// console.log(nombre, lenght);
// console.log(typeof nombre);

// const nombre2 = "artemio";
// console.log(`${nombre} is ${nombre.lenght} lenght type=${typeof nombre}`);

// const nombre2 = new String("artemio");
// // console.log(`${nombre2} is ${nombre2.lenght} lenght type=${typeof nombre2}`);

// // if (name1 === name2){
// //     console.log(`${nombre} and ${nombre2} they are the same`);
// // } else{
// //     console.log(`${nombre} and ${nombre2} are different`);
// // }

// // console.log(nombre2);
// // console.log(nombre, lenght);
// // console.log(typeof nombre);

// /// EJEMPLO2 


// // const getSum1 = function(x,y) {
// //     return x + y;
// // };

// // getSum1[1, 2];
// // // console.log(getSum[1,2]);

// // const getSum2 = new Funtion("x","y","return x + y");
// // // console.log(getSum2[1, 2]);
// // getSum2[1, 2];

// // const fruit = ['apple', 'mango', 'grape'];
// // console.log(fruit);

// // const fruit2 = new Array("apple", "mango", "grape");
// // console.log(fruit2);

// // const object = {name: 'alberto', lastName: 'ramirez'};
// // console.log(object);

// // const object2 = new Object({name: "alberto", lastName: "ramirez"});
// // console.log(object2);

// function Person(fristName, lastName, dob); {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
// }

// Person.prototype.calculateAge = function(){
//     const diff = Date.now() - this.birthday.getTime()
//     const ageDate = new Date(diff);
//     return ageDate.getUTCFullYear() - 1970;
//         };

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// Person.prototype.getMarried = function(newLastName){
//     return `${this.lastName} ${this.newLastName}`;
// }

// const alberto = new Person('Alberto', 'Einstein', 'March/14/1879');
// const marie = new Person('Marie', 'Sktodowska', 'November/7/1867');

// console.log(alberto.hasOwnProperty["first name"]);
// console.log(alberto.hasOwnProperty["last name"]);
// // console.log(alberto.hasOwnProperty["calculateAge"]);


// funtion Manual(order, family, genus, species){
// this.order = order;
// this.family = family;
// this.genus = genus;
// this.species = species;
// }

// Manual.prototype.getFullClassification = function(){
//     return `${this.species} ${this.genus} ${this.family} ${this.order}`;
// };

// function Dog (name, breed, dob) {
//     Maual.call[this, "carnivora", "canidae", "canis", "canis lupus"];

//     this.name = name;
//     this.breed = breed;
//     this.birthday = new Date(dob);
// }

// //create dogs 

// apolo = new Dog("apolo", "boxer", "30/Apr/2016");
// console.log(apolo);

// // 
// Dog.prototype = Object.create(Manual.prototype);

// coco = new Dog("coco", "pug", "a/january/2011");

// Dog.prototype.getFullClassification = function (){
//     return `${this.species} ${this.genus} ${this.family} ${this.order}`;
// };

// fido = new Dog("fido", "electric", "01/01/1999");

cosnt organPrototype = {
    condition: function(){
        return `Hello, I´m a ${this.isHealthy? "healthy" : "sick" ${}
    this.organ    
    } of the ${this.organSystem} system`;
}
}
getSick: function (disease){
    this.disease = disease;
    this.isHealthy = false;
};
getCurred: function (){
    this.desease = "";
    this.isHealthy = true;
}
};

cosnt liver = Object.create(organPrototype);
liver.organName = "liver";
liver.organSystem = "digestive";
liver.isHealthy = true;

const heart = Object.create(organPrototype, {
    organName: { value: "heart"};
    organSystem: { value: "cardiovascular"},
    isHealthy: { value: true},
    disease; { value: null}
});










