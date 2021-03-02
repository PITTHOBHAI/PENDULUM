class Chain{
     constructor(A,B){
        var option={
            bodyA:A,
            bodyB:B,
            length:9,
            stiffness:0.7
        }
        var chain=CONSTRAINT.create(option);
        World.add(world,chain);
     }
   display(){
       //line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
   }


}