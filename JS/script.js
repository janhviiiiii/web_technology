// printing message
console.log("Hello World");

//creating an alert
// alert("This is Alert");


var n1=20;
var n2=10;

// Arithmetic Operator
console.log("Number 1: ", n1);
console.log("Number 2: ", n2);
console.log("add", n1+n2);
console.log("sub", n1-n2);
console.log("mul", n1*n2);
console.log("div", n1/n2);
console.log("mod", n1%n2);
console.log("exp", n1**n2); 


//Assignment Operator
c=15;
console.log(c=10); //c=10
console.log(c+=5); //c=15
console.log(c-=5); //c=10
console.log(c*=5); //50
console.log(c/=5); //10
console.log(c**=5); //100000
console.log(c%=5); //0 
console.log(++c); //1 
console.log(c++); //1 but c=2
console.log(--c); //1 
console.log(c--); //1 but c=0
console.log(c); //0


console.log(false+false); //0
console.log('2'+2); //22
console.log('2'-2); //22

var user_data=prompt("Enter Numbers: ")
user_data=Number(user_data)
console.log("datatype: " + typeof(user_data)+ ", Data: " + user_data) //NaN -> Not a Number
