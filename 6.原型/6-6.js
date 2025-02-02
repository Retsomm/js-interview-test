Object.defineProperty(window,'myName',{
    value:'小名',
    writable: false,
});
myName = '恩娣';
console.log(myName);//'小名'
//使用defineProperty直接針對全域設定的myName屬性，並將其設定為不可寫入，所以後續賦予其他值都無法變更