var myName = '小名';
var obj = {
    fn:function(){
        var myName = '杰倫';
        setTimeout(()=>{
            console.log(this.myName);
        },1);
    },
    myName:'恩娣',
}
obj.fn();//'恩娣'
//this的概念，在setTimeout中的callback函式改為「箭頭函式」，而箭頭函式並沒有自己的this，它的this會與其作用域下的this指向一致，所以會與fn函式一樣指向obj，最終結果為'恩娣'