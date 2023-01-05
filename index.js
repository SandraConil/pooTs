// class person avec 2 attributs name et age
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // mes 2 methodes de ma class Personn
    Person.prototype.tellMyName = function () {
        console.log("I am ".concat(this.name));
    };
    Person.prototype.tellMyAge = function () {
        console.log("I am ".concat(this.age, " years old"));
    };
    return Person;
}());
var person2 = new Person("John", 40);
var person3 = new Person("Marie", 35);
//2 nouvelles personnes
person2.tellMyName();
person2.tellMyAge();
person3.tellMyAge();
person3.tellMyName();
