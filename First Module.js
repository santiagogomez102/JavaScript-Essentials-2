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