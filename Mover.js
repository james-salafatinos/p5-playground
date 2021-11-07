class Mover{
    constructor(x,y,m){
        this.pos = createVector(x,y)
        this.mass = m
        this.velocity = createVector(0,0)
        this.acceleration = createVector(0,0)
    }

    applyForce(force){
        //Scale force by Mass
        let acc = p5.Vector.div(force,this.mass)

        //Apply force to acceleration
        this.acceleration.add(acc)

    }

    checkEdges(){
        if (this.pos.x > width) {
            this.pos.x = width;
            this.velocity.x *= -1;
          } else if (this.pos.x < 0) {
            this.pos.x = 0;
            this.pos.x *= -1;
          }
          if (this.pos.y > height) {
            this.pos.y = height;
            this.velocity.y *= -1;
          } else if (this.pos.y < 0) {
            this.pos.y = 0;
            this.velocity.y *= -1;
          }

    }

    attract(other_obj){
        
        //Find angle of attraction
        let dir = p5.Vector.sub(this.pos, other_obj.pos)

        //Get distance between objects
        let dist = dir.mag()

        //Calculate force
        let attr_force = (G * (this.mass * other_obj.mass)/(dist**2))

        dir.normalize()
        let gravitational_force = dir.mult(attr_force)
        return gravitational_force
    }

    update(){
        //Euler integration
        this.velocity.add(this.acceleration)
        this.pos.add(this.velocity)

        //Reset acceleration because force will be calculated at every step
        this.acceleration.mult(0)
        

    }

    display(){
        fill(125)
        ellipse(this.pos.x, this.pos.y, this.mass * 10)

    }
}