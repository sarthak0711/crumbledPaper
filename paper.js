class Paper{

    constructor(){
        var options={
            
            isStatic:false,
            friction : 0.5,
            restitution : 0.3,
            density : 1.2
        
        }
        this.body=Matter.Bodies.circle(200,200,10,options);
        World.add(world,this.body)
    }

display(){

    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,10,10)

}

}