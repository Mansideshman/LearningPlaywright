//After a test suite runs,you receive an array of test results (strings: "pass","fail","skip").
//Write a Javascript program using a for loop that counts how many tests passed,failed,and were skipped.
// Print a test report with total tests,counts,pass rate percentage ,a verdict (all passed ->ready for release <=2 failures ->review,>2failures->block release).



let testResults = ["pass" ,"pass", "fail", "pass" ,"skip", "pass","fail" ,"pass"]
let pass_count =0;
let fail_count =0;
let skip_count =0;

//count results using  for loop
for(let i=0;i<testResults.length;i++)
{
    if(testResults[i] === "pass")
    {
        pass_count++;
    }
    else if(testResults[i] ==="fail")
    {
        fail_count++;
    }
    else if(testResults[i] === "skip")
    {
        skip_count++;
    }

let Totaltests = testResults.length;
let Passratepercentage = (pass_count/Totaltests)*100;

//Verdict

let verdict;

if(fail_count===0)
{
    verdict="Ready For Release";
}
else if(fail_count<=2)
{
    verdict="Need Review";
}
else 
{
    verdict="Block Release";

}

//Print Test Report

console.log("-----------Test Report------------");
console.log("Total tests:",Totaltests);
console.log("Passed:",pass_count);
console.log("Failed",fail_count);
console.log("skipped",skip_count);
console.log("Pass rate",Passratepercentage.toFixed(2) + "%");
console.log("Verdict:",verdict);

}
