var G = 1
var movers = []
const NUM_ENTITIES = 10

function setup() {
  createCanvas(400, 400);

  //Create the entities
  for (let index = 0; index < NUM_ENTITIES; index++) {
    let mover = new Mover(height/2 + random()*100, width/2 + random()*100, random()*10)
    movers.push(mover)
  }
  console.log(movers)
}

function draw() {
  background(220);

  //Update timestep
  for (let i = 0; i < movers.length; i++) {
    for (let j = i; i < movers.length; j++) {

      var force = movers[i].attract(movers[j])
      movers[i].applyForce(force)
      movers[i].update()
      movers[i].display()

    }
  }

  
}
