// 1
function filter_list(numArr) {
    return numArr.filter(callbackFunc);
}

function callbackFunc(arrItem) {
    return arrItem >= 0 && typeof arrItem === 'number';
}
console.log(filter_list([1, 2, 'a', 'b'])); // [1, 2]

// 2
function arrayDiff(a, b) {
    if (a.length === 0)
        return [];

    if (b.length === 0) {
        return a;
    }

    let newA = a.slice();
    let newB = b.slice();

    a.forEach((arrItem) => {
        const aCopy = newA.slice();
        const bCopy = newB.slice();

        if (bCopy.includes(arrItem)) {
            newA = aCopy.filter(item => item !== arrItem);
            newB = bCopy.filter(item => item !== arrItem);
        }
    });

    return newA;
}

console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]

// 3
function list(names) {
    let finalString = '';

    if (names.length === 1) {
        return names[0].name;
    }

    names.forEach((arrItem, arrIndex) => {
        const name = arrItem.name;

        if (arrIndex === names.length - 1) {
            finalString = finalString + ' & ' + name;
        } else if (arrIndex === names.length - 2) {
            finalString = finalString + name;
        } else {
            finalString = finalString + name + ', ';
        }
    });

    return finalString;
}

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])); // returns 'Bart, Lisa & Maggie'
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }])); // returns 'Bart & Lisa'
console.log(list([{ name: 'Bart' }])); // returns 'Bart'

// 4
function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }

    let nOffset = 0;
    let sOffset = 0;
    let eOffset = 0;
    let wOffset = 0;

    walk.forEach((direction) => {
        switch (direction) {
            case 'n':
                nOffset++;
                break;
            case 's':
                sOffset++;
                break;
            case 'e':
                eOffset++;
                break;
            case 'w':
                wOffset++;
                break;
        }
    });

    return nOffset - sOffset === 0 && eOffset - wOffset === 0;
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // true

// 5
function persistence(num) {
    if (num < 10) {
        return 0;
    }

    const strVersion = num.toString();
    const arrVersion = strVersion.split("");
    const multiplicationValue = arrVersion.reduce((acc, num) => acc *= parseInt(num), 1);

    if (multiplicationValue >= 10) {
        return 1 + persistence(multiplicationValue);
    } else {
        return 1;
    }
}

console.log(persistence(39)); // Output: 3

