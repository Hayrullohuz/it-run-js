////////////////////////// OBJECT ////////////////////////////
// let person = {
//     name : 'Ivan',
//     age : 22, 
//     gender : 'man',
//     car : true,
//     hobby : ['football', 'hockey', 'tennis'],
//     skils : {
//         html : true,
//         css  : true,
//         js : false
//     },
//     "mother name" : "Vaselisa" 
// }

// Object.freeze(person)

// person.age = 19

// delete person.age

// person.height = 180

// console.log(person.height)

// console.log(person.name)
// console.log(person.gender)
// console.log(person.skils.css)
// console.log(person["mother name"])
// console.log(person["age"])

//////////////////////////////////////////////////////

// let person = {
//     name : 'Ivan',
//     age : 22, 
//     gender : 'man',
//     car : true,
//     hobby : ['football', 'hockey', 'tennis'],
//     skils : {
//         html : true,
//         css  : true,
//         js : false
//     }
// }

// let person2 = JSON.parse(JSON.stringify(person))

// person2.skils.html = false

// console.log(person)
// console.log(person2)

//////////////////////////////////////////////////////

// let person = {
//     name : 'Ivan',
//     age : 22, 
//     gender : 'man',
//     car : true,
//     hobby : ['football', 'hockey', 'tennis'],
//     skils : {
//         html : true,
//         css  : true,
//         js : false
//     }
// }

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

////////////////////////// HOME WORK ////////////////////////////

// 1 Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = salaries.John + salaries.Ann + salaries.Pete

// console.log(sum)

//////////////////////////////////////////////////////

// 2 У вас есть объект {name:'Ivan', age: 26} в консоли вытащить значение ключа name

// let person = {
//     name:'Ivan', 
//     age: 26
// }

// console.log(person.name)

//////////////////////////////////////////////////////

// 3 У вас есть объект {name:'Ivan', age: 26} ключ age заменить на прошлое значение и + 5.

// let person = {
//     name:'Ivan', 
//     age: 26
// }
// console.log(person.age + 5)

//////////////////////////////////////////////////////

// 4 У вас есть объект {name:'Ivan', age: 26, student: true}. Заменить значение ключа student на противоположный

// let person = {
//     name:'Ivan', 
//     age: 26,
//     student: true
// }
// person.student = false
// console.log(person.student)

//////////////////////////////////////////////////////

// 5 У вас есть объект {name:ABRACADABRA', age: 15, student: true}. Проверить что значение ключа name содержит в себе подстроку BRAC

// let person = {
//     name:'ABRACADABRA', 
//     age: 15,
//     student: true
// }
// check = person.name.includes('BRAC')
// console.log(check)

//////////////////////////////////////////////////////

// 6 У вас есть объект {name:'Ivan', age: 26, student: true}. В консоли вывести все варианты перевода объекта в массив

// let person = {
//     name:'Ivan',
//     age: 26,
//     student: true
// }
// let personArr = Object.keys(person)
// console.log(personArr)

// let personArr2 = Object.values(person)
// console.log(personArr2)

// let personArr3 = Object.entries(person)
// console.log(personArr3)

//////////////////////////////////////////////////////

// 7 У вас есть объект {name:'Ivan', age: 26, student: true}. Создать новую переменную и клонировать в него данные из нашего объекта. При изменении объект 1 не должен изменяться

// let person1 = {
//     name:'Ivan',
//     age: 26,
//     student: true
// }
// // let person2 = Object.assign({}, person1)
// let person2 = {...person1}

// // Изменение person2 не повлияет на obj1
// person2.name = 'Alex';

// console.log(person1); // {name: 'Ivan', age: 26, student: true}
// console.log(person2); // {name: 'Alex', age: 26, student: true}

//////////////////////////////////////////////////////

// 8 У вас есть массив cars = ['bmw', 'honda','mers','lexus'] удалить последний элемент

// const cars = ['bmw', 'honda','mers','lexus']

