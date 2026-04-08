//private fields - hidden data
//public fields

class Credentials
{
    #apikey
    constructor(user,key)
    {
        this.user = user; //public
        this.#apikey = key;
    }
    getAuthHeader()
    {
        return "Bearer" +this.#apikey;
    }
}

let cred = new Credentials("admin","#scret_key_1234");
console.log(cred.user);
//console.log(cred.apikey);//undefined
//console.log(cred.#apikey);//error
console.log(cred.getAuthHeader());
