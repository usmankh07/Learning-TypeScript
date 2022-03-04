"use strict";
let id = 5;
let company = 'Learn With Usman';
let isPublished = true;
let x = 'learn';
let ids = [1, 2, 3, 4, 5, 6];
// Tuple
let person = [2, 'Usman', false];
// Tuple of Array
let employee;
employee = [
    [1, 'Usman'],
    [2, 'Qaisar'],
    [3, 'Umer']
];
// Union
let pid;
pid = 'Usman';
// enum
var direction1;
(function (direction1) {
    direction1[direction1["Up"] = 0] = "Up";
    direction1[direction1["Down"] = 1] = "Down";
    direction1[direction1["Left"] = 2] = "Left";
    direction1[direction1["Right"] = 3] = "Right";
})(direction1 || (direction1 = {}));
var direction2;
(function (direction2) {
    direction2["Up"] = "Up";
    direction2["Down"] = "Down";
    direction2["Left"] = "Left";
    direction2["Right"] = "Right";
})(direction2 || (direction2 = {}));
console.log(direction1.Down);
console.log(direction1.Up);
console.log(direction1.Left);
console.log(direction1.Right);
console.log(direction2.Down);
const user = {
    id: 2,
    name: 'usman'
};
console.log(user.name);
console.log(user.id);
