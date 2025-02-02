var person = {
    name:'小名'
};
function fn(p) {
    p.name = '恩娣';
}
fn(person);
console.log(person.name); //'恩娣'

//chatgpt
// 當 person 被作為參數傳入 fn 時，傳遞的是物件的參考。這意味著 p 和 person 都指向記憶體中的同一個物件。
// 因此在 fn 中執行 p.name = '恩娣';，實際上是直接修改了 person 物件的 name 屬性。