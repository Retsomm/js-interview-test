var myName = '小名';
var obj = {
    fn:function(){
        var myName = '杰倫';
        setTimeout(function(){
            console.log(this.myName);
        },1);
    },
    myName:'恩娣',
}
obj.fn();//'小名'
//this是在setTimeout的callback函式內，大部分情況下，callback函式的this通常會屬於「純粹的呼叫」，而setTimeout就屬於此類型，因此this會指向window，最終結果為'小名'