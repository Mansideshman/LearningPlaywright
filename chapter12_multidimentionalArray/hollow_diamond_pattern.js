//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *



let n = 5;

// 🔺 Upper Part
for (let i = 1; i <= n; i++) {
    let row = "";

    // spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // hollow stars
    for (let j = 1; j <= (2 * i - 1); j++) {
        if (j == 1 || j == (2 * i - 1)) {
            row += "*";
        } else {
            row += " ";
        }
    }

    console.log(row);
}

// 🔻 Lower Part
for (let i = n - 1; i >= 1; i--) {
    let row = "";

    // spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // hollow stars
    for (let j = 1; j <= (2 * i - 1); j++) {
        if (j == 1 || j == (2 * i - 1)) {
            row += "*";
        } else {
            row += " ";
        }
    }

    console.log(row);
}