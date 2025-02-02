function getName(){
    console.log(myName);
}
let myName = '小名';
setTimeout(()=>{
    myName = '杰倫';
    getName();
},0);
getName();// 小名、杰倫
// 因為非同步事件會最後才執行，除了影響執行順序以外，對於資料的變動，也會有關聯性：
// 宣告myName值為'小名'
// 因為setTimeout是非同步事件，所以其callback function延後執行
// 執行getName，當前值為'小名'
// 執行setTimeout內的callback function
// 重新賦值myName值為'杰倫'
// 執行getName，當前值為'杰倫'