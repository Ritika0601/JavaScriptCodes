function start()
{    countPlayer_1=0;
    countPlayer_2=0;
    clickPlayer_1=0;
    clickPlayer_2=0;
    bgColor="";
    countA=0;
    countB=0;
	
	 gameBody = document.getElementsByTagName("body")[0];
	 divBody = document.createElement("div");
     divBody.align="center";
     //play =document.createElement("input");
     //play.setAttribute("type","button");
    // play.setAttribute("value","Start Playing");
     //play.setAttribute("onclick","playing()");

      player_1=document.createElement("input");
     player_1.setAttribute("type","button");
     player_1.setAttribute("value","Player One");
     player_1.style.background="#7FFF00";
     player_1.setAttribute("id","123");
     player_1.setAttribute("onclick","playing(123)")

      player_2=document.createElement("input");
     player_2.setAttribute("type","button");
     player_2.setAttribute("value","Player Two");
     player_2.style.background="#7FFF00";
     player_2.setAttribute("id","456");
     player_2.setAttribute("onclick","playing(456)");
    
     divBody.appendChild(player_1);
     divBody.appendChild(player_2);

     divElement_1 = document.createElement("div");
     divElement_1.style.backgroundColor="red";
	   divElement_1.style.border="thin solid";
	   divElement_1.style.height = "36px";
       divElement_1.style.width = "51px";
       divElement_1.style.cssFloat="left";
       divElement_1.setAttribute("id","321");
       divBody.appendChild(divElement_1);
    
            divElement_2 = document.createElement("div");
            divElement_2.setAttribute("id","654");
            divElement_2.style.backgroundColor="yellow";
            divElement_2.style.height = "36px";
            divElement_2.style.width = "51px";
            divElement_2.style.cssFloat="left";
            divElement_2.style.border="thin solid";
            divBody.appendChild(divElement_2);
     
               dice =document.createElement("input");
               dice.setAttribute("type","button");
               dice.setAttribute("value","Rolling");
               divBody.appendChild(dice);

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


function playing(id_play)
{
    idd=id_play;
	 if(idd==123)
	  {
		countA++;
      if(clickPlayer_2==1)
      {
        player_2.style.background="#7FFF00"; //green

      }
          
	    player_1.style.background="#FFA07A"; //pink
	    dice.setAttribute("onclick","roll(idd)");
        console.log(idd);
      } 
     else if(idd==456)
      {
      	countB++;
        if(clickPlayer_1==1)
        {
          player_1.style.background="#7FFF00";
        }
        player_2.style.background="#FFA07A";
        dice.setAttribute("onclick","roll(idd)");
        console.log(idd);
       }
      }



function roll(x)
{   
	var id=x;
	console.log(id);
   
     if(id==123 && countA==1)
      {
         clickPlayer_1++;
      	 number = (Math.round((Math.random()*5)+1));
         console.log(number);
  	    if(number!=6)
  	     {
       
            if((countPlayer_1)==0)
             {

       	        countPlayer_1=countPlayer_1+number;
       	        console.log(countPlayer_1);
                var box = document.getElementById(countPlayer_1);
                bgColor1 = box.style.getPropertyValue("background-color");
                box.style.backgroundColor="red";
                //countPlayer_1++;

     
              }
      
              else if((countPlayer_1)!=0)
              {
              	//countPlayer_1=countPlayer_1+number-1;
                countPlayer_1=countPlayer_1+number;
      	        var box =document.getElementById(countPlayer_1);
      	        bgColor2 = box.style.getPropertyValue("background-color");
      	        box.style.backgroundColor="red";
      	       //countPlayer_1++;
               console.log(countPlayer_1);
              }
             countA=0;

         }

       else if(number==6)
        { 
           if(countPlayer_1==0)
            {
              
       	      countPlayer_1=countPlayer_1+number;
              var box = document.getElementById(countPlayer_1);
               bgColor = box.style.getPropertyValue("background-color");
              box.style.backgroundColor="red";
              countPlayer_1++;
              console.log(countPlayer_1);
            }
     
            else if(countPlayer_1!=0)
            {
      	     countPlayer_1=countPlayer_1+number-1;
             console.log(countPlayer_1);
      	     var box =document.getElementById(countPlayer_1);
      	     bgColor = box.style.getPropertyValue("background-color");
             box.style.backgroundColor="red";
             countPlayer_1++;
             console.log(countPlayer_1++);
      	     
            }
         dice.setAttribute("onclick","roll(123)");

          countA=1;
        }
       

      }
      else if(id==456 && countB==1)
        {
          clickPlayer_2++;
        	 number = (Math.round((Math.random()*5)+1));
             console.log(number);
  	           if(number!=6)
  	             {
                    if((countPlayer_2)==0)
                  {
                   
             	    countPlayer_2=countPlayer_2+number;
                    var box = document.getElementById(countPlayer_2);
                    bgColor = box.style.getPropertyValue("background-color");
                    box.style.backgroundColor="yellow";
                    countPlayer_2++; //
                    console.log(countPlayer_2);
                   }
      
                   else if((countPlayer_2)!=0)
                     {
                       countPlayer_2=countPlayer_2+number-1;
      	              console.log(countPlayer_2);
      	              var box =document.getElementById(countPlayer_2);
      	              bgColor = box.style.getPropertyValue("background-color");
      	              box.style.backgroundColor="yellow";
      	              countPlayer_2++;
                      console.log(countPlayer_2);
                     }
                     countB=0;

                     
                   }
                  

                  else if(number==6)
                    { 
                      if(countPlayer_2==0)
                       {
       	                 countPlayer_2=countPlayer_2+number;
                         var box = document.getElementById(countPlayer_2);
                         bgColor = box.style.getPropertyValue("background-color");
                         box.style.backgroundColor="yellow";
                         countPlayer_2++;
                         console.log(countPlayer_2);
                        }
     
                         else if(countPlayer_2!=0)
                         {
                         	countPlayer_2=countPlayer_2+number-1;
                          var box =document.getElementById(countPlayer_2);
                          bgColor = box.style.getPropertyValue("background-color");
                          box.style.backgroundColor="yellow";
      	                  countPlayer_2++;
                          console.log(countPlayer_2);
                         }
                         countB=1;
                     }
 }
}
