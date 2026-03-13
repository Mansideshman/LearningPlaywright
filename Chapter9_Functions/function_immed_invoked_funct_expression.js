//immediately invoked function Expression (IIFE)

//They dont need to be called

function name1()
{
    console.log("Hi")

}
name1();


(function()
{
    console.log("Hi")
})();



//
function getEnv()
{
    console.log("staging")
}

let somebody = getEnv();
console.log(somebody);

(function()
{
    console.log("staging")
})();

//Arrow

(() => {
    console.log("setup_complete");
})();