//Error Handling - try/catch


//with promise you use .catch()

//with async/await you user try/catch - exactly like regular js error handling

async function testAPI()
{
    try{
     let result = await Promise.reject ("503 service unavailable");
     console.log(result);
    }catch(error)
    {
        console.log(error);
    }finally{
        console.log("clean up!");
    }
}

testAPI();