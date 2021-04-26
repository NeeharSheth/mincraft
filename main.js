var canvas= new fabric.Canvas("myCanvas");

block_img_width= 30;
block_img_height= 30;

player_x=23;
player_y= 100;

var player_obj="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_obj= Img;
        player_obj.scaleToWidth(150);
        player_obj.scaleToHeight(150);
        player_obj.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_obj);
    });

}

function new_img(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        block_img_obj= Img;
        block_img_obj.scaleToWidth(block_img_width);
        block_img_obj.scaleToHeight(block_img_height);
        block_img_obj.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_obj);
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed= e.keyCode;
    console.log(keypressed);
    if (e.shiftKey==true && keypressed=="80"){
        console.log("shift+p");
        block_img_width= block_img_width+10;
        block_img_height= block_img_height+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }

    if (e.shiftKey==true && keypressed=="77"){
        console.log("shift+m");
        block_img_width= block_img_width-10;
        block_img_height= block_img_height-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }

    if(keypressed == "37"){
        left();
        console.log("left");
    }
    
    if(keypressed == "38"){
        up();
        console.log("up");
    }
    
    if(keypressed == "39"){
        right();
        console.log("right");
    }
    
    if(keypressed == "40"){
        down();
        console.log("down");
    }

    if(keypressed=="87"){
        new_img("wall.jpg");
        console.log("wall")
    }

    if(keypressed=="71"){
        new_img("ground.png");
        console.log("ground");
    }

    if(keypressed=="76"){
        new_img("light_green.png");
        console.log("light green");
    }

    if(keypressed=="84"){
        new_img("trunk.jpg");
        console.log("trunk");
    }

    if(keypressed=="82"){
        new_img("roof.jpg");
        console.log("roof");
    }

    if(keypressed=="89"){
        new_img("yellow_wall.png");
        console.log("yellow wall :D");
    }

    if(keypressed=="68"){
        new_img("dark_green.png");
        console.log("dark green");
    }

    if(keypressed=="85"){
        new_img("unique.png");
        console.log("unique");
    }

    if(keypressed=="67"){
        new_img("cloud.jpg");
        console.log("cloud");
    }
}

function right(){
    if (player_x<=653){
    player_x+= block_img_width;
    canvas.remove(player_obj);
    player_update();
console.log("x= "+player_x+"y= "+player_y);
console.log("block width "+block_img_width);
}
}

function left(){
    if (player_x>=0){
    player_x-= block_img_width;
    canvas.remove(player_obj);
    player_update();
console.log("x= "+player_x+"y= "+player_y);
console.log("block width "+block_img_width);
}
}

function down(){
    if (player_y<=460){
    player_y+= block_img_height;
    canvas.remove(player_obj);
    player_update();
console.log("x= "+player_x+"y= "+player_y);
console.log("block width "+block_img_height);
}
}

function up(){
    if (player_y>0){
    player_y-= block_img_height;
    canvas.remove(player_obj);
    player_update();
console.log("x= "+player_x+"y= "+player_y);
console.log("block width "+block_img_height);
}
}