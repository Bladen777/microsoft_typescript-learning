function log<T,U>(var_name:T , variable: U){
    console.log(`the result of ${var_name} is: `, variable);
}

// Part 1

interface Identity<T, U>{
    value: T;
    message: U;
}


let returnNumber: Identity<number, string> = {
    value:25,
    message: "Hello!"
}

let returnString: Identity<string, number> = {
    value: "Hello!",
    message: 25
}

// Part 2

interface ProcessIdentity<T, U> {
    (value: T, message:U):T;
}

function processIdentity<T,U> (value: T, message: U) : T {
    log("message", message);
    return value
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, "processor");
//let returnString1 = processor("Hello!", 100);


// Part 3

interface ProcessIdentity_2<T,U> {
    value: T;
    message: U;
    process(): T;
}

class ProcessIdentityClass<X, Y> implements ProcessIdentity_2<X, Y> {
    value: X;
    message: Y;
    
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    
    process() : X {
        log("this._message", this.message)
        return this.value
    }

}

let processor_2 = new ProcessIdentityClass<number, string>(100, "processor_2");
processor_2.process();
processor_2.value = 100;


// Part 4

class ProcessIdentityClass_2<T, U>{
    private _value: T;
    private _message: U;
    
    constructor(value:T, message: U) {
        this._value = value;
        this._message = message;
    } 

    getIdentity() : T {
        log("this._message", this._message);
        return this._value
    }
}

let processor_3 = new ProcessIdentityClass_2<number, string>(100,"processor_3");
processor_3.getIdentity();