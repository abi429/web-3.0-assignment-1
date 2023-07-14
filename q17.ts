let arr6 : string[] = ["Muhammad Hassan Akhund","General Mubeen","Yaqoob mujahid"];
console.log(`Respected Mullah ${arr6[0]} , i would like to have a dinner with me at serena hotel tonight inshaa Allah`);
console.log(`Respected Mullah ${arr6[1]} , i would like to have a dinner with me at serena hotel tomorrow inshaa Allah`);
console.log(`Respected Mullah ${arr6[2]} , i would like to have a dinner with me at serena hotel day after tomorrow inshaa Allah`);
arr6  = ["Moulana Tariq Jameel","General Mubeen","Yaqoob mujahid"];
console.log(`Respected ${arr6[0]} , i would like to have a dinner with me at serena hotel tonight inshaa Allah`);
console.log(`Respected Mullah ${arr6[1]} , i would like to have a dinner with me at serena hotel tomorrow inshaa Allah`);
console.log(`Respected Mullah ${arr6[2]} , i would like to have a dinner with me at serena hotel day after tomorrow inshaa Allah`);
console.log("Mullah Hassan Akhund can not attend the dinner party. He is too busy");

//Found bigger dining table
arr6.push("khalifa"); // at the end
arr6.unshift("Sardar Ali"); //at the start
arr6.splice(2,0,"Hussain");// at mid
console.log(`Respected ${arr6[0]} , i would like to have a dinner with me at serena hotel tonight inshaa Allah`);
console.log(`Respected Mullah ${arr6[2]} , i would like to have a dinner with me at serena hotel tomorrow inshaa Allah`);
console.log(`Respected Mullah ${arr6[5]} , i would like to have a dinner with me at serena hotel day after tomorrow inshaa Allah`);

//I can only invited two guests on a dinner so remover others

console.log("I can only invite only 2 guests to limited seats ");

let arr7 = arr6.splice(1,4);// here using split method i have removed elements from array stating index 1 to 5 including these as well


let  i = 0;
for(  ; i < arr7.length ; i++)
{
  console.log(`Respected ${arr7[i]}, I am really sorry that i have very limited space for the dinner and can not invite yoy `);

}

for( i = 0; i < arr6.length ; i++)
{
  console.log(`Respected ${arr6[i]} , it is a remember note that you are invited for the dinner with me`);
  

}

arr6.splice(0,arr6.length);// deleting last two elements from an array
console.log(arr6); // printing empty array

