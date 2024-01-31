class Rain {
    constructor (){
    this.pos=createVector ( random (width),random(-800,-100)); 
     
      
    this.z=random (0,20);
    this.siz= random (0,3);
    this.speed=map (this.z,0,20,2,10); //this make the closer things faster
    this.len =map (this.z,0,20,2,10) //its longer if its closer
      
    }
    
    show (){
       strokeWeight (this.siz)
      stroke ('#dddddd');
      
      line (this.pos.x,this.pos.y,this.pos.x, this.pos.y+this.len);
      if (this.pos.y>height){
        
      this.pos.y=random (-800,-100); //resetting the y position
        
        this.speed=map (this.z,0,20,2,10);
      }
    }
    
    update (){
      
      
      this.pos.y+=this.speed +0.002;
    }
  }