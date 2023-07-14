let magicianName : string [] = ["kiki" , "popo" , "dilji", "samomi"];

let copymagicianName : string[] = [];
for(let i = 0 ; i < magicianName.length ; i++)
{
  copymagicianName[i] = magicianName[i];

}

function great_magicians(a : string[]): any
{

    for(let i = 0 ; i< a.length ; i++)
    {
      a[i] = "Great " + a[i];
    }
}


function show_magician(a : string[])
{
    for(let i = 0 ; i< a.length ; i++)
    {
      console.log(a[i]);
      
    }
}

great_magicians(copymagicianName);
show_magician(magicianName);
show_magician(copymagicianName);

