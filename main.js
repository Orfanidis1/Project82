var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "black";
var linewidth = 2;
var mouseEvent = "";
var last_position_of_x, last_position_of_y;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseLeave";
    }
    canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUp";
    }
    canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_mouse_x = e.clientX - canvas.offsetLeft;
    current_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent = "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = linewidth;

        console.log("last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        
        console.log("current position of x and y coordinates = ");
        console.log("x = " + current_mouse_x + "y = " + current_mouse_y);
        ctx.lineTo(current_mouse_x, current_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_mouse_x;
    last_position_of_y = current_mouse_y;
    }