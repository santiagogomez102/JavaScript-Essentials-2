"use strict"

let contact = {
    _age: 36,
    firstName: "David",
    lastName: "Taylor",
    get fullName() {return `${this.firstName} ${this.lastName}`;},
    get age() {return this._age;},
    set age(a) {if( a > 0) this._age = a;}
};
let keys = Object.keys(contact);
console.log(keys);

let desc = Object.getOwnPropertyDescriptor(contact, "firstName");
console.log(desc);

let contact1 = {};
Object.defineProperty(contact1, "_age", {
    value: 36,
    writable: true,
    enumerable: false,
    configurable: true
});
let keys1 = Object.keys(contact1);
console.log(keys1);
contact1._age = 100;
console.log(contact1._age);

Object.defineProperty(contact1, "_age", {
    value: contact1._age,
    writable: false,
    enumerable: false,
    configurable: true
});
console.log(contact1._age);
// contact1._age = 200;   --> Error as property is not writable
console.log(contact1._age);

let enumKeys = Object.keys(contact1);
let allKeys = Object.getOwnPropertyNames(contact1);
console.log(enumKeys);
console.log(allKeys);

Object.preventExtensions(contact1);     //Can't add new properties
Object.seal(contact1);                  //Can't add, remove or reconfigure properties
Object.freeze(contact1);                //Similar to seal, additionally can't change values of properties
Object.isExtensible(contact1);
Object.isSealed(contact1);
Object.isFrozen(contact1);