/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

function add(num1, num2){
    return num1 + num2;
}
function addNumbers(){
    const addend1 = Number(document.getElementById('addend1').value);
    const addend2 = Number(document.getElementById('addend2').value);
    const output = document.getElementById("sum");
    output.value = add(addend1, addend2);
    console.log(output.value);
}
const addButton = document.getElementById("addNumbers");
addButton.addEventListener('click', addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(num1, num2){
    return num1 - num2;
}
function subtractNumbers(){
    const minuend = Number(document.getElementById('minuend').value);
    const subtrahend = Number(document.getElementById('subtrahend').value);
    const output = document.getElementById("difference");
    output.value = subtract(minuend, subtrahend);
}
const subtractButton = document.getElementById("subtractNumbers");
subtractButton.addEventListener('click', subtractNumbers);
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

const multiply = (num1, num2) => {return num1 * num2};
function multiplyNumbers(){
    const factor1 = Number(document.getElementById('factor1').value);
    const factor2 = Number(document.getElementById('factor2').value);
    const output = document.getElementById("product");
    output.value = multiply(factor1, factor2);
}
const multiplyButton = document.getElementById("multiplyNumbers");
multiplyButton.addEventListener('click', multiplyNumbers);
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
const divide = (num1, num2) => {return num1 / num2};
function divideNumbers(){
    const dividend = Number(document.getElementById('dividend').value);
    const divisor = Number(document.getElementById('divisor').value);
    const output = document.getElementById("quotient");
    output.value = divide(dividend, divisor);
}
const divideButton = document.getElementById("divideNumbers");
divideButton.addEventListener('click', divideNumbers);
// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
const date = new Date();
const year = date.getFullYear();
console.log(year)
const HTMLyear = document.getElementById("year");
HTMLyear.innerHTML = year;

// Step 4: Assign the current year variable to an HTML form element with an ID of year
/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const numArray = [];
function makeArray(){
    for (let i = 1; i <= 25; i++) {
        numArray.push(i);
    }
}
makeArray();
console.log(numArray);
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
const htmlarray = document.getElementById("array");
htmlarray.innerHTML = numArray;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
oddArray = [];
numArray.forEach(oddFinder);

function oddFinder(item){
    if(item % 2 != 0){
        oddArray.push(item);
    }
}
const oddhtmlarray = document.getElementById("odds");
oddhtmlarray.innerHTML = oddArray;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
evenArray = [];
numArray.forEach(evenFinder);
function evenFinder(item){
    if(item % 2 == 0){
        evenArray.push(item);
    }
}
const evenhtmlarray = document.getElementById("evens");
evenhtmlarray.innerHTML = evenArray;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
arraySum = 0;
numArray.forEach(sumAll);
function sumAll(item){
    arraySum += item;
}
const sumhtmlarray = document.getElementById("sumOfArray");
sumhtmlarray.innerHTML = arraySum;
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
doubleArray = [];
numArray.forEach(double);
function double(item){
    doubleArray.push(item*2);
}
const doublehtmlarray = document.getElementById("multiplied");
doublehtmlarray.innerHTML = doubleArray;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
doubleArray.forEach(sumAll);
const doublesumhtmlarray = document.getElementById("sumOfMultiplied");
doublesumhtmlarray.innerHTML = arraySum;