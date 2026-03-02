//Response time SLA Analyzer
//As a performance tester,you collect API response times in milliseconds.Write a js code using while loop that analyzes an array of response times and prints a performance report with min ,max,average and how many responses breached the SLA threshold(>500ms).
//Use comparision operators for min/ max tracking.


//Array of API response times in ms

let responseTimes = [120, 340 , 560 ,220,780 ,450 , 510 ,300]

let i=0;
let min =responseTimes[0];
let max=responseTimes[0];
let sum=0;
let slabreaches = 0;

while(i< responseTimes.length)
{
    let time = responseTimes[i];

    if(time < min)
    {
        min = time;
    }

    if(time > max)
    {
        max= time;
    }

    if(time >500)
    {
        slabreaches++;
    }

    sum += time;
    i++;
}

//Calculate Average
let avg = sum /responseTimes.length;

//Performance Report

console.log("API performance Report");
console.log("------------------------");
console.log("minimum response time:",min + "ms");
console.log("maximum response time",max + "ms");
console.log("Average Response time",avg.toFixed(2)+"ms");
console.log("SLA breaches(>500ms):",slabreaches);