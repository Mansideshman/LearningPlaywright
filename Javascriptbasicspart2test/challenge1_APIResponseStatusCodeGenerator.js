let statusCode = 502;


switch(statusCode)
{
    case 200:
        
            console.log("PASS - OK:Request Successful");
            break;
        
    case 201:
        
            console.log("PASS-Created:Resource created successfully");
            break;
        
    case 301:
        
            console.log("Warning:moved permanently:URL has changed");
            break;
        
    case 400:
        
            console.log("Fail:Bad Request:Check Request Payload");
            break;
        
    case 401:
        
            console.log("Fail-unauthorized:check auth token");
            break;
        
    case 403:
        
            console.log("Fail-forbidden:insufficient permissions");
            break;
        
    case 404:
        
            console.log("Fail-Not found:Check endpoint url");
            break;
        
    case 500:
        
            console.log("Fail: Internal server error:Backend issue");
            break;
        
    default:
            console.log("UNKNOWN-unhandled status code");
            
}

