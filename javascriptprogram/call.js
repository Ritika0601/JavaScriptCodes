

function calc()
{
	 var btn = document.getElementsByTagName("button")[0];
     btn.setAttribute("disabled","true");
	var bodyy = document.getElementsByTagName("body")[0];
	var divBody= document.createElement("div");
	var divScreen = document.createElement("div");
	screen = document.createElement("input");
	screen.setAttribute("type","text");
	screen.setAttribute("value"," ");
	screen.setAttribute("id","screen");
	//screen.setAttribute("size","10");
	//screen.setAttribute("maxLength","8");
	screen.setAttribute("readonly","");
	divScreen.appendChild(screen);
	divBody.appendChild(divScreen);
	 
      var opp=["'1'","'2'","'3'","'+'","'4'","'5'","'6'","'-'","'7'","'8'","'9'","'/'","'c'","'0'","'*'","'='","'.'","'<'","'^'","'%'"];
      var count =0;
     
    for(var d=0;d<5;d++)
    {
         var divChildBody = document.createElement("div");
        for(var c=0;c<4;c++)
        {
            var divChild = document.createElement("div");
            divChild.style.cssFloat="left";
            calButton = document.createElement("input");
            calButton.setAttribute("type","button");
            calButton.setAttribute("id","qwe");
            
         
               calButton.setAttribute("value",String.fromCharCode(opp[count].charCodeAt(1))); 
               calButton.setAttribute("onclick","numInput("+opp[count]+")");
 	 
            count++;
            divChild.appendChild(calButton);
            divChildBody.appendChild(divChild);
         }
           divChild.style.cssFloat ="initial";
          divBody.appendChild(divChildBody);
          
     }

     
    
     bodyy.appendChild(divBody);


}
 var arr=[];
 var index=0;
function numInput(num) {
	var screen = document.getElementById("screen");
	if(num=="=")
	{
		screen.value= eval(screen.value);
	}
	else if(num=="c")
	{
		screen.value="";
	}
	else if(num=="<")

     {  
     	if(index>=2)
     	{
         	
         arr[index]="";
         --index;
         screen.value=arr[index-1];
	    }
	    else
	    {
	    	screen.value = "";
	    }
	}
	else
	{
      arr[index]= screen.value+num;
      screen.value=arr[index];
     
      index++;
	}
   }
   




