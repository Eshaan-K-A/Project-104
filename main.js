Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 100,
});

//Attaching the camera. it can also be done by
//camera = document.getElementById("camera");
//Webcam.attach(camera);


Webcam.attach("#camera");
function captureImage(){
    //anonymous functions are those wich does not need a name. these functions are used when there is no need of calling it anywhere else.
    Webcam.snap(function(picture){
        //we are creating an imade tag inside the result div
        document.getElementById("result").innerHTML = "<img id='capturedImage' src='"+picture+"'>";
        console.log("Pasted image inside div")
        
    })
}

console.log("ml5 version ", ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5n3fzwbm4/", function(){
    console.log("model loaded")
})
//you can also write the above code like this

//classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5n3fzwbm4/model.json',modelLoaded); 
//function modelLoaded()
//{ console.log('Model Loaded!'); }



