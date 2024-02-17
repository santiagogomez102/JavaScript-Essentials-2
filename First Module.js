"use strict"

let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};
contact.firstName = "Ronald";
contact.lastName = "Murphy";
console.log(contact.tel);
console.log(contact.firstName);
console.log(contact.notes);
contact.email = ["RonaldSMurphy@freepost.org", "rsmurphy@briazz.com"];
console.log(contact.email);
contact.email = {
    private: "RonaldSMurphy@freepost.org",
    work: "rsmurphy@briazz.com"
};
console.log(contact.email.work);
delete contact.email.work;
console.log(contact.email.work);
console.log(contact.email.private);

contact.tel === contact["tel"];                     //Same thing, different notation
contact.email.work === contact["email"]["work"];

let contact1 = {
    "first name": "Ronald"
};
contact1["first name"] = "Tim";
// contact.first name = "Tim"; ----> This notation doesn't work
//contact."first name" = "Tim"----> This notation doesn't work
console.log(contact1["first name"]);

let contact2 = {
    email_1: "RonaldSMurphy@freepost.org",
    email_2: "rsmurphy@briazz.com"
}
for(let i = 1; i <= 2; i++) {
    let key = "email_" + i;
    console.log(`${key}: ${contact2[key]}`);
}