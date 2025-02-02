function a(a) {
    return a();
}
function b(b) {
    return b;
}
function c() {
    return 1;
}
console.log('answer',a(b(c)));// 1
// c函式傳入b函式，在b函式中並沒有呼叫，而是直接進行回傳，回傳後又將此函式傳入a函式，才進行呼叫，所以最終回傳值為數值1
