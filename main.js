function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/WezfKtf_R/model.json',modelReady);
}
        function modelReady(){
            classifier.classify(gotResults);
        }
        function gotResults(error,results){
            if(error) {
                console.error(error);
            } else{
                console.log(results);
                random_number_r = Math.floor(Math.random()* 255)+1;
                random_number_g = Math.floor(Math.random()* 255)+1;
                random_number_b = Math.floor(Math.random()* 255)+1;
        
                document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
                document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+"%";
                document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        
                document.getElementById("result_confidence").style.color= "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        
                img4 = document.getElementById('parrot');
                img1 = document.getElementById('dog');
                img2= document.getElementById('cat');
                img3 = document.getElementById('lion');
        
                if(results[0].label == "Parrot") {
                    img4.src = 'Parrot.jpeg';
                    img1.src= false;
                    img2.src=false;
                    img3.src=false;
                    
        
                }else if(results[0].label == "Barking"){
                    
                    img1.src = 'Dog.jpeg';
                    img4.src= false;
                    img2.src=false;
                    img3.src=false;
                }
        
                else if(results[0].label == "Meowing"){
                    img2.src = 'Cat1.jpeg';
                    img1.src= false;
                    img4.src=false;
                    img3.src=false;

                    
                }
                else if(results[0].label == "Roaring"){
                    img3.src = 'lion.jpeg';
                    img1.src= false;
                    img2.src=false;
                    img4.src=false;
                    
                }
        
        
            }
        }
        