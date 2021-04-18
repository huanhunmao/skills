var scope = "global scope";
function checkscope() {
  var scope2 = "local scope";
  console.log(scope2);
  return scope2;
}
checkscope();
console.log(scope);
