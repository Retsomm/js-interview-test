const num = [1,2,3,4,5].filter(function (i){
    return i % 2;
});
console.log(num); // [1, 3, 5]
// 直接將陣列值傳入，並透過filter特性，僅回傳真值來進行判斷，當傳入為1,2,3,4,5，並統一使用%2取餘數時，會回傳餘數被視為真值的值。其中的奇數1,3,5的餘數為1(真值)，因此會回傳並建立新的陣列num。