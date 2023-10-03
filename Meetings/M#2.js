//variabel
//let & const


let firstName       //deklarasi variabel
firstName = "John Doe";         //tipe data String
let age = 30;       //tipe data Number
let grade = 90.8;       //tipe data number
let isActive = false;     //Boolean  

age = "tiga puluh";     //bisa diganti

console.log(firstName);
console.log(age);
console.log(grade);
console.log(isActive);

const gender = "male";
gender ="female";


// Tipe Data Numbers
//operators
let num1 = 5;
let num2 = 10;

// let result = num1 + num2;
// console.log(num1 + num2);

num1++;
console.log(num1);
num1 += 2;
num1 = num1 + 2;
console.log(num1);


//Tipe Data Strings
let firstName = "John";
let lastName ="Doe"

// let fullName = firstName + lastName;
// console.log("halo nama saya "firstName + " " + lastName);

//Relational
let num1 = "5";
let num2 = "5";
console.log (num1 == num2);     //result = true
console.log (num1 === num2);     //result = false

//Ternary Operators (if else)
let age = 17;
let isEligible = age >= 17 ? true : false;      //jika 17 result true
console.log(isEligible);


//JavaScript Function

function greetings(){
    // console.log("Hello WOrld");
    return "Hello World";      //untuk memanggil
    return "Hello" + fullName;
}

greetings();        //utk memanggil hello world
console.log(greetings);     //untuk memanggil nilai