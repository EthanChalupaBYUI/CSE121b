/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const date = new Date();
// Step 2: Declare another variable to hold the day of the week
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
weekday = date.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
messageholder = '';
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
if(weekday != 6 & weekday != 0){
    messageholder='Hang in there!';
}else{
    messageholder='Woohoo!  It is the weekend!';

}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
messageholder2 = '';
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch(weekday){
    case 0:
        messageholder2='sunday';
        break;
    case 1:
        messageholder2='monday';
        break;
    case 2:
        messageholder2='tuesday';
        break;        
    case 3:
        messageholder2='wednesday';
        break;
    case 4:
        messageholder='thursday';
        break;
    case 5:
        messageholder='friday';
        break;
    case 6:
        messageholder='saturday';
        break;
}
/* OUTPUT */


// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
const MYmessage = document.getElementById("message1");
MYmessage.innerHTML = messageholder;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
const mymessage_2 = document.getElementById("message2");
mymessage_2.innerHTML = messageholder2;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
templeArray = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
function output(array){
    var element = document.createElement('article');
    for (var i = 0; i < array.length; i++) {
        var name = array[i].name;
        var location = array[i].location;
        var dedicated = array[i].dedicated;
        var imgurl = array[i].imageURL;
        console.log(imgurl);
        var h3 = document.createElement('h3');
        h3.appendChild(name);
        var h4 = document.createElement('h4');
        h4.appendChild(location);
        var h4 = document.createElement('h4');
        h4.appendChild(dedicated);
        var img = document.createElement('img');
        img.appendChild(imgurl);
        element.appendChild(h3);
        element.appendChild(h4);
        element.appendChild(h4);
        element.appendChild(img);

    }
}
// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
var templecall = [];

const url = 'https://byui-cse.github.io/cse121b-course/week05/temples.json';
async function getTemples(url){
    templecall = await fetch(url);
    console.log(templecall);
    if (templecall.ok){
        templeData = templecall.json();
        output(templeData);
        console.log(':)');
    }else{
        console.log('no response');
    }
}

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset(){
    temples = document.getElementById('temples');
    temples.innerHTML = '';
}
// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
function sortBy(){
    reset();
    if(document.getElementById('sortBy').value == 'templeNameAscending'){
        templelist.sort();
    }else{
        templelist.sort();
        templelist.reverse();
    }
    output(templelist);

}
// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.getElementById('sortBy').addEventListener('click',getTemples );
/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
