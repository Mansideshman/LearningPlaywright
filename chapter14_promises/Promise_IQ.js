// let p = new Promise(function (resolve,reject)
// {
//     resolve(42);
// });

// p.then(function(value)
// {
//     console.log("Answer:",value);
// });

//______________________________________________________

// let p =new Promise(function (resolve,reject)
// {
//     resolve(42);
// });

// p.then(function(value)
// {
//     console.log("Answer:",value);
// });       //Answer:42

//____________________________________________________

// let p = new Promise(function(resolve,reject)
// {
//     reject("something broke");
// });

// p.catch(function (err)
// {
//     console.log("caught:",err);
// });  //caught: something broke

//______________________________________

// let p =  Promise.resolve(5);
// p.then(function(val)
// {
//     return val*10;
// }).then(function (val)
// {
//     console.log("Result:",val);
// });

//_____________________________________

//

// Promise.resolve(1)
// .then(function (val)
// {
//     console.log(val);
//     return val +1;
// })
// .then(function(val)
// {
//     console.log(val);
//     return val +1;
// })
// .then(function (val)
// {
//     console.log(val);
// });


// Promise.resolve("start")
// .then(function (val)
// {
//     console.log(val);
//     throw new Error("Broke at step 2");
// })
// .then(function()
// {
//     console.log("This will Not run");
// })
// .catch(function(err)
// {
//     console.log("caught:",err.message);
// });


// Promise.reject("Test failed")
// .then(function(data)
// {
//     console.log("Data",data);
// })
// .catch(function(err)
// {
//     console.log("Error:",err);
// })
// .finally(function()
// {
//     console.log("cleanup done");
// });


Promise.resolve("Quick win").then(function (msg)
{
    console.log(msg);
});
Promise.reject("Quick loss").catch(function (msg)
{
    console.log(msg);
});