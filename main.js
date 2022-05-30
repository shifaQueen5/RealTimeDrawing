noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;
function setup(){
    canvas = createCanvas(900,500);
    canvas.position(700,100);
    webcam = createCapture(VIDEO);
    webcam.size(600,500);

    poseNet = ml5.poseNet(webcam,modelLoaded);
    poseNet.on('pose', gotResults);
}
function modelLoaded(){
    console.log('PoseNet is Loaded!');
}
function gotResults(results){
    if (results.length > 0){
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);
        console.log("leftWristX = "+leftWristX);
        console.log("rightWristX = "+rightWristX);

        document.getElementById("square_side").innerHTML = "Width and Height of square will be "+difference+"px";
    }
}
function draw(){
    background('#8f9696');
    fill('#460da8');
    stroke('#9b70e6');
    square(noseX,noseY,difference);
}