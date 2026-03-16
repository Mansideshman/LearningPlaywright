// Reusable Step Runner with Callback
// Write a higher-order function `runStep(stepName, actionFn)` that logs the start of a step, executes the callback, and returns an object in the format `{ stepName, passed, message }`. If the callback throws an error, catch it and return `passed: false` with the error message.


function runStep(stepName, actionFn) {

  console.log(`Starting step: ${stepName}`);

  try {
    const result = actionFn();   // execute callback

    return {
      stepName: stepName,
      passed: true,
      message: result
    };

  } catch (error) {

    return {
      stepName: stepName,
      passed: false,
      message: error.message
    };

  }
}