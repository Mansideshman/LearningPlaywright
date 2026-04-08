// //2D arrays -common operations

// let scores = [
//     [85,90,78],
//     [60,45,70],
//     [95,88,92]
// ];


// let rowSums = scores.map(row => row.reduce((a,b) => a + b,0));
// console.log(rowSums);


let suiteResults = [
    ["login-pass","register-pass","logout-pass"],   //Auth suite
    ["search-pass","filter-fail","sort-pass"],      //search -suite
    ["checkout-fail","payment-fail","confirm-pass"]   //payment suite
];

for(let i=0;i<suiteResults.length;i++)
{
    for(let j=0;j<suiteResults[i].length;j++)
    {
        if(suiteResults[i][j].includes("fail"))
        {
            console.log(suiteResults[i][j]);
        }
    }
}


