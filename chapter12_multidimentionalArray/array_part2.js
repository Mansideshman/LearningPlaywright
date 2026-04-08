// let grid = [[10,20,30],
//             [40,50,60],
//             [70,80,90]];



// console.log(grid[0][1]);


//  grid[0][0] =99;
// console.log(grid[0][0]);
// console.log(grid);


// console.log(grid.length);
// console.log(grid[0].length);
//  console.log(grid[grid.length-1][grid[0].length-1]);  //grid[2][2]


let testMatrix = [
        ["login","pass",200],
        ["checkout","fail",404],
        ["search","pass",100]
];

for(let i=0;i< testMatrix.length;i++)
{
        for(let j=0;j < testMatrix[i].length; j++)
        {
            console.log(testMatrix[i][j] + " ")
        }
        console.log(" ");
    }

    console.log("-----------");

    for(let row in testMatrix)
    {
        for(let cell of row)
        {
            process.stdout.write(cell + " ")
        }
        console.log();
    }



  //  let grid = [[10,20,30],
//             [40,50,60],
//             [70,80,90]];



// console.log(grid[0][1]);


//  grid[0][0] =99;
// console.log(grid[0][0]);
// console.log(grid);


// console.log(grid.length);
// console.log(grid[0].length);
//  console.log(grid[grid.length-1][grid[0].length-1]);  //grid[2][2]


