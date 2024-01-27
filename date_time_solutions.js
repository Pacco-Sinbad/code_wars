//3/17/2023
// var min = function(list){
//     list.sort((a,b) => a > b ? 1 : -1)
//     return list[0];
// }

// const { lang } = require("moment");

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

//solution

// function vampire_test(a, b){
//    return sortStr(a + '' + b) == sortStr(a * b + '');
//  }
// console.log(vampire_test(22,33))
// function sortStr(x){ return x.split('').sort().join('') }


// i misunderstood the task and thought there could be other digits contained in the product as long as the the original digits were contained in the product. the digits were supposed to be the same without additional digits. this can be accomplished by sorting the two sets of digits and comparing them to each other.

//7/19/23

// function creatObj(x){
//   let stringSplitIntoWords = x.split(' ')
//   // assign a number value to each letter that corrolates with its position in the alphabet
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//   const alphaArray = alphabet.split('') 
  //determine the total value of each word based on the letter it contains
//   let obj = {}
//   stringSplitIntoWords.forEach((e)=>{
//     let sum = 0;
//     alphaArray.forEach((x)=>{
//       for (letters of e){
//         if (letters == x){
//           sum += alphaArray.indexOf(x)+1
//         };
//       };
      
//     })
//   // console.log(sum)
//   // console.log(e)
//   obj[e] = sum  
//   })
//   return obj
//     //sort the array of words and return the largest one.
// }

// function high(x){
//   let objResult = creatObj(x)
//   let maxValue = Number.MIN_VALUE;
//   let maxKey;

//   Object.entries(objResult).forEach(([key, value])=>{
//     if(value > maxValue) {
//       maxValue = value;
//       maxKey = key;
//     }}
//   )
// return maxKey
// }

// high('man i need a taxi up to ubudz')

//07/20/23

// function enough(cap, on, wait){
//   return cap - on - wait >= 0 ? 0 : (cap-on-wait)*-1 
// }

//07/24/23

// function duplicateCount(text){
//   let count = 0
//   let alphaNumeric = 'abcdefghijklmnopqrstuvwxyz123456789'
//   let aNArray = alphaNumeric.split('')
//   aNArray.forEach((e) => {
//     if(text.toLowerCase().split(e).length > 2){
//       count++
//     }
//   })
//   return count
// }

// duplicateCount('alpha11')

// var Ghost = function() {
//   let color = Math.ceil((Math.random*4))
//   if(color == 1){
//     color = 'white'
//   }else if (color == 2){
//     color = 'yellow'
//   }else if (color == 3){
//     color = 'purple'
//   }else color = 'red'
// }

// ///failed

// function dblChar(str){
//   let arr = str.split('')
//   let newArr = []
//   arr.forEach(e => {
//     newArr.push(`${e}${e}`)
//   })
//   return newArr.join('')
// }

//07/25/23

// function Ship(draft,crew) {
//   this.draft = draft;
//   this.crew = crew;
//   this.isWorthIt = function(){
//     return this.draft - (this.crew*1.5) > 20
//   }
//  }

// 

// const Greetings = {
//   english: 'Welcome',
//   czech: 'Vitejte',
//   danish: 'Velkomst',
//   dutch: 'Welkom',
//   estonian: 'Tere tulemast',
//   finnish: 'Tervetuloa',
//   flemish: 'Welgekomen',
//   french: 'Bienvenue',
//   german: 'Willkommen',
//   irish: 'Failte',
//   italian: 'Benvenuto',
//   latvian: 'Gaidits',
//   lithuanian: 'Laukiamas',
//   polish: 'Witamy',
//   spanish: 'Bienvenido',
//   swedish: 'Valkommen',
//   welsh: 'Croeso'
// }

// console.log(Greetings)

// function greet(language) {
//   for (const lang in Greetings){
//     if(language == lang){
//       console.log(Greetings[lang])
//       return Greetings[lang]
//     } 
//   }
//   return Greetings.english
// }

// greet('latvian')


//////07/26/23
// class God{
 
//     static create(){
//       class Human{}  
//       class Man extends Human{};
//       class Woman extends Human{};
//       let arr = [new Man, new Woman]
//       return arr
//     }
//   }
//   //had the right idea but i need to set up the classes outside of the method. then the method can use those classes to create the new objects in the arr. all the code was writeen corrently but i had it in the wrong order.

// ////

// function NameMe(first, last) {
//   this.firstName = first;
//   this.lastName = last;
//   this.name = `${this.firstName} ${this.lastName}`
//   return this.name
// }

// var n = new NameMe('John', 'Doe');
// console.log(n.firstName) //Expected: John
// console.log(n.lastName) //Expected: Doe
// console.log(n.name) //Expected: John Doe

// 08/01/23

