var person = {
    name:'小名'
};
function fn(p) {
    return p.name = '恩娣';
}
var person2 = fn(person);
console.log(person.name); //'恩娣'
// person2實際接收的結果為fn的回傳結果，回傳的程式碼為「p.name = '恩娣'」，這是一個表達式，所以回傳結果為'恩娣'，person2最終值為'恩娣'，而不是物件

// person 是一個物件，擁有 name 屬性，初始值為 '小名'。
// 這個函式接受參數 p（傳入的是物件 person 的參考）。
// p.name = '恩娣'：直接修改 p 的 name 屬性為 '恩娣'，這會影響到原本的 person 物件，因為它們指向相同的記憶體位址。
// return p.name：將修改後的 '恩娣' 作為函式的回傳值。
// fn(person) 執行後，person.name 被修改為 '恩娣'。
// person2 儲存的則是回傳值 '恩娣'，它是一個普通的字串，跟 person 不再有關聯。
// 因為 person.name 已經被修改成 '恩娣'，所以輸出結果為：'恩娣'