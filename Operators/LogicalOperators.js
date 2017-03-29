function AND()
{
   var id1 = parseInt(document.getElementById("demo1").value);
   var id2 = parseInt(document.getElementById("demo2").value);
   if(id1>=1 && id2>=1)
   {document.write("1");}
   else
   {document.write("0");}
}
function OR()
{
   var id1 = parseInt(document.getElementById("demo1").value);
   var id2 = parseInt(document.getElementById("demo2").value);
   if(id1>=1 || id2>=1)
   {document.write("1");}
   else
   {document.write("0");}
}
function NOT()
{
   var id1 = parseInt(document.getElementById("demo1").value);
   var id2 = parseInt(document.getElementById("demo2").value);
   if(id1==id2)
   {document.write("0");}
   else
   {document.write("1");}
}
