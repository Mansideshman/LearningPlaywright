let url = "https://staging.vwo.com/api/login?retry=true";

//includes
url.includes("staging");
url.includes("production");

//startswith/endswith

url.startsWith("https");
url.startsWith("http://");
url.endsWith("true");

//indexOf/lastIndexOf

console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));//24
console.log(url.indexOf("nothere"))


//search()  - accepts regex,returns index4
console.log(url.search("/login/")); //regex
url.search("\d+/");

