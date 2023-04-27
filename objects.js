const car = {
  make: "Honda",
  model: "Civic",
  year: 2015,
  colors: ["red", "blue", "white", "black"],
  hybrid: false,
  drive: function () {
    console.log("SOme random text");
  },
  stop() {
    console.log("Another random text");
  },
};

color = car.colors[0];
console.log(car.make);
console.log(color);
car.drive();
car.stop();
