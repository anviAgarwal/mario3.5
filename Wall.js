class Wall {
    constructor(posX) {
     //setting the x posing where wall will be created  
     this.rw = random(500, 1000);
     this.rh = random([260,190,190,190,260,260,260,260,260,260,190,190]);
      this.rx = posX;
       //setting y position where wall will be created 
      this.ry = height-random([550,350]);  
      //using rx,ry
      this.spt=createSprite(this.rx, this.ry); 
      this.spt.shapeColor="green";
      this.spt.addAnimation("ground",wallAnimation);
      this.spt.scale=0.10;
    
    }
  
  
}
  


