//3/17/2023
// var min = function(list){
//     list.sort((a,b) => a > b ? 1 : -1)
//     return list[0];
// }

// var max = function(list){
//     list.sort((a,b) => a < b ? 1 : -1)
//     return list[0];
// }

// console.log(min([2,5,7,3,4,5,8,23,12,33456,6346,342,2,342,236617,456]))


//3/20/2023

// function descendingOrder(n){
//     if(n>0){
//     return Number(n.toString().split('').sort((a,b) => b-a).join(''));
//     } else return n
// }


//3/21/2023

// function getCount(str) {
//     let c = 0
//     let arr = str.split("")
//     for (let i = 0; i<arr.length; i++){
//         if(arr[i]== 'a' || arr[i]== 'e' || arr[i]=='i' || arr[i]=='o' || arr[i]=='u'){
//             c++
//         }
//     }
//     return c
//   }


//3/22/2023

// function findNextSquare(sq) {
//     let num = Math.sqrt(sq);
//     if (num % 1 == 0){
//         console.log(num)
//         num = num + 1
//         console.log(num)
//         return Math.pow(num,2)
//     }else return -1;
//   }

//   findNextSquare(121)

// 3/24/2023

// function addBinary(a,b) {
//     return (a+b).toString(2)
// }

// to be fair though, I am not entirely certain why this works. i get that we divide the number by two and keep track of the quotient and remainder but id have to mess with that more to make sense of it. additionally this wouldnt work with negative numbers. i would have to use the >>> operator in some fashion to make it work.

//3/25/2023

// function validatePIN (pin) {
//     let code = pin.toLowerCase().split('')
//     if(code.length == 4 || code.length == 6){
//         if(code.some((x) => Number(x) % 1 !== 0 || code.some((x) => x == " "))){
//             return false ;
//         }else return true;
//     }else return false ;
//   };

// console.log(validatePIN('123'))

// //didnt get the answer this is it  but i think i was close
// function validatePIN (pin) {
//   //return true or false
// 	var n = pin.length;
//     if( n != 4 && n != 6)
//             return false;
//     for (var i in pin)
//             if (pin[i] > '9' || pin[i] < '0')
//                 return false;
//     return true;

// function printerError(str){
//     let l = str.split('').length
//     let arr = str.split('')
//     let c = 0
   
//    for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 'm'){
//         c += 1        
//     }
//    }
//    return `${c}/${l}`
// }

// //// extra code war

// function whatCentury(num){
//     return Math.ceil(num/100)
// }

// 3/27/2023

// function double(i) {
//     return i*2
// }

//3/29/2023

// function nbYear(p0, percent, aug, p) {
//     let n = 0
//     console.log(p0, percent, aug, p)
//     if(percent !== 0){
      
//     while(p0.toFixed(0) < p){
//         p0 = p0 + p0 * (percent/100) + aug;
//         n++
//     }
//        return n
      
//     }else {
//       while(p0.toFixed(0) <= p){
//         p0 = p0 + aug;
//         n++
       
//     }
//       return n
//     }
// }  

// console.log(nbYear(1000, 2, 50, 1214))

// answer used Math.floor()


//04/10/2023

// function solution(str){
//     return str.split('').reverse().join('')
// }

// console.log(solution('world'))

//04/11/2023

// function countSheeps(arrayOfSheep) {
//     let numberOfSheep = 0;
//     arrayOfSheep.forEach((x)=> x === true ? numberOfSheep+= 1 : numberOfSheep)
//     return numberOfSheep
//   }

//04/12/2023

// function DNAStrand(dna){
//   return dna.split('').map((x)=> x == 'A' ? x= 'T' : x == 'T' ? x = 'A' : x== 'G' ? x = 'C' : x== 'C' ? x = 'G' : x).join('')
// }
