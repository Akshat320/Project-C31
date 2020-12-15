class Plinkos{

    constructor(x, y)
    {
        var options = {

            isStatic: true
        }

    this.radius = 10;
    
    this.body = Bodies.circle(x, y, this.radius, options);
  
    this.x = x;
    this.y = y;
 

    World.add(world, this.body);
    }

    display()
    {

     push();
     translate(this.body.position.x, this.body.position.y);
     rotate(this.body.angle);
     fill("while")
     ellipseMode(RADIUS);
     ellipse(0, 0, this.radius, this.radius);
     pop();
    }
}