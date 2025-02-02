var myName = '小名';
var obj = {
    fn:function(){
        var myName = '杰倫';
        console.log(this.myName);
    },
    myName:'恩娣',
}
obj.fn();//'恩娣'
//tihs指向，且屬於物件下的呼叫，呼叫的程式碼為obj.fn()，因此fn函式中this的指向是obj物件，this.myName的概念等同於obj.myName，最終結果為'恩娣'