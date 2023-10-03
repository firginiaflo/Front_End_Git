// // String Literal
// let fullName = "John Doe";
// let age = 22;
// let address = "Manado";

// //Haii nama saya Igin Pandoh, umur saya 17
// //dan saya tinggal di manado

// let kalimat5= "Haii nama saya" + fullName + ", umur saya" + age + " tahun dan saya tinggal di " + address;

// let kalimat6 = `Halo nama saya ${fullName}, umur saya ${age} tahun`

// console.log(kalimat5);
// console.log(kalimat6);

//############### 
// Arrow Function(=>)
// ##############

function sayGreetings(){
    return `Hello world`;
}




// IMPLICIT RETURN VALUE jika menggunakan arrow bisa dipersingkat
const sayGreetings6 = (name) => `Hello $(name)`


// IIFE 
(() =>{
    console.log("Hello");
})();

//CALLBACK
const numbers = [1,2,3,4,5];
let output = numbers.map((item) => item);
console.log(output);


//################
//Default Parameter
//#################

const sayGreetings5 = fullName => {
    console.log(`Hello ${fullName}`)
};

sayGreetings5();