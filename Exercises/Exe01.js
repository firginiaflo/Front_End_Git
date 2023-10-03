function nilaiTerbesar(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

let hasil = nilaiTerbesar(5, 12);
console.log("Nilai terbesar adalah; " + hasil);