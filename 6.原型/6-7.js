(()=>{
    'use strict';
    Object.defineProperty(window,'myName',{
        value:'小名',
        writable: false,
    });
    myName = '恩娣';
    console.log(myName);// typeError
})();
//當有加入嚴謹模式'use strict'時，對於無法寫入、無法刪除的屬性，都會跳出typeError
