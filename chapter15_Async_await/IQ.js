// async function sayHello()
// {
//     return "Hello,QA!";
// }

// sayHello().then(function (msg)
// {
//     console.log(msg);
// });


// async function getStatus()
// {
//     let status = await Promise.resolve(200);
//     console.log("status code:",status);
// }
// getStatus();


// async function testFlow()
// {
//     let step1 = await  Promise.resolve("opened browser");
//     console.log(step1);

//     let step2 = await Promise.resolve("clicked login");
//     console.log(step2);

//     let step3 = await Promise.resolve("verified dadhboard");
//     console.log(step3);
// }
// testFlow();


// async function riskyTest()
// {
//     try{
//         let data = await Promise.reject("element not found");
//         console.log(data);

//     }catch(err)
//     {
//         console.log("testFailed :",err);
//     }
// }

// riskyTest();


// async function apiTest()
// {
//     try{
//         let response = await Promise.resolve({status:201,body:"created"});
//         console.log("status:",response.status);
//         console.log("Body:",response.body);
//     }catch(err)
//     {
//         console.log("error:",err);
//     }
//     finally{
//         console.log("test complete");
//     }
// }
// apiTest();

// console.log("A");

// async function test()
// {
//     console.log("B");
//     await Promise.resolve();
//     console.log("c");
// }

// test();
// console.log("D");

// async function runAll()
// {
//     let [a,b,c] = await Promise.all(
//         [
//             Promise.resolve("Login: OK"),
//             Promise.resolve("cart:OK"),
//             Promise.resolve("Checkout:OK")
//         ]
//     );
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }
// runAll();


async function healthCheck()
{
    let results = await Promise.allSettled(
        [
            Promise.resolve("Auth:UP"),
            Promise.reject("DB:DOWN"),
            Promise.resolve("cache:UP")
        ]
    );

    results.forEach(function (r)
{
    let status = r.status === ":fulfilled" ? "ok" : "*";
    let msg = r.value || r.reason;
    console.log(status + " " + msg);
});
}
healthCheck();