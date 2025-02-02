const result = (()=>1+1)()>1;
console.log(result); // true
// 因為優先性，所以(()=>1+1)()的立即執行函式會先執行，可以得到2的值，再執行2>1結果為true
