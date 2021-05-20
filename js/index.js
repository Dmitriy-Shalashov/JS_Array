'use strict'
// 0 Создать числовой массив и проинициализировать его (*случайными числами).
// const myArray = [6, 9, 0, 10, 0, 4, 1, 2, 0, 8, 7];
// console.log(myArray);

// 1 Удалить последний элемент из массива, добавить по элементу в начало и конец.

// myArray.pop(length - 1);
// console.log(myArray);
// myArray.push(0);
// console.log(myArray);
// myArray.unshift(17);
// console.log(myArray);

// 2 Вывести размер массива.
// console.log(myArray.length);

// 3 Вывести элементы с четными индексами.
// for (let i = 0; i < myArray.length; i++) {
//    if (i % 2 == 0) {
//       console.log('задача 3____' + myArray[i]);
//    }
// }
// 4 Вывести только четные элементы (четные числа делятся на 2 без остатка).
// for (let i = 0; i < myArray.length; i++) {
//    if (myArray[i] % 2 == 0 && myArray[i] != 0) {
//       console.log('задача 4_____' + myArray[i]);
//    }
// }

// 5 Вывести индексы нулевых элементов (элемент равен нулю).
// for (let i = 0; i < myArray.length; i++) {
//    if (myArray[i] == 0) {
//       console.log('задача 5___' + i);
//    }
// }

// 6 Подсчитать количество нулевых элементов.
// let caunter = 0;
// for (let i = 0; i < myArray.length; i++) {
//    if (myArray[i] == 0) {
//       caunter++;
//    }
// }
// console.log('задача 6___ ' + caunter);

//  Методы перебора массивов.
// 7 Получить новый массив из заданного, который будет содержать только положительные числа (-1, 5, 0, 9, -10 => 5, 9).

// const arrayA = [-1, 5, 0, 9, -10];
// const arrayPositive = arrayA.filter(function (item, index) {
//    if (item > 0) {
//       return true;
//    }
// })
// console.log(arrayPositive);
// // сокращенная запись
// const arrayD = arrayA.filter(item => item > 0)
// console.log(arrayD);

// 8 Получить новый массив из заданного, который будет содержать все элементы исходного, возведенные в квадрат (-1, 5, 0, 9, -10 => 1, 25, 0, 81, 100).

// const arrayB = [-1, 5, 0, 9, -10];
// const arraySquared = arrayB.map(function (item, index) {
//    return item ** 2;
// })
// console.log(arraySquared);

// // сокращенная запись
// const arrayC = arrayB.map(item => item ** 2)
// console.log(arrayC);

// 9 Проверить, являются ли все елементы массива положительными числами (* или в принципе числами).
// const arrayD = [-1, 5, 0, 9, -10];

// let a = arrayD.every(function (item) {
//    return item < 0;
// });
// console.log(a);
// // сокращенная запись
// console.log(arrayD.every(item => item < 0));

// 10 Проверить, есть ли в массиве хоть один отрицательный элемент.

// let aTest = arrayD.some(function (item) {
//    return item < 0;
// });
// console.log(aTest);
// // сокращенная запись
// console.log(arrayD.some(item => item < 0))

// 11 Вывести элементы массива, возведенные в куб.
// const arrayD = [-1, 5, 0, 9, -10];
// arrayD.forEach(function (elem, index) {
//    console.log(elem ** 3);
// })