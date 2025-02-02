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
    const res = await promiseFn(0)
    console.log(res);
})();
// Uncaught(in promise) fail
// 當使用async function搭配await時，預設情況下，只會取得resolve的結果，因此會建議使用try...catch陳述式來捕捉reject的錯誤回應，如果沒有使用其陳述式，則會在console中顯示未捕捉的錯誤回饋「Uncaught in( promise)」