// 1) Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. 
// Проверьте работу скрипта при a, равном 'test', 'тест', 3 Решить задачу через if-else. 

// let str = 'test'

// if (str.includes('test')) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// str.includes('test') ? console.log('true') : console.log('false')

//////////////////////////////////////////////////

// 3) С помощью функции promt, спросите у пользователя, когда он собирается прийти в магазин? Если он прийдет в промежуток с 23 вечера до 9 утра, сообщить, 'В это время мы не работаем', если он прийдет с 9 до 12, сообщить 'Будем рады Вас видеть', если прийдет с 12 до 13, сообщить, что обед. А если с 13 до 23 вечера, то сообщить, что так же рады видеть.

// let a = prompt('What time will you come to the shop?:')

// if (a >= 23) {
//     console.log('В это время мы не работаем')
// } else if (a < 9) {
//     console.log('В это время мы не работаем')
// } else if (a >= 12 && a <= 13) {
//     console.log('Сейчас обед')
// } else {
//     console.log('Будем рады вас видеть')
// }

//////////////////////////////////////////////////

// 4) Создайте переменные m и n. В m поместите произвольное числовое значение. Напишите оператор ветвления if так, чтобы если m было больше 50,  то в переменную n помещалось слово «большое», иначе — слово «маленькое». Решить задачу через if-else. 

// let m = 55;
// let n;

// if (m > 50) {
//     n = "большое";
// } else {
//     n = "маленькое";
// }

// console.log(n); 

// m > 50 ? console.log("большое") : console.log("маленькое")

//////////////////////////////////////////////////

// 5)Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной в консоль. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// let a = 0  //prompt('Enter any number:')

// if (a === 0 || a === 2) {
//     console.log(a + 7)
// } else {
//     console.log(a / 10)
// }

// a === 0 || a === 2 ? console.log(a + 7) : console.log(a / 10)

//////////////////////////////////////////////////

// 6) с  помощью confirm, спросите у пользователя, есть ли ему 18? если есть, покажите в консоли 'есть', если нет - 'нет'.

// if (confirm("Вам есть 18 лет?")) {
//     console.log('есть');
// } else {
//     console.log('нет');
// }

// confirm("Вам есть 18 лет?") ? console.log('есть') : console.log('нет')

//////////////////////////////////////////////////

// 7)Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных в консоль, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5 соответственно.

// let a = 11
// let b = 1

// if (a <= 1 && b >= 3) {
//     console.log(a + b)
// } else {
//     console.log(a - b)
// }

// a <= 1 && b >= 3 ? console.log(a + b) : console.log(a - b)

//////////////////////////////////////////////////

// 8) Паше 17 лет. Пока он еще ребенок, но через год станет полноценной ячейкой общества. Напишите скрипт, который бы показывал, что пока Паше 17 лет, он - ребенок, но, когда станет 18 - он взрослый. Возраст Паши поместите в переменную.

// let ageUser = prompt('Сколько вам лет?')

// if (ageUser >= 18) {
//     console.log('Вы уже взрослый')
// } else {
//     console.log('Вы еше ребенок')
// }

// ageUser >= 18 ? console.log('Вы уже взрослый') : console.log('Вы еше ребенок')

//////////////////////////////////////////////////

// 9) Создать переменную seasons, которая может принимать строку. Если она имеет значение 'декабрь', 'январь' или 'февраль', то в консоль вывести сообщение 'зима',  если имеет значение 'апрель', 'март' или 'май' – 'весна',  если имеет значение 'июнь', 'июль' или 'август' - 'лето', имеет значение 'сентябрь', 'октябрь' или 'ноябрь' - 'осень'. Решить задачу через switch-case.


