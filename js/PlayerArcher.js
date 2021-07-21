class PlayerArcher {

    constructor(x,y,width,height,angle){
        var options = {
           isStatic:true
        };

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.image = loadImage("./assets/playerArcher.png")
        
        Matter.Body.setAngle(this.body,-PI/2)

        World.add(world,this.body);

        
    }

    display(){
        if (keyIsDown(RIGHT_ARROW) && this.angle < 1.95) {
            this.angle += 0.02;
          }
      
          if (keyIsDown(LEFT_ARROW) && this.angle > -1.45) {
            this.angle -= 0.02;
          }
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image,10,10, this.width, this.height);
        pop();
    }
}