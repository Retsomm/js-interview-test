class Person {
    constructor(name){
        this.name = name;
    }
    getName (){
        return this.name;
    }
}
Person.prototype.sayHi = function(){
    console.log(this.name +'你好');
}
var Ming = new Person('小名');
Ming.sayHi();//'小名你好'
//class類別與function函式建構子原理是一樣的，所以class除了直接在大括號內建立原型以外，也是能夠使用prototype建立原型，雖然實戰中不太會這樣，但要清楚兩者的原理是相同的
//呈上題
console.log(Ming.__proto__.sayHi === Person.prototype.sayHi); //true
console.log(Ming.__proto__.getName === Person.prototype.getName); //true
// 因為class類別與function函式建構子原理一致，所以也都能使用相同的方式檢驗其結構，兩者在判斷後的結果皆為true