function main()
{

var newObj ={
	'first-name':"Ritika ", /*if we write property name using predefined keywords then we have to put them in single/double qutoes  
	                         and to retrive the value of that property name then we have to put them in single/double qutoes .*/
	"last-name":"Soni"
};


document.write(newObj["first-name"]);  /* here we put the property name in single/double qutoes
                                       if we do not use it then it shows error.
                                      if we write newObj.first-name then it shows NaN.*/
var another_stooge = Object.create(newObj);

another_stooge["first-name"]="Abhi";
document.write(another_stooge["first-name"]);


}
