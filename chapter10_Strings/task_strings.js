// ✅ Validate URL contains expected environment

//let url = "https://staging.myapp.com/dashboard";

//console.log(url.includes("staging"));   // true

// console.log(url.startsWith("https")); //true

// console.log(url.endsWith("/dashboard")); //true

//--------------------------------------------------------------------------

// let log = "[ERROR] 2024-03-07 TestCase: login - Status: 500";
// let status = log.match(/Status: (\d+)/)[1];  //extracts status code from log
// console.log(status)  ;  //500
//-------------------------------------------------------------------------------
//masking sensitive information

let env = "staging"; 
let setup = "auth"; 
let count = 7; 
let testId = `${env}_${setup}_${String(count).padStart(3,"0")}`;
console.log(testId);   // staging auth_007

//-------------------------------------------------------------------------------------


//// ✅ Normalizing test results

// let actual = " PASS ";
//  let expected = "pass";
  
// console.log(actual.trim().toLowerCase()=== expected);   // true


// //--------------------------------------------------------------------------------





// // ✅ Parsing query parameters from URL

// let testUrl = "https://app.com/search?query=login&page=2&sort=asc"; 
// let params = Object.entries( testUrl.split("?")[1].split("&").map(p => p.split("=")) );
// console.log(params); // Output: { query: "login", page: "2", sort: "asc" }


//------------------------------------------------------

// let token = "Bearer eyJhbGciOiJIUzI1NiJ9.secret"; 
// let masked = token.replace(/(?<=Bearer ).+/, "***REDACTED***");
// console.log(masked);