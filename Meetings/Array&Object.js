//Name : Mntiri, Gradity Beca Laurette
//Class : Front End
//Exercise 3



let people = ["Greg", "Mary", "Devon", "James"];

// // 1. Using a for-loop
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// 2. Using forEach()
people.forEach(person => {
    console.log(person);
});

// 3. Remove "Greg"
people.shift();
console.log(people)

// 4. Remove "James"
people.pop();
console.log(people)

// 5. Add "Matt" to the front
people.unshift("Matt");
console.log(people)

// 6. Add your name to the end
people.push("Gradity");
console.log(people)

// 7. Iterate with break
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;
    }
}


// 8. Make a copy without "Mary" and "Matt"
let copy = people.slice(1, 3);
console.log(people)

// 9. Reset people array and perform splice
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people)

// 10. Create withBob array
let withBob = people.concat("Bob");

console.log(withBob);

//OBJECT

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1. Add "Go" to languages
programming.languages.push("Go");


// 2. Change difficulty using bracket notation
programming["difficulty"] = 7;


// 3. Remove jokes key
delete programming.jokes;


// 4. Add new key using dot notation
programming.isFun = true;


// 5. Iterate and update languages using map()
programming.languages = programming.languages.map((language, index) => `${index} - ${language}`);

console.log(Object);
console.log(programming.languages);