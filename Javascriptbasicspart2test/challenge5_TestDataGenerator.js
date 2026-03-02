//TestDataGenerator
//As SDET you frequently need to geenrate test data for form testing.Write a JS program that generates test user data using a for loop.
//Each user should have unique ID(USR-0001 format),name,email and role(Cycling through:admin,editor,viewer,tester,manager)
//Every 3rd user should be inactive(edge case testing).Demonstrate proper user of var(global counter),let (loop variables) ,and const (fixed values)



//global counter using var
var  totalusers = 10;
//fixed roles
const roles = ["admin","editor","viewer","tester","manager"];

//function to generate users
function geenerateTestUsers()
{

    for(let i=1;i<= totalusers;i++)
    {
    //gemerate id in USR-0001 format
        let id= "USR-" + String(i).padStart(4,"0");
    
        //generate name
    let name = "user" + i;

    //generate email
    let email = "user" + i + "@test.com"
    //cycle throgh roles
    let role = roles[(i-1)%roles.length];
    
    //every 3rd user inactive

    let isActive = (i%3===0) ? false :true
    

    const user = { id :id,name:name,email:email,role:role,active:isActive};
    console.log(user);
    }
}

geenerateTestUsers();