let value = "5";

switch (value) {
    case 5:
        console.log("Number 5");
        break;
    case "5":
        console.log("String 5");
        break;
}


//it will print string 5 because switch is using strict equality check and value is a string.