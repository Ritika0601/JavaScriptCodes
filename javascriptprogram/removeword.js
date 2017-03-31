
var str="How are you Ritika?";
document.getElementById("dfg1")= str;

function rem()
{
  
  var res = str.split(" ");
  for (var i = 0; i<res.length;)
  {
     var string2 = res[i];
     var string3 = res.indexOf(string2);
     var string4 = string2.indexOf("a");
     if (string4 == -1) 
     {
       res.splice(string3,1);
     }

      else {

      	i++;
      }
      
     document.getElementById("dfg1")=res;

  }
}