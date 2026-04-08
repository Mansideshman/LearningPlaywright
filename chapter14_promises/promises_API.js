let apiCall = new Promise(function (resolve,reject)
{
    resolve({status:200,body:"use data"});

})

apiCall.then(function (response)
{
    console.log(response);
    console.log(response.status);
    console.log(response.body);
})

//.then()  runs only when promises resolves successfully.