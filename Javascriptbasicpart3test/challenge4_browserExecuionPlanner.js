// You have an array of all supported browsers and another array of temporarily blocked browsers. 
// Write a function that returns the runnable browsers, the blocked browsers, and a printable execution plan string such as "Run on: chromium, webkit | Skip: firefox".





function browserExecutionPlanner(allBrowsers, blockedBrowsers) {

  // runnable browsers
  const runnable = allBrowsers.filter(
    browser => !blockedBrowsers.includes(browser)
  );

  // blocked browsers
  const blocked = allBrowsers.filter(
    browser => blockedBrowsers.includes(browser)
  );

  // execution plan string
  const plan = `Run on: ${runnable.join(", ")} | Skip: ${blocked.join(", ")}`;

  return {
    runnable,
    blocked,
    plan
  };
}

// Example
const allBrowsers = ["chromium", "firefox", "webkit"];
const blockedBrowsers = ["firefox"];

const result = browserExecutionPlanner(allBrowsers, blockedBrowsers);
console.log(result);