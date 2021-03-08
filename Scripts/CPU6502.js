class CPU
{
	constructor()
	{
		//Main Register
		this.accumulator = 0x0;     //8 bit
		//Index Register
		this.xRegister = 0x0;       //8 bit
		this.yRegister = 0x0;       //8 bit
		this.stackPointer = 0x0;    //8 bit
		//Program Counter
		this.pc = 0x0;              //16 bit
		//Status Register
		this.pFlags = 0x0;          //8 bit
		
		//Memory
		this.memorySize = 1024 * 64;
		this.memory = new Array(this.memorySize);
		
		this.Setup();
	}
	
	Setup()
	{
		for(let i = 0; i < this.memorySize; i++)
		{
			this.memory[i] = 0;
		}
		
		console.log("CPU setup complete!");
		console.log("Memory Setup complete!");
	}
	
	//Cute
	Execute()
	{
		switch(accumulator)
		{
			case 0x0:
			
			break;
			case 0x0:
			
			break;
			case 0x0:
			
			break;
			case 0x0:
			break;
		}
	}
	
	Reset()
	{
		
	}
}