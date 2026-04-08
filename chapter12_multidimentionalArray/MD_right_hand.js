//right hand triangle-star pattern

//    *
//   **
//  ***
// ****
//*****

let n =5;


for(let i=1;i<=n;i++)
{
    let row="";
    
    //spaces
    for(let j=1;j<=n-i;j++)
    {
        row=row + " ";
      
    }

    //stars
    for(let j=1;j<=i;j++)
    {
        row += "*";
    }
    console.log(row);
}
