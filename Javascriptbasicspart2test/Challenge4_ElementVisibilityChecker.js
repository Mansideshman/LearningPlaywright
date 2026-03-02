// In UI Automation(Cypress/Playwright),you often need to validate element states before interacting with them.Write a Javascript program that checks
// an elements properties(isPresent ,isDisplayed ,isEnabled) and prints the appropriate action a QA engineer should TrackEvent.Use strict equality(===),logical operators(&& , ||)
// and ternery operator for severity level.

// states: READY (all true),DISABLED(present + displayed but not enabled),HIDDEN (present but not displayed),not found (not present)
// severity:critical(not present),WARNING(not displayed or not enabled),OK(all good)

function checkElementState(isPresent,isDisplayed,isEnabled)
{

let state ="";
let action ="";

if(isPresent===true && isDisplayed===true && isEnabled===true)
{
    state = "READY";
    action = "elements safe to interact";
}
else if (isPresent === true && isDisplayed===true &&isEnabled===false)
{
    state = "DISABLED";
    action = "Element is present and visible but disabled";
}
else if (isPresent===true && isDisplayed===false)
{
    state = "HIDDEN";
    action = "ELement is Present but not visible";
}
else if (isPresent===false)
{
    state = "not found";
    action = "Not present";
}

let severity = (isPresent===false) ? "CRITICAL" : (isDisplayed===false || isEnabled===false) ? "WARNING" : "OK";


console.log("Element state:",state);
console.log("Severity state:",severity);
console.log("Recommended action:",action);
}
checkElementState(true, true, true);
checkElementState(true, true, false);
checkElementState(true, false, true);
checkElementState(false, false, false);























