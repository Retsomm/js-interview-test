var myName = '小名';
function fn1(myName){    // 接收'恩娣'參數
    console.log(myName); // 呈現'恩娣'的值
} 
function fn2(){          // 獨立作用域，因此不授權域myName影響
    var myName = '恩娣'; // 新的變數
    fn1(myName);         // 將'恩娣'的值透過參數進行傳遞
}
fn2();
// 雖然fn2有重新宣告myName變數，但由於呼叫fn1是使用參數的方式傳遞變數，因此fn1的myName是接收到fn2的值