var scope = "global scope";
function checkscope() {
  var scope = "local scope";
  function f() {
    return scope;
  }
  console.log(scope);
  return f;
}

var foo = checkscope();
foo();
