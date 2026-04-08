//when step2 depends on step 1 's result ,you must run then sequentially

//steo1 


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

async function sequentialTest()
{
    console.log("starting of the test!");
    let start = Date.now();

    
    let r1 = await apiCall("Login");
    console.log(r1);

    let r2 = await apiCall("Login");
    console.log(r2);

    let r3 = await apiCall("Login");
    console.log(r3);

    console.log("time:~"+(Date.now()-start)+"ns");

}
sequentialTest();