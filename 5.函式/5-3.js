// 請問demoData記憶體是否有被釋放?
function randomString(length){
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i=0;i<length;i++){
        result += characters.charAt(Math.floor(Math.random()*charactersLength));
    }
    return result;
}
var fn = function(){
    var demoData = [];
    for (var i = 0; i < 1000; i++){
        demoData.push(randomString(1000))
    }
    return demoData.length;
}
console.log(fn()); //有
// JS記憶體釋放取決於是否還能取得該值，在本題中回傳demoData.length僅有取得該陣列長度，而不是demoData的變數，因此最終該變數在執行完後會被釋放