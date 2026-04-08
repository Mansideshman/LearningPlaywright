class browser{
    constructor(name)
    {
        this.name = name;
        this.isOpen = true;
        console.log(name + "launched");
    }

startBrowser()
{
    console.log("starting the browser");
}

closeBrowser()
{
    console.log("closing the browser");
}
}
let chrome = new browser("chrome");
let firefox = new browser("firefox");

console.log(chrome.isOpen);
