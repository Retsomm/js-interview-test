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
    return 'success';
})().then((res)=>{
    console.log(res);
});
// 'success'
// 當async function被呼叫時，它的本質就與promise實體無異，在其後方可使用then或catch接收成功或失敗的結果，在此是直接return 'success'，所以可用.then的方式取得結果
// 如果是要回應錯誤，則可以使用throw(與Promise reject概念一致)，實戰中大多會搭配new Error，以便於除錯使用
// (async function () {
//     throw new Error('Fail')
// })().catch((err) => {
//     console.log(err);
// });