function Add()
{
   var id1 = parseInt(document.getElementById("demo1").value);
   var id2 = parseInt(document.getElementById("demo2").value);
   var numb3 = id1 + id2;
   document.write(numb3);
}
function Sub()
{
   var id1 = parseInt(document.getElementById("demo1").value);
   var id2 = parseInt(document.getElementById("demo2").value);
   var numb3 = id1 - id2;
   document.write(numb3);
}
function Mul()
{
   var id1 = parseInt(document.getElementById("demo1").value);
   var id2 = parseInt(document.getElementById("demo2").value);
   var numb3 = id1 * id2;
   document.write(numb3);
}
function Divide()
{
   var id1 = parseInt(document.getElementById("demo1").value);
   var id2 = parseInt(document.getElementById("demo2").value);
   if (id2==0) {document.write("Number should be greater then zero")} else {var numb3 = id1 / id2;}
   document.write(numb3);
}
