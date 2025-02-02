let person = 1 ? (function () { return '小名'}) ():'恩娣';
// 數字1為真值，因此會執行(function () { return '小名'}) ()的函式表達式，而這個結構又稱為「立即函式」，呼叫後會直接執行此段函式，所以會得到function內return的值'小名'