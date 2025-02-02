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
//執行順序?
promiseFn(1)
    .then((res)=>{
        console.log(1);
        return promiseFn(0);
    })
    .then((res)=>{
        console.log(2);
    })
    .catch((err)=>{
        console.log(3);
    });
// 1,3
// Promise函式的流程中，可以使用.then接收resolve的回應，使用.catch捕捉錯誤的回應，執行順序：
// 呼叫promiseFn(1)，此段會觸發resolve，因此接下來會使用.then接收成功的結果
// 觸發console.log(1)
// 回傳promiseFn(0)，return的promise事件會由下一個.then或.catch接收結果，在此預期會觸發reject
// 因為會觸發reject，所以跳過.then，並進入.catch
// 觸發console.log(3)