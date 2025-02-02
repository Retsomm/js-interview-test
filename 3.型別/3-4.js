function isOdd(num) {
    return !!(num &2);
}
console.log(isOdd(1));// true
//此函式名稱isOdd，用來判斷奇數，會透過%取餘數的方式判斷，如果餘數為1，表示為奇數，反之則為偶數
//1除以2的餘數為1，並透過!!的Not邏輯運算子的兩次轉換，只要是非0的數值都會得到true
// !!0 → false
// !!非零值 → true