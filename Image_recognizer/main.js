
camera=document.getElementById("camera");
Webcam.set({
    Width:360,
    Height:300,
    image_format:'png',
    png_quality:90,
});


webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="caputure_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/kzQy7X7rX/model.json',modelLoaded);