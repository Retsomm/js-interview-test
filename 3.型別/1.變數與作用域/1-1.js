function callName(){
    var myName = '小名';
}
callName();
console.log(myName); // Uncaught ReferenceError: myName is not defined
// 因為var myName會形成callName區域變數，所以外層無法取得。