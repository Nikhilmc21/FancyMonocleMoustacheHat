noseX=0;
noseY=0;
RightEyeX=0;
RightEyeY=0;
function preload() {
    clown_nose=loadImage('https://i.postimg.cc/d3H5Z5Fp/image-removebg-preview.png');
    monocle=loadImage('https://i.postimg.cc/Fs0p0bvY/image-removebg-preview-1.png');
    tophat=loadImage('https://i.postimg.cc/3xsD1VZ7/image-removebg-preview-2.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video,0 ,0, 300, 300);
    image(clown_nose, noseX-40, noseY-10, 80, 50);
    image(monocle, RightEyeX-40, RightEyeY-30, 80, 80);
    image(tophat, RightEyeX-80, RightEyeY-140, 120, 120);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        RightEyeX = results[0].pose.leftEye.x;
        RightEyeY = results[0].pose.leftEye.y;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}