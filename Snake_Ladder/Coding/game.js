function start()
{   accessPlayer_1=1;
    accessPlayer_2=1; 
    countPlayer_1=0;
    countPlayer_2=0;
    clickPlayer_1=0;
    clickPlayer_2=0;
    bgColor="";
    countA=0;
    countB=0;
    snakeBite=[38,54,62,87,92,98];
    snakeLow=[7,22,3,24,73,18];
    ladderStart=[4,9,21,28,63];
    ladderUp=[35,48,58,96,84];

   gameBody = document.getElementsByTagName("body")[0];
   divBody = document.createElement("div");
     divBody.align="center";

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
     divElement_1.textContent="Player 1";
     divElement_1.style.border="thin solid";
     divElement_1.style.height = "36px";
       divElement_1.style.width = "51px";
       divElement_1.style.cssFloat="left";
       divElement_1.setAttribute("id","321");
       divBody.appendChild(divElement_1);
    
            divElement_2 = document.createElement("div");
            divElement_2.setAttribute("id","654");
            divElement_2.style.backgroundColor="yellow";
            divElement_2.textContent="Player 2";
            divElement_2.style.height = "36px";
            divElement_2.style.width = "51px";
            divElement_2.style.cssFloat="left";
            divElement_2.style.border="thin solid";
            divBody.appendChild(divElement_2);
     
               dice =document.createElement("button");
              dice.setAttribute("type","button");
              // dice.setAttribute("value","Rolling");
               dice.src="/Images/full.jpeg";
               dice.style.backgroundImage="url('../Images/full.jpeg')";
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
           if(count ==100)
           {
            divChild.textContent="FINISH";
            divChild.style.backgroundColor="#C6C3E3";
           }
           else
          {
              divChild.textContent=count;
           }        
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
    console.log(idd);
   if(idd==123 && accessPlayer_1==1)
    { 
       countA++;
      console.log(countA);
      if(clickPlayer_2>=1)
      {
        player_2.style.background="#7FFF00"; //green
      }     
      player_1.style.background="#FFA07A"; //pink
      dice.setAttribute("onclick","roll(idd)");
      }
      else if(idd==123 && accessPlayer_1!=1)
      {
         alert("Player Two Turn");

      } 
       else if(idd==456 && accessPlayer_2==1)
        {
           countB++;
           if(clickPlayer_1>=1)
          {
            player_1.style.background="#7FFF00";
          }
          player_2.style.background="#FFA07A";
          dice.setAttribute("onclick","roll(idd)");
          console.log(idd);
       }
       else if(idd==456 && accessPlayer_2!=1)
       {
        alert("Player One Turn");
       }
}

