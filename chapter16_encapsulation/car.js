class Car
{
    #engine;

    constructor(name,engineName)
    {
        this.name = name;
        this.#engine = engineName;
    }

    getEngine()
    {
        return this.#engine;
    }
    setEngine(nameEngine)
    {
        this.#engine=engineName;
    }
}

let tesla = new Car("Tesla","V8");
console.log(tesla.getEngine());
tesla.setEngine("v9");
console.log(tesla.getEngine());