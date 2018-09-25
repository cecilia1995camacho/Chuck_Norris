const today = new Date().getDay();
console.log(today);

let weekend;

switch (today){
case 0:
weekDay = "Sunday";
break;
case 1:
weekDay = "Monday";
break;
case 2:
weekDay = "Tuesday";
break;
default:
weekDay = "Unknown!";
}