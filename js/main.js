function hello() {
    console.log("Hello", this);
}

const person = {
    name: 'Islam',
    age: 29,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 23
}

// hello();
// person.sayHello();
// person.sayHelloWindow();
// person.logInfo()

// const arr = person.logInfo.bind(lena, 'Terrasoft', '+7-918-234-21-45')();
// person.logInfo.call(person, 'Hamkorbank', '+998(94)565-65-15');
// person.logInfo.apply(person, ['Hamkorbank', '+998(94)565-65-15']);


const array = [1, 2, 3, 4, 5];

function multBy(arr, n) {
    return arr.map(function(i) {
        return i * n;
    })
}

console.log(multBy(array, 15));


Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n;
    })
}

console.log(array.multBy(230))