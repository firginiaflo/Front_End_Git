//Exercise 2
// Firginia Pandoh

// IIFE
let IIFE = (function(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}) (2,22);

console.log("IIFE : " + IIFE);

//CALLBACK
function nilaiTerbesar(num1, num2, callback) {
    if (num1 > num2) {
        callback(num1);
    } else {
        callback(num2);
    }
}

function cetakHasil(nilai) {
    console.log("Callback : " + nilai);
}

nilaiTerbesar(2, 22, cetakHasil);