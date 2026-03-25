const ENV = 
{
    BASE_URL: "https://staging.mypp.com",
    TIMEOUT: 5000,
    RETRIED:2,
    BROWSER:"Chrome"
}

const EXPECTED_RESPONSE =
{
    status:200,
    body:
    {
        user: {role:"admin",active:true}
    }
}


const config = {
    //Base URLs
    baseUrl: 'http://;localhost:3000',
    apiBaseUrl: 'http://localhost:3000/api',


    testUser:
    {
        username: 'testuser@example.com',
        password:'SecurePass123',
    },

    //logging
    logLevel : 'INFO',

    //Retry configuration
    retryCount: parseInt(ProcessingInstruction.env.RETRY_COUNT || '3',10),
};