var family = JSON.parse('[{"name":"小明家","members":["小名","小名媽","小名爸"]}]');
var family2 = family[0].members;
family2[0] = '杰倫';

// console.log(family[0].members[0]); //'杰倫'
// //JSON parse是將JSON字串轉為陣列或物件的語法，轉換後也會遵循JS的傳址特性，此段將字串轉為陣列後，賦予至family變數上，隨後family2與family共用參考位址，所以當其中之一調整後，另一個也會跟著變更
// chatGPT
// 解析 JSON 字串
// var family = JSON.parse('[{"name":"小明家","members":["小名","小名媽","小名爸"]}]');
// 這行程式碼會將 JSON 字串解析成 JavaScript 物件，變數 family 會變成一個陣列，裡面有一個物件：
// [
//   {
//     name: "小明家",
//     members: ["小名", "小名媽", "小名爸"]
//   }
// ]
// 取得成員陣列的參考
// var family2 = family[0].members;
// 這行程式碼將 family[0].members 的值（即 ["小名", "小名媽", "小名爸"]）賦值給變數 family2。
// 重要概念：family2 並不是這個陣列的「複製品」，而是對同一個陣列的「參考（reference）」。這代表對 family2 的任何修改，會直接影響 family[0].members。
// 修改成員資料
// family2[0] = '杰倫';
// 這行程式碼將 family2 陣列的第一個元素（原本是 "小名"）改成 "杰倫"。
// 由於 family2 和 family[0].members 指向的是同一個陣列，所以 family[0].members[0] 也被改成了 "杰倫"。
// 輸出結果
// console.log(family[0].members[0]);
// 這行程式碼會印出修改後的第一個成員，也就是 "杰倫"。
// 補充知識：淺層拷貝 vs 參考
// 如果想避免 family2 直接影響到 family[0].members，可以使用陣列的拷貝方法，例如使用 slice() 或展開運算子（...）：
// var family2 = [...family[0].members];
// family2[0] = '杰倫';
// console.log(family[0].members[0]); // 這時會輸出 "小名"
// 這樣就會產生一個新的陣列，兩者互不影響。