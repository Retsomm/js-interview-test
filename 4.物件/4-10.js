var arr = [];
var person = {
    name:'小名',
    friend:'恩娣',
    ages:16
}
Object.keys(person).forEach(function (item) {
    arr.push(item);
});

console.log(arr); 
// Object.keys(person)可列舉出物件的*屬性名稱*，並轉為一個陣列，搭配forEach，其函式的第一個參數為該物件的屬性名稱，所以在此會將該物件的屬性名稱一一加入至arr陣列內

// chatgpt
// Object.keys(person) 是什麼？
// Object.keys(person) 會回傳一個陣列，裡面是 person 物件的所有屬性名稱 (keys)：
// ['name', 'friend', 'ages']
// 這相當於把 person 的所有屬性名稱提取出來，結果是一個字串陣列。

// 🔄 forEach 迴圈運作方式
// forEach 會針對 ['name', 'friend', 'ages'] 陣列的每個元素進行迴圈，並將每個元素依序賦值給 item。
// 迴圈內容：arr.push(item)，意思是把 item (屬性名稱) 加到 arr 陣列裡。
// ✅ 執行流程
// 第一次迴圈： item = 'name' → arr.push('name') → arr = ['name']
// 第二次迴圈： item = 'friend' → arr.push('friend') → arr = ['name', 'friend']
// 第三次迴圈： item = 'ages' → arr.push('ages') → arr = ['name', 'friend', 'ages']
// 🚀 最終輸出
// console.log(arr); 
// // 結果: ['name', 'friend', 'ages']
// 這個結果代表 arr 陣列已經成功存入 person 物件的所有屬性名稱。

// 🎯 重點總結
// Object.keys()：取得物件的所有屬性名稱 (key)。
// forEach()：逐一處理陣列中的每個元素。
// arr.push(item)：將屬性名稱加入到 arr 陣列中。
// 結果：['name', 'friend', 'ages']，這正是 person 物件的所有屬性名稱。
// ------------------------------
// 承上題，如果要取得相對的值，該如何調整(如果是「屬性名稱」則改為取值，反之同理)?
// arr.push(item[key])
// arr.push(person[key]) 
// arr.push(person[item]) V
// 如果要將加入arr陣列內的屬性名稱改為物件的值，則需要在取值時不直接傳入，而是透過物件取值的方式，因此需要改寫成person[item]的方式(item 為forEach的自訂參數名稱)，才可正確帶入物件值
// item 是 forEach 迴圈中每個屬性名稱 (像 'name'、'friend'、'ages')，因此可以用 person[item] 取出對應的值。
// 舉例：
// 當 item = 'name'，person['name'] 取到 '小名'。
// 當 item = 'friend'，person['friend'] 取到 '恩娣'。
// 當 item = 'ages'，person['ages'] 取到 16。