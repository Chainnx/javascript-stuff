const person1 = {
  name: "Anthony Deguzman",
  age: 18,
  status: "resident",
};
const person2 = {
  name: "Juan Carpio",
  age: 16,
  status: "tourist",
};

if (person1.age >= 18 && person1.status === "resident") {
  console.log("you are in");
} else {
  console.log("you are out");
}

if (person2.age >= 18 && person2.status === "resident") {
  console.log("you are in");
} else {
  console.log("you are out");
}
