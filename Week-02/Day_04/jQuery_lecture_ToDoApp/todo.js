//1) Set up document.ready

$('document').ready(function(){
    // 2) Insert this :
    var todoApp = $('#todoApp');
    var todoTitle = $('<h1>jQuery Todo App</h1>');
    var todoInput = $('<input placeholder=\'add an item...\'></input>');
    var todoAddItemButton = $('<button>Add</button>');
    var todoClearButton = $('<button>Remove All Done</button>');
    var todoList = $('<ul></ul>');
//    var todoItem = $('<li></li>');      <-- this needs to go into the funciton that creates it each time
    // 3) Append
    todoApp.append(todoTitle);
    todoApp.append(todoInput);
    todoApp.append(todoAddItemButton);
    todoApp.append(todoList);
    todoApp.append(todoClearButton);

    todoAddItemButton.on('click', function(){
        var userInput = todoInput.val();
        var todoItem = $('<li></li>');
        todoItem.text(userInput);
        todoList.append(todoItem)
    });

    todoList.on('click', 'li', function(){
        var clickedItem = $(this);
        clickedItem.toggleClass('done');
    });

    todoClearButton.on('click', function(){
        $('li.done').remove();
    });
});
