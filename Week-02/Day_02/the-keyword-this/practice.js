//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
    //   'this' is used to reference the object that 'this' is contained within. It creates consiseness and accuracy
    //   so that you aren't accessing other similarly named variables.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
    // Implicit Binding - whatever is left of the (dot) is what 'this' is pointing to.
    // Explicit Binding - whatever object is entered into the .call or .apply method is what 'this' is pointing to.
    // new Binding - the 'new' keyword allows the Constructor function to create a new object using the parameters.
    // Window Binding - when the 'this' keyword is not pointed to another object so then referes to the Window.

  // 3) What is the difference between call and apply?

      //Answer
    // .call will use directly entered arguments AFTER entering the object - cannot use an array
    // .apply is the same as .call but can use an array to enter the arguments AFTER entering the object

  // 4) What does .bind do?

      //Answer
    // .bind basically creates a new function that, when called has its 'this' keyword set to the provided object
    //  it allow a variable equal to a function to have a 'this' reference.

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property.
  //*Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {
    username: 'Steve',
    email: 'solodesign31@gmail.com',
    getUsername: function() {
        return this.username;
    }
}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername()

//Next Problem
// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
var Car = function(make, model, year, move) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.move = move;
    this.moveCar = function(move) {
        return this.move += 10;
    }
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is
//being returned from the Car function. You'll also need to use the 'this' keyword
//properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use
//the proper syntax that will allow for you to call the getYear function with the prius then
//the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
getYear.call(prius);
getYear.call(mustang);

//New Problem

var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

setTimeout(getMyUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds,
//what will the getUsername function return?
//Note(no tests)
  //Answer Here
// it will return "undefined" - unless you use a .call bind since the function doesn't point to any object.

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
// it is bound to the Window

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
setTimeout(getMyUsername.call(myUser), 5000);
