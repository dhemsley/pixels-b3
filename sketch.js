var rusheaSlider;
var greenSlider;
var blueSlider;


function setup(){
    createCanvas(600,400);
    background(0);
    
    //createSlider(min, max, default)
    rusheaSlider = createSlider(0, 255, 113)
   rusheaSlider.position(20,20); 
   
   greenSlider = createSlider(0, 255, 113)
   greenSlider.position(20,50);
   
   blueSlider = createSlider(0, 255, 113);
   blueSlider.position(20,80)
}

function draw(){
    redValue = rusheaSlider.value();
    greenValue = greenSlider.value();
    blueValue = blueSlider.value();
    
background(redValue, greenValue, blueValue);
}