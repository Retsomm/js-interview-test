function callSomeone(a,b,fn){
    var result = a+b;
    return fn(result);
}
var answer = callSomeone(1,2,function(res){
    return res*res;
});
console.log(answer); // 9
// 此函式的功能是進行平方，因此只要關注它在哪裡被呼叫，就大致可知道運作結果
// 呼叫callSOmeone，並傳入1、2及一個函式(作為平方的函式)作為參數
// 將1、2相加等於3
// 將3平方得到9