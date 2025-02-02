(()=>{
    console.log(1);
    setTimeout(()=>{
        console.log(2);
    },0);
    (()=> {
        console.log(3);
    })();
})();//1,3,2
// 程式碼中非同步事件，會在所有程式碼結束後才執行，其餘部分則是依序執行