var countPlayer_1=0;
var countPalyer_2=0;
var clickPlayer_1=0;
var clickPlayer_2=0;

function start()
{
	 gameBody = document.getElementsByTagName("body")[0];
	 divBody = document.createElement("div");
     divBody.align="center";
      play =document.createElement("input");
     play.setAttribute("type","button");
     play.setAttribute("value","Start Playing");
     play.setAttribute("onclick","playing()");

      player_1=document.createElement("input");
     player_1.setAttribute("type","button");
     player_1.setAttribute("value","Player One");
     player_1.setAttribute("id","red");

      player_2=document.createElement("input");
     player_2.setAttribute("type","button");
     player_2.setAttribute("value","Player Two");
     player_2.setAttribute("id","yellow");

      dice =document.createElement("input");
     dice.setAttribute("type","button");
     dice.setAttribute("value","Rolling");
     dice.setAttribute("onclick","roll()");
     gameBody.appendChild(play);
     divBody.appendChild(dice);
     gameBody.appendChild(player_1);
     gameBody.appendChild(player_2);
     count =110;
	for(var row=1;row<=10;row++)
	{
		 divGameBody = document.createElement("div");
		divGameBody.style.heigth="380px";
		divGameBody.style.width="530px";
		
		if((row%2)!=0)
		{
			count=count-10;
		for(var col=1;col<=10;col++)
		{
			
			 divChild = document.createElement("div");
			divChild.setAttribute("id",count);
			
			
			        if((col%2)!=0)
			           {
			
			              divChild.style.backgroundColor="#0099FF";
		               }
		             else
		               {
		                    divChild.style.backgroundColor="#00cc88";
		               }

			divChild.style.cssFloat="left";
            divChild.style.height = "36px";
            divChild.style.width = "51px";
            divChild.style.border="thin solid";
			divChild.style.paddingTop="15px";
			divChild.textContent=count;
		    count--;
			
			divGameBody.appendChild(divChild);

		}
		count++;
		
	    }
	    else
	    {
	    	count =count -10;

	    	for(var col=1;col<=10;col++)
		{
			
			 divChild = document.createElement("div");
			divChild.setAttribute("id",count);
			
			if((col%2)!=0)
			{
            divChild.style.backgroundColor="#00cc88";
            }
            else
            {
             divChild.style.backgroundColor="#0099FF";	
            }
			divChild.style.cssFloat="left";
            divChild.style.height = "36px";
            divChild.style.width = "51px";
			divChild.style.border="thin solid";
			divChild.style.paddingTop="15px";
			divChild.textContent=count;

		    count++;
			
			divGameBody.appendChild(divChild);

		}
		count--;
		


	    }
		
        divBody.appendChild(divGameBody);
        

	}
	
	gameBody.appendChild(divBody);

}

function playing()
{
	
	player_1.style.background="#FFA07A";

}


function roll()
{
	count=1;
	if(clickPlayer_1==0)
	{

  var number = (Math.round((Math.random()*5)+1));
  console.log(number);
var  x = document.getElementById("count");
x.style.backgroundColor="red";

  }

}  

 
