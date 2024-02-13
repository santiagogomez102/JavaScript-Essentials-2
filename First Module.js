"use strict"

console.log(typeof 2.5);
console.log(typeof "one two three");
console.log(typeof false);

let nr = 2.5;
nr = nr / 2;
console.log(typeof nr);

console.log(typeof nr1); // Undeclared variable

let a = [10, 20, "en to tre", true, 50];
a[4] = a[4] * 2;
console.log(a[0]);
console.log(a[2]);
console.log(a[4]);

let sampleObject = {
    id: 10,
    delay: 20,
    name: "en to tre",
    isPresent: true,
    delay: 50
};
sampleObject.delay = sampleObject.delay * 2;
console.log(sampleObject.id);
console.log(sampleObject.name);
console.log(sampleObject.delay);