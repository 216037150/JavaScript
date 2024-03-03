var person = {
  name: "Siyabonga",
  age : 23,
  color: White
}

function person(name, age, colour){
  this.name= name;
  this.color = color;
  this.age = age;
}

function person(name, age) {
  this.name = name;  
  this.age = age;
  this.changeName = function (name) {
      this.name = name;
  }
}

var p = new person("David", 21);
p.changeName("John");

document.write(p.name);


// Find your  born year
function person(name, age) {
  this.name= name;
  this.age = age;
  this.yearOfBirth = bornYear;
}
function bornYear() {
  return 2024 - this.age;
}

var p = new person("A", 34);

document.write(p.yearOfBirth());