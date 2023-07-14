let str = "string" , num1 = 70 , num2 = 125 , array : string[] = ["Mountains" , "Trees"] ;

// String Checking

console.log("Is str == 'Mountain'"); 
console.log(str=="Mountain");

console.log("Is str != 'string'"); 
console.log(str !="string");

//Number checking

console.log("Is num1 != '50'"); 
console.log(num1!=50);

console.log("Is num1 == '70'"); 
console.log(num1==70);

console.log("Is num1 > num2 "); 
console.log(num1 > num2);

console.log("Is num2 < num1"); 
console.log(num2 < num1);

console.log("is num2 >= 100");
console.log(num2 >= 100);

console.log("Is num1 <=100")
console.log(num1 <= 100);

//lower case function Checking

console.log("Is str in lower case?");
console.log(str == str.toLowerCase());

// And , Or operator

console.log("Is num1 == 70 And num2 == 125 ?");
console.log(num1 == 70 && num2 == 125);

console.log("Is num1 > 100 OR num2 > 100 ?");
console.log(num1 > 100 || num2 > 100);






console.log("Is 'Trees' present in array?");
console.log(array.indexOf("Trees")>= 0);

console.log("Is 'rivers' present in array?");
console.log(array.indexOf("rivers")>=0);

console.log("Is 'array' is an array??");
console.log(Array.isArray(array));

console.log("Is 'num2' is an array??");
console.log(Array.isArray(num2));


