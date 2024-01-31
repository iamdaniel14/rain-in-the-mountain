class MyGraphics  {  
  
    constructor (scl,x) {
   this.x= x;
  
  this.scl=random (0.4,0.6);
    this. r=100;
   
     this.h=- graphics.windowHeight/2;
    }
     
    
    show () { 
    graphics.fill ('#20445c');
    graphics.noStroke ()
   
      graphics.push ();
       
        for (let x=200; x<800; x+=200) {
        
    graphics.translate(x, graphics.height);
      
    graphics.scale(random (this.scl));
   
     
      graphics.beginShape ();
    graphics.vertex (-this.r*0.6,0);
     graphics.bezierVertex (-this.r*0.5,this.h*0.2,-this.r*0.2,this.h*0.3, 0,this.h);
     graphics.bezierVertex (this.r*0.3,this.h*0.4,this.r*0.11,this.h*0.3, 0,0)
     graphics.endShape ()
   
    
          
          
          
    graphics. beginShape ()
    //right side
   
   graphics.fill ('#20445c')
   graphics.vertex (0,this.h)
   graphics. bezierVertex (this.r*0.8,this.h*0.9,this.r*1.8,this.h*1,this.r*2.5, this.h*0.6);
   graphics.bezierVertex (this.r*2.1, this.h*1.1, this.r*1.1, this.h*1.1,0,this.h);
    
    // second
   graphics. bezierVertex (this.r*0.8,this.h*1.2,this.r*1.5, this.h*1.1, this.r*2.9,this.h*0.8);
  
  graphics.bezierVertex (this.r*1.5,this.h*1.4,this.r*0.4,this.h*1.2,0,this.h);
    
    
    //left side
    
   
   graphics.bezierVertex (-this.r*0.8,this.h*0.9,-this.r*1.8,this.h*1,-this.r*2.5, this.h*0.6);
   graphics.bezierVertex (-this.r*2.1, this.h*1.2, -this.r*1.1, this.h*1.11,0,this.h);
    
    //second
    graphics.bezierVertex (-this.r*0.8,this.h*1.2,-this.r*1.5, this.h*1.1, -this.r*2.9,this.h*0.9);
  //  // vertex (r*1.1,0)
  graphics.bezierVertex (-this.r*1.5,this.h*1.4,-this.r*0.4,this.h*1.2,0,this.h);
   
    
      
      
    graphics.endShape();
  
      graphics. pop();
   
    
    }
   
       
      }
    
   
       
   
    }