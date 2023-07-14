let orignalArray : string[] = ["Curree", "Aalakand", "Dalamjaba" , "Bahodand", "Eishta"];

console.log(orignalArray);//orignal array
let copiedArray : string[]=[];

let count = 0;
for (; count<orignalArray.length;count++)// copying each element of orignal array in copy array 
{
  copiedArray[count] = orignalArray[count];
}

console.log(copiedArray);


console.log( copiedArray.sort());//copied array ascending order
console.log(orignalArray);//orignal array

console.log(copiedArray.reverse());//copied array in descending order
console.log(orignalArray); // orignal array




console.log(orignalArray.reverse()); // orignal array in ascending order

console.log(orignalArray.reverse());//orignal array in descending order

orignalArray.sort();//sorting orignal array in ascending order
console.log(orignalArray);

orignalArray.reverse();//reversing sorted array so i will get descending order
console.log(orignalArray);