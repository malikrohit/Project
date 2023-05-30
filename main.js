function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(700, 250);



}

function draw()
{

    fill(204, 101, 192, 127);
  stroke(127, 63, 120);


    rect(40, 120, 120, 40);

  ellipse(240, 240, 80, 80);
  ellipse(290, 290, 100, 100);
  triangle(300, 100, 320, 100, 310, 80);


  translate(580, 200);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);

}
}
