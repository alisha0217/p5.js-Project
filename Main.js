function setup(){
    canvas=createCanvas(640,480);
    canvas.position(100,150);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){

    image(video, 230,150,220,200);

    
    fill(155,159,218);
    stroke(155,159,218)
    rect(90,420,490,20)

    fill(155,159,218);
    stroke(155,159,218)
    rect(85,30,490,20)


    fill(155,159,218);
    stroke(155,159,218)
    rect(40,30,20,440)

    fill(155,159,218);
    stroke(155,159,218)
    rect(590,25,20,440)


    fill(168,123,191);
    stroke(168,123,191)
    circle(50,50,80)

    fill(92,39,118);
    stroke(92,39,118)
    circle(30,30,80)


    fill(92,39,118);
    stroke(92,39,118)
    circle(30,450,80)

    fill(168,123,191);
    stroke(168,123,191)
    circle(50,430,80)
    
    
    fill(168,123,191);
    stroke(168,123,191)
    circle(610,430,80)
    
    fill(92,39,118);
    stroke(92,39,118)
    circle(630,450,80)


    fill(92,39,118);
    stroke(92,39,118)
    circle(630,30,80)
    
    fill(168,123,191);
    stroke(168,123,191)
    circle(610,50,80)

}

function take_snapshot(){
    save("p5_image.png");
}



