// Create canvas variable
block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
 // to upload images
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

 if(keyPressed == '82') 
 {
   block_x = 50;
   upload_image('rr')
 }
 if(keyPressed == '71')
 {
   block_x = 200;
   upload('gr')
 }
 
 if(keyPressed == '89')
 {
   block_x =350;
   upload_image('yr')
 }
 if(keyPressed == '80')
 {
   block_x = 600;
   upload_image('pr')
 }
 if(keyPressed == '66')
 {
   block_x = 700;
 upload_image('br')
 }
 
}
