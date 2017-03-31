function palindrome()
{
   var char="";
   var count=0;
   var stringg ="laal is ede pop";
   var arr=stringg.split(" ");
   for(var i=0;i<arr.length;i++)
   {
   	 var arr1=arr[i];

   	 for(var j=arr1.length-1;j>0;j--)
   	 {
   	 	var charrr = arr1.charAt[j];
   	 	  char =char + charrr;
   	 }
   	 if(arr1 ==char)
   	 {
        count =count+1;
   	 }
   }
   




}