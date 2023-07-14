export let personName : string = "syed jadan akram";
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
personName = personName.toLowerCase();

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
  }
  console.log(titleCase(personName));
