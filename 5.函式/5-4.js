var fn = function(num){
    return function() {
        return num++;
    }
}
var a = fu(1);
a();
a();
var b = fn(1);
console.log(b()); //1
// 閉包的概念，閉包回傳的函式可以具有獨立的變數作用域，因此a與b兩者是屬於獨立的函式，a的執行不會影響到b的結果。在本題中的還傳num++，是會先回傳再進行累加：
// 執行fn傳入數值1，並賦予在b變數上，接下來每次呼叫b時，會執行num++
// 因為num++，所以會先回傳數字1，才會進行累加，回傳結果為數值1