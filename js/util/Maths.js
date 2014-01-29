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
function Maths()
{
  this.randomNumber;
  this.randomInt;

/**
 * Returns a random number between min and max
 */
    this.randomNumber = function(min, max)
    {
    return Math.random() * (max - min) + min;
    }
    
/**
 * Returns a random integer between min and max
 * Using Math.round() will give you a non-uniform distribution!
 */
    this.randomInt = function(min, max)
    {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}




  











