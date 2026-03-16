//you receive an array of Playwright step result objetcs in the format `{name,status,durationMs}`,where status can be "passed","failed" or "skipped".
//Write a Javascript function that prints a summary report with total steps,passed count,failed count,skipped.Write a JS function that prints a summary report with
// total steps,passed count,failed count ,skipped count ,total duration ,and comma -separated list of failed step names.


let results = [
  { name: "open login", status: "passed",  durationMs: 400 },
  { name: "fill form",  status: "failed",  durationMs: 700 },
  { name: "submit",     status: "skipped", durationMs: 0   }
];

let PassResult    = [{ name: "open login", status: "passed",  durationMs: 400 }];
let FailResult    = [{ name: "fill form",  status: "failed",  durationMs: 700 }];
let skippedResult = [{ name: "submit",     status: "skipped", durationMs: 0   }];


//summaryReportPrint

function printSummaryReport(steps)
{
let total = steps.length;
const passed = steps.filter(s=>s.status==="passed").length;
const failed = steps.filter(s=>s.status==="failed").length;
const skipped = steps.filter(s=>s.status ==="skipped").length;
const duration = steps.reduce((sum,s)=>sum + s.durationMs , 0);
const failedNames = steps.filter(s=>s.status ==="failed").map(s=>s.name).join(",") || "None";


console.log("====Playwright step summary");
console.log(`Total steps : ${total}`);
console.log(`Passed      : ${passed}`);
console.log(`Failed      : ${failed}`);
console.log(`Skipped     : ${skipped}`);
console.log(`Total Duration    : ${duration}ms`);
console.log(`failedsteps    : ${failedNames}`);
console.log("==============================");
}


printSummaryReport(results);
