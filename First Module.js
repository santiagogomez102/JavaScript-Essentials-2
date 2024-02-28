"use strict"

let createPoint = function(x,y) {
    let obj = {};
    obj.x = x;
    obj.y = y;
    return obj;
};
let point1 = createPoint(1,1);
let point2 = createPoint(2,2);
console.log(point1.x);
console.log(point2.x);

let createPoint1 = function(x,y) {
    return {
        x:x,
        y:y
    }
};
let point11 = createPoint1(1,1);
let point21 = createPoint1(2,2);
console.log(point11.x);
console.log(point21.x);

let createPoint2 = function(x,y) {
    return {
        x,
        y
    }
};
let point12 = createPoint2(1,1);
let point22 = createPoint2(2,2);
console.log(point12.x);
console.log(point22.x);

let createPoint3 = (x, y) => ({x, y});
let point13 = createPoint3(1,1);
let point23 = createPoint3(2,2);
console.log(point13.x);
console.log(point23.x);

let createColoredPoint = function(x, y, color) {
    let _info = "... object under construction";
    let _color = color;
    console.log(_info);
    return {
        x,
        y,
        getColor() {return _color}
    }
};
let coloredPoint1 = createColoredPoint (1, 1, "red");
let coloredPoint2 = createColoredPoint (2, 2, "green");
console.log(coloredPoint1.getColor());
console.log(coloredPoint2.getColor());
console.log(coloredPoint1._color);      //Returns "undefined" as it is a local variable

let ColoredPoint = function(x, y, color) {
    let _info = "... object under construction";
    let _color = color;
    console.log(_info);
    
    this.x = x;
    this.y = y;
    this.getColor = function() {return _color};
};
let coloredPoint11 = new ColoredPoint (1, 1, "red");
let coloredPoint21 = new ColoredPoint (2, 2, "green");
console.log(coloredPoint11.getColor());
console.log(coloredPoint21.getColor());
console.log(coloredPoint1._color);      //Returns "undefined" as it is a local variable

console.log(coloredPoint11.constructor.name);
console.log(typeof coloredPoint11.constructor);

let a = {};
console.log(a.constructor.name);
console.log(typeof a.constructor);

let emptyObject = new Object();
console.log(emptyObject.constructor.name);

let anotherEmptyObject = {};
console.log(anotherEmptyObject.constructor.name);

let reallyEmptyObject = Object.create(null);
console.log(typeof reallyEmptyObject.constructor);