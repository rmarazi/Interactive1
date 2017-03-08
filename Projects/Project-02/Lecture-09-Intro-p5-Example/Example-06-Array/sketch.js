function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0,0,255);
}

function draw() {
	noLoop();
	background(0,0,255);
	fill(255,0,0);
	rect(0,0,width/2, height);
	var names=["Bicep", "Tricep", "Chest", "Calf", "Quad", "Booty", "Back", "Forearm", "Hamstrings", "Abs", "Shoulders", "Obliques"];
	var name = random(names);
	textAlign(CENTER);
	textSize(100);
	fill(255,255,255);
	var myLink;
	text(name, width/4, height/2)
	myLink = createA( 'Page1/page1.html','text link');

		fill(255,0,0);
	rect(width/2,0,width/2, height);
	var names2=["2 sets of 3", "5 sets of 2", "4 sets of 20", "3 sets of 5", "4 sets of 15", "3 sets of 10"];
	var name2 = random(names2);
	textAlign(CENTER);
	textSize(100);
	fill(255,255,255);
	text(name2, 3*width/4, height/1.9);


}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}



