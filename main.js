https://teachablemachine.withgoogle.com/models/YspOss4rJ/

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/YspOss4rJ/model.json", modelReady);
};

function modelReady() {
    classifier.classify(gotResults);
    
}