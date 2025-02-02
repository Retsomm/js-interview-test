var a = {};
var b = a;
var c = b = { name:1};
c.name = '小名';
console.log(a); //{}
// 物件是採傳址，不過在var b = a;的下一行，已經重新賦予值(b = {name:1})，所以其後續操作也與a無關聯性，a維持原本的空物件