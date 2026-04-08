async function runLoginFlow()
{
    let msg1 = await openBrowser();
    console.log("step1:",msg);

    let msg2 = awiat goTOLogiin();
    console.log("step2:",msg2);

    let msg3 = await enterCredentials();
    console.log("step3",msg3);

    let msg4 = awaut clickLogin();
    console.log("step4",msg4);
}

runLoginFlow();