// 6
function validatePIN(pin) {
    const fourDigitsRegex = /(^[0-9]{4}$)/;
    const sixDigitsRegex = /(^[0-9]{6}$)/;

    const result1 = pin.match(fourDigitsRegex);
    const result2 = pin.match(sixDigitsRegex);

    return !(!result1 && !result2);
}

console.log(validatePIN('1234')); // true

// 7
function lowercasecount(str) {

    const result = str.match(/[a-z]/g);

    return result ? result.length : 0;
}

console.log(lowercasecount('abc')); // 3

// 8
function isToday(date) {
    const checkDay = date.getDay();
    const checkMonth = date.getMonth();
    const checkYear = date.getFullYear();

    const today = new Date();

    const todayDay = today.getDay();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    return checkDay === todayDay && checkMonth === todayMonth && checkYear === todayYear;
}

console.log(isToday(new Date())); // true

// 9
function capitalize(s) {
    const arr1 = s.split("");
    const arr2 = s.split("");

    arr1.forEach((item, index, original) => {
        if (index % 2 === 0) {
            original[index] = item.toUpperCase();
        }
    });

    arr2.forEach((item, index, original) => {
        if (index % 2 != 0) {
            original[index] = item.toUpperCase();
        }
    });

    const arr1Str = arr1.join("");
    const arr2Str = arr2.join("");

    return [arr1Str, arr2Str];
};

console.log(capitalize('abc'));

// 10 
function maxNum(n) {
    return +n.toString().split("").sort((first, second) => second - first).join("");
}

console.log(maxNum(3, 4));
