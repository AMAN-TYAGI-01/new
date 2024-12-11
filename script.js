
// string
let num=6575;
let num1=num.toString();
 let h1=document.getElementById("demo");
 h1.innerHTML=num1;
 h1.style.color="red"
 h1.style.backgroundColor="orange";
 h1.style.textAlign="center";
console.log(num1);


// length
let name="javascript";
let num2= name.length;
let h2=document.getElementById("demo1");
h2.innerHTML=num2;
h2.style.color="black";
h2.style.backgroundColor="white";
h2.style.textAlign="center";

// concat 
let num3="javascript";
let num4=" is a programming language";
let num5=num3.concat(num4);
let h3 = document.getElementById("demo2");
h3.innerHTML=num5;
h3.style.color="";
h3.style.backgroundColor="green";
h3.style.textAlign="center";

// charat use
var num6="javascript";
var num7=num6.charAt(7);
var h4=document.getElementById("demo3");
h4.innerHTML=num7;
h4.style.color="white";
h4.style.backgroundColor="black";
h4.style.textAlign="center";

// charcodeAt

var num8="javascript";
var num9=num8.charCodeAt(5);
document.getElementById("demo4").innerHTML=num9;


// uppercase
var num10="javascript";
var num11=num10.toUpperCase();
document.getElementById("demo5").innerHTML=num11;

// lowercase

var num12="javascript";
var num13=num12.toLowerCase();
document.getElementById("demo6").innerHTML=num13;

// white space remove

var num14="  aman tyagi  ";
var num15=num14.trim(" ");
document.getElementById("demo7").innerHTML=num15;


// split string data change into array;
var num16="this is a java class we can learn this language";
var num17=num16.split();
document.getElementById("demo8").innerHTML=num17;

// slice 
var num18="javascript class";
var num19= num18.slice(0,7);
document.getElementById("demo9").innerHTML=num19;

// slice negative value
var num20= "this is a java class we can learn this language";
var num21= num20.slice(-14,-6);
document.getElementById("demo10").innerHTML=num21;


// ending value use in slice
var num22= "this is a java class we can learn this language";
var num23= num22.slice(4);
document.getElementById("demo10").innerHTML=num23;

// substring
var num24="this is a java class we can learn this language";
var num25= num24.substring(3,9);
document.getElementById("demo11").innerHTML=num25;

// substr
var num26="javascript";
var num27= num26.substr(2,4);
document.getElementById("demo12").innerHTML=num27;

// Replace 

var num28="all that gliter is not gold .gold is presios";
var num29=num28.replace("gold","silver");
document.getElementById("demo13").innerHTML=num29;

// replace all
var num30="all that gliter is not gold .gold is presios";
var num31=num28.replaceAll("gold","silver");
document.getElementById("demo14").innerHTML=num31;