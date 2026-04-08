//Real QA; E2E login flow app.vwo.com

function openBrowser(callback)
{

console.log("opening the browser");
   
    setTimeout(function(){
        console.log("step1-browser starting...");
        callback();
    },500);
}

function Gotologinpage(callback)
{

//console.log("Go to login page");
   
    setTimeout(function(){
        console.log("step2-login page loaded...");
        callback();
    },500);
}


function enterCredentials(callback)
{

//console.log("Go to login page");
   
    setTimeout(function(){
        console.log("step3-credentials entered...");
        callback();
    },500);
}

function clickLogin(callback)
{

//console.log("Go to login page");
   
    setTimeout(function(){
        console.log("step 4-login button clicked...");
        callback();
    },500);
}

openBrowser(function()
{
    Gotologinpage(function(){
        enterCredentials(function()
    {
        clickLogin(function()
    {
        console.log("Testcomplete");
    })
    })
    
})
}
)