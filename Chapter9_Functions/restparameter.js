// function logResults(suiteName, ...results)
// {
//     console.log(`Suite:${suiteName}`);
//     console.log(`Results: ${results.join(",")}` );
// }

// logResults("Auth Suite","pass","fail","pass","skip");



logResults("Auth Suite","pass","fail","pass","skip");

function add(a,b,c)
{
    return a+b+c;
}

let nums = [1,2,3];
add(...nums);

function hasError(...codes)
{
    return codes.some(c => c => 400);
}


