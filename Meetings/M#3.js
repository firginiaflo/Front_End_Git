// function cara #1
function greetings(){
    return "Hello";
}
greetings();

// diluar
console.log(greetings);

function greetings(){
    return "Hello";
}

// cara 2
const greetings = function(){
    return "Hello";
}

const age = 17; //Global

const greetings = function

//parameter nilai/var yg ada di function definition
//nilai yg dikirimke function adalah argumen

//jika diluar {} namanya scope

//callback function     //kalo sudah semua ur kerja panggil ulg callback
//callback adalah function yg berada dlm parameter fungsi
//bersifat anonymous
 function createGreetings(name, callback){  //parameter //function1
     const greetings = "Hello" + name;
     callback(greetings);
 }  
 
 function logGreetings(greetings){  //function2
     console.log(greeting)
 }
 
 createGreetings("John", logGreetings);
 
 //Anonymous function
 //IIFE (Immediately Invoked Function Expression)

 (function {
    console.log"Hello IIFE";
 })();      //fungsi () utk memanggil


 //callback disederhanakan
 function createGreetings(name, callback){
    const greetings = "Hello" + name;
    callback(greetings);
}

createGreetings("John", function)