var foo = {
  value: 1,
};

function bar(name, age) {
  console.log(this.value); //1
  console.log(name); //daisy
  console.log(age); //18
}

var bindFoo = bar.bind(foo, "daisy");
bindFoo("18");
