"use strict"

let circle = {
    radius: 100,
    center: {
        x: 0,
        y: 0,
        show(){console.log(`${this.x}, ${this.y}`)}
    }
}
circle.center.show();

let test = {
    point: circle.center
}
test.point.show();

circle.center.x = 10;
circle.center.show();
test.point.show();