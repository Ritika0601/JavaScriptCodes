

	var fruits =['mango','apple','oranges','grapes','Strawberry'];
document.getElementById('arr').innerHTML=fruits;
	var arra=[];
	var i=0;
	function popp()
	{
	  
      document.getElementById('arr').innerHTML = fruits;
      arra[i]=fruits.pop();
      i++;
     fruits.push(arra[i]);
       function pushh()
     {

      document.getElementById('arr').innerHTML = fruits;
     }
 }

function un()
{
fruits.unshift('abd','dfds');
document.getElementById('arr').innerHTML = fruits;
}
function shiftt()
{
fruits.shift();
document.getElementById('arr').innerHTML = fruits;
}