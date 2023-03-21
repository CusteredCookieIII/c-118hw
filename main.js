counter=0;


function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth= window.speechSynthesis;
}

function clearCanvas(){
    background("white");
}

function preload(){
    classifier = ml5.imageClassifier('DoodleNet')
}

function draw(){
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    };
}

function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML = 'label '+ results[0].label;

    document.getElementById('confidence').innerHTML = 'Confidence' + Math.round(results[0].confidence * 100) + '%';

    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}

function start_timer(){
 counter++;
 
 if(counter>400){
    counter=0;
    
 }

}

