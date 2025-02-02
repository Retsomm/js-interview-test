{
    var myName = '小名';
}
console.log(myName);//'小名'
// {}可以作為一個區塊程式碼片段，而在var中是不會影響其運作的，但如果宣告是let結果卻會不同

{
    let myName = '小名';
}
console.log(myName);// Uncaught ReferenceError: myName is not defined