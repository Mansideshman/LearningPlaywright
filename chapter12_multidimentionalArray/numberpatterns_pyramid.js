//     1
//    123
//   12345
//  1234567
// 123456789


let n = 5;
for(let i = 1; i <= n; i++) {
    let row = "";

    for(let j = 1; j <= n - i; j++) row += " ";
    for(let j = 1; j <= (2*i - 1); j++) row += j;

    console.log(row);
}