// //asynchronous callback
// -i will do this later,you carry on


// Real workd Qa ex:
// When you send an APi requests,you dont freeze your entire test suite waiting for the responseCodes.
// The request goes out,your code continues,and when the response arrives,then callback runs


console.log("test1:started");

setTimeout(function(){
    console.log("Test2:API response received")
},2000);

console.log("Test 3:moving to next last");



