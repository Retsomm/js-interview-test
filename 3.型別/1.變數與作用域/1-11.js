myName = '小名';
delete myName;
var myName;
console.log(myName);

// // 創造階段
// var myName;          // var 宣告變數提升
// // 執行階段
// myName = '小名';     // 變數賦予值
// delete myName;       // 變數無法被刪除
// console.log(myName); // 值為'小名'

//未宣告的變數即為全域屬性，而全域屬性是可以被刪除的，按照程式碼順序的解讀來說，myName變數看起來就是會被刪除的全域屬性，但在此還必須補上「提升」的觀念，依據創造階段、執行階段來說，可以將程式碼的運作理解如上：
// 執行流程：
// 宣告變數進行提升
// 將myName變數賦予值
// delete運算子刪除myName變數，但變數無法被刪除，因此此執行無效
// 最終結果為'小名'