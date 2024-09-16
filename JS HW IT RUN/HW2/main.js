// 1. У вас есть переменная a = ’34’.  Написать все варианты перевода типа данных на число.

// let a = '34';

// let num1 = parseInt(a); 
// console.log(num1);


// let num2 = Number(a);
// console.log(num2);

// let num3 = +a;
// console.log(num3);

// let num4 = parseFloat(a); 
// console.log(num4);


// 2. У вас есть переменная b = 29.92. Написать все варинты округления и задать комментарий с описанием работы данного варианта. 

// let b = 29.49;

// // 1. Math.round() - Округление до ближайшего целого числа
// let rounded1 = Math.round(b);
// console.log(rounded1);

// 2. Math.floor() - Округление в меньшую сторону
// let rounded2 = Math.floor(b);
// console.log(rounded2);

// 3. Math.ceil() - Округление в большую сторону
// let rounded3 = Math.ceil(b);
// console.log(rounded3);

// 5. parseInt() - Округление до ближайшего целого числа (отбрасывает дробную часть)
// let rounded5 = parseInt(b);
// console.log(rounded5);

// 3. Получить рандомное число от 1 - 10 , 30 - 90, 200 -500. 

// 1. Рандомное число от 1 до 10
// let random1 = parseInt(Math.random() * 10) + 1;
// console.log(random1);

// 2. Рандомное число от 30 до 90
// let random2 = parseInt(Math.random() * (90 - 30 + 1)) + 30;
// console.log(random2);

// 3. Рандомное число от 200 до 500
// let random3 = Math.floor(Math.random() * (500 - 200 + 1)) + 200;
// console.log(random3);

// 4. У вас есть переменная c = ‘aBRAcADBRA’. Написать метод для изменения регистра строки. 

// let c = 'aBRAcADBRA';

// 1. Метод toUpperCase() - Перевод в верхний регистр
// let upperCase = c.toUpperCase();
// console.log(upperCase);

// 2. Метод toLowerCase() - Перевод в нижний регистр
// let lowerCase = c.toLowerCase();
// console.log(lowerCase);

// 5. У вас есть переменная d = ‘Hello world’. В консоль вывести первый, второй , предпоследний и последний символ.

// let d = 'Hello world';

// Первый символ
// console.log(d[0]);

// Второй символ
// console.log(d[1]); 

// Предпоследний символ
// console.log(d[d.length - 2]); 

// Последний символ
// console.log(d[d.length - 1]); 

// У вас есть переменная e = ‘Hello world’. В консоль вывести длину данной строки. 

// let e = 'Hello world'

// console.log(e.length)

// 7. У вас есть переменная f = ‘abracaDabra’. Написать все варианты поиска подстроки и задать комментарий с описанием данного варианта. 

// const f = 'abracaDabra';

// console.log(f.indexOf('abra')); // 0 - находит 'abra' в начале строки
// console.log(f.indexOf('Dabra')); // 6 - находит 'Dabra' в конце строки
// console.log(f.indexOf('ca')); // 4 - находит 'ca' в конце строки
// console.log(f.indexOf('brac')); // 4 - находит 'brac' в конце строки

// console.log(f.includes('abra')); // true - находит 'abra' в строке
// console.log(f.includes('Dabra')); // true - находит 'Dabra' в строке
// console.log(f.includes('qwerty')); // false - не находит подстроки 'qwerty'

// console.log(f.lastIndexOf('a')); // 10 - находит последнюю 'a' в строке
// console.log(f.lastIndexOf('bra')); // 8 - находит последнюю 'bra' в строке
// console.log(f.lastIndexOf('zzz')); // -1 - не находит подстроки 'zzz'

// console.log(f.startsWith('abra')); // true - строка начинается с 'abra'
// console.log(f.startsWith('Dabra')); // false - строка не начинается с 'Dabra'

// console.log(f.endsWith('Dabra')); // true - строка заканчивается на 'Dabra'
// console.log(f.endsWith('abra')); // false - строка не заканчивается на 'abra'

// console.log(f.search('abra')); // 0 - находит 'abra' в начале строки
// console.log(f.search('Dabra')); // 6 - находит 'Dabra' в конце строки (с учётом регистра)
// console.log(f.search("xyz")); // -1 - не находит подстроки 'xyz'