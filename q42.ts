let magiciansName : string [] = ["kiki" , "popo" , "dilji", "samomi"];

function great_magicians(a : string[])
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

great_magicians(magiciansName);
show_magician(magiciansName);
