// alert("Hello, SDA!");       /* function box. no so much used nowadays. */

console.log("I may be a Front-end Developer!")  /* can be used to debugging */

var fullName = "Kristel Talimaa";

console.log(fullName.length);   /* gives length of the string. reset trend is not to used the var, but use let! stands for variable also */
console.log(fullName);

let locationCity = "Tallinn";

const ZIPCODE = 80041;      /* using const for constant and always use CAPS letters */

// locationCity = "Tartu"; /* can change location value, but not zipcode value */

let isActive = true;    /* can act as boolean */
let age = 32;
let salary = 4500.00;

// Comparison
let a = '5';    /* char */
let b = 5;  /* int */


if (a == b) {
    console.log("A is same value as B.");       // value comparison
} else if (a === b) {
    console.log("A is same value and type as B.");      // value and type comparison
}


let arrayFruit = ["Apple", "Orange", "Mango"];
console.log(arrayFruit);

// removing last element in the array
arrayFruit.pop();
console.log(arrayFruit);

// adding new element to the array
arrayFruit.push("Banana");
console.log(arrayFruit);

// JSON - JavaScript Object Notation
let student = {
    "name": "Kristel Talimaa",
    "age": 26,
    "address": {
        "street": "Lina",
        "city": "Pärnu",
        "zipcode": 80041
    },
    "joinDate": "2023-02-02",
    "active": true,
    "grade": 5.0
}
console.log(student);
console.log(student.name);      // gives only the name of the student
console.log(student.address);
console.log(student.address.city);  // gives the city
console.log(Object.keys(student));  // gives all the keys of the student (name, age, address, join date etc. street, city and zip belongs to address, so it doesn't show)

// Array of JSON or JSON array
// list of student
let students = [
    {
        "name": "Kristel Talimaa",
        "age": 26,
        "address": {
            "street": "Lina",
            "city": "Pärnu",
            "zipcode": 80041
        },
        "joinDate": "2023-02-02",
        "active": true,
        "grade": 5.0
    },
    {
        "name": "Martin Põlluste",
        "age": 27,
        "address": {
            "street": "Lina",
            "city": "Pärnu",
            "zipcode": 80041
        },
        "joinDate": "2023-02-02",
        "active": true,
        "grade": 5.0
    }
];
console.log(students);
console.log(students[1]);
console.log(students[0].joinDate);

students.forEach(s => console.log(s.name));

// FUNCTIONS
function isStudentPassed(student) {        // checks that is passed
    return student.grade > 3.5;     // checks grade
}

let studentPassResult = isStudentPassed(student);       // gets value and saves into variable
console.log(student.name + "'s result : " + studentPassResult);     // prints value


// Accessing HTMLs
// getElementByName is an array for example. if one tag has same name and another on has also same name, so html gets confuses and fetches all same named tags
let image = document.getElementById("image-block");
image.innerHTML = "<h2>Hello!!</h2>";
console.log(image);

let liTags = document.getElementsByTagName("li");
console.log(liTags);

function showMeAlert() {
    alert("Contact me for emergency!");
}

function showAlert() {
    alert("This field is mandatory to be filled!");
}


// Arrow functions
const isStudentPassed2 = (student) => {
    return student.grade > 3.5;
};
isStudentPassed2(student);
































