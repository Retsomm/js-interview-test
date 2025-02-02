var person = {
    name:'小名'
}
Object.prototype.getName = function() {
    console.log(`我是${this.name}`);
}
person.getName();//"我是小名"
// 在一開始宣告person物件，並包含name屬性'小名'，然後原型鏈的結構上層都會經過Object，所以在物件的原型加入任何方法，都可以被任何實體直接使用