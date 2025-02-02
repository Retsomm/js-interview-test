var a;
var b;
(function() {
    a = b = 3;
    var b;
}());
console.log(typeof a);
console.log(typeof b);

// chatgpt
// 1. 變數宣告與賦值的順序
// var a;
// var b;
// (function() {
//     a = b = 3;
//     var b;
// }());
// var a; 和 var b; 在全域範圍內宣告，但尚未賦值，初始值為 undefined。
// 接著是一個立即呼叫的函式 (function() { ... }())，裡面包含 a = b = 3; 這一行。
// 2. a = b = 3; 的運作邏輯
// 這行程式碼等同於：
// a = (b = 3);
// 重點：
// b = 3 會先執行，然後將結果 3 指派給 a。
// 關鍵在於 b 沒有使用 var、let 或 const 來宣告，這會導致 JavaScript 引擎將它視為全域變數（非嚴格模式下的行為）。
// 換句話說，這行程式碼等同於：
// window.b = 3; // 在瀏覽器環境下，b 成為全域變數
// a = 3;        // 指派給已經在全域作用域中宣告的 a
// 3. var b; 的影響
// 在函式內部有 var b;，這會在函式的作用域內建立一個區域變數 b，並在 Hoisting（提升）的過程中被提升到函式的頂端，初始值為 undefined：
// (function() {
//     var b; // 提升到這裡，初始值為 undefined
//     a = b = 3; // 這裡的 b 是全域變數，因為賦值發生在 var 宣告之前
// }());
// 由於賦值 b = 3 發生在 var b; 宣告之前，這個 b 並不是指區域變數 b，而是意外地創建了一個全域變數 b。

// 4. typeof 的結果
// console.log(typeof a); // "number"
// console.log(typeof b); // "undefined"
// a 是全域變數，且被成功賦值為 3，所以 typeof a 會回傳 "number"。
// b 在全域作用域中看似應該存在，但注意到在函式內部又有個區域變數 b，這個區域變數的作用範圍僅限於函式內部，而
// 
// 全域的 b 則在函式外並不存在。
// 
// 因此，當你在全域範圍使用 typeof b 時，JavaScript 找不到全域變數 b，所以結果是 "undefined"。
// 總結
// a 是全域變數，成功被賦值為 3 → typeof a 是 "number"。
// b 在函式中創建的是區域變數，並未在全域範圍內定義 → typeof b 是 "undefined"。
// 這個例子展示了 變數提升（Hoisting）、作用域（Scope） 與 隱式全域變數 的複雜交互。