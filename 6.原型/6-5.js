var person = {
    getName:function(){
        console.log('我是小明');
    }
}
Object.prototype.getName = function(){
    console.log('我是杰倫')
}
person.getName();//'我是小明'
//當物件內找無該方法時才會向上查找，而本題中因為物件內已經有該方法，所以會直接呼叫物件內的方法
