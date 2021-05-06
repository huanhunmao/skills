var array1 = Array(3); // [null,null,null]
array1[0] = 2; //[2,null,null]
var result = array1.map((element) => "1"); //当前元素的值
console.log(result); // ['1',null,null]
