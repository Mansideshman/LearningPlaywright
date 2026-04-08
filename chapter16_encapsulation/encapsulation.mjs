class PP {
    // hide childrens
    #Child1;
    #Child2;

    constructor(name) {
        this.name = name;
        this.#Child1 = "XYZ";
        this.#Child2 = "PQR";
    }
    getChild1() {
        return this.#Child1;
    }
    setChild1(changed_name) {
        this.#Child1 = changed_name;
    }
}

// Example usage
test();

function test() {
    const obj = new PP("parent");
    console.log(obj.constructor.name); // Should print 'PP'
    console.log(obj.getChild1());      // Should print 'XYZ'
    obj.setChild1("NEW");
    console.log(obj.getChild1());      // Should print 'NEW'
}
