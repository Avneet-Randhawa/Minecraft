var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;
img_width = 30;
img_height = 30;
player_block = "";
image_object = "";

function update_player() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_block = Img;
        player_block.scaleToHeight(140);
        player_block.scaleToWidth(150);
        player_block.set({
            top: player_y,
            left: player_x
        })
        canvas.add(player_block);
    })
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        image_object = Img;
        image_object.scaleToHeight(img_height);
        image_object.scaleToWidth(img_width);
        image_object.set({
            top: player_y,
            left: player_x
        })
        canvas.add(image_object);
    })
}
window.addEventListener("keydown", my_keyDown);

function my_keyDown(e) {
    var keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == '80') {
        console.log("p and shift are prssed together");
        img_height = img_height + 10;
        img_width = img_width + 10;
        document.getElementById("current_height").innerHTML = img_height;
        document.getElementById("current_width").innerHTML = img_width;
    }

    if (e.shiftKey == true && keypressed == '77') {
        console.log("m and shift are prssed together");
        img_height = img_height - 10;
        img_width = img_width - 10;
        document.getElementById("current_height").innerHTML = img_height;
        document.getElementById("current_width").innerHTML = img_width;
    }
    if(keypressed == '87'){
        console.log("w");
        new_image("wall.jpg");
    }
    if(keypressed == '71'){
        console.log("g");
        new_image("ground.png");
    }
    if(keypressed == '84'){
        console.log("t");
        new_image("trunk.jpg");
    }
    if(keypressed == '76'){
        console.log("l");
        new_image("light_green.png");
    }
    if(keypressed == '82'){
        console.log("r");
        new_image("roof.jpg");
    }
    if(keypressed == '89'){
        console.log("y");
        new_image("yellow_wall.png");
    }
    if(keypressed == '68'){
        console.log("d");
        new_image("dark_green.png");
    }
    if(keypressed == '85'){
        console.log("u");
        new_image("unique.png");
    }
    if(keypressed == '87'){
        console.log("w");
        new_image("wall.jpg");
    }if(keypressed == '67'){
        console.log("c");
        new_image("cloud.jpg");
    }
    if(keypressed == '37'){
        left();
        console.log("Left");
    }
    if(keypressed == '38'){
        up();
        console.log("Up");
    }
    if(keypressed == '39'){
       right();
       console.log("Right");
    }
    if(keypressed == '40' ){
       down();
       console.log("Down");
    }
}
function up() {
    if (player_y >=0){
        player_y = player_y - img_height;
        console.log("When Up Arrow Key is pressed, X = " + player_x + "Y = " + player_y);
        canvas.remove(player_block);
        update_player();
    }
}
function down() {
    if (player_y < 500){
        player_y = player_y + img_height;
        console.log("When Up Arrow Key is pressed, X = " + player_x + "Y = " + player_y);
        canvas.remove(player_block);
        update_player();
    }
}
function left() {
    if (player_x >=0){
        player_x = player_x - img_width;
        console.log("When Up Arrow Key is pressed, X = " + player_x + "Y = " + player_y);
        canvas.remove(player_block);
        update_player();
    }
}
function right() {
    if (player_x < 850){
        player_x = player_x + img_width;
        console.log("When Up Arrow Key is pressed, X = " + player_x + "Y = " + player_y);
        canvas.remove(player_block);
        update_player();
    }
}