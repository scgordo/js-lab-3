var person = {
  firstName: "Tony",
  lastName: "Stark",
  age: 53,
  eyeColor: ["blue", "green", "brown", "hazel"],
  randomEyeColor: function() {
    var randEyeColor = Math.floor(Math.random() * this.eyeColor.length);
    return this.eyeColor[randEyeColor];
  },
  fullName: function() {
    return this.lastName + ", " + this.firstName;
  },
  ability: ["flying", "strength", "invisibility", "immortality"],
  randomAbility: function() {
    var randAbility = Math.floor(Math.random() * this.ability.length);
    return this.ability[randAbility];
  },
  hairColor: ["brown", "red", "blonde", "black"],
  randomHairColor: function() {
    var randHairColor = Math.floor(Math.random() * this.hairColor.length);
    return this.hairColor[randHairColor];
  },
  facialHair: ["clean cut", "goatee", "moustache", "beard"],
  randomFacialHair: function() {
    var randFacialHair = Math.floor(Math.random() * this.facialHair.length);
    return this.facialHair[randFacialHair];
  }
};

person.firstName = "Scott";
person.middleName = "Carlton";
person.location = "California";

console.log(person.firstName);
console.log(person.middleName);


document.getElementById("name").innerHTML = "Name: " + person.fullName();
document.getElementById("ability").innerHTML = "Ability: " + person.randomAbility();
document.getElementById("eyecolor").innerHTML = "Eye Color: " + person.randomEyeColor();
document.getElementById("haircolor").innerHTML = "Hair Color: " + person.randomHairColor();
document.getElementById("facialhair").innerHTML = "Facial Hair: " + person.randomFacialHair();