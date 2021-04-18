function Parent() {
  this.names = ["kevin", "daisy"];
}

function Child() {}

Child.prototype = new Parent();

var child1 = new Child();

child1.names.push("yayu");

console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.names); // ["kevin", "daisy", "yayu"]
