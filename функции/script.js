// function checkWorld (world, check) {
//     return world.includes(check)
// }
// console.log(checkWorld('Bektur', 'ur'))
// console.log(checkWorld('Marsel', 'el'))
// console.log(checkWorld('Khairulloh', 'Khair'))

// function findLength (world) {
//     return `${world} содержит ${world.length} слов`
// }
// console.log(findLength('Приложение'))
// console.log(findLength('Загадка'))

// function getRandomCar (arr) {
//     let random = Math.floor(Math.random() * arr.length)
//     return arr[random]
// }
// console.log(getRandomCar(['mers', 'bmw', 'honda', 'lexus']))

// function longerName (a, b) {
//     if (a.length === b.length) {
//         return 'Одинаково'
//     } else if (a.length > b.length) {
//         return a
//     } else {
//         return b
//     }
// }
// console.log(longerName('Maksat', 'Bektur'))
// console.log(longerName('Nurbolot', 'Khairulloh'))

// function checkWorld (a,b,c) {
//     let result = 0;
//     for (i = 0; i < a.length; i++) {
//         if (a[i] === b) {
//             result++
//         }
//     }
//     if (result >= c) {
//         return 'содержит'
//     } else {
//         return 'не содержит'
//     }
// }
// console.log(checkWorld('abracadabra', 'a', 3))

////////////////////////////// HOME WORK /////////////////////////////////

// Task 1

// function describeValue (val) {
//     return `${val} typeof ${typeof val}`
// }
// // Примеры использования:
// console.log(describeValue(1));       // '1 typeof number'
// console.log(describeValue(true));    // 'true typeof boolean'
// console.log(describeValue("hello")); // 'hello typeof string'
// console.log(describeValue(null));    // 'null typeof object'
// console.log(describeValue(undefined)); // 'undefined typeof undefined'
// console.log(describeValue({}));      // '[object Object] typeof object'

//////////////////////////////////////////////////////////////////////////

// Task 2

// function stringNum (value) {
//     return `${value * 2}`
// }
// console.log(stringNum(2))
// console.log(stringNum(3))
// console.log(stringNum(4))
// console.log(stringNum(5))

//////////////////////////////////////////////////////////////////////////

// Task 3 

// function sortingStr (a,b,c) {
//     let result = '';
//     let maxLength = Math.max(a.length, b.length, c.length);

//     for (let i = 0; i < arguments.length; i++) {
//         result += a[i], b[i], c[i]
//     }
//     return result;
// }
// // Примеры использования:
// console.log(sortingStr('this', 'test', 'lock')); // 'ttlheoiscstk'
// console.log(sortingStr('aa', 'bb', 'cc'));       // 'abcabc'
// console.log(sortingStr('Bm', 'aa', 'tn'));       // 'Batman'

// Task 4

// function getInitials(fullName) {
//     // Разделяем строку на имя и фамилию
//     let parts = fullName.split(' ');
//     // Берем первую букву имени и фамилии, добавляем точку между ними
//     let initials = `${parts[0][0]}.${parts[1][0]}`;
//     return initials;
// }

// // Примеры использования
// console.log(getInitials('Сергей Семёнов'));       // С.С
// console.log(getInitials('Анастасия Черданцева')); // А.Ч
// console.log(getInitials('Горинов Максим'));       // Г.М

// Task 5

// function greetTraveler (name, city, region) {
//     let fullName = name.join(' ');
//     let greeting = `Привет, ${fullName}! Добро пожаловать в ${city}, ${region}!`; 
//     return greeting
// }
// console.log(greetTraveler(['Дмитрий', 'Серебров'], 'Ишим', 'Тюменская обл')); // Привет, Дмитрий Серебров! Добро пожаловать в Ишим, Тюменская обл!
// console.log(greetTraveler(['Анастасия'], 'Миасс', 'Челябинская обл')); // Привет, Анастасия! Добро пожаловать в Миасс, Челябинская обл!
// console.log(greetTraveler(['Горинов', 'Максим', 'Владимирович'], 'Чернушка', 'Свердловская обл')); // Привет, Горинов Максим Владимирович! Добро пожаловать в Чернушка, Свердловская обл!

// Task 6

// const task6 = (number) => {
//     if (number < 0) {
//         return 'Negative'
//     } else if (number > 0) {
//         return 'Positive'
//     } else {
//         return 'Zero'
//     }
// }
// console.log(task6(1))
// console.log(task6(-1))
// console.log(task6(0))
