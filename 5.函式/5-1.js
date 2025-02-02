var myName = '小名';
(function(fn) {
    console.log(fn(myName));
}) (function() {
    return '恩娣';
});// 因為JS的一級函式特性，所以函式也能作為參數進行傳遞，此題的結構中，前半段是一個立即函式(IIFE)，後方括號中又傳入一個函式，作為參數進行傳遞，在IIFE中會直接呼叫此函式，並可獲得'恩娣'的結果