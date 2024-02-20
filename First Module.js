"use strict"

const x = 10;
// x = 20 can't be done as x is "const", not "let"

const contact = {};
// contact = { email: "RonaldSMurphy@freepost.org"}; can't be done as contact is "const", not let
contact.email = "RonaldSMurphy@freepost.org";
console.log(contact.email);
contact.email = "rsmurphy@briazz.com";
console.log(contact.email);
delete contact.email;
console.log(contact.email);