function toggle()
{
 
   var x = "Hello World";
     var string ="";

   for (var i = 0;i<x.length;i++)
   {

      var res = x.charAt(i);
      if (res==res.toUpperCase()) {
      	res = res.toLowerCase();
      } else {

      	res = res.toUpperCase();
      }
      
      string = string + res;

   }

   document.write(string);

}
