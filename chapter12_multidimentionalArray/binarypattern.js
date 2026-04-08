// 1
// 01
// 101
// 0101
// 10101



let n = 5;

for(let i = 1; i <= n; i++) {
    let row = "";

    for(let j = 1; j <= i; j++) {
        row += (i + j) % 2;    //(i+j)%2   alternates between 0 and 1
    }

    console.log(row);
}