function roll(x)
{   
  var id=x;
    console.log(123123);
    if(id==123 && countA==1)
      {
        accessPlayer_2=1;
        clickPlayer_1++;
         number = (Math.round((Math.random()*5)+1));
         console.log(number);
         if(number!=6)
          {
           if((countPlayer_1)==0) //countPlayer_1 is used to shift player in div
               {
                 countPlayer_1=countPlayer_1+number;
                 console.log(countPlayer_1);
                  if(countPlayer_1<=100)
                   {
                     box = document.getElementById(countPlayer_1);
                     bgColor = box.style.getPropertyValue("background-color");
                     box.style.backgroundColor="red";
                     if(countPlayer_1==4)
                     {

                      box.setAttribute("onclick","ladder(countPlayer_1,123)");
                      console.log(444);
                     }
                   }
                  else
                   {
                     console.log(1212);
                     countPlayer_1=countPlayer_1-number;
                     var box =document.getElementById(countPlayer_1);
                     box.style.backgroundColor="red";
                     console.log(countPlayer_1);
                   } 
                
               }
      
            else if((countPlayer_1)!=0)
              {
               box1 = document.getElementById(countPlayer_1);
               box1.style.backgroundColor=bgColor;
               countPlayer_1=countPlayer_1+number;
                if(countPlayer_1<=100)
                  {
                     var box =document.getElementById(countPlayer_1);
                     bgColor= box.style.getPropertyValue("background-color");
                     box.style.backgroundColor="red";
                     if(countPlayer_1==4||9||21||28||63)
                     {

                      box.setAttribute("onclick","ladder(countPlayer_1,123)");
                      console.log(444);
                     }
                    
                    else if(countPlayer_1==38||54||62||87||92||98)
                      {
                        box.setAttribute("onclick","snake(countPlayer_1,123)")
                      }
                  }
                else
                  {
                    countPlayer_1=countPlayer_1-number;
                    var box =document.getElementById(countPlayer_1);
                    box.style.backgroundColor="red";
                    console.log(countPlayer_1);
                  }
               
              }
            
                     console.log(countA);
                     countA=0;
          }

           else if(number==6)
            { 
              if(countPlayer_1==0)
            {  
                countPlayer_1=countPlayer_1+number;
                if(countPlayer_1<=100)
                {
                  var box = document.getElementById(countPlayer_1);
                  bgColor = box.style.getPropertyValue("background-color");
                  box.style.backgroundColor="red";
                   
                }
              else
               {
                  countPlayer_1=countPlayer_1-number;
                  var box =document.getElementById(countPlayer_1);
                  box.style.backgroundColor="red";
               }
              
          }
     
          else if(countPlayer_1!=0)
            {
                box1 = document.getElementById(countPlayer_1);
                box1.style.backgroundColor=bgColor;
                countPlayer_1=countPlayer_1+number;
                 if(countPlayer_1<=100)
                  {
                    var box =document.getElementById(countPlayer_1);
                    bgColor = box.style.getPropertyValue("background-color");
                    box.style.backgroundColor="red";
                     if(countPlayer_1==9)
                     {

                      box.setAttribute("onclick","ladder(countPlayer_1,123)");
                      console.log(444);
                     }
                     else if(countPlayer_1==38||54||62||87||92||98)
                     {
                      box.setAttribute("onclick","snake(countPlayer_1,123)");
                     }
                  }
                 else
                  {
                    countPlayer_1=countPlayer_1-number;
                    var box =document.getElementById(countPlayer_1);
                    box.style.backgroundColor="red";
                  }
            } 
                countA=1;
                
                dice.setAttribute("onclick","roll(123)"); 
      }
    accessPlayer_1=0;
      }

    else if(id==456 && countB==1)
     {
      accessPlayer_1=1;
      clickPlayer_2++;
      number = (Math.round((Math.random()*5)+1));
      console.log(number);
      if(number!=6)
       {
         if((countPlayer_2)==0)
           {
            countPlayer_2=countPlayer_2+number;
            if(countPlayer_2<=100)
             {
               var box = document.getElementById(countPlayer_2);
               bgColor = box.style.getPropertyValue("background-color");
               box.style.backgroundColor="yellow";
                if(countPlayer_2==4)
                     {

                      box.setAttribute("onclick","ladder(countPlayer_2,456)");
                      console.log(666);
                     }
              }
             else
             {
               countPlayer_2=countPlayer_2-number;
               var box =document.getElementById(countPlayer_2);
               box.style.backgroundColor="yellow";
             }
            }
         else if((countPlayer_2)!=0)
          {
              box2 = document.getElementById(countPlayer_2);
              box2.style.backgroundColor=bgColor;
              countPlayer_2=countPlayer_2+number;
              if(countPlayer_2<=100)
               {
                 var box =document.getElementById(countPlayer_2);
                 bgColor= box.style.getPropertyValue("background-color");
                 box.style.backgroundColor="yellow";
                  if(countPlayer_2==4||9||21||28||63)
                     {

                      box.setAttribute("onclick","ladder(countPlayer_2,456)");
                      console.log(666);
                     }
                     else if(countPlayer_2==38||54||62||87||92||98)
                     {
                      box.setAttribute("onclick","snake(countPlayer_2,456)");
                     }
               }
              else
               {
                 countPlayer_2=countPlayer_2-number;
                 var box =document.getElementById(countPlayer_2);
                 box.style.backgroundColor="yellow";
               }
          }
                countB=0;

        }
    else if(number==6)
     { 
       if(countPlayer_2==0)
         {
           countPlayer_2=countPlayer_2+number;
           if(countPlayer_2<=100)
            {
              var box = document.getElementById(countPlayer_2);
              bgColor = box.style.getPropertyValue("background-color");
              box.style.backgroundColor="yellow";
            }
           else{
                countPlayer_2=countPlayer_2-number;
                var box =document.getElementById(countPlayer_2);
                box.style.backgroundColor="yellow";
               }
          }
        else if(countPlayer_2!=0)
          {
            box2 = document.getElementById(countPlayer_2);
            box2.style.backgroundColor=bgColor;
            countPlayer_2=countPlayer_2+number;
            if(countPlayer_2<=100)
             {
              var box =document.getElementById(countPlayer_2);
              bgColor = box.style.getPropertyValue("background-color");
              box.style.backgroundColor="yellow";
              if(countPlayer_2==9)
                     {

                      box.setAttribute("onclick","ladder(countPlayer_2,456)");
                      console.log(666);
                     }
                 else if(countPlayer_2==38||54||62||87||92||98)
                 {
                  box.setAttribute("onclick","snake(countPlayer_2,456)");
                 }    
             }
             else
             {
              countPlayer_2=countPlayer_2-number;
              var box =document.getElementById(countPlayer_2);
              box.style.backgroundColor="yellow";
             }
           }
             
             countB=1;
             dice.setAttribute("onclick","roll(456)");
       }
       accessPlayer_2=0;
       
    }


}

function ladder(counterr,idd)
{
   idLadder=idd;
   console.log(idd);
   counterLadder=counterr;
    box3 = document.getElementById(counterLadder);
   if(counterLadder%2==0)
   {
    box3.style.backgroundColor="#0099FF";
   }
   else
   {
    box3.style.backgroundColor="#00cc88";
   }
   for(s=0;s<ladderStart.length;s++)
   {
     if(counterLadder==ladderStart[s])
     {
       counterLadder=ladderUp[s];
       box = document.getElementById(counterLadder);
       bgColor = box.style.getPropertyValue("background-color");
       console.log(bgColor);
       if(idLadder==123)
       {
       box.style.backgroundColor="red";
       }
       else if(idLadder==456)
       {
        box.style.backgroundColor="yellow";
       }
     }
   }
   if(idLadder==123)
   {
     countPlayer_1=counterLadder;
   }
   else if(idLadder==456)
   {
    countPlayer_2=counterLadder;
   }
}


function snake(counteer,idd)
{
  idSnake=idd;
   console.log(idSnake);
   counterSnake=counteer;
    box3 = document.getElementById(counterSnake);
   if(counterSnake%2==0)
   {
    box3.style.backgroundColor="#0099FF";
   }
   else
   {
    box3.style.backgroundColor="#00cc88";
   }
   for(s=0;s<snakeBite.length;s++)
   {
     if(counterSnake==snakeBite[s])
     {
       counterSnake=snakeLow[s];
       box = document.getElementById(counterSnake);
       bgColor = box.style.getPropertyValue("background-color");
       console.log(bgColor);
       if(idSanke==123)
       {
       box.style.backgroundColor="red";
       }
       else if(idSanke==456)
       {
        box.style.backgroundColor="yellow";
       }
     }
   }
   if(idSanke==123)
   {
     countPlayer_1=counterSnake;
   }
   else if(idSnake==456)
   {
    countPlayer_2=counterSnake;
   }
