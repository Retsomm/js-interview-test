//setTimeout 時間所需花費時間
console.time('setTimeout 時間');
setTimeout(()=> {
    console.timeEnd('setTimeout 時間');
},100);
let id = 0 //不太準，因為for迴圈所花費的時間可能會超過100毫秒，導致無法在準確的時間返回
//因為JS是屬於同步、單執行緒語言，所有的非同步事件需等待同步程式碼執行完以後，才會觸發其相關的事件，因此當成程式碼需要消耗更多的硬體資源時，就會造成非同步返回時間更長