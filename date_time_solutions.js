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

//04/13/2023

// function cockroachSpeed(s) {
//     return Math.floor(s * 100000 / 3600)
//   }

//04/16/2023

// function countBy(x, n) {
//     let z = [];
//     for (let i = 1; i <= n ; i ++){
//         z.push(i*x)
//     }
//     return z;
//   }


//04/17/2023

// const rps = (p1, p2) =>{
//     if(p1 == 'scissors' && p2 == 'rock'){
//         return 'Player 2 won!'
//     }else if(p1 == 'scissors' && p2 == 'paper'){
//         return 'Player 1 won!'
//     }else if(p1 == 'scissors' && p2 == 'scissors'){
//         return 'Draw!'
//     }else if(p1 == 'rock' && p2 == 'rock'){
//         return 'Draw!'
//     }else if(p1 == 'rock' && p2 == 'scissors'){
//         return 'Player 1 won!'
//     }else if(p1 == 'rock' && p2 == 'paper'){
//         return 'Player 2 won!'
//     }else if(p1 == 'paper' && p2 == 'paper'){
//         return 'Draw!'
//     }else if(p1 == 'paper' && p2 == 'rock'){
//         return 'Player 1 won!'
//     }else if(p1 == 'paper' && p2 == 'scissors'){
//         return 'Player 2 won!'
//     }
// }

//04/18/2023
// function removeChar(str){
//     let newStr = str.split('')
//     newStr.pop()
//     newStr.shift()
//     return newStr.join('')
// }


// function remove (string) {
//     arr = string.split(' ');
//     let newArr = []
//     arr.forEach((x , i) => {
//         let count = 0
//         arr2 = x.split('');
//         console.log(arr2);
//             arr2.forEach((e) =>{
//                 if(e === '!'){
//                     count++
//                 }} ); 
//             console.log(count)     
    
//         if(count !== 1){
//             console.log("a");
//             newArr.push(x)
//         }
//     });
//     return(newArr.join(' '))  
//   };

//   remove("hi! hi! hi! !hi hi! hi hi hi!!")

//   function splitter(str){
//     console.log(str.split("i").length)
//   }

// function count(string) {
//     let obj = {};
//     for (const letter of string.split('')) {
//         // obj[letter] = (obj[letter] || 0) + 1;
//         obj[letter] = (obj[letter] || 0) +1
//     }
//     return obj
// }

// function lotsADots(equation){
//     let newArr = []
//     if (equation.search('/') > -1){
//         let arr = equation.split('//');
//         let a = (arr[0].split('.').length-1);
//         let b = (arr[1].split('.').length-1);
//         for(let i = 0; i < Math.floor(a/b); i++){
//             newArr[i]= "."
//         }
//         return newArr.join('')
//     }else if(equation.search("\\*") > -1){
//              let arr = equation.split("*");
//              let a = (arr[0].split('.').length-1);
//              let b = (arr[1].split('.').length-1);
//              for(let i = 0; i < a*b; i++){
//                 newArr[i]= "."
//             }
//              return newArr.join('')
//     }else if(equation.search('\\+') > -1){
//         let arr = equation.split('+');
//         let a = (arr[0].split('.').length-1);
//         let b = (arr[1].split('.').length-1);
//         for(let i = 0; i < a+b; i++){
//             newArr[i]= "."
//         }
//         return newArr.join('')
//     }else if(equation.search('\\-') > -1){
//         let arr = equation.split('-');
//         let a = (arr[0].split('.').length-1);
//         let b = (arr[1].split('.').length-1);
//         for(let i = 0; i < a-b; i++){
//             newArr[i]= "."
//         }
//         return newArr.join('')
//     }
// }
// console.log(lotsADots(".....//." ) ) 
// console.log(lotsADots('.....+.....'))

// function feast(beast, dish) {
//     if(beast.slice(0,1) === dish.slice(0,1) && beast.slice(-1) === dish.slice(-1)){
//         return true
//     }else return false
//     }


// feast('grump', 'gravy soup')

//04/19/2023
//1.
// function opposite(number){
//     return number * -1
//

//2.
// function hero(bullets, dragons){
//     return bullets / dragons >= 2
// }

// console.log(hero(7,4))

// function solution(string){
//     arr = string.split('')
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] !== arr[i].toLowerCase() ){
//                 arr.splice(i,0, " ")
//                 i++
//             }
//     }
//     return arr.join('')
// }

// solution('bigPapi')

//04/20/2023

// function squareDigits(num){
//     num = num.toString()
//     arr = num.split('')
//     num = arr.map((x) => Math.pow(Number(x),2)).join('')
//     return Number(num)
//   }

// console.log(squareDigits(8118))

// //refactored to
// function squareDigits(num){
//     return Number(num.toString().split('').map(x=>(Math.pow((Number(x)), 2))).join(''))
//   }

//04/23/2023

// function duplicateEncode(word){
//     const str = word.toLowerCase()
//     const arr = str.split('')
//     let wordEncoded = ''
//     for (let i = 0; i < arr.length; i++){
//         let numberOfOccurences = str.split(arr[i]).length
//         if (numberOfOccurences > 2){
//             wordEncoded += ')'
//         }else wordEncoded += '('
//     }
//     console.log(wordEncoded)
// }

//04/27/2023

// function filter_list(l) {
//     return l.filter((x) => x !== x.toString())
//   }

// console.log(filter_list([2,3,'f','t',4,5,'l']))

//04/28/2023

// function isPangram(string){
//     //receive a string that could contain any type of character
//     // return true or false based on whether the string contains every letter of the alphabet regardless of case
//     // set the alphabet as a variable
//     let a = 'abcdefghijklmnopqrstuvwxyz'
//     alphabet = a.split('')
//     //convert string to all lower case
//     string = string.toLowerCase()
//     // search array to check if any letters from the alphabet are missing
//     let count = 0
//     for (let i = 0; i < alphabet.length ; i++){
//         let pos = string.search(alphabet[i])
//         if (pos > -1){
//             count++
//         }
//         console.log(count)
//     }
//     if (count >= 26){
//         return true
//     }else return false
//     //use method .includes to check for entire alphabet
//     //return true if no letters are missing
//   }

// // isPangram('The quick brown fox jumps over the lazy dog')
// // isPangram('this is not a pangram')

//05/01/2023

// function minMax(arr){
//     let newArr = arr.sort((a,b) => a-b)
//     return [newArr[0],newArr[newArr.length-1]]
//   }

// minMax([2,3,7,1])

//07/10/23

// String.prototype.toJadenCase = function(str){
//     let newArr = str.split(' ');
//     let strArr = newArr.map( x => {
//         let arr = x.split('')
//         arr[0] = arr[0].toUpperCase()
//         x = arr.join('')
//         return x 
//     })
//     str = strArr.join(' ')
//     console.log(str)
// }


// function toJadenCase(str){
//     console.log(str)
//     let newArr = str.split(' ');
//     let strArr = newArr.map( x => {
//         let arr = x.split('')
//         arr[0] = arr[0].toUpperCase()
//         x = arr.join('')
//         console.log(x)
//         return x 
//     })
//     str = strArr.join(' ')
//     console.log(str)
// }

// str = "How can mirrors be real if our eyes aren't real"

// console.log(str.toJadenCase())

//mostly had the right idea but failed to use this in my solution. The kata required us to create a prototype. this means we are treating the strings as objects because we are adding a method to be used.

//07/11/23

// function greet (name, owner) {
//     if(name == owner){
//         return `Hello boss`
//     }else return `Hello guest`
//   }

// 07/14/23

// function isAnIsogram(str){
//     let alpha = 'abcdefghijklmnopqrstuvwxyz'
//     let alphArr = alpha.split('')
//     let count = 0
//     alphArr.forEach(x => {
//         if(str.toLowerCase().split(x).length > 2){
//             count++
//         }
//     })
//     if(count > 0){
//         return false
//     }else return true
// }

// console.log(isAnIsogram('Dermatol'))

// 07/17/23

// function squareSum(numbers){
//    return numbers.reduce(((sum, current)=> Math.pow(current,2) + sum ), 0)
// }

// console.log(squareSum([2,3]))

// 07/18/23

// function vampireTest(a, b) {
//    let product = a*b
//    let prodArr = product.toString().split('')
//    console.log(prodArr)
//    console.log(product)
//    let arr = (a.toString() + b.toString()).split('')
//    console.log(arr)
//    let numbers = [1,2,3,4,5,6,7,8,9,0]
//    if(x //occurences in product is not equal to occurences in arr
//    )return false
//    else return true


//    //return false if 
//  }

// vampireTest(221,354)

// i misunderstood the task and thought there could be other digits contained in the product as long as the the original digits were contained in the product. the digits were supposed to be the same without additional digits. this can be accomplished by sorting the two sets of digits and comparing them to each other.