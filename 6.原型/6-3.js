function sayHi(){
    this.name = '小名'
}
sayHi.__proto__.getName = function(){
    return this.name
}
console.log(sayHi.getName());
// function是一個函式物件，因此也能包含其他的屬性(包含name)，當函式使用具名陳述式宣告時，它的name會與宣告的名稱一致，而此題中的this.name不會發揮任何作用(混淆視聽)
// 也因為函式是一個物件，所以能夠為它加上原型方法，在此使用__proto__來新增方法，並直接回傳this.name取得name值，而本函式的name與宣告的名稱一致，所以結果為sayHi
// chatgpt
// 函式 sayHi 定義
// function sayHi() {
//     this.name = '小名';
// }
// 這是一個建構函式（constructor function），用來建立物件並在其中新增 name 屬性。
// 當使用 new sayHi() 時，this 會指向新建立的物件。但這裡只是定義了 sayHi，並沒有呼叫它。
// 2. 修改 __proto__
// sayHi.__proto__.getName = function() {
//     return this.name;
// };
// sayHi.__proto__ 其實指的是 Function.prototype，因為 sayHi 本身是一個函式，所有函式都繼承自 Function.prototype。
// 這行程式碼等同於：
// Function.prototype.getName = function() {
//     return this.name;
// };
// 這表示 所有函式（包括 sayHi）現在都可以使用 getName() 方法。
// 3. 呼叫 getName 方法
// console.log(sayHi.getName());
// 這裡直接呼叫 sayHi.getName()，相當於呼叫 Function.prototype.getName，此時 this 會指向 sayHi 函式本身，因為 sayHi 是呼叫者。
// 接下來會嘗試存取 sayHi.name。根據 JavaScript 的規則：
// 函式在宣告時會有一個內建的 name 屬性，預設值是函式的名稱。
// 在這個例子中，sayHi.name 應該是 'sayHi'。
// 4. 為什麼結果不是 'sayHi' 而是 undefined？
// 問題的關鍵在於這個行為：
// this.name = '小名';
// 這行程式碼是在 sayHi 函式內部，並沒有被執行，因為我們從未呼叫 sayHi() 或 new sayHi()。
// 因此，sayHi 函式本身的 name 屬性依然是預設的 'sayHi'，而不是 '小名'。
// 那為什麼不是輸出 'sayHi' 呢？
// 可能的解釋：
// 執行環境差異：
// 在某些瀏覽器或 Node.js 環境中，Function.prototype.name 屬性是不可列舉（non-enumerable）且可能有特殊行為。
// 如果 getName 內的 this 指向不是預期的 sayHi，或者 name 屬性被遮蔽，會導致輸出 undefined。
// 全域或嚴格模式影響：
// 如果啟用了嚴格模式 ('use strict')，某些 this 綁定的行為會不同。
// 測試驗證
// 如果我們做一點修改，結果會不同：
// console.log(sayHi.name); // 輸出 'sayHi'
// console.log(Function.prototype.getName.call(sayHi)); // 輸出 'sayHi'
// 或者：
// function sayHi() {
//     this.name = '小名';
// }
// new sayHi(); // 執行建構函式
// console.log(sayHi.getName()); // 仍然 undefined，因為 'name' 設定在新物件上，不在 sayHi 上
// 總結
// sayHi.__proto__ 其實是 Function.prototype，因此 getName 方法能夠被 sayHi 呼叫。
// this 在 getName 中指向 sayHi 函式本身。
// sayHi 的 name 屬性應該是 'sayHi'，但因執行環境差異或某些特定設定，導致輸出 undefined。


//呈上題，下述結果為?
console.log(sayHi.__proto__.getName === Function.prototype.getName);// true
// function sayHi雖然是一個物件，但其父層原型是Function，因此sayHi.__proto__會與Function.prototype指向相同的位址
