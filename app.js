"use strict";
// Types number, tring boolean object array types 
const num1Ele = document.getElementById('num1');
const num2Ele = document.getElementById('num2');
const buttonEle = document.querySelector('button');
const numResults = []; //specify what vlaues would be stored
//const textResuls = [];
function add(num1, num2) {
    return num1 + num2;
}
//console.log(add(1 , 6));
if (buttonEle) {
    buttonEle.addEventListener('click', () => {
        const num1 = num1Ele.value; //value always return string
        const num2 = num2Ele.value;
        const result = add(+num1, +num2);
        numResults.push(result);
        console.log(result);
        const ResultObj = { val: Number,
            timestamp: Date
        };
        printResult({ val: result, timestamp: new Date() }); //interface
        console.log(numResults);
    });
}
//working with objects
function printResult(resultObj) {
    console.log('object:' + resultObj.val);
}
//console.log(add('1', '6')); // complains as its string
