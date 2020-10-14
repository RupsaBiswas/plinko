class Plinko{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0.5,
            friction:0.3,
            density:1.5
            
        }
        this.radius=10;
        this.body=Bodies.circle(x,y,10,options);
       
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);

        
    }

    display(){
        var pos= this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        ellipseMode(CENTER);
         ellipse(0,0,10,10);
         pop();
        
    }



        
    }