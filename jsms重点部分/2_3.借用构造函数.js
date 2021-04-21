function Parent() {
  this.names = ["kevin", "daisy"];
}

function Child() {
  Parent.call(this);
}

var child1 = new Child();

child1.names.push("yayu");

console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.names); // ["kevin", "daisy"]
