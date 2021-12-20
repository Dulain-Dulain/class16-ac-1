
var box1,box2,box3;

function setup() {
  createCanvas(600, 400);
 box1 = new Box()
 box2 = new Box()
 box3 = new Box()
}

function draw() {
  background(220);
  fill ("purple")
  box1.show()
  box1.move(2)
  fill ("green")
  box2.show()
  box2.move(1)
  fill ("yellow")
  box3.show()
  box3.move(3)

}

