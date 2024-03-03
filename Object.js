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