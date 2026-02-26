//score 90-100  -A
//score 80-89   -B
//score 70-79   -C
//score 60-69   -D
//score 0-59    -F
//invalid


let grade;
let score=70;

if(typeof score !=='number')
{
    console.log("Are you fool,why you are giving score as not a number");
    return;
}
if (score<0 || score >100)
{
    console.log("Are you fool,score can not be less than 0 and greater than 100");
}

if(score>=90)
{
    grade ="A";
}else if (score>=80)
{
    grade = "B";
}else if(score>=60)
{
    grade = "D";
}
else{
    grade ="F";
}

console.log("For the score", score,"Grade is->",grade)
console.log(`for the score  $(score) "Grade is-> ", $(grade)`);




