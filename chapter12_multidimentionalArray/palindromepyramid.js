//     1
//    121
//   12321
//  1234321
// 123454321


let n = 5;

for(let i = 1; i <= n; i++) {
    let row = "";

    // spaces
    for(let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // increasing numbers
    for(let j = 1; j <= i; j++) {
        row += j;
    }

    // decreasing numbers
    for(let j = i - 1; j >= 1; j--) {
        row += j;
    }

    console.log(row);
}