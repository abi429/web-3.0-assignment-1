
let obj = {
    manufacturer : "" ,
    model : "",
    color : "",
    wheels : ""

  }

function carInfo(company : string , carModel : string , ...str)
{
  obj.manufacturer =company;
  obj.model = carModel;
  obj.color = str[0];
  obj.wheels = str[1]

}

carInfo("Honda","2002","green","4 wheeler");
console.log("Properties of Car : " , obj);