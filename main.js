noseX=0;
noseY=0;
function preload(){
clown=loadImage('https://i.postimg.cc/k46SmjVs/vector-black-mustache-gentleman-curled-260nw-1047958837-removebg-preview.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,300,300);
image(clown,noseX,noseY,70,50)
}
function take_snapshot(){
    save('myfilter.png');
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
        noseX=results[0].pose.nose.x-30;
        noseY=results[0].pose.nose.y;
    }
}