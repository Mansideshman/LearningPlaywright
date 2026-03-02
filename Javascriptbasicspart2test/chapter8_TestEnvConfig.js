//TestEnvironmentconfig
//In CICD pipelines,tests run against different environments.Write a javascript program using a switch statement that takes an environment name stored in 
// a variable and prints the base url, API key pattern  and timeout.Use const for fixed values and let for the assembled config.
//environments: dev ,staging ,qa ,production/prod.Each has different base URL,API key prefix ,timeout and discription


//input env
let env = "staging";

//config variables
let baseURL;
let apiKey;
let timeout;
let description;

//fixed API Key suffix

const API_SUFFIX = "xxxx-xxxx";

switch(env.toLowerCase())
{

    case "dev":
        baseURL = "https://dev-api.testingacademy.com"
        apiKey = "dev_Key_" + API_SUFFIX;
        timeout = 5000;
        description = "Development - Internal testing Environment";
        break;
    
        case "qa":
        baseURL = "https://qa-api.testingacademy.com"
        apiKey = "qa_Key_" + API_SUFFIX;
        timeout = 6000;
        description = "QA testing Environment for automation";
        break;

        case "staging":
        baseURL = "https://staging-api.testingacademy.com"
        apiKey = "staging_Key_" + API_SUFFIX;
        timeout = 8000;
        description = "Staging -PreProduction environment";
        break;

        case "Production":
        case"Prod":
        baseURL = "https://api.testingacademy.com"
        apiKey = "prod_Key_" + API_SUFFIX;
        timeout = 3000;
        description = "Production live environment";
        break;

        default:
            console.log("unknown environment");
}


console.log(
"Environment:" ,env.toUpperCase(),
"Base URL:" ,baseURL,
"API Key:" ,apiKey,
"Timeout:" , timeout + "ms",
"Description:",description


)