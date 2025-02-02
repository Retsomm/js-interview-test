function promiseFn(num){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (num){
                resolve('success');
            } else {
                reject('fail');
            }
        },0);
    });
}
//結果?
(async ()=>{
    console.log(1);
    await setTimeout(()=>{
        console.log(2);
    },0);
    console.log(3);
})();
// 1,3,2
// await運算子能夠在後方加入任何表達式及promise函式，但如果要將程式碼轉為以同步的方式執行，則必須使用promise函式，在此await後方的setTimeout並不是promise函式，無法以同步方式執行，也不會影響其運作的順序，最終執行的順序為1,3,2