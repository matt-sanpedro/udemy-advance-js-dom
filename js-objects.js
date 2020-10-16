var houseKeeper1 = {
  name: "Margaret",
  clean: ["bathroom", "living room", "kitchen"],
  age: 24,
  yearsOfExperience: 3
};

console.log(houseKeeper1);

// constructor function
function HouseKeeper(name, clean, age, yearsOfExperience) {
  this.name = name;
  this.clean = clean;
  this.age = age;
  this.yearsOfExperience = yearsOfExperience;
}

var houseKeeper2 = new HouseKeeper("Bob", ["lobby", "bathroom"], 26, 5);

console.log(houseKeeper2);
