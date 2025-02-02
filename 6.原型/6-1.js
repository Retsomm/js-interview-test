function Person(name){
    this.name = name
}
Person.__proto__.getName = function(){
    return `${this.name} 你好`;
}
var Ming = new Person('小名');
console.log(Ming.getName());// getName is not a function
//使用function定義函式建構子，但function prototype才會作為實體後的原型鏈，因此實體後的Mung無法取得getName的方法