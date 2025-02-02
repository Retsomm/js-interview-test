console.log(typeof typeof 1)// string
// 在相依性的概念中，typeof是屬於由右至左執行的運算子，因此會先執行typeof 1得到'number'的回傳值，再執行typeof'number'取得的結果
