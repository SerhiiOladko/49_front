const transport = {
    speed: 140,
    color: "red",
    move: function() {
        console.log("I am moving");
    }
};

// обращение к свойству обьекта
const prop = "speed";

console.log(transport.prop);
console.log(transport[prop]);

transport.move();

// создаем потомка от transport
const car = {
    model: 'Tesla Model 3',
    __proto__: transport,
};

console.log(car.model);
console.log(car.move());

// пример создание обьект с помощью конструктора
const ship = new Object();
// const ship = {}; // с помощью литерала

ship.year = 1996;

console.log(ship.year);

Object.setPrototypeOf(ship, transport);

ship.move();