// class Solution{
// }



// Object.main.prototype = () => {
//   console.log('Hello World!')
// };

// ///apparently im just fucking stupid idk fuck this shit.

//////

// class Block{

//   constructor(data){
//     this._width = data[0];
//     this._length = data[1];
//     this._height = data[2];
//   };
// getWidth(){
//   return this._width
// };
// getLength(){
//   return this._length
// };
// getHeight(){
//   return this._height
// };
// getVolume(){
//   return this._width*this._height*this._length
// };
// getSurfaceArea(){
//   return this._height*this._width*2 + this._height*this._length*2 + this._length*this._width*2
// }

// }  

// let b = new Block([2,3,4])

  
//This was a rough reintroduction to using classes with objects. I have a lot of the ideas accurate but i definitely need to work on the syntax


///////08/07/23

// class Guesser {
//   constructor(number, lives) {
//     this.number = number;
//     this.lives = lives;
//   }
  
//   guess(n) {
//     this.livesCheck()
//     if (n != this.number){
//       this.lives = this.lives -= 1
//       return false;
//     }
//     else if(n == this.number){
//       return true
//     }
//   }

//   livesCheck(){
//     if(this.lives == 0){
//       new Error
//       return 'error already dead'
//     }else console.log('poop')
//   }
// }

/////

// function solution(str, ending){
//   console.log(str.slice())
//   console.log(str.slice(ending.length*-1))
//   return str.slice(ending.length*-1) === ending
// }

// solution('poopy', '')

///fucking stupid kata. doesnt state that an empty string is possible and as far as im concerned an empty string shouldnt return true. i think this is a bad test. the kata is essentially asking us to use a specific method rather than solve the problem. tasking us with figuring out what method they want us to use is stupid. an empty string for ending should throw an error not return true. for what its worth, the method they wanted us to use was .endswith

// function sum(numbers){
//   if (numbers.lenth == 0){
//     return 0
//   }else return numbers.reduce((acc, x) => acc + x, 0 ) 
// }

// sum([2,3,4,5])


////////08/15/23

// class Song {
//   constructor(title,artist){
//     this.title = title;
//     this.artist = artist;
//     this.pastListeners = ['mathias','kiley']
//   }
//   howMany(arr){
//     let newListenerCount = 0
//     let easyArr = arr.map(x => x.toLowerCase())
//     easyArr.forEach((x)=>{ 
//       if(!this.pastListeners.includes(x)){
//         newListenerCount++
//         this.pastListeners.push(x)
//       }
//     })
//     return newListenerCount
//   }
// }

// const mountMoose = new Song('Mount Moose', 'The Snazzy Moose' )

// mountMoose.howMany(['john','daisY'])


////////

// class Person{
//   constructor(name){
//     this.name = name;
//   }
//   greet(person){
//     return `Hello ${person} my name is ${this.name}`
//   }
// }

// const joe = new Person('Joe')

// console.log(joe.greet('Kate'))
// console.log(joe.name)


// 12.27.2023

// function makeNegative(num){
//   return num < 0 ? num : num*-1
// }

// 12.28.2023

// function XO(str) {
//   str = str.toLowerCase()
//   return str.split('x').length == str.split('o').length
// }

//1.15.2024

// var isSquare = function(n){
//   return (Math.sqrt(n)) % 1 === 0
// }

// 1.24.2024

//1.
// let square = (num) => {
//   return Math.pow(num,2)
// }

//2.

// function alphabetPosition(string){
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
// return string.toLowerCase().split('').map((x,i) => (alphabet.indexOf(x)+1)).filter((x) => x>0).join(' ')
//  }

//3.

// function solution(numb){
//   let arr = []
//   for (let i = 0; i < numb; i++){
//     if(i % 3 ===  0){
//       arr.push(i) 
//     }else if(i % 5 === 0){
//       arr.push(i)
//     }
//   }
//   return arr.reduce((sum, x)=> sum + x, 0)
// }

// solution(73)

// 01/26/2024

// var uniqueInOrder=function(iterable){
//   if( !Array.isArray(iterable)){
//     let array = iterable.split('');
//   }else array = iterable;
//   let solution = [];
//   for (let i = 0; i < iterable.length; i++){
//     if(iterable[i] !== iterable[i-1]){
//       solution.push(iterable[i]);
//     };
//   };
//   return solution
// }

// 01/27/2024

function likes(names) {
  if(names.length === 0){
    return "no one likes this"
  }else if(names.length === 1){
    return `${names[0]} likes this`
  }else if(names.length === 2){
    return `${names[0]} and ${names[1]} like this`
  }else if(names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }else {
    let extras = names.length - 2
    return `${names[0]}, ${names[1]} and ${extras} others like this`
  }
}