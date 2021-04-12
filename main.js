// 1) створити функцію яка приймає масив та виводить його
// array = [1, 'hello', 23 , true, 334, 'lamp', 'dor', 'car', 'bike']
// function  numbers (array){
//   document.write(`${array}`)
//     document.write(`<br/>`)
//     return array
// }
// let arr = numbers([1, 'hello', 23 , true, 334, 'lamp', 'dor', 'car', 'bike'])
// console.log(arr)
// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// function randomNumbers (rundom) {
//     for (let i = 0; i < 20; i++) {
//       rundom[i] =  Math.floor(Math.random()* 20)
// console.log(i)
//     }
//     return rundom
// }
// let arr = []
// let rumdomFull = randomNumbers(arr)
// console.log(rumdomFull)

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function follNumber (number1,number2,number3) {
//     if (number1 <= number2 && number1 <= number3){
//         console.log(number1)
//     }else if (number2 <= number3 && number2 <= number3){
//         console.log(number2)
//     }
// }
// follNumber(1,2)
// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function numberBig (number1,number2,number3){
//     if (number1 >= number2 && number2 >= number3){
//         console.log(number1)
//     } else if (number2 >= number1 && number2 >= number3){
//         console.log(number2)
//     } else  if (number3 >= number1 && number3 >= number2){
//         console.log(number3)
//     }
//
// }
// numberBig(28,11,23)

// 5) створити функцію яка повертає найбільше число з масиву
// function array (arrfull){
//     let max = arrfull[0];
//     for (let i = 0; i < arrfull.length; i++)
//         if (arrfull[i] > max){
//             max = arrfull[i];
//         }
//     return max;
// }
// let arr = [23, 24, 114, 5, 10, -2, -7, 0]
// let maxi = array(arr)
// console.log(maxi)
// 6) створити функцію яка повертає найменьше число з масиву
// function arrayMin (min){
//     let arrmin = min[0];
//     for (let i = 0; i < min.length; i++)
//         if (min[i] < arrmin){
//             arrmin = min[i]
//             }
//     return min
//
// }
// let min = [-8, -55, 96, 33, 7, -16, 25, 30];
// let mini = arrayMin(min);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function priseArray (ollPrise){
//     let fullPrise = 0
//     for (let i = 0; i < ollPrise.length; i++) {
//         fullPrise += ollPrise[i]
//     }
//     return fullPrise
// }
// let prise = [5, 5]
// let sum =  priseArray(prise)
// console.log(sum)
// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function averageValue (numbers){
//     let averageFull = 0
//     for (let i = 0; i < numbers.length; i++) {
//         averageFull += numbers[i]
//     }
//
//     return averageFull
// }
// let value = [10, 19, 83, 17, 120, -5, 150 ]
// let sum = averageValue(value)
// console.log(sum / value.length)
// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//    // [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// function userFull (arrayUser){
//     let object = []
//     for (let i = 0; i < arrayUser.length; i++) {
//        for (let item in arrayUser[i]) {
//            object.push(item)
//        }
//     }
// return object
// }
// let users = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// let ItemFull = userFull(users)
// console.log(ItemFull)
// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// function objectValue (getObject){
//     const getValue = []
//     for (const objectElement of getObject) {
//         for (const objectElemens in objectElement) {
//             getValue.push(objectElement[objectElemens]);
//
//         }
//
//     }
// return getValue
//
// }
// let array = [{name: 'Dima', age: 13}, {model: 'Camry'}]
//   const getFullValue = objectValue(array)
// console.log(getFullValue)
// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
//
//
// результат
//     [3,5,7,9]
// let full1 = []
// let sum = 0
// function numbers (first,second) {
// //     for (let i = 0; i < first.length; i++) {
// //         full1.push(first[i] + second[i])
// //     }
// //     console.log(full1)
//     for (let i = 0; i < first.length; i++) {
//         for (let j = 0; j < second.length; j++) {
//             if (i === j){
//            sum = first[i] + second[j]
//                 full1.push(sum)
//
//             }
//
//
//         }
//
//     }
//     console.log(full1)
// }
// let first = [1,2,3,4]
// let second = [2,3,4,5]
// numbers(first, second)
//
//
// ============================================================================================
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function work  (){
//     let numberBag = arguments[0]
//     let numberBag1 = arguments[0]
//     for (const argument of arguments) {
//         if (argument > numberBag){
//             numberBag = argument
//         }else if (argument < numberBag1){
//             numberBag1 = argument
//         }
//     }
//     console.log(numberBag)
// return numberBag1
// }
//
// let fullBagNumber = work (245, 56, 54, 678,78, 3545, 564, 78,89,45)
// console.log(fullBagNumber);
// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
// function allUsers (schoolTeam){
//     let object = [];
//     let value = [];
//     for (let i = 0; i < schoolTeam.length; i++) {
//         for (const valueElement in schoolTeam[i]) {
//             object.push(valueElement)
//             object.push(schoolTeam[i][valueElement])
//         }
//         }
// return objectValue
//     }
// let users = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// let conffool = allUsers(users)
// console.log(c)
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
// function numbersArray (numbers, ind ) {
// if (ind < numbers.length){
//     let numb = numbers[ind]
//     numbers[ind] = numbers[ind+1]
//     numbers[ind+1] = numb
// }
// return numbers
// }
//  let numbers = numbersArray([9,8,0,4] , 0)
//  let number1 = numbersArray([9,8,0,4] , 1)
//  let number2 = numbersArray([9,8,0,4] , 2)
// console.log(numbers)
// console.log(number1)
// console.log(number2)
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// function arr (onArr){
//     for (let i = onArr.length; i >= 0; i--) {
//         if (onArr[i] === 0){
//             onArr.push(onArr[i])
//             onArr.splice(i,1)
//         }
//     }
//     console.log(onArr)
// }
// let arr1 = [1,0,6,0,3]
// let arr2 = [0,1,2,3,4]
// let arr3 =[0,0,1,0]
// arr(arr1)
// arr(arr2)
// arr(arr3)
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// ============================================================================================
//
//
//
// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// // ******************* НАЗАД В МИНУЛЕ *********************** //