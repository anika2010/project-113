function preload(){

}
function setup(){
    canvas=createCanvas(550,450);
    canvas.position(100,160);
    webcam=createCapture(VIDEO);
    webcam.hide();
}
function draw(){
    image(webcam,85,70,350,300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(40,40,80);
    circle(510,40,80);
    circle(40,410,80);
    circle(510,410,80);
    fill(0,200,0);
    stroke(0,200,0);
    rect(80,30,390,20);
    rect(80,410,390,20);
    rect(30,80,20,288);
    rect(500,80,20,288)
}
function take_snapshot(){
    save('mySelfie.png');
}