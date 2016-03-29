var person = {
    lastName: "McGee",
    firstName: "Steve",
    age: 45,
    hairColor: "brown",
    location: "Provo, UT"
    fullName: function() {
        return this.firstName + this.lastName;
    },
    changeName: function() {
        this.firstName = name;
    }
}

person.changeName('Bob');  //this grabs the person property changeName that is a Method and easily changes the value to bob


for(var prop in person) {
    if(person[prop] === "brown") {
        person[prop] = "blonde";
    }
}


var person2 = new Object({firstName: 'Ben',})

person.title = "developer";

var user = function(firstName, lastName, userName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.password = password;

}

var bob = new User('Bob', 'Dillon', 'b.dillon', 'bdillon@gmail.com', 'iamarocker');


var car = {
    make: 'Chevy',
    model: 'Camero',
    year: 2016,
    color: 'Red',
}

for (var prop in car) {
    console.log(prop);
}

// ARRAYS  --  ARRAYS  --  ARRAYS  --  ARRAYS

var users = [];

var user1 = {
    firstName: 'Steve',
    lastName: 'McGee'
}
var user1 = {
    firstName: 'Sally',
    lastName: 'West'
}
users.push(user1, user2);  //adds each user object into the array.

for (var i = 0; i < users.length; i++) {   //loop over the array and access the individual user.
    console.log(users[i]);
}

function removeName(arr, item) {        // finds the item within the array and cuts it out.
    var index = arr.indexOf(name);      // think of splice like film... cut out the part you don't want.
    if(index >= 0) {
        arr.splice(index, 1);
    }
    return arr;
}

var userOne = {
    firstName: 'Steve',
    lastName: 'McGee',
    email: 'smcgee@gmail.com',
    username: 'smcgee',
    password: 'ope4uthjgfw8whnnt8',
    age: 45
}
var userTwo = {
    firstName: 'Sally',
    lastName: 'West',
    email: 'swest@gmail.com',
    username: 'swest',
    password: 'fnwe5gpw4pye48',
    age: 23
}
var userThree = {
    firstName: 'Ben',
    lastName: 'Richards',
    email: 'brichards@gmail.com',
    username: 'brichards',
    password: 'jaoinu4p57u4wwhg',
    age: 65
}

// add the users into an array
var usersArr = [];
usersArr.push(user1, user2, user3);

// write a function that loops through the array, finds the specified user and changes their email address.
function changeEmail(array, property, value, newEmail) {
    for (var i = 0; i < usersArr.length; i++) {
        if (array[i][property] === value) {
            array[i].email = newEmail;
        }
    }
}

changeEmail(users, email, 'brichards@gmail.com', 'big_brichards@gmail.com');

//write a function that loops through the array, finds the specified user and removes them from the array.
function removeUser(array, property, value) {  // <------ its ok to use these generic words because it is all
    for (var i = 0; i < array.length; i++) {       // reference to the array you are working in and
        if (array[i][property] === value) {
            delete array[i];
        }
    }
}

removeUser(big_brichards@gmail.com);

for (variable of iterable) {

}
