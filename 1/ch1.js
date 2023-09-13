// challenge #1
var myBoolean = true;
var myString = "Hello world";
var firstNum = 20;
var secondNum = 40;
secondNum = 80;
var myArray = [myBoolean, myString];
var myObject = { firstProperty: myArray, sumProperty: firstNum + secondNum };
console.log(myObject);
console.log(myObject.sumProperty);
console.log(myObject.firstProperty[1]);

/* challenge #2
 first: you cant change the value of a const variable
 second: wrong format variable declaration
 third: missing terminator
*/

/* challenge #3
   the result variable equals 2040. A string.
*/

// challenge #4
// the code is invalid because there should be commas instead of semicolons in object
const objectVariable = {
    property1: 'i am 1',
    property2: 'i am 2',
    property3: [20, 30, 40]
};

console.log(objectVariable.property3[2]);

// challenge #5
// this code doesnt work because the array index start with 0 not 1 so 3 is not an array index

const myArray2 = [20, 30, 40];
console.log(myArray2[2]);