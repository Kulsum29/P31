class Division {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      strokeWeight(1)
      rectMode(CENTER);
      stroke("black")
      fill("#ff66ff");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
