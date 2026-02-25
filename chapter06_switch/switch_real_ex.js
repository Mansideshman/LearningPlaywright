//you are working with API validation
//responsecode -200,404,500

let responseCode=500;

switch(responseCode){
    case 200:
        console.log(OK);
        break;
    case 404:
        console.log("Not Found");
        break;
    case 500:
        console.log("Internal server erroor");
        break;
    default:
        console.log("Unknown response code");
}