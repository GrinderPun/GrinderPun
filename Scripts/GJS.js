class Canvas
{
	constructor(ID, Name, Width, Height)
	{	
		//Create Canvas
		document.getElementById(ID).innerHTML = "<canvas id="+"'"+Name+"'"+"width="+"'"+Width+"'"+"height="+"'"+Height+"'"+"style='border:1px solid #000000;'></canvas>";
		
		this.canvas = document.getElementById(Name).getContext("2d");
		
		this.canvasName = Name;
		
		//console.log("Done!");
		//console.log(Width+"x"+Height);
	}
	
	
	StrokeColor(Color)
	{
		this.canvas.strokeStyle = Color;
	}
	
	FillColor(Color)
	{
		this.canvas.fillStyle = Color;
		this.canvas.fill();
	}
	
	LineSize(Size)
	{
		this.canvas.lineWidth = Size;
	}
	
	DrawLine(PAX, PAY, PBX, PBY)
	{
		this.canvas.beginPath();
		this.canvas.moveTo(PAX, PAY);
		this.canvas.lineTo(PBX, PBY);
		this.canvas.stroke();
		
		//console.log("Line drawn !");
	}
	
	DrawFillRect(X, Y, W, H)
	{
		this.canvas.beginPath();
		this.canvas.fillRect(X, Y, W, H);
		this.canvas.stroke();
	}
	
	DrawRect(X, Y, W, H)
	{
		this.canvas.beginPath();
		this.canvas.rect(X, Y, W, H);
		this.canvas.stroke();
	}
	
	DrawCircle(X, Y, SIZE)
	{
		this.canvas.beginPath();
		this.canvas.arc(X, Y, SIZE, 0, Math.PI * 2);
		this.canvas.stroke();
	}
	
	SetPixel(X, Y, Color)
	{
		this.canvas.beginPath();
		this.FillColor(Color);
		this.canvas.fillRect(X, Y, 1, 1);
		this.canvas.stroke();
	}
	
	ShowText(X, Y, Text, Size, Color)
	{
		this.canvas.fillStyle = Color;
		this.canvas.font = Size+"px Arial";
		this.canvas.fillText(Text, X, Y);
	}
	
	ClearCanvas()
	{	
	    var c = document.getElementById(this.canvasName);
	    console.log(c.width); // 300
		this.canvas.clearRect(0, 0, c.width, c.height);
	}
}