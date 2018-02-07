var dinosaurs;

var img = new Image();
var div = document.getElementById("x");



function preload(){
  dinosaurs = loadJSON("dinosaurs.json");
   
    
    
}

function setup() {
    
  createCanvas(800, 400);
    background(0);
    
    let a = dinosaurs.names[floor(random(dinosaurs.names.length))];
    let b = dinosaurs.names[floor(random(dinosaurs.names.length))];
    let c = dinosaurs.names[floor(random(dinosaurs.names.length))];
    let d = dinosaurs.names[floor(random(dinosaurs.names.length))];
    fill(255);
    text("I think " + a + "tastes delicious", 10, 50);
    text("But I would never eat my pet " + b + ", it's too young", 10, 70);
    text("I did try eating " + c + ", it tastes horrible. Too crunchy for my taste", 10, 90,);
    text("But I gotta say, nothing is better on a Sunday BBQ than the smell of " + d + " on a grill", 10, 110);
    
}

function draw() {
    
    
    //fill(255);
    //text("I love to eat "+dinosaurs.names[1]+"s.", 10, 50);
    //text("I love to eat "+dinosaurs.names[floor(random(dinosaurs.names.length))]+"s.", 10, 50);

}