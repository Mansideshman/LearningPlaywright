class PP{
    //hide childrens
    #child1;
    #child2;

    constructor(name,ch1,ch2)
    {
        this.name = name;
        this.#child1 = "XYZ";
        this.#child2 = "PQR";
    }
    getChild1()
    {
        return this.#child1;
    }
    setChild1(changed_name)
    {
        this.#child1 = changed_name;
    }
}

let p =new PP("PP","XYZ","PQR");

console.log(p.name);
console.log(p.getChild1());
console.log(p.setChild1("PQR"));



