//var PlayerArms = PlayerArms || {}
// ************************************************************************ 
// PROTOTYOPE PUBLIC PROERTIES 
// ************************************************************************ 



//-----------------------o
//-- States
//-----------------------o

    
// ************************************************************************ 
// Constructor
// ************************************************************************ 
function Space()
{
  this.mars;
  this.jupiter;
  this.sun;
  this.skyBox;


    this.init();
}


    // ************************************************************************ 
    // PROTOTYOPE PUBLIC METHODS 
    // ************************************************************************ 
    Space.prototype.init = function()
    {
        console.log(this+"init");
      // sphere
      // the first argument of THREE.SphereGeometry is the radius, the second argument is
      // the segmentsWidth, and the third argument is the segmentsHeight.  Increasing the 
      // segmentsWidth and segmentsHeight will yield a more perfect circle, but will degrade
      // rendering performance
     /* var sphere = new THREE.Mesh(new THREE.SphereGeometry(400, 100, 100), new THREE.MeshNormalMaterial());
      sphere.overdraw = true;
       	        sphere.position.y = 180;
                sphere.position.z = -2000;
                sphere.position.x = 50;
      scene.add(sphere);
        */
       
        
        
    //add mars
    var mars_material = new THREE.MeshLambertMaterial({map:tex_mars})
    this.mars = new THREE.Mesh(new THREE.SphereGeometry(200, 50, 50), mars_material);
    this.mars.overdraw = true;
    this.mars.position.z = 1500;
    this.mars.position.y = 500;
    this.mars.rotation.z = 0;
    scene.add(this.mars);  
     
        
    //add jupiter
    var jup_material = new THREE.MeshLambertMaterial({map:tex_jupiter})
    this.jupiter = new THREE.Mesh(new THREE.SphereGeometry(200, 50, 50), jup_material);
    this.jupiter.overdraw = true;
    this.jupiter.position.x = 50;
    this.jupiter.position.y = 180;
    this.jupiter.position.z = -1000;   
    this.jupiter.rotation.z = 25;   
   // scene.add(this.jupiter);       
        
        
          
    //add jupiter
    this.sun = new THREE.Mesh(new THREE.SphereGeometry(300, 100, 100), new THREE.MeshBasicMaterial(0x000000));

    this.sun.overdraw = true;
    this.sun.position.x = 50;
    this.sun.position.y = 180;
    this.sun.position.z = -1000;   
    this.sun.rotation.z = 25;   
   // scene.add(this.sun);          
        
    //Add a sky box with stars
   var geometry = new THREE.CubeGeometry(5000,5000,5000);
   tex_stars.wrapS = THREE.RepeatWrapping;
   tex_stars.wrapT = THREE.RepeatWrapping;
   tex_stars.repeat.x = 5;
   tex_stars.repeat.y = 5;    
   var material2 = new THREE.MeshBasicMaterial( { map: tex_stars } );
   material2.side = THREE.DoubleSide;
   this.skyBox = new THREE.Mesh( geometry, material2 );
   scene.add( this.skyBox ); 
        
        
    
        
    }
    
    Space.prototype.update = function()
    {
      //  this.jupiter.rotation.y += .001;    
        this.mars.rotation.y += .001;    
        this.skyBox.position.x = camera.position.x;
         this.skyBox.position.y = camera.position.y;
         this.skyBox.position.z = camera.position.z;
        
        console.log("dusty length :"+arrDust.length);
        for(var i = 0; i < 999; i++)
        {
             var dust = arrDust[i];
            dust.position.z -= 0.5;
        }
    }    
        
    

    
    
    Space.prototype.resize = function()
    {
    
    }



  











