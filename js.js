
// За допомогою prompt запитати як звуть користувача. За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач. Врахувати, що користувач може натиснути cancel або нічого не ввести
const userMessage = prompt('What is your name?');

// Перевірка, чи введене ім'я складається тільки з літер
if (!isNaN(userMessage)) {
  alert("Введіть будь ласка правильне ім'я");
} else {
  alert(`Hello, ${userMessage}! How are you?`);
}

 
// Розкласти по цифрах п'ятизначне число і вивести у вихідному порядку через пробіл (використовувати оператор “розподіл по модулю” %)
const user5numbers = prompt('Введіть сюди пятизначне число');
const number = 5;

if (user5numbers === null) {
  console.log('Ви вийшли с заповнення.');
} else {
  if (Number.isInteger(+user5numbers.trim()) && String(Math.abs(user5numbers.trim())).length === number) {
    const firstNumber = Math.floor(user5numbers.trim() / 10000) % 10;
    const secondNumber = Math.floor(user5numbers.trim() / 1000) % 10;
    const thirdNumber = Math.floor(user5numbers.trim() / 100) % 10;
    const fourNumber = Math.floor(user5numbers.trim() / 10) % 10;
    const fiveNumber = Math.floor(user5numbers.trim() / 1) % 10;

    console.log(`${firstNumber} ${secondNumber} ${thirdNumber} ${fourNumber} ${fiveNumber}`);
  } else if (user5numbers.trim() === "" || isNaN(+user5numbers.trim()) || +user5numbers.trim() <= 5 || user5numbers.trim() !== 0) {
    console.log('Не вірно ввели код.');
  } 
}

// Створити скрипти для арифметичних дій
const userAddFirstValue = prompt("Enter first number");
const userAddSecondValue = prompt("Enter second number");
const userAddValue = prompt(`Enter values for calculation '-', '+', '*', '/'`);

if (userAddFirstValue === null || userAddSecondValue === null || userAddValue === null) {
    alert('Операцію відмінено.');
} 
else {
    const num1 = +userAddFirstValue;
    const num2 = +userAddSecondValue;

    if (
        userAddFirstValue.trim() === "" || isNaN(num1) ||
        userAddSecondValue.trim() === "" || isNaN(num2) ||
        userAddValue.trim() === ""
    ) {
        alert('Будь ласка, напишіть правильний код!');
    } else {
        if (userAddValue === '-') {
            alert(`${num1} - ${num2} = ${num1 - num2}`);
        } else if (userAddValue === '+') {
            alert(`${num1} + ${num2} = ${num1 + num2}`);
        } else if (userAddValue === '*') {
            alert(`${num1} * ${num2} = ${num1 * num2}`);
        } else if (userAddValue === '/') {
            if (num2 === 0 || num1 === 0) {
                alert('Ділення на 0 неможливе.');
            } else {
                alert(`${num1} / ${num2} = ${num1 / num2}`);
            }
        } 
        }
    }
// Створити скрипт, який отримує від користувача (prompt) два значення і виводить (alert) true, якщо значення рівні, false - якщо ні
const number1 = prompt('Введіть перше значення')
const number2 = prompt('Введіть друге значення')
const result = number1 === number2
console.log(result)
alert((result))













// // Створити скрипт, який отримує від користувача (prompt) два значення і виводить (alert) true, якщо значення рівні, false - якщо ні
// // const number1 = prompt('Введіть перше значення')
// // const number2 = prompt('Введіть друге значення')
// // const result = number1 === number2
// // console.log(Boolean (result))
// // alert(Boolean (result))
// // alert(Boolean (result))







 