let number = 0;
//number = number + 1 //incrémentation
number ++;
alert(number); //affiche 1

number = number - 1; //décrémentation
number --;
alert(number); //affiche 0

let number_1 = 0;
let number_2 = 0;
number_1++;
//number_1 = number_1 + 1;
++number_2;
//1 + number_2 = number_2;
alert(number_1); //affiche 1
alert(number_2); //affiche 1

let number = 0;
let output = ++number;
alert(number); //affiche 1
alert(output); //affiche 1

let number = 0;
let output = number++;
alert(number); //affiche 1
alert(output); //affiche 0

let number = 0; //initialisation
while(number < 10) { //condition
    number ++;       //incrémentation
}
alert(number);  //affiche 10
                //les instructions sont au moins exécutées que si la condition est vraie

do {
    instruction1;
    instruction2;
    instruction3;
}while(condition) //les instructions sont au moins exécutées une fois avant la condition


//for (initilisation; condition; incrémentation) {
//      instruction1;
//      instruction2;
//      instruction3;
// }

for(let iter = 0; iter < 10; iter++){
    alert("itération n°" + iter);
}


function myfunction (arguments) {
    //le code que la fonction exécute
}

function showMsg() {
    alert("C'est une premier fonction");
}

showMsg(); //on exécute le code de la fonction showMsg()

let msg = "Hello world!";
function sayHello() {
    alert(msg);
}
sayHello();

let var1 = 2, var2 = 3; //variables globales
function calculate() {
    alert(var1*var2);
}
calculate();
alert(var1); //affiche2


function calculate() {
    let var1 = 2, var2 = 3; //variables locales
    alert(var1*var2);
}
calculate();
alert(var1); //affiche null


function myfunction (arguments) {
    //le code que la fonction exécute
    alert("L'argument est :" + arg) //affiche: L'argument est: C'est bien un argument
}
myfunction("C'est bien un argument");


function calculate(var1, var2) {
    alert(var1*var2); //affiche 6
}


let number_1, number_2;
number_1 = parseInt(prompt("Votre premier nombre"));
number_2 = parseInt(prompt("Votre deuxiéme nombre"));
calculate(number_1,number_2);

//let msg = "Hello world!";
//function sayHello() {
//    alert(msg);
//}
//sayHello();

let sayHello = (function(){         //function anonyme
                return "Hello world!";
                });
alert(sayHello); //affiche Hello world!