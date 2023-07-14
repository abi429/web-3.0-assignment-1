function sandwichItems (...items:string[])
{
    console.log("customer ha ordered for the following items on his sandwich");
    for(let i = 0 ; i < items.length ; i++)
    {
      console.log(items[i]);
    }
}

sandwichItems("salami","roast","cheese");
sandwichItems("salami","egg");
sandwichItems("egg","meat","salad");