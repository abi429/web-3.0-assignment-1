let arr5 : string[] = ["Muhammad Hassan Akhund","General Mubeen","Yaqoob mujahid"];
console.log(`Respected Mullah ${arr5[0]} , i would like to have a dinner with me at serena hotel tonight inshaa Allah`);
console.log(`Respected Mullah ${arr5[1]} , i would like to have a dinner with me at serena hotel tomorrow inshaa Allah`);
console.log(`Respected Mullah ${arr5[2]} , i would like to have a dinner with me at serena hotel day after tomorrow inshaa Allah`);
arr5  = ["Moulana Tariq Jameel","General Mubeen","Yaqoob mujahid"];
console.log(`Respected ${arr5[0]} , i would like to have a dinner with me at serena hotel tonight inshaa Allah`);
console.log(`Respected Mullah ${arr5[1]} , i would like to have a dinner with me at serena hotel tomorrow inshaa Allah`);
console.log(`Respected Mullah ${arr5[2]} , i would like to have a dinner with me at serena hotel day after tomorrow inshaa Allah`);
console.log("Mullah Hassan Akhund can not attend the dinner party. He is too busy");

//Found bigger dining table
arr5.push("khalifa"); // at the end
arr5.unshift("Sardar Ali"); //at the start
arr5.splice(2,0,"Hussain");// at mid
console.log(`Respected ${arr5[0]} , i would like to have a dinner with me at serena hotel tonight inshaa Allah`);
console.log(`Respected Mullah ${arr5[2]} , i would like to have a dinner with me at serena hotel tomorrow inshaa Allah`);
console.log(`Respected Mullah ${arr5[5]} , i would like to have a dinner with me at serena hotel day after tomorrow inshaa Allah`);



