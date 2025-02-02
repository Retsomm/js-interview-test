var myName = '小名';
function fn(myName) {    // 接收，'恩娣'的變數
    console.log(myName);
}
setTimeout(() => {       // 非同步程式碼延後執行，所以在此使用全域的'恩娣'
    fn(myName);          // 使用參數傳遞的方式，將'恩娣'傳遞至fn();
    myName = '杰倫';     // 不影響運作
}, 3000);
myName = '恩娣';
// chapgpt
// var myName = '小名';
// 宣告變數 myName，初始值為 '小名'。

// function fn(myName) { console.log(myName); }
// 定義一個函式 fn，接收一個參數 myName，並在呼叫時輸出該參數的值。

// setTimeout(() => { ... }, 3000);
// 設定一個延遲 3 秒後執行的非同步函式。

// myName = '恩娣';
// 將全域變數 myName 更新為 '恩娣'，此時 myName 的值已從 '小名' 變成 '恩娣'。
//延遲執行的部分 (3 秒後)
// setTimeout(() => {
//     fn(myName);       // 呼叫 fn 並傳入目前的 myName（此時是 '恩娣'）
//     myName = '杰倫';  // 將 myName 更新為 '杰倫'
// }, 3000);
// 當 3 秒過後，程式會執行箭頭函式。
// fn(myName) 這行程式碼將當下的全域變數 myName（此時是 '恩娣'）作為參數傳進 fn 裡。
// fn 函式接收到的參數值是 '恩娣'，所以輸出結果是 恩娣。
// myName = '杰倫' 這行程式碼雖然改變了 myName 的值，但已經不影響 fn 的執行結果，因為 fn 早在呼叫時就接收到了 '恩娣' 這個值。
// 重要觀念
// 變數作用範圍 (Scope)
// fn 函式內的 myName 是參數變數，與外層的 myName 無直接關聯。它只是單純接收當下傳遞進來的值。

// 非同步執行 (Asynchronous Execution)
// setTimeout 會延遲執行，這段時間內全域變數 myName 可以被改變。當 setTimeout 觸發時，它會使用當時最新的 myName 值。