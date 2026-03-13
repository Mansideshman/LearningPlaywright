//if (our statuscode >= 200 && ourstatusCode <300)



function validateStatusCode(status)
{
    if(status>=200 && status <=300)
    {
        console.log("Request is fine!")
    }
}


const validateStatusCode_exp = function validateStatusCode(status)
{
    if(status>=200 && status <=300)
    {
        console.log("Request is fine!")
    }
}




const validateStatusCode_Arrow =  (status) =>
{
    if(status>=200 && status <=300)
    {
        console.log("Request is fine!")
    }
}



validateStatusCode(200);
validateStatusCode_exp(500);
validateStatusCode_Arrow(500);