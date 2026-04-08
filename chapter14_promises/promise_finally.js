let testRun = new Promise(function (resolve,reject)
{
    reject("Assertion Failed");
});

testRun.then(function (msg)
{
    console.log(msg);
}).catch(function(error)
{
    console.log(error);
}).finally(function()
{
    console.log("I will be executed anyhow!");
});

//.finally()   always runs - whether the test passed or failed.Just like afterEach() in cypress and playwright.

