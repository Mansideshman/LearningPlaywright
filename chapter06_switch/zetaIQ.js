let testScore = 85;

switch(true){
    case (testScore >= 95):
        console.log("Outstanding :Top performer");
        break;
    case (testScore >= 80):
        console.log("Excellent :Above average");
        break;
    case (testScore >= 70):
        console.log("Good :Average performer");
        break;
    case (testScore >= 60):
        console.log("Needs Improvement :Below average");
        break;
    default:
        console.log("Failing :Poor performance");
}