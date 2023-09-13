// 1
function multiply(a, b) {
    return a * b;
}


// 2
var name;
switch (id) {
    case 1:
        name = 'mercury';
        break;
    case 2:
        name = 'venus';
        break;
    case 3:
        name = 'earth';
        break;
    case 4:
        name = 'mars';
        break;
    case 5:
        name = 'jupiter';
        break;
    case 6:
        name = 'saturn';
        break;
    case 7:
        name = 'uranus';
        break;
    case 8:
        name = 'neptune';
        break;
    default:
        name = 'invalid id';
        break;
}

// 3
function solution(str) {
    const arr = str.split('');
    const reversedArr = arr.reverse();
    const finalAns = reversedArr.join('');
    return finalAns;
}

// 4
function evenOrOdd(num) {
    if (num % 2 == 0) {
        return 'Even';
    }
    else {
        return 'Odd';
    }
}

// 5
function getCount(str) {
    let vowelsCount = 0;
    const arr = str.split(" ");

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'a':
                vowelsCount++;
                break;
            case 'e':
                vowelsCount++;
                break;
            case 'i':
                vowelsCount++;
                break;
            case 'o':
                vowelsCount++;
                break;
            case 'u':
                vowelsCount++;
                break;
        }
    }
    return vowelsCount;
}

// 6
function greet(name) {
    if (name == "jhonny") {
        return "Hello, my love!";
    }
    return "Hello, " + name + "!";
}

// 7
function isDivisible(n, x, y) {
    const result = n / x;
    const result2 = n / y;

    if (result % 1 == 0 && result2 % 1 == 0) {
        return true;
    }
    else {
        return false;
    }
}

// 8
function makeNegative(num) {
    if (num < 0) {
        return num;
    }
    else {
        return num * -1;
    }
}

// 9
class SmallestIntegerFinder {
    findSmallestInt(arrayOfNumbers) {
        let smallest;
        for (let i = 0; i < arrayOfNumbers.length; i++) {
            const arrNum = arrayOfNumbers[i];
            if (i == 0) {
                smallest = arrNum;
            }
            else if (arrNum < smallest) {
                smallest = arrNum;
            }
        }
        return smallest;
    }
}

// 10
var summation = function (num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// 11
function getAvg(scoreArray) {
    const count = scoreArray.length;
    let sum = 0;
    for (let i = 0; i < scoreArray.length; i++) {
        sum += scoreArray[i];
    }
    const avg = sum / scoreArray.length;
    const roundedAvg = Math.round(avg);
    return roundedAvg;
}

// 12
const rockPaperScissors = (p1, p2) => {
    if (p1 == rock) {
        if (p2 == rock) {
            return "Draw!";
        }
    }
    else if (p1 == rock) {
        if (p2 == paper) {
            return "Player 2 won!";
        }
    }
    else if (p1 == rock) {
        if (p2 == scissors) {
            return "Player 1 won!";
        }
    }
    else if (p1 == paper) {
        if (p2 == rock) {
            return "Player 1 won!";
        }
    }
    else if (p1 == paper) {
        if (p2 == paper) {
            return "Draw!";
        }
    }
    else if (p1 == paper) {
        if (p2 == scissors) {
            return "Player 2 won!";
        }
    }
    else if (p1 == scissors) {
        if (p2 == rock) {
            return "Player 2 won!";
        }
    }
    else if (p1 == scissors) {
        if (p2 == paper) {
            return "Player 1 won!";
        }
    }
    else {
        return "Draw!";
    }
}

// 13
function removeChar(str) {
    const lengthOfString = str.length;
    return str.substring(1, lengthOfString - 2);
};

// 14
function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// 15
function basicOP(operation, v1, v2) {
    let result;
    switch (operation) {
        case '+':
            result = v1 + v2;
            break;
        case '-':
            result = v1 - v2;
            break;
        case '*':
            result = v1 * v2;
            break;
        case '/':
            result = v1 / v2;
            break;
    }
    return result;
}

// 16
function basicOP(operation, v1, v2) {
    const operationString = v1 + operation + v2;
    const result = eval(operationString);
    return result;
}

// 17
function repeatStr(n, s) {
    let starterStr = '';
    for (let i = 0; i < n; i++) {
        starterStr += s;
    }
    return starterStr;
}

// 18
function stringToArray(string) {
    return string.split(" ");
}

// 19
function noSpace(str) {
    const arr = str.split(" ");

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        const trimmedStr = array[i].trim();
        newArr.push(trimmedStr);
    }

    const finalStr = newArr.join(" ");
    return finalString;
}

// 20
function maps(arr) {
    const result = arr.map((arrItem) => {
        return arrItem * 2;
    });
    return result;
}

// 21
function century(year) {
    const firstTwoDigits = year.toString().substr(0, 2);

    if (year % 100 === 0) {
        return Number(firstTwoDigits);
    }
    else {
        return Number(firstTwoDigits) + 1;
    }
}

// 22
function century(year) {
    return Math.ceil(year / 100)
}

// 23
var humanYearCatYearsDogYears = function (humanYears) {
    let catsAge;
    let dogsAge;

    if (humanYears === 1) {
        return [humanYears, 15, 15];
    }

    if (humanYears === 2) {
        return [humanYears, 24, 24];
    }

    const excessYears = humanYears - 2;
    const extraCatYears = excessYears * 4;
    const extraDogYears = excessYears * 5;

    return [humanYears, 24 + extraCatYears, 24 + extraDogYears];
}

// 24
function points(gamesArray) {
    let totalPoints = 0;

    for (let i = 0; i < gamesArray.length; i++) {
        const value = gamesArray[i];

        const parts = value.split(":");

        const x = parts[0];
        const y = parts[1];

        if (x > y) {
            totalPoints = totalPoints + 3;
        }
        else if (x === y) {
            totalPoints += 1;
        }
    }
    return totalPoints;
}