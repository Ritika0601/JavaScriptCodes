function calc()
{
	var bodyy = document.getElementsByTagName("body")[0];
	
	var tbl = document.createElement("table");
     var tblbody = document.createElement("tbody");
     
     var rowScreen = document.createElement("tr");
     var columnScreen = document.createElement("td");
     var screen = document.createTextNode("screen");

     columnScreen.appendChild(screen);
     rowScreen.appendChild(columnScreen);
      tblbody.appendChild(rowScreen);
      var count=1;
      var operatorr=['+','-','/'];
      var oper1=['.','0','*','%'];
      var oper2=['=','C','<','^'];
     for(var r=0;r<5;r++)
     {
     	var row = document.createElement("tr");
     	    for(var c=0;c<4;c++)
                    
              {
               var column = document.createElement("td");
               var cellButton = document.createElement("input");
               cellButton.setAttribute("type","button");
               if(r<3 && c<3)
               {
               cellButton.setAttribute("value",count);
               count++;
               column.appendChild(cellButton);
               row.appendChild(column);
                }
                else if(r<3 && c>2)
                {

               cellButton.setAttribute("value",operatorr[r]);
               column.appendChild(cellButton);
               row.appendChild(column);
                }
                else if(r==3 && c<4)
                {
                    cellButton.setAttribute("value",oper1[c]);
               column.appendChild(cellButton);
               row.appendChild(column);

                }

                else if(r==4 && c<4)
                {
                  cellButton.setAttribute("value",oper2[c]);
               column.appendChild(cellButton);
               row.appendChild(column);

                }

                    }
                
               
                 tblbody.appendChild(row);  
         }


          tbl.appendChild(tblbody);
          bodyy.appendChild(tbl);
     }