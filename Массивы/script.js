// let a = prompt(' ')

// let person = {
//     name : 20,
//     'favorite place': 'it-run',
//     age : 20,
//     height : 175,
//     gender : 'man', 
//     hobby : {
//         box : true,
//         football : true,
//         dance : false
//     }
// }

// console.log(person)

////////////////////////////////////////////////

// const arr = [4,5,6,7,8]

// arr.shift() //del 1 el
// arr.pop() //del last el

// arr.unshift(11) //add 1 el
// arr.push(10) //add last el

// console.log(arr)

///////////////////////////////////////////////

// const arr = [4,5,6,7,8]
// let str = '0-709-59-21-02'

// console.log(arr.reverse())

// console.log(arr.join('-'))

// console.log(str.split('-'))

///////////////////////////////////////////////

// let str1 = 'Khairulloh'

// console.log(str1.split('').reverse().join(''))

///////////////////////////////////////////////

// let arr = [1,2]
// let arr2 = [3,4]

// let arr3 = []

// arr3 = [...arr, ...arr2]

// console.log(arr3)

///////////////////////////////////////////////

// let arr = [1,2,3,4,5]

// arr.splice(true, 5, false, null, 'sfgsd')

// console.log(arr)

///////////////////////////////////////////////

// let arr = [true, 5, false, null, 5]

// console.log(arr.includes(5))
// console.log(arr.indexOf(5))
// console.log(arr.lastIndexOf(true))

//////////////////////// HOME WORK ///////////////////////

// let arr = [1,2,3,4,5]
// let result = 0

// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (i = 0; i < arr.length; i++) {
//     result = result + arr[i]
// }

// console.log(result)

////////////////////////////////////////////

// let arr = [-2,7,9,5,8,1,12,15,17,3]

// for (i = 0; i < arr.length; i++) {
//     if (arr[i] < 10 && arr[i] > 0) {
//         console.log(arr[i])
//     }
// }

// for (i = 2; i <= 10; i++) {
//     console.log(i)
// }

///////////////////////////////////////////

// let arr = ['BMW', 'Mersedes', 'Opel', 'Mazda', 'FIAT', 'Ferarri', 'Reno']

// let newArr = []

// for (i = 0; i < arr.length; i++) {
//     if (arr[i].toUpperCase() === arr[i]) {
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr)

////////////////////////////////////////////

// let name1 = 'Анастасия'
// name1 = 'Максим'

// console.log(name1)

////////////////////////////////////////////

// let str = 'Я хочу быть большим и сильным'
// console.log(str.length)

////////////////////////////////////////////

// let a = '15'
// let b = 15
// let c = 10

// console.log(a + b + c)
// console.log(b + c + a)

///////////////////////////////////////////

// let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ]
// console.log(arr[1][0])

///////////////////////////////////////////

// const obj = {
//     name: 'Ivan',
//     age: 35,
//     gender: 'male',
//     job: 'web-developer'
// };

// for (const key in obj) {
//     console.log(`Значением свойства ${key} является ${obj[key]}`);
// }

//////////////////////////////////////////

// let surname = 'Cеребров';
// let modifiedSurname = surname.slice(0, -1) + 'фф.';
// console.log(modifiedSurname);

//////////////////////////////////////////

// let str = 'я люблю торт'
// console.log(str.endsWith('торт'))

//////////////////////////////////////////

// let str = '10223040'
// console.log(str.split('').reverse().join(''))

//////////////////////////////////////////

// let age = 19
// console.log(`Мне ${age} лет`)

//////////////////////////////////////////

// let str = "  asdasdsadsadsadsadc";
// let arr = str.split(''); // Разделяем строку по каждой букве
// let result = [];

// // исключаем пустые строки
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== ' ') {
//         result.push(arr[i]);
//     }
// }

// console.log(result);

//////////////////////////////////////////

// let str = 'Мой город самый лучший город в России!';
// let position = str.indexOf('город');

// console.log(position); // Выводит 4