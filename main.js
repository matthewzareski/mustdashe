function preload() {

}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotposes);
}

function draw(){
image(video, 0,0,300,300);
}

function take_snapshot(){
    save('UwU.png')
}

function modelLoaded(){
    console.log("model was initialised lol");
}

function gotposes(result){
if(result.length > 0){
console.log(result);
console.log('nose x='+result[0].pose.nose.x);
console.log('nose y='+result[0].pose.nose.y);
}
}