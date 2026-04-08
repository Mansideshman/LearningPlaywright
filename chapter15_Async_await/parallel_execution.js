function apiCall(name)
{
    return new Promise(function(resolve)
{
    setTimeout(function()
{
    resolve(name,"200 Ok!");
},1000)
});
}


async function paralletTest()
{
    console.log("starting of the test");
    let start =Date.now();

    let[r1,r2 ,r3] = await Promise.all(
        [
            apiCall("auth Service"),
            apiCall("User Service"),
            apiCall("Payment Service")
        ])
        console.log(r1);
        console.log(r2);
        console.log(r3);

        console.log("Time:~"+ (Date.now - start) + "ns" );
    
}