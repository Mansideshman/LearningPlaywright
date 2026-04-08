//A  promise is javascript's way of saying "I'll give you the result later -> either it'll success or it'll fail".


let order = new Promise(function (resolve, reject)
{
    let foodready = true;
    if(foodready)
    {
        resolve("Pizza is delivered!");
    }
    else
    {
        reject("order cancelled");
    }
}
)
console.log(order);