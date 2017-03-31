<p>Click the button to display the position of the element "Apple":</p>



<p id="demo"></p>

<button onclick="myFunction()">Try it</button>
<script>
var fruits = ["Banana", "Orange", "Banana", "Orange","Banana","Cherry"];
    
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
    
    for(var i=0;i<fruits.length;i++)
  {  var b = fruits[i];
  var index = fruits.indexOf(b);
    index = fruits.indexOf(b,index+1);
    if(index > -1){
    fruits.splice(index,1);
    
    }
    }
    document.getElementById("demo").innerHTML = fruits;
}
</script>

<p><b>Note:</b> The indexOf method was introduced in JavaScript 1.6, and does not work in Internet Explorer 8 and earlier versions.</p>

</body>
</html>
