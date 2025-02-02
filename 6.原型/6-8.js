//問出Ming物件時，會不會看到getName方法?不會
function Person(name){
    this.name = name;
}
Object.defineProperty(Person.prototype,'getName',{
    value: function(){
        return this.name;
    },
    enumerable: false,
});
var Ming = new Person('小名');
console.log(Ming);
for(const key in Ming){
    console.log(key);
}
//prototype一樣是物件，所以也能使用defineProperty進行調整，將其enumerable修改為false的情況下，__proto__的原型也會以淺色的字體進行呈現，不過為了確保所有屬性都是在該物件下，還是建議使用書中所提到的hasOwnProperty進行驗證，會較嚴謹