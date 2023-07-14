let currentUsers : string[] = ["Ahsan","altaf","Hussain","sardar", "sohaib"];
let newUsers : string[] = ["Alam", "nadeem","sami","ahsan", "sardar"];

for(let i =0; i < newUsers.length;i++)
{
  let check = false;
  
  for(let j = 0 ; j < currentUsers.length ; j++)
  {
    
    if(newUsers[i].toLowerCase()==currentUsers[j].toLowerCase())
    {
      console.log("User name already used try another one ");
      check=true;
      break;
    }
  }
  if(check!=true)
  {
    console.log("User name is avialible");
  }

}