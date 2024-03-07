var canvas;
var webcam;
var music;
var model;
var left_wrist_x = 0;
var left_wrist_y = 0;
var right_wrist_x = 0;
var right_wrist_y = 0;
var score_left_wrist = 0;
 
function preload(){
music = loadSound("music.mp3")
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
     model= ml5.poseNet(webcam,alertmodel);
     model.on("pose",modelcheck);
    }
function draw(){
image(webcam,0,0,600,500);
}
function play(){
    music.play();
    document.getElementById("stop").style.visibility="visible";
    document.getElementById("show").style.visibility="hidden";
    
}
function stop(){
    music.stop();
    document.getElementById("show").style.visibility="visible";
    document.getElementById("stop").style.visibility="hidden";
}
