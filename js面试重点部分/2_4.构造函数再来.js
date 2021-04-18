function Parent(name) {
  this.name = name;
}

function Child(name) {
  Parent.call(this, name);
}

var child1 = new Child("kevin");

console.log(child1.name); // kevin

var child2 = new Child("daisy");

console.log(child2.name); // daisy
