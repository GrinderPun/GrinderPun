class Particle
{
	constructor()
	{
		this.pX = 0;   //Position X
		this.pY = 0;   //Position Y
		this.vX = 0;   //Velocity X
		this.vY = 0;   //Velocity Y
		
		this.speed = 0;
		//this.acceleration = 0;
		this.friction = 0;
		
		this.lifeTime = 0;
		this.sizeOverTime = 0;
		
		this.stop = false;
		
		console.log("Particle Created !");
	}
	
	Update()
	{
		if(stop)
		{
		    //Movement
		    this.pX += this.vX * speed;
		    this.pY += this.vY * speed;
		    //Friction X
		    if(this.vX > 0){
			    this.vX -= this.friction * this.vX;
		    }else if(this.vX < 0){
			    this.vX += this.friction * this.vX;
		    }
		    //Friction Y
		    if(this.vY > 0){
			    this.vY -= this.friction * this.vY;
		    }else if(this.vY < 0){
			    this.vY += this.friction * this.vY;
		    }
		}
		//Render Here!
	}
}

class ParticleSystem
{
	constructor(MaxParticle)
	{
		//Create Particle
		this.particles = [];
		for(let i = 0; i < MaxParticle; i++)
		{
			particles[i] = new Particle();
		}
	}
}