class groot{
    constructor(x, y){
    var options = {
        isStatic: true
    }
      this.width = 450;
      this.height = 600;
      this.thickness = 10;
      this.image = loadImage("images/groot.png");
      World.add(world, this.body);
      this.body = Bodies.rectangle(x,y,width,height,options);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y)
      imageMode(CENTER);
      fill(255);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };