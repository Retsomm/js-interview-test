var myName = '恩娣'
(()=> myName = '小名')();
console.log(myName) // VM484:2 Uncaught TypeError:"恩娣" is not a function
// 在前段的結尾不會自動加入分號，因此會出現「Uncaught TypeError:'恩娣' is not a function」


// var myName = '恩娣';
// (()=> myName = '小名')();
// console.log(myName)
// VM493:3 小名