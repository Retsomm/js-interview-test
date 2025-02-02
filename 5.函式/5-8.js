var value = 'global';
var foo = {
    value:'local',
    bar:function() {
        return this.value;
    }
}
console.log(foo.bar());//'local'
// 屬於物件下的方法，因此this指向foo，所以this.value等同於foo.value，最終會取得'local'
//呈上題，以下結果為?
console.log((foo.fn = foo.bar)());// 'global'
//表達式的概念，在括號內的是一個表達式(foo.fn = foo.bar)，它會將後者的函式賦予到前方的變數上，並回傳一個值，重點是這個回傳值本身是一個函式表達式，所以其後方的括號就能呼叫此函式；也因為是由賦予值所回傳的函式，它並不屬於物件下的呼叫，僅是一個單純的函式被進行呼叫，因此屬於「純粹的呼叫」，this會指向全域，最終結果為'global'
// chatgpt
// var value = 'global';
// 宣告了一個全域變數 value，並賦值為 'global'。
// var foo = { value: 'local', bar: function() { return this.value; } };

// foo 是一個物件，包含：
// 屬性 value，值為 'local'。
// 方法 bar，回傳 this.value。
// foo.fn = foo.bar
// 這行程式碼的意思是：將 foo.bar 的函式參考賦值給 foo.fn。
// 關鍵點：這只是單純的函式賦值，並沒有保留原本 foo 作為 this 的綁定。因此，foo.fn 實際上等同於 foo.bar，但 this 不再指向 foo。
// (foo.fn = foo.bar)()
// 這段程式碼稍微複雜。雖然 foo.fn = foo.bar 是賦值表達式，但在 JavaScript 中，賦值表達式的結果會是右邊的值，也就是 foo.bar 這個函式。
// 執行 () 時，這個函式被當作普通函式呼叫，而不是作為 foo 的方法呼叫。此時，this 的指向取決於執行環境：
// 在非嚴格模式下，this 會指向全域物件（在瀏覽器中是 window）。
// 在嚴格模式下，this 會是 undefined。
// return this.value; 的結果
// 因為 this 指向全域物件，而全域變數 value = 'global' 也是掛在全域物件上，所以回傳的是 'global'。
// ✅ 總結
// foo.bar() 會回傳 'local'，因為 this 指向 foo。
// (foo.fn = foo.bar)() 會回傳 'global'，因為 this 變成全域物件，取到的是全域的 value。