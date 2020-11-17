class Chain {
    constructor(a,b){
      var options = {
          stiffness:0.8,
          lenght:0.5,
          bodyA:a,
          bodyB:b,

      }
     this.chain = Constraint.create(options),
      World.add(world,this.chain)
    }
    
    display() {
    var pt1 = this.chain.bodyA.position
    var pt2 = this.chain.bodyB.position
    strokeWeight = 1
    line(pt1.x,pt1.y,pt2.x,pt2.y)


    }
  }