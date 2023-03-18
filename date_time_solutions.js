//3/17/2023
var min = function(list){
    list.sort((a,b) => a > b ? 1 : -1)
    return list[0];
}

var max = function(list){
    list.sort((a,b) => a < b ? 1 : -1)
    return list[0];
}