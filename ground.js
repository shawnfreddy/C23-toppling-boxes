class Ground{
    constructor(){
        var options={
          isStatic: true  
        }
        this.body=Bodies.rectangle(400,390,800,20,options);
        World.add(ourWorld,this.body);

    }
    display(){
      fill("brown");  
      rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y,800,20) 
    }

    
}