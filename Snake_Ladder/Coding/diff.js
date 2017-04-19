function start()
{   even="#0099FF";
    odd="#00cc88";
    orange="rgb(255, 102, 0)";
    accessPlayer_1=1;
    accessPlayer_2=1; 
    countPlayer_1=0;
    countPlayer_2=0;
    clickPlayer_1=0;
    clickPlayer_2=0;
    bgColor="";
    countA=0;
    countB=0;
    snakeBite=[38,54,62,87,92,98];
    snakeLow=[7,22,3,24,68,3];
    ladderStart=[4,9,21,28,52];
    ladderUp=[35,48,58,96,75];
    setImage=["../Images/1.jpeg","../Images/2.jpeg","../Images/3.jpeg","../Images/4.png","../Images/5.jpeg","../Images/6.jpeg"];
    setLadder=["../Images/","../Images/","../Images/","../Images/","../Images/"];

   divMain=document.getElementsByTagName("div")[0];
   divMain.setAttribute("id","main");

   divHeader=document.getElementsByTagName("header")[0];
   divHeader.setAttribute("id","head");

   gameBody = document.getElementsByTagName("body")[0];

   divMiddle=document.createElement("div");
   divMiddle.setAttribute("id","mid");
   
    div1=document.createElement("div");
    div1.setAttribute("id","one");
    divMiddle.appendChild(div1);
    

    


   divLast=document.createElement("div");
   divLast.setAttribute("id","last");
   divFooter=document.createElement("footer");
   divFooter.setAttribute("id","foot");
   divLast.appendChild(divFooter);
   gameBody.appendChild(divLast);

     divBody = document.createElement("div");
     divBody.setAttribute("id","two");
     divBody.align="center";

     div2=document.createElement("div");
    div2.setAttribute("id","three");

     
      reset=document.createElement("input");
      reset.setAttribute("type","button");
      reset.setAttribute("value","Reset");
      reset.setAttribute("id","r");
      divMain.appendChild(reset);


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
    
     

     divElement_1 = document.createElement("div");
     divElement_1.style.backgroundColor="red";
     divElement_1.textContent="Player 1";
     divElement_1.style.border="thin solid";
     divElement_1.style.height = "36px";
       divElement_1.style.width = "51px";
       divElement_1.style.cssFloat="left";
       divElement_1.setAttribute("id","321");
      
    
            divElement_2 = document.createElement("div");
            divElement_2.setAttribute("id","654");
            divElement_2.style.backgroundColor="yellow";
            divElement_2.textContent="Player 2";
            divElement_2.style.height = "36px";
            divElement_2.style.width = "51px";
            divElement_2.style.cssFloat="left";
            divElement_2.style.border="thin solid";
           

              dice =document.createElement("button");
              dice.setAttribute("type","button");
              dice.style.height="110px";
              dice.style.width="110px";
              dice.style.marginTop="20px"
              dice.style.marginRight="0px";
              //dice.style.border="0px";
              dice.setAttribute("id","Roll");
               dice.setAttribute("src","../Images/full.jpeg");
               dice.style.backgroundImage="url('../Images/full.jpeg')";
               dice.style.cssFloat="right";
               
               divImage= document.createElement("div");
               divImage.setAttribute("id","789");
               divImage.style.height="90px";
               divImage.style.width="90px";
               divImage.style.marginTop="130px";
               divImage.style.marginLeft="0px";
               divImage.style.marginRight="80px";
               divImage.style.border="0px";

               im =document.createElement("img");
               im.setAttribute("id","987");
               im.style.width="90px";
               im.style.height="90px";
               im.style.border="0px";
               im.style.cssFloat="right";
               divImage.appendChild(im);
               gameBody.appendChild(dice);
                
  count =110;
  for(var row=1;row<=10;row++)
  {
    divGameBody = document.createElement("div");
    divGameBody.align="center";
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
             divChild.style.backgroundColor="#0099FF"; //blue
             }
            else
             {
              divChild.style.backgroundColor="#00cc88"; //green
             }
            divChild.style.cssFloat="left";
            divChild.style.height = "36px";
            divChild.style.width = "51px";
            divChild.style.border="thin solid";
            divChild.style.paddingTop="15px";
           if(count ==100)
           {
            divChild.textContent="FINISH";
            divChild.style.backgroundColor="#C6C3E3"; //light
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

    dice.appendChild(divImage); 
    divFooter.appendChild(player_1);
     divFooter.appendChild(player_2);
      divBody.appendChild(divElement_2);
       divBody.appendChild(divElement_1);
       divMiddle.appendChild(divBody);
       divMiddle.appendChild(divBody);
        divMiddle.appendChild(div2);
       gameBody.appendChild(divMiddle);
       gameBody.appendChild(divLast);

   
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
  if(id==123 && countA==1)
  {
   console.log(countB);
   accessPlayer_2=1;
   clickPlayer_1++;
   //number=4;
   number = (Math.round((Math.random()*5)+1));
   console.log(number);
            for(x=1;x<=6;x++)
            {
               if(x==number)
               {
               im.setAttribute("src",setImage[x-1]);
               im.setAttribute("url",setImage[x-1]);
               }
            }
      if(number!=6)
      {
        if((countPlayer_1)==0) //countPlayer_1 is used to shift player in div
        { 
         countPlayer_1=countPlayer_1+number;
         console.log(countPlayer_1);

          if(countPlayer_1<=100)
          {
            box = document.getElementById(countPlayer_1);
            bgColor1= box.style.getPropertyValue("background-color");
            console.log(bgColor1);
            if(bgColor1!="yellow")
             {
              box.style.backgroundColor="red";
             }
             else
             {
              box.style.backgroundColor="#FF6600";
             }

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
         bgColorTemp1= box1.style.getPropertyValue("background-color");
         if(bgColorTemp1!=orange)
          {
          if(bgColorTemp1=="red")
          {
              if(countPlayer_1%2==0)
              {
              box1.style.backgroundColor=even;
              }
              else if((countPlayer_1%2)!=0)
              {  
              box1.style.backgroundColor=odd;
              }
           }
          }
          else if(bgColorTemp1!="red" && bgColorTemp1!="orange")
          {
           box1.style.backgroundColor="yellow";
          }
          else if(bgColorTemp1==orange)
          {
            box1.style.backgroundColor="yellow";
          }
          countPlayer_1=countPlayer_1+number;
            if(countPlayer_1<=100)
             {
               box =document.getElementById(countPlayer_1);
               bgColor1= box.style.getPropertyValue("background-color");
               if(bgColor1!="yellow")
               {
                 box.style.backgroundColor="red";
               }
               else 
               {  
                 box.style.backgroundColor="#FF6600";
               }
             }
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
              bgColor1 = box.style.getPropertyValue("background-color");
              if(bgColor1!="yellow")
               {
                 box.style.backgroundColor="red";
               }
               else 
                {  
                box.style.backgroundColor="#FF6600";
                } 
            }
            else
            {
             countPlayer_1=countPlayer_1-number;
             var box =document.getElementById(countPlayer_1);
             if(bgColor1!="red")
              {
               box.style.backgroundColor="red";
              }
              else 
              {  
               box.style.backgroundColor="#FF6600";
              }
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
                 bgColor= box.style.getPropertyValue("background-color");
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
              if(bgColor1!="yellow")
              {
               box.style.backgroundColor="red";
              }
              else 
              { 
               box.style.backgroundColor="#FF6600";
              }
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
   //number=4;
   console.log(number);
   for(x=1;x<=6;x++)
            {
               if(x==number)
               {
               im.setAttribute("src",setImage[x-1]);
               im.setAttribute("url",setImage[x-1]);
               }
            }
    if(number!=6)
     {
       if((countPlayer_2)==0)
         {
          countPlayer_2=countPlayer_2+number;
            if(countPlayer_2<=100)
             {
               var box = document.getElementById(countPlayer_2);
               bgColor2 = box.style.getPropertyValue("background-color");
               if(bgColor2!="red")
               {
               box.style.backgroundColor="yellow";
               }
               else 
               {  

                  box.style.backgroundColor="#FF6600";
               }
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
              if(bgColor2!="red")
              {
               box.style.backgroundColor="yellow";
              }
              else 
              {  
                box.style.backgroundColor="#FF6600";
              }
             }
        }
      else if((countPlayer_2)!=0)
        {
          box2 = document.getElementById(countPlayer_2);
          bgColorTemp2= box2.style.getPropertyValue("background-color");
          if(bgColorTemp2!=orange)
          {
            if(bgColorTemp2=="yellow")
             {
               if(countPlayer_2%2==0)
               {
               box2.style.backgroundColor=even;
               }
               else((countPlayer_2%2)!=0)
               {
                box2.style.backgroundColor=odd;
               }
             }
          }
          else if(bgColorTemp2!="yellow" && bgColorTemp2!="orange")
          {
            box2.style.backgroundColor="red";
          }
          countPlayer_2=countPlayer_2+number;
          if(countPlayer_2<=100)
           {
                var box =document.getElementById(countPlayer_2);
                bgColor= box.style.getPropertyValue("background-color");
                if(bgColor2!="red")
                 {
                   box.style.backgroundColor="yellow";
                 }
                else 
                 {  
                   box.style.backgroundColor="#FF6600";
                 }
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
                 bgColor2 = box.style.getPropertyValue("background-color");
                 if(bgColor2!="red")
                  {
                    box.style.backgroundColor="yellow";
                  }
                  else 
                  { 
                    box.style.backgroundColor="#FF6600";
                  }
              }
              else
               {
                 countPlayer_2=countPlayer_2-number;
                 var box =document.getElementById(countPlayer_2);
                 if(bgColor2!="red")
                  {
                    box.style.backgroundColor="yellow";
                  }
                 else 
                 {  
                   box.style.backgroundColor="#FF6600";
                 }
                }
            }
           else if(countPlayer_2!=0)
            {
               box2 = document.getElementById(countPlayer_2);
               box2.style.backgroundColor=bgColor2;
               countPlayer_2=countPlayer_2+number;
               if(countPlayer_2<=100)
                 {
                   var box =document.getElementById(countPlayer_2);
                   bgColor2 = box.style.getPropertyValue("background-color");
                   if(bgColor2!="red")
                     {
                        box.style.backgroundColor="yellow";
                     }
                    else 
                     {  
                        box.style.backgroundColor="#FF6600";
                     }
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
                       if(bgColor2!="red")
                        {
                           box.style.backgroundColor="yellow";
                        }
                       else 
                        {  
                           box.style.backgroundColor="#FF6600";
                        }
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
    box3.style.backgroundColor=even; //blue
   }
   else
   {
    box3.style.backgroundColor=odd;  //green
   }
   for(s=0;s<ladderStart.length;s++)
   {
     if(counterLadder==ladderStart[s])
     {
       counterLadder=ladderUp[s];
       box3 = document.getElementById(counterLadder);
       if(idLadder==123)
       {
       bgColor1= box3.style.getPropertyValue("background-color");
       console.log(bgColor1);
       }
       else if (idLadder==456)
       {
       bgcolor2=box3.style.getPropertyValue("background-color");
       }
       if(idLadder==123)
       {
       box3.style.backgroundColor="red";
       }
       else if(idLadder==456)
       {
         if(bgColor2=="red")
         {
          box3.style.backgroundColor=orange;
         }
         else
         {
          box3.style.backgroundColor="yellow";
         }
       }
     }
   }
   if(idLadder==123)
   {
     countPlayer_1=counterLadder;
     console.log(countPlayer_1);
   }
   else if(idLadder==456)
   {
    countPlayer_2=counterLadder;
    console.log(countPlayer_2);
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
}
