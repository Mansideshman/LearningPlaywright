let fruit ="banana";

switch(fruit){
    case "apple":
        console.log("This is an apple");
       // break;
    case "banana":
        console.log("This is a banana");
        //break;
    case "orange":
        console.log("This is an orange");
       // break;
    default:
        console.log("Unknown fruit");
}



//Error present : no break statement in the cases, so it will execute all the cases after the matched case until it finds a break or reaches the end of the switch statement.