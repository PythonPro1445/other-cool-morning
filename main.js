
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_height = 90;
rover_width =  100;

var background_image = "mars.jpg";
rover_image =  "rover.jpg";

rover_x = 10;
rover_y = 10;


function add() 
{
    var backgroundimgtag = new Image();
    backgroundimgtag.onload = uploadBackground;
    backgroundimgtag.src = background_image;

    var roverimagetag = new Image();
    roverimgtag.onload = uploadrover;
    roverimgtag.src = rover_image
}

function uploadBackground()
{
    ctx.drawImage(backgroundimgtag ,0 ,0 , canvas.width, canvas.height);
}

function uploadrover()
{
    ctx.drawImage(roverimgtag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode
    console.log(keyPressed);
    if(keyPressed == '87')
    {
        up();
        console.log("up")
    }
    if(keyPressed == '83')
    {
        down();
        console.log("down")
    }
    if(keyPressed == '65')
    {
        left();
        console.log("left")
    }
    if(keyPressed == '68')
    {
        right();
        console.log("right")
    }
}


function up()
{
    if(rover_y >= 0)
    {
        rover_y = rover_y - 10;
        console.log("when up arrow is pressed , X = " + rover_x + "Y = " + rover_y);
        uploadBackground();
        uploadrover();  
    }
}

function down()
{
    if(rover_y <= 500)
    {
        rover_y = rover_y + 10;
        console.log("when up arrow is pressed , X = " + rover_x + "Y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left()
{
    if(rover_x >= 0)
    {
        rover_x = rover_x - 10;
        console.log("when up arrow is pressed , X = " + rover_x + "Y = " + rover_y);
        uploadBackground();
        uploadrover();        
    }
}

function right()
{
    if(rover_y <= 700)
    {
        rover_y = rover_y + 10;
        console.log("when up arrow is pressed , X = " + rover_x + "Y = " + rover_y);
        uploadBackground();
        uploadrover();        
    }
}