// Nama Kelompok
// Mantiri, Gradity
// Pandoh, Firginia
// Golung, Christina
// Antarani, Christiviana
// Tutupary, Andrew
// Wuisan, Josua

// Destructuring Array dan Object
const person = { nama: 'Dipsy', usia: 20, pekerjaan: 'Hacker\n' };
const { nama, usia, pekerjaan } = person;

console.log(nama); // Output: 'Dipsy'
console.log(usia); // Output: 20
console.log(pekerjaan); // Output: 'Hacker'

// Destructuring Dengan Mengambil Sebagian Item Array dan Object
const numbers = [1, 2, 3, 4, 5];

// Mengambil dua item pertama dari array
const [first, second] = numbers; 

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(" ");

// Destructuring Dengan Menggunakan Default Value Array dan Object
const aturanSpd = { spdLaju: 130 };
const { spdLaju = 730, widLebar = 550 } = aturanSpd;
console.log(spdLaju); // 130 < Output yang dihasilkan
console.log(widLebar); // 550 < Output yang dihasilkan
console.log(" ");

// Destructuring Dengan Menggunakan Rest Operator Array dan Object
const buah = ["Rambutan", "Langsat", "Lemong", "Durian"];
const [firstBuah, secondBuah, ...otherBuah] = buah;
console.log(firstBuah); // Rambutan < Output yang dihasilkan
console.log(secondBuah); // Langsat < Output yang dihasilkan
console.log(otherBuah); // [Lemong, Durian] < Output yang dihasilkan

const personInfo = {
    namep: "Dipsy",
    ages: 20,
    city: "Manado",
    country: "Indonesia",
  };
  const { namep: personNamee, ...otherInfo } = personInfo;
  console.log(personNamee); // Dipsy < Output yang dihasilkan
  console.log(otherInfo); // { age: 20, city: 'Manado', country: 'Indonesia' } < Output yang dihasilkan