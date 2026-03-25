const user ={
    name : "pramod",
    age : 43
}

const calculator = {
    value: 1,
    add(n)
    {
        this.value += n;
        return this;
    },
    substract(n)
    {
        this.value -= n;
        return this;
    }
}
console.log(calculator.add(5).substract(5));
