
// Object
const user = {
    name: "Yogs",
    age: 24,
    married: false,
    purchases: ["phone", "car", "laptop"],

    sayName: function(){
        console.log(this.name);
    }
};

user.sayName();

function saymyAge(){
    console.log(`My age is ${this}`);
}

saymyAge();