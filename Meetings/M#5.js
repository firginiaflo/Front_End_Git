// // Array 
// // Setiap Elemen diatur oleh index
// let students = ["john", "bob", "peter"]        //deklarasi  tipe data = string
// let numbers = [1,2,3,4,5];      //number
// let john = ["john", "doe", 35, true];       // tipe data string, number dan bollean

// console.log(students);
// console.log(numbers);
// console.log(john);
// console.log(john.length);       //length = agar bisa mengakses index

// // Array Index
// console.log(student[1]);
// students[1] = 'Jane';       //untuk mengubah data dalam array
// console.log(students);

// console.log(students[students.length - 1]);

// //Array Method
// //dia memiliki method-method yang bisa dipakai

// // toSrting
// console.log(john.toString());

// //Join = menghubungkan antara elemen 1 dengan yang lainnya
// console.log(john.join(" "));
// console.log(john.join("#"))

// //Pop = untuk menghapus elemen terakhir 
// john.pop();
// console.log(john);

// //Push = tambah elemen di index pertama
// john.push("Good Morning");
// console.log(john);

// //Shift = hapus array paling 1 
// john.shift();
// console.log(john);

// //Unshift = menambah array di paling 1
// john.unshift('Hello');
// console.log(john);

// //Splice = Memotong ditengah
// john.splice(3,0, true);
// console.log(john);

// //Slice = Menmbahkan Array baru dan memindahkannya
// let john2 = john.slice(2, 4);   //4 = tidak dihitung (hanya diambil sampai index 3)
// console.log(john2);

// //concat = menggabung array
// let combineArray = john.concat(numbers, john2);
// console.log(john2);



//Object
const joh; {
    firstName; 'John',
    lastName; "Doe",
    age; 33, 
    isMarried; true
    grade; [90, 80, 100],
    address; {
        city: "Manado",
        province: "Sulawesi Utara",
        postalCode: "95371",
    },
    sayGreetings: function () {
        console.log("Hello World");
    },
};

// Dot Nation
// console.log(john.firstName);
// console.log(john.grade[2]);
// console.log(john.address.city);
// console.log(john.sayGreetings());

//Bracket Notation
// console.log(john["firstName"]);
// console.log(john["grade"][2]);
// console.log(john["address"]["city"]);
// console.log(john["sayGreetings"]());

// john.job = "Teacher";

//Array Object
let students = [
    {
        id: 1,
        name: "John",
    },
    {
        id: 2,
        name: "John",
    },
    {
        id: 3,
        name: "Jack",
    },
]

students.forEach(function item {
    console.log item.name;
});

let output = students.map(function item {
    return item.name;
});

console.log(output);