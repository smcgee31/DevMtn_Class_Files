$(document).ready(function(){

    var colors = 'white green red blue yellow';
    var color = 'white';
    var boxes = $('.box')

    $('#reset').on('click', function(){
        boxes.removeClass(colors);
    });
    $('#red').on('click', function(){
        color = 'red';
    });
    $('#blue').on('click', function(){
        color = 'blue';
    });
    $('#green').on('click', function(){
        color = 'green';
    });
    $('#yellow').on('click', function(){
        color = 'yellow';
    });
    $('#white').on('click', function(){
        color = 'white';
    });

    boxes.on('click', function(){
        $(this).addClass(color);
    });
    boxes.on('dblclick', function(){
        $(this).removeClass(colors);
    });

});
