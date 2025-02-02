var myName
function callName() {
    myName = '小名';
}
callName();
console.log(myName); // 小名
// 外層的var myName將變數宣告為全域，因此執行callName時會向外查找，並使用全域的myName，同時賦予'小名'的值