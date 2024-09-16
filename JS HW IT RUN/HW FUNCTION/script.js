// 1
// function topSalary(salaries) {
//     // Проверяем, пуст ли объект
//     if (Object.keys(salaries).length === 0) {
//         return null;
//     }

//     let maxSalary = 0;
//     let topEmployee = null;

//     // Перебираем пары [имя, зарплата] с помощью Object.entries и деструктурирования
//     for (const [name, salary] of Object.entries(salaries)) {
//         if (salary > maxSalary) {
//             maxSalary = salary;
//             topEmployee = name;
//         }
//     }
//     return topEmployee;
// }
// // Пример использования
// let salaries = {
//     "John": 250,
//     "Mary": 250,
//     "Pete": 250
// };
// console.log(topSalary(salaries)); // Pete

// 2
// function wrapNumbersInDiv(numbers) {
//     return numbers.map(number => `<div>${number}</div>`);
// }
// // Пример использования
// console.log(wrapNumbersInDiv([1, 2, 3, 4, 5]));

// 3
// function getGrowth(numbers) {
//     return numbers.map((number, index) => {
//         if (index === 0) {
//             return `${number} (+0, +0%)`;
//         }
//         const prevNumber = numbers[index - 1];
//         const difference = number - prevNumber;
//         const percentGrowth = ((difference / prevNumber) * 100).toFixed(2);
//     })
// }