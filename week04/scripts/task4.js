/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let personalInfo = {
    'name' : 'Ethan',
    'photo': 'images/me.jpg',
    'favoriteFoods' : ['cheese', 'bread', 'waffles'],
    'hobbies': ['video games', 'programming', 'hiking'],
    'placeslived': [ 
        {'place':'New York','length':'6 years'},
        {'place':'Texas','length':'7 years'},
        {'place':'Maryland','length':'7 months'},
        {'place':'Idaho','length':'7 months'},
    ],
}
// Step 2: Inside of the object, add a property named name with a value of your name as a string
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
// Step 6: Add another property named placesLived with a value of an empty array
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
const HTMLname = document.getElementById("name");
HTMLname.innerText = personalInfo.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById('photo').src = personalInfo.photo;
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById('photo').alt = personalInfo.name;
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

var ul = document.getElementById("favorite-foods");

for (var i = 0; i < personalInfo.favoriteFoods.length; i++) {
    var food = personalInfo.favoriteFoods[i];
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(food));
    ul.appendChild(li);
}


// Step 6: Repeat Step 4 for each hobby in the hobbies property
var ul = document.getElementById("hobbies");

for (var i = 0; i < personalInfo.hobbies.length; i++) {
    var hobby = personalInfo.hobbies[i];
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(hobby));
    ul.appendChild(li);
}
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
var dl = document.getElementById("places-lived");

for (var i = 0; i < personalInfo.placeslived.length; i++) {
    var place = personalInfo.placeslived[i];
    var dt = document.createElement('dt');
    dt.appendChild(document.createTextNode(place.place));
    var dd = document.createElement('dd');
    dd.appendChild(document.createTextNode(place.length));
    dl.appendChild(dt);
    dl.appendChild(dd);
}
