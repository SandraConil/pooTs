// class person avec 2 attributs name et age

class Person {
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    
// mes 2 methodes de ma class Personn
    tellMyName(): void {
        console.log(`I am ${this.name}`);
    }

    tellMyAge(): void{
        console.log(`I am ${this.age} years old`);
    }
}

const person2 = new Person ("John", 40);
const person3 = new Person ("Marie", 35);

//2 nouvelles personnes
person2.tellMyName();
person2.tellMyAge();

person3.tellMyAge();
person3.tellMyName();