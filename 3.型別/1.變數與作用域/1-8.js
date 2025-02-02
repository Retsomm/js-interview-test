var person = {
    myName:'小名'
}
for (var key in person) {

}
console.log(key);// myName
// for是一種列舉手法，可以將物件內的key值逐一取出。當執行「var key in person」時，會逐一將person的物件屬性取得，並賦予在key變數上，而var是屬於函式作用域，所以最後一個被賦予至key變數的值就會變成全域變數(實戰中請改用const、let)。

// chapgpt
// for...in 迴圈會遍歷物件的可列舉屬性（enumerable properties），在每次迭代時，key 變數都會被賦予當前屬性的名稱。在這個例子中，person 只有一個屬性 myName，所以 key 的值會被設定為 'myName'。
// 重要的是，雖然迴圈的本體是空的，key 仍然被成功賦值。
// 因為 for...in 迴圈已經遍歷過 person，最後一次迴圈結束後，key 仍然保留著最後被賦予的值 'myName'，所以印出來的結果就是 myName。