var lost = false;
var clickStart = false;
//var boundaries = $$("div#maze div.boundary");

window.onload = firstFunction;

function firstFunction()
{
	alert('Hello');
	$("start").onclick = Start; //occurs on clicking S
	$("end").onmouseover = reachEnd; //occurs on reaching E
	var boundaries = $$("div#maze div.boundary");
	for (var b = 0; b < boundaries.length; b++)
	{
		boundaries[b].onmouseover = boundaryError; //moving the mouse over any of the boundaries results in an error
	}
	//document.getElementById("boundary1").onmouseover = BoundaryError;
};

/* function outsideError();
{
	
} */

function boundaryError()
{
	lost=true; //if boundary error, then you lost
	var boundaries = $$("div#maze div.boundary"); //select all the boundaries
	for (var b = 0; b < boundaries.length; b++)
	{
		boundaries[b].addClassName("youlose"); //if you move the mouse over a boundary, colour of all boundaries change to red
	}
	//$("boundary1").addClassName("youlose");
	clickStart=false;
}
function reachEnd()
{
	var change = document.getElementById("status");
	if(lost) //if lost === true
	{
		change.innerHTML = "You lost!!!! Try again";
		//alert('You lost!!! Try again.');
	}
	else
	{
		change.innerHTML = "You win!!! Good playing!!!!'";
		//alert('You win!!! Good playing!!!!');
	}
}

function Start()
{
	clickStart = true;
	if (clickStart)
	{
		$("maze").onmouseout = boundaryError;
	}
	lost = false; //you haven't lost as yet 
	var boundaries = $$("div#maze div.boundary"); //select all boundaries
	for (var b = 0; b < boundaries.length; b++)
	{
		boundaries[b].removeClassName("youlose");  //resets the maze when you click on S
	}
}