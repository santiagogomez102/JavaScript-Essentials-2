"use strict"

let point0 = {x: 10, y: 20};
let point1 = point0;
let point2 = Object.assign({}, point0);
console.log(point2.x);
console.log(point2.y);
console.log(point1 === point0);
console.log(point1 === point2);

let point3 = Object.assign({}, point0, {z: 100});
console.log(point3.z);

var point4 = Object.assign({}, point3, {z: 200, color: "red"});
console.log(point4.z);

//////////////

let point00 = {x: 10, y: 20};
let point01 = { ...point00};
let point02 = { ...point00, z: 100};
let point03 = { ...point02, ...{z: 200, color: "red"}};
let point04 = { ...point02, z: 200, color: "red"};

////////////////

let circle1 = {
    radius: 100,
    center: {
        x: 100,
        y: 100,
    }
};
let circle2 = {...circle1};
circle1.radius = 200;
circle1.center.x = 200;
console.log(circle2.radius);
console.log(circle2.center.x);
console.log(circle1 === circle2);
console.log(circle1.center === circle2.center);

///////////////

let deepClone = function(obj) {
    let newObj = {...obj};
    for (let property in newObj) {
        if (typeof newObj[property] === "object") {
            newObj[property] = deepClone(newObj[property]);
        }
    }
    return newObj;
}

///////////////

let circle3 = deepClone(circle1);
circle1.radius = 300;
circle1.center.x = 300;
console.log(circle3.radius);
console.log(circle3.center.x);
console.log(circle1 === circle3);
console.log(circle1.center === circle3.center);