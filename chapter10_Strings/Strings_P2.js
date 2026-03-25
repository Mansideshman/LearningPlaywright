//extracting substrings

let str = "Login_testr_pass_001";

//slice(start,end) -negative indexes supported

str.slice(0,5) // (0,4)  -> "login"
console.log(str.slice(11));
console.log(str.slice(-3));


//substring(start,end)  -no negatives (treats as 0)

str.substring(6,10);
