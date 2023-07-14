let arr : string [] = ["Mountains","Cities","Languages"];
console.log(arr.indexOf("rivers"));//this error occured bcz of seraching index of river , river is not present in our array
//so i will push river in it now
arr.push("rivers");
console.log();

console.log(arr.indexOf("rivers"));

