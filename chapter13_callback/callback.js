//callback

function placeOrder(ClipboardItem, callback)
{
console.log("......Placing order");
callback();// function call
callback2();
}

//Define
function print()
{
    console.log("callback-Done with the order");
}

placeOrder("Burger",function()
{
    console.log("done with the order");
})