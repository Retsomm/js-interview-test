var myName = '小名';
function fn1(){
    console.log(myName);
}
function fn2(){
    myName = '恩娣';
    fn1();
}
fn2();//'恩娣'
// 在一開始宣告myName為全域變數以後，而後沒有再使用var進行其他的宣告，因此從頭到尾都是同一個myName變數的操作：
// var宣告myName為全域變數
// 執行fn2，將myName值調整為'恩娣'
// 執行fn1，使用console.log呈現'恩娣'的值
