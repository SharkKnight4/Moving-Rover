canvas = document.getElementById("myCanvas");
c = canvas.getContext("2d");
rover_x = 10;
rover_y = 10;
rover_width = 100;
rover_heigth = 90;
background_image = "mars.jpg";
rover_image = "rover.png";
function add() {
    background_image_tag = new Image();
    background_image_tag.onload = uploadBackground();
    background_image_tag.src = background_image;
    rover_image_tag = new Image();
    rover_image_tag.onload = uploadRover();
    rover_image_tag.src = rover_image;
}
function uploadBackground() {
    c.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);
}
function uploadRover() {
    c.drawImage(rover_image_tag, rover_x, rover_y, rover_width, rover_heigth);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed = '38'){
        up();
        console.log("Up");
    }
    if (keypressed = '40'){
        down();
        console.log("down");
    }
    if (keypressed = '37'){
        left();
        console.log("Left");
    }
    if (keypressed = '39'){
        right();
        console.log("Right");
    }
}
function up() {
    if (rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("when Up Pressed X=" + rover_x + "y=" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if (rover_y <= 600) {
        rover_y = rover_y + 10;
        console.log("when Down Pressed X=" + rover_x + "y=" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("when Left Pressed X=" + rover_x + "y=" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("when Right Pressed X=" + rover_x + "y=" + rover_y);
        uploadBackground();
        uploadRover();
    }
}