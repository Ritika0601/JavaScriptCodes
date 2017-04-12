function start()
{
	var gameBody = document.getElementsByTagName("body")[0];
	var divBody = document.createElement("div");
	

	for(var row=1;row<=10;row++)
	{
		var divGameBody = document.createElement("div");
		for(var col=1;col<=10;col++)
		{
			var divChild = document.createElement("div");
			divChild.style.cssFloat="left";
			var box = document.createElement("input");
			box.setAttribute("type","text");
			box.setAttribute("value",row);
			divChild.appendChild(box);
			divGameBody.appendChild(divChild);
		}
		divChild.style.cssFloat="initial";
        divGameBody.appendChild(divChild);
	}
	divBody.appendChild(divGameBody);
	gameBody.appendChild(divBody);

}
