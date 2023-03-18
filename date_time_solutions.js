//3/17/2023
var min = function(list){
    list.sort((a,b) => a > b ? 1 : -1)
    return list[0];
}

var max = function(list){
    list.sort((a,b) => a < b ? 1 : -1)
    return list[0];
}

console.log(min([2,5,7,3,4,5,8,23,12,33456,6346,342,2,342,236617,456]))