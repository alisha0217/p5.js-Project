function preload(){

}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide(); 
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function gotPoses(Results){
    if (Results.length > 0){
        console.log(Results);
        console.log("nose x = " + Results[0].pose.nose.x );
        console.log("nose y = " + Results[0].pose.nose.y );
    }

}

function modelLoaded(){
    console.log("poseNet has started");
}

function draw(){
    image(video, 0, 0, 400, 400);
}

function take_snapshot(){
    save('my_filtered_img.png');
}