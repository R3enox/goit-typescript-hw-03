class Key { 
    private signature: number;
    constructor() {
        this.signature = Math.random();
    }
    getSignature():number {
        return this.signature
    }
}

class Person extends Key {
    private key: Key;
    private name: string;

    constructor(key: Key, name: string) {
        super();
        this.key = key;
        this.name = name;
    }

    getKey(): Key {
        return this.key;
    }

    getName(): string { 
        return this.name
    }
}
abstract class House {
    protected tenants: Person[] = [];
    protected door: boolean;
    protected key: Key;
    
    constructor(door: boolean, key: Key) {
        this.door = door;
        this.key = key;
    }
     abstract openDoor(key: Key): void;

    comeIn(person: Person): void {
        if (this.door) {
            console.log(`${person.getName()} entered the house.`);
            this.tenants.push(person);
        } else {
            console.log("The door is closed. Cannot enter.");
        }
    }
}
class MyHouse extends House {
    constructor(key: Key) {
        super(false, key)
    }
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            console.log("Door is open.");
            this.door = true;
        } else {
            console.log("Wrong key. The door remains closed.");
        }
    }

}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key, 'Nikita');

house.openDoor(person.getKey());
house.comeIn(person);

export {};