function calc()
{
	var bodyy = document.getElementsByTagName("body")[0];
	var divBody= document.createElement("div");
	var divScreen = document.createElement("div");
	var screen = document.createTextNode("0");
	divScreen.appendChild(screen);
	divBody.appendChild(divScreen);
	 var count=1;
      var operatorr=['+','-','/'];
      var oper1=['.','0','*','%'];
      var oper2=['=','C','<','^'];
    for(var r=0;r<5;r++)
    {
        for(var c=0;c<4;c++)
                    
        {
      var divChild = document.createElement("div");
            var calButton = document.createElement("input");
            calButton.setAttribute("type","button");
            if(r<3 && c<3)
            {
            calButton.setAttribute("value",count);
            count++;
            divChild.appendChild(calButton);
            }
            else if(r<3 && c>2)
             {
               calButton.setAttribute("value",operatorr[r]);
               divChild.appendChild(calButton);

             }
             else if(r==4 && c<4)
             {
             	calButton.setAttribute("value",oper2[c]);
             	divChild.appendChild(calButton);
             }
        }


     }
     
    divBody.appendChild(divChild);
    bodyy.appendChild(divBody);


}