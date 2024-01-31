let rain=[];

let graphics;




let mygraphics =[];

let numberOfLayers =6;
function setup() {
createCanvas(windowWidth, windowHeight);
  
 graphics=createGraphics (windowWidth,windowHeight);

   for (let i =0; i<5; i++) {    

  mygraphics [i]=new MyGraphics ();
     
     
   } 
 
  for (let i=0; i<150; i++){
     
   rain [i]=new Rain ();
  
  
  }
  
  
  
  
  
  
}

function draw() {
 

  
  push ()
  let c2= color ('#b6bea9');
  let c1=color ('#96bebd');
  backgroundChange (c1,c2);
  pop ()
 
  
  
  
   push ()
  
  for (let l=0; l<numberOfLayers ;l++) {  
      
  let mouHeight=round (height*0.5);
    
    let layers= l*((height-mouHeight)/numberOfLayers);
    mountain (l,mouHeight+layers);
  
   }
   pop ()
 
  
  
   push ()
  for (let r of rain ) {
  r.update ();
  r.show ();
  }
  
  pop ();
  
  
 
  
  
push ()
  for  (let i =0; i<mygraphics.length; i++) { 
  
   
 mygraphics[i].show ();
  
 
 image ( graphics ,0,0);
  
  
 }   

 
   pop ()
 
  
  
}



 function backgroundChange (c1,c2){
  
  
  
  
for (let y=0; y<height*0.5; y++){
  
  let layer= map (y,0,height*0.5,0,0.5);
  let col =lerpColor (c1,c2,layer);
  

  
  stroke (col);
  line (0,y,width,y)
  
  }
}




function mountain (l,y){
  
  let col =lerpColor (color ('#4c8095'),color ('#20445c'),l/ (numberOfLayers));
  noStroke()
  beginShape ()
  
  fill (col)
  for (let x=0; x<=width; x++ ) {
    
  let ns= noise (x*0.005,y);
    
  vertex (x,y-ns*250);
    
    }
   vertex (width,height);
   vertex (0,height);
    
    endShape()

    

  }
 
