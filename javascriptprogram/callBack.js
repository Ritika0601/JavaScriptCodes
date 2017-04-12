function call()
{
function logStuff(userData)
{
	if(typeof userData ==="string")
	{
		console.log(userData);
	}
	else if(typeof userData ==="object")
	{
		for(var item in userData)
		{
			console.log(item +":"+userData[item]);
		}
	}
}



function getInput(options,callBack)
{
   callBack(options);
}
getInput({Name:"Ritika",Speciality:"JavaScript"},logStuff);
}