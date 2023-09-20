import {Greet} from './greet';
class HelloWorld implements Greet{
    private _name:string = "";
    private _surname:string = "";
    private _message:string = "";
    private _nick:string="";
    
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

    get message(): string{
        return this._message;
    }

    set message(new_message){
        this._message = new_message;
    }

    get nick():string{
        return this._nick;
    }

    set nick(new_nick){
        this._nick = new_nick;
    }

    constructor(){

    }

    

    sayHello():void{
        console.log(`${this.message} ${this.name} ${this.surname} (${this.nick})`)
    }
}

var greet = new HelloWorld();
greet.name = "Juan A.";
greet.surname = "García Gómez";
greet.message = "Hello world in special to you";
greet.nick = "juanarrow"
greet.sayHello();
