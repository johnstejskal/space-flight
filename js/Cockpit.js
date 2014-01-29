//var PlayerArms = PlayerArms || {}
// ************************************************************************ 
// PROTOTYOPE PUBLIC PROERTIES 
// ************************************************************************ 
Cockpit.prototype.isPunching = false;
Cockpit.prototype.speedFX;
Cockpit.prototype.texAnimator_speedFX;
Cockpit.prototype.isBoosting = false;
Cockpit.prototype.hasArms = false;


//-----------------------o
//-- States
//-----------------------o
Cockpit.prototype.STATE_IDLE = "idle";
Cockpit.prototype.STATE_CRASH = "crash";
Cockpit.prototype.STATE_ARM_WEAPONS = "armWeapons";
Cockpit.prototype.STATE_DISARM_WEAPONS = "disarmWeapons";


Cockpit.prototype.currentState;
    
// ************************************************************************ 
// Constructor
// ************************************************************************ 
function Cockpit()
{
    
    
 var bg = new THREE.Mesh(
  new THREE.PlaneGeometry(2, 2, 0),
  new THREE.MeshBasicMaterial({map: tex_cockpitBase})
);

// The bg plane shouldn't care about the z-buffer.
bg.material.depthTest = false;
bg.material.depthWrite = false;


sceneOrtho.add(bg);

    
  console.log(this+"inited");
    var emptySprite = new THREE.Object3D();
    
    console.log("WIDTH:"+WIDTH)
    console.log("HEIGHT:"+HEIGHT)
  //  var cockpitMarerial = new THREE.SpriteMaterial( { map: tex_cockpitBase, useScreenCoordinates: true, alignment: THREE.SpriteAlignment.bottomCenter } );  
    var cockpitMarerial = new THREE.SpriteMaterial( { map: tex_cockpitBase} );
    // cockpitMarerial.uvOffset.y = .2;
   
    var cockpitSprite = new THREE.Sprite( cockpitMarerial );
	//var width = cockpitMarerial.map.image.width;
	//var height = cockpitMarerial.map.image.height;
    this.cockpitSprite = cockpitSprite;
    this.cockpitSprite.scale.set(WIDTH, cockpitMarerial.map.image.height, 1);
   // this.cockpitSprite.position.normalize();
 //   this.cockpitSprite.position.z = 1;
    this.cockpitSprite.position.set(0, 0, 1 );
    emptySprite.add(  this.cockpitSprite );  
    
    
    
 sceneOrtho.add(  emptySprite ); 
    
   
    //emptySprite.position.x = 0;
    emptySprite.position.y = -100;

   
    
   // this.changeState(this.STATE_IDLE)
  

    
}


    // ************************************************************************ 
    // PROTOTYOPE PUBLIC METHODS 
    // ************************************************************************ 
    Cockpit.prototype.init = function()
    {

    }
    
    Cockpit.prototype.update = function()
    {

    }    
    
   
    
    
    Cockpit.prototype.resize = function()
    {
    
    }

    Cockpit.prototype.doCrash = function()
    {
        this.doShake();
    
    }
    
    Cockpit.prototype.doIdle = function()
    {
        var posX = this.cockpitSprite.position.x;
        var posY = this.cockpitSprite.position.y;
        var _this = this;
        TweenMax.to(this.cockpitSprite.position, .2, {x:posX+3, y:posY+3, yoyo:true, repeat:-1}) 
        
    
    }
    
    Cockpit.prototype.doShake = function()
    {
        var posX = this.cockpitSprite.position.x;
        var posY = this.cockpitSprite.position.y;
        var _this = this;
        TweenMax.to(this.cockpitSprite.position, .2, {x:posX+3, y:posY+3, yoyo:true, repeat:10, onComplete:function(){   
        
        _this.cockpitSprite.position.x = posX;
        _this.cockpitSprite.position.y = posY;
        }});    
        
        //TweenMax.to(this.cockpitSprite.position, .2, {x:posX+10, yoyo:true, repeat:10});      
    
    } 
    Cockpit.prototype.changeState = function(state)
    {
        console.log(this+"changeState("+state+")");
        if(state == this.currentState)
        return;
            
         switch(state)
         {
             case this.STATE_CRASH:
             this.doCrash() 
             break;
                 
             case this.STATE_ARM_WEAPONS:
             this.doArmWeapons();
             break;
                                  
             case this.STATE_IDLE:
             this.doIdle();
             break;
                 
         }
        
         this.currentState = state
    
    }   











