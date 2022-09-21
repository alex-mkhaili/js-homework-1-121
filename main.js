// #1

// let user = {
//     firstname: "giorgi",
//     lastname: "smith",
//     age: 25,
//     studentstatus: "active"
// };

// console.log(user.studentstatus);



// #2

// array = [15, "btu", 70, "eng", "drive", 1, "js"];

// // for (let x of array) {
// //     console.log(x)
// // }

// let x = 0;
// while (x < array.length) {
//     console.log(array[x]);
//     x++;
// };



// #3

// let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

// for (let item of numbers) {
//     if (item > 5) {
//         console.log(item)
//     };
// }



// #4

// let user = {
//     name: "giorgi",
//     age: 20,
//     studentstatus: "active"
// };

// if (user.age < 18 && user.studentstatus == "active") {
//     console.log("Hello");
// } else if (user.name == "levani") {
//     console.log("hello" + user.name);
// } else if (user.studentstatus == "active" || user.age < 25) {
//     console.log("hello world");
// } else {
//     console.log("error");
// };



// #5

// let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ];

// for (let item of array) {
//     if (typeof item == "string") {
//         console.log(item)
//     }
// }



// #6

// let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]

// for (let item0 of array[0]) {
//     if (item0 > 0) {
//         console.log(item0);
//     };
// }
// for (let item1 of array[1]) {
//     if (item1 > 0) {
//         console.log(item1);
//     };
// }
// for (let item2 of array[2]) {
//     if (item2 > 0) {
//         console.log(item2);
//     };
// }



// #7

// let array = [ 2, 3, 5, 10, 25, 24, 11, 100 , 6, 7, 10 ]

// for (item of array) {
//     if (item % 2 == 0) {
//         console.log(item);
//     };
// }

// for (item of array) {
//     if (item % 2 == 1) {
//         console.log(item);
//     };
// }



// #8

// let users = [
//     {username: 'giorgi', status: false},
//     {username: 'levani', status: false},
//     {username: 'anna', status: true}
// ]

// if (users[0].status == "true") {
//     console.log(users[0]);
// } else if  (users[1].status == "true") {
//     console.log(users[1]);
// } else {
//     console.log(users[2]);
// };