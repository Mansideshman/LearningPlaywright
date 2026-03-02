//In automation testing,API calls sometimes fail due to network issues.Write a Javascript program that simulates retrying a failed API call using a do..while loop.
//The program should retry a maximum of 5 times.Simulate random success/failure using Math.random() & chance of succes:randomValue >0.6).
//Log each attempt and print the final result.


let attempt=1;
let success =false;

do {
    console.log("Trying API call.Attempt:",attempt);

    let randomValue=Math.random();
    if(randomValue >0.6)
    {
        console.log("API call successful");
        //success = true;
    }
    else
    {
        console.log("API call failed");
    }
    attempt++;

}
while(!success && attempt<=5);

if(success)
{
    console.log("API succeeded");
}
else{
    console.log("API failed after 5 attempts");
}