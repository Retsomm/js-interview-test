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

promiseFn(0)
    .then((res)=>{
        console.log(1,res);
    }, (err)=> {
        console.log(2,err);
    });
// 2,'fail'
//本題中的promiseFn所帶入的參數為0，因此會執行Promise中的reject事件。    
