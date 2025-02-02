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
(async function(){
    const res = await promiseFn(1)
    console.log(1);
    console.log(res);
})();
console.log(2);
// success
// async function搭配await，可以將promise函式同步的方式執行，因此後方console.log可以取得promiseFn(1)結果，最終取得值'success'
// 呈上題，console的執行順序
// console.log(2),console.log(1),console.log(res);
// async function在呼叫時會如同呼叫promise，以非同步的方式執行，所以順序上會等待所有同步原始碼執行完畢以後，才會進入async function，最終結果為「2,1,'success'」