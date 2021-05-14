function format_number(n, r) {
  var b = parseInt(n).toString();
  var len = b.length;
  if (len <= 3) {
    return b;
  }
  //   var r = len % 3;
  // b.slice(r,len).match(/\d{3}/g).join(",") 每三位数加一个逗号。
  return r > 0
    ? b.slice(0, r) + "," + b.slice(r, len).match(/\d{2}/g).join(",")
    : b.slice(r, len).match(/\d{2}/g).join(",");
}

var num = 1283784994;
var res = format_number(num, 2);
console.log(res); //1,283,784,994
