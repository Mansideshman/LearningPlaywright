class TestCase{
    constructor(name, status, priority)
    {
        this.name = name;
        this.status = status;
        this.priority = priority;

    
    }
    display()
    {
        console.log(this.name + " -> " + this.status + " -> " + this.priority);
    }
}

let loginTest_ref = new TestCase("LoginTest", "PASS", "P0");
let signupTest_ref = new TestCase("signup Test", "FAIL", "P1");

loginTest_ref.display();
 