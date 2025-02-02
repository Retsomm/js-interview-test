function fn() {
    var myName = '小名';
    myName = '杰倫';
}
var myName = '恩娣';
fn();
console.log(myName);
// 誤導讓人以為執行fn時有重新賦與變數，不過仔細看fn中有重新宣告變數，因此在其中的作用域不會影響到外層所宣告的變數