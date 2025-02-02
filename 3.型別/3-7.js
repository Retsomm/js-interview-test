function fn(num) {
    var string = num || 100;
    console.log(string);
}
fn(0); //100
// 0被視為假值，因此在||中會改取得後者的值100

// 在ES6中，會更建議使用參數預設值的語法解決此問題:
// function fn(num = 100) {
//     console.log(num);
// }
// fn(0); // 0
// fn();  // 100