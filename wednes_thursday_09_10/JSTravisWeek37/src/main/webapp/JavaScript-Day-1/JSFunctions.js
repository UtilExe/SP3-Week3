// OPGAVE 1:
// 
// Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2;
}

// Function Expression
var sub = function (n1, n2) {
    return n1 - n2
}

// Callback example
var cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};

// OPGAVE 2:
// 2) Call the functions above as sketched below. It’s not about doing it as fast as you can, but about understanding what's happening, so make sure you understand each line.

console.log(add(1, 2))     // 3 (1+2)
console.log(add)          // Undefined/Nothing. Add represents the first function that abtracts
console.log(add(1, 2, 3));   // 3. (Only the first two parameters are counted, (1+2). 
console.log(add(1));        // Nothing, because not both parameters are defined(?)
console.log(cb(3, 3, add));  // 6
console.log(cb(4, 3, sub));   // 1
//console.log(cb(3,3,add())); // ERROR, fails at runtime.
console.log(cb(3, "hh", add)); // 3hh

// OPGAVE 3:
var cb = function (n1, n2, callback) {
    try {
        // L35, L37, L38 er mit eget "custom" kode, for at sørge for at plus tegnet ikke vises, når vi kalder vores egen metode (mul) da det skal være divisionstegn. 
        if (callback !== mul)
            return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
        else {
            return "Result from the two numbers: " + n1 + "/" + n2 + "=" + callback(n1, n2);
        }
    } catch (e) {
        console.log(e.name + ". Der opstod en fejl. Valider din indtastning, kræver 2 tal som parameter + funktion (callback)")
    }
};

console.log(cb("test", "test"));
console.log(cb(3, 3, add));

// OPGAVE 4, 5:
/* 4)  Write a mul(n1, n2) function (inspired by add and sub) and use it as the callback for the cb function
 5) Call cb, this time with an anonymous function that divides the first argument with the second
 */
var mul = function (n1, n2) {
    return n1 / n2
}
console.log(cb(25, 5, mul))

// Getting comfortable with filter, map and forEach:
// OPGAVE 1:
var arrTask = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
arrTask.forEach(n => console.log(n));

function checkSize(size) {
    return size.length <= 3;
}
console.log("Navne med under 3 chars: ")
var nyMedTreChars = arrTask.filter(checkSize)
nyMedTreChars.forEach(n => console.log(n));

// OPGAVE 2: 
console.log("Opgave 2, all upper-case:")
var upper = arrTask.map(n => n.toUpperCase());
console.log(upper);

// OPGAVE 3:
// MED NEWLINES:
var arrayOfNamesWithSpaces = ["Lars", "Peter", "Jan", "Ian"]

var htmlPractice = function (dataArray) {
    let html = dataArray.map(n => '<li>' + n + '</li>' + "\n");
    return '<ul>' + "\n " + html.join(" ") + '</ul>'
}
console.log(htmlPractice(arrayOfNamesWithSpaces));

// UDEN NEWLINES:
console.log("OPGAVE 3 UDEN MELLEMRUM (DEFAULT): ")
let arrayOfNamesDefault = ["Lars", "Peter", "Jan", "Ian"]

var htmlPractice = function (dataArray) {
    let html = dataArray.map(n => '<li>' + n + '</li>');
    return '<ul>' + html.join(" ") + '</ul>'
}

console.log(htmlPractice(arrayOfNamesDefault));

// Grunden til at det skal være uden mellem er vel så det er HTML kompatibelt ift. konverteringer, eller hvad?


// OPGAVE 4:
var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];
console.log("Cars newer than 1999: ")
console.log(cars.filter(y => y.year > 1999));

console.log("All volvo's: ")
console.log(cars.filter(m => m.make === "Volvo"));

console.log("All cars with a price below 5000: ")
console.log(cars.filter(p => p.price < 5000));

// OPGAVE 4A
let SQLdata = cars.map(x => "INSERT INTO cars (id,year,make,model,price) VALUES ( " + x.id + ", " + x.year + ", " + x.make + ", " + x.model + ", " + x.price + "); ");
console.log(SQLdata);

// Asynchronous Callbacks, OPGAVE 1:
var msgPrinter = function (msg, delay) {
    setTimeout(function () {
        console.log(msg);
    }, delay);
};
console.log("aaaaaaaaaa"); // 1
msgPrinter("bbbbbbbbbb", 2000); // 5
console.log("dddddddddd"); // 2
msgPrinter("eeeeeeeeee", 1000); // 4 
console.log("ffffffffff"); // 3

// The rest are red tasks, which are skipped. Note for myself: Do them when I have extra free-time.
// https://docs.google.com/document/d/1g4NPayMnNV8UUNdoTLZdcf4BehCip14QDuRwa4V7uFU/edit#