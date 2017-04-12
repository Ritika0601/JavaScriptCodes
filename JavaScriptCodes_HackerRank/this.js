function main()
{
val = 5;
var newObj ={
	val: 2, 
	getUserName : function(){
		this.val += this.val;
		console.log(this.val);
	}
	
};

 var a=newObj.getUserName;

a();
}