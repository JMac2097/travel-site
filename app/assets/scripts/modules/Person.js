function Person(fullName, faveColor) {
    this.name = fullName;
    this.color = faveColor;    
    this.greet = function() {
        console.log("Hello there, my name is " + this.name + " and my favourite colour is " + this.color + ".");
    }
}

module.exports = Person;