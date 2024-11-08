// Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

type Obj={
    name:string;
    age: number;
    email:string;
}

function validateKeys<T extends Obj>(obj: T, keys: (keyof T)[]): boolean {
    for (const key of keys) {
        if (!(key in obj )) {
            return false;
        }
    }
    return true;
}

const person = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};

// console.log(validateKeys(person, ["name", "age"]));      
// console.log(validateKeys(person, ["name", 'address']))