// cars.pop();

// console.log(cars);

//////////////////////////////////////////////////////

// 9 У вас есть массив cars = ['bmw', 'honda','mers','lexus']. Получить последний элемент

// let cars = ['bmw', 'honda','mers','lexus']
// let lastCar = cars[cars.length - 1] 

// console.log(lastCar);

//////////////////////////////////////////////////////

// 10 У вас есть массив cars = ['bmw', 'honda','mers','lexus']. Заменить второй элемент на 'toyota'

// let cars = ['bmw', 'honda','mers','lexus']
// cars[1] = 'toyota';

// console.log(cars);

//////////////////////////////////////////////////////

// 11 У вас есть массив cars = ['bmw', 'honda','mers','lexus']. Добавить в начало новый элемент 'kia'

// let cars = ['bmw', 'honda','mers','lexus']
// cars.unshift('kia');

// console.log(cars);

//////////////////////////////////////////////////////

// 12 У вас есть массив cars = ['bmw', 'honda','mers','lexus']. В консоли получить длину этого массива

// let cars = ['bmw', 'honda','mers','lexus']
// console.log(cars.length);

////////////////////////// HOME WORK 2 ////////////////////////////

// 1) у вас есть масив arr = [1, 1, 2, 3, 3, 3, 3, 7, 8, 9, 9] благодоря методам вывести в консоль [0, 1, 2, 3, 4,5, 6, 7, 8, 9,10] 

// let arr = [1, 1, 2, 3, 3, 3, 3, 7, 8, 9, 9];

// // Создаем массив индексов элементов
// let indices = arr.map((_, index) => index);
// console.log(indices);

//////////////////////////////////////////////////////

// 2) у вас есть обект car = { brand: 'Toyota', model: 'Corolla'} Удалите свойство model из объекта car.

// let car = {
//     brand: 'Toyota',
//     model: 'Corolla'
// };
// // Удаляем свойство model
// delete car.model;
// console.log(car);

//////////////////////////////////////////////////////

// 3) у вас есть обект car = { brand: 'Toyota', model: 'Corolla'} Проверьте, есть ли в объекте car свойство model.

// let car = {
//     brand: 'Toyota',
//     model: 'Corolla'
// }
// // Проверка наличия свойства model
// if ('model' in car) {
//     console.log('Свойство model существует в объекте car.');
// } else {
//     console.log('Свойство model отсутствует в объекте car.');
// }

//////////////////////////////////////////////////////

// 4) у вас есть масив обектов let people = [ { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }] благодоря for of выведите в консоль  
// Alice is 25 years old. 
// Bob is 30 years old. 
// Charlie is 35 years old.

// let people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ];
// // Используем цикл for...of для вывода информации
// for (let person of people) {
//     console.log(`${person.name} is ${person.age} years old.`);
// }

//////////////////////////////////////////////////////

// 5) у вас есть объект {name:'John', John: 100, student: 'Ann', Ann: 160, person: 'Pete', Pete: 130,} благодоря for in просуммируйте все числовые значения в объекте 

// let obj = {
//     name: 'John',
//     John: 100,
//     student: 'Ann',
//     Ann: 160,
//     person: 'Pete',
//     Pete: 130
// };
// let sum = 0;
// // Используем цикл for...in для суммирования числовых значений
// for (let key in obj) {
//     if (typeof obj[key] === 'number') {
//         sum += obj[key];
//     }
// }
// console.log(sum); // Выводит 390

//////////////////////////////////////////////////////

// 6) у вас есть объект {width: 200, height: 300, title: "My menu"} умножте все числовые значения объекта на 2.

// let dimensions = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// // Используем цикл for...in для умножения числовых значений на 2
// for (let key in dimensions) {
//     if (typeof dimensions[key] === 'number') {
//       dimensions[key] *= 2;
//     }
// }
// console.log(dimensions); 
// // Выводит: { width: 400, height: 600, title: 'My menu' }
