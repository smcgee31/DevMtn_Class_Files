var appElement = $('#app')
var innerDiv = $('<div>DM10 is winning</div>');
var innerDiv2 = $('<div>DM10 is winning 2</div>');

appElement.append(innerDiv)
appElement.append(innerDiv2)

var oneElement = $('.one')

//TEXT
//Set the text
oneElement.text("Hey guys!");
//Get the text
console.log(oneElement.text());


//Append & Prepend
var twoElement = $('.two')
var listItem = $('<li>Yay</li>');

twoElement.append(listItem);

twoElement.prepend( $('<li>Yay 2</li>'))

//CSS
var threeElement = $('.three');

var isAwesome = false;

var color = isAwesome ? "Red" : "Blue";

var color2;
if(isAwesome) {
  color2 = "Red"
} else {
  color2 = "Blue"
}

threeElement.css({
  backgroundColor: color,
})

//Getting input
var inputBox = $('.typer')

inputBox.change(function(ev){
    var userInputValue = inputBox.val();
    threeElement.css({
       backgroundColor: userInputValue
    })
})


//HTML

var four = $('.four');

four.html("<span>No naps yet!</span>")

console.log(four.html())


//FIND

var grandpa = $(".Grandpa")
//.find
var grandkids = grandpa.find(".ChildrenfromFirstMarriage")

// grandkids.css({
//   backgroundColor: "Yellow"
// })


//.child
grandpa.children("div").css({
  backgroundColor: "Green"
})


//SHOW

four.hide()
four.show()

//TOGGLE CLASS

var big = $('.big')
big.toggleClass('big')
big.toggleClass('big')
big.toggleClass('big')
big.toggleClass('big')

//ADD / REMOVE CLASS

$('.colorme').addClass("yellow")
$('.colorme').removeClass("yellow")

//CLICK

big.on('click', function(){
  big.toggleClass('big')
})
