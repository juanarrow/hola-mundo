class HelloWorld{
    private _name:string = "";
    private _surname:string = "";

    public get name():string{
        return this._name;
    }

    public set name(new_name:string){
        this._name = new_name;
    }

    public get surname():string{
        return this._surname;
    }

    public set surname(new_surname:string){
        this._surname = new_surname;
    }

    constructor(){

    }

    sayHello():void{
        console.log(`Hello World in special to you ${this.name} ${this.surname}`)
    }
}

var greet = new HelloWorld();
greet.sayHello();
