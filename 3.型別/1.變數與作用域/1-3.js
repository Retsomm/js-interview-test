var myName;
function callName() {
    var myName = '小名';
}
callName();
console.log(myName); //小名
// 外層定義了myName變數作為全域變數，而內層callName也宣告的一個同名變數，此時內層callName的myName作用域將限制在此函式內，所以與外層myName無關聯性。而myName初始化會得到undefined結果，這過程中沒有新賦予，所以結果為undefined