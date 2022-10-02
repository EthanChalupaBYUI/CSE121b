/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = 'Ethan'; //var name is not allowed >:(

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = myName;

// Step 3: declare and instantiate a variable to hold the current year
var year = '2022'

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerHTML = year;

// Step 5: declare and instantiate a variable to hold the name of your picture
var pictureLocation = 'images/me.jpg'

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('#picture').src = pictureLocation;



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
var favFoods = ['chocolate', 'apples', 'chocolate apples'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = favFoods;

// Step 3: declare and instantiate a variable to hold another favorite food
var foodToAdd = 'peanut butter';

// Step 4: add the variable holding another favorite food to the favorite food array
favFoods.push(foodToAdd);

// Step 5: repeat Step 2
document.querySelector('#food').innerHTML = favFoods;

// Step 6: remove the first element in the favorite foods array
favFoods.splice(0,1);

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = favFoods;

// Step 8: remove the last element in the favorite foods array
favFoods.pop();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = favFoods;

