//different ways to declare variables

const yourFirstVar = 'Hello World';

const yourSecondVar = 42;

const yourThirdVar = { firstProperty: 'First Value' };

console.log(yourFirstVar);

let anotherVar;

anotherVar = 22;

console.log(anotherVar);

const variable1 = 10;

let variable2 = 11;

var variable3 = 12;

//error
//variable1=13;

let counter = 0;

counter++;

console.log(counter);

const yourFirstVariable = 1;
const your_first_variable = 1;
const YOUR_FIRST_VARIABLE = 1;
const yourfirstvariable = 1;
const YourFirstVariable = 1;

const var1 = 10;
const var2 = var1;
const var3 = "zach";
const var4 = {
    variableType: "object",
    variableValue: "some value",

};

const var5 = (function () {
    return "hello my name is "
})();

const var6 = var5 + var3;

console.log(var6);

typeof var1;

const myArray = [1, 2, 3, 4, 5];
myArray.push(6);
myArray.reverse();
console.log(myArray);

const firstArr = [1, 2, 3, 4, 5];
const secondArr = [6, 'a string', { firstProperty: 'dehejww' }];

console.log(firstArr[0]);
console.log(secondArr[2]);
console.log(secondArr[2].firstProperty);