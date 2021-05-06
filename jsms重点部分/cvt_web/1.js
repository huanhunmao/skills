var setPerson = function (person) {
  person.name = "kevin";
  person = { name: "nick" };
};
var person = { name: "alan" };
setPerson(person);
console.log(person.name); // kevin
