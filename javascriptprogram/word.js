function checkout()
{
   var count=[];
   var stringg="";
   var max=0;
   var str = "Hoooooooooooooow aretiooiioooooo youu aaaadsiii";
   var res = str.split(" ");
   for (var i = 0; i <res.length; i++) 
   {
   	  var ser = res[i];
   	  var stt = ser.split("");
   	  var countt=0;
   	      for(var j=0;j<stt.length;j++)
   	        {
   	  	       var char = stt[j];
   	  	       
   	  	       if(char =="a"|| char=="e" || char =="i" || char =="o" || char =="u")
                    countt = countt +1;

   	  	          
   	        }
   	        count[i]=countt;

   }
     max=count[0];
   	 var indexx=0;
   	 for(var z=1;z<count.length;z++)
   	 {
   	 	if(count[z]>max)
   	 	{
   	 		max=count[z];
   	 		indexx=z;
   	 	}
          
   	 }
     

  var neww=res[indexx];

document.write(neww);



}
    