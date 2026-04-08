function openBrowser()
{
    return new Promise(function(resolve)
{
    resolve("Browser opened ! ");
});
}

function goTOLogin()
{
    return new Promise(function(resolve)
{
    resolve("Login page loaded");
});
}

function enterCredentials()
{
    return new Promise(function (resolve)
{
    resolve("credentials entered");
});
}
function clickLogin()
{
    return new Promise(function (resolve)
{
    resolve("logged in successfully");
});
}

openBrowser().then(function(msg)
{
    console.log("step1",msg);
    return goTOLogin();
}).then(function(msg)
{
    console.log("step2",msg);
    return enterCredentials();
}).then(function(msg)
{
    console.log("step3:",msg);
    return clickLogin();
}).catch(function(error)
{
    console.log("error:",error);
}).finally(function()
{
    console.log("Done execution!");
});



let goToLogin = goToLogin.then(function (msg)
{
    console.log(msg);
});

let enterCredentials = goTOLogin.then(function (msg))
{
    console.log(msg);
}
