// // // За допомогою prompt запитати як звуть користувача. За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач. Врахувати, що користувач може натиснути cancel або нічого не ввести
// const userMessage = prompt ('What is your name?')
// if( userMessage ) {
//      alert(`Hello, ${userMessage}! How are you?` )
// }
// else{
//     alert("You didn't write your name")
//  }
// // // Розкласти по цифрах п'ятизначне число і вивести у вихідному порядку через пробіл (використовувати оператор “розподіл по модулю” %)
// const x = prompt(`Добавьте пятизначне число сюди`)
// const firstNumber = (Math.floor (x/10000)%10) 

// const secondNumber = Math.floor(x/1000)%10

// const thirdNumber = Math.floor(x/100)%10

// const fourNumber = Math.floor(x/10)%10

// const fiveNumber = Math.floor(x/1)%10

// console.log(Number.isInteger(firstNumber, secondNumber, thirdNumber, fourNumber, fiveNumber ))
// // Створити скрипти для арифметичних дій
const userAddFirstValue = +prompt("Enter first number")
const userAddSecondValue = +prompt("Enter second number")

// const userAddAction = +prompt("Enter ( * or / or + or -)")
const userAddValue = prompt(`Enter values ​​for calculation '-', '+', '*', '/'`)
 if( isNaN(userAddFirstValue || userAddSecondValue)){
    alert('Please write the number!')}
else if ( userAddValue === '-'){
    alert(`${userAddFirstValue} - ${userAddSecondValue} = ${userAddFirstValue - userAddSecondValue}`)
}
else if (userAddValue === '+'){
    alert(`${userAddFirstValue} + ${userAddSecondValue} = ${userAddFirstValue + userAddSecondValue}`)
}
else if (userAddValue === '*'){
    alert(`${userAddFirstValue} * ${userAddSecondValue} = ${userAddFirstValue * userAddSecondValue}`)
}
else if (userAddValue === '/' && userAddFirstValue !== 0 && userAddSecondValue !== 0 ){
    alert(`${userAddFirstValue} / ${userAddSecondValue} = ${userAddFirstValue / userAddSecondValue}`)
}
else if (userAddValue === '/' && userAddFirstValue  === 0 || userAddSecondValue === 0 ) {
    alert(`На нуль не ділиться`)} 

else {
    alert (`You have not entered a value`)
}
// // Створити скрипт, який отримує від користувача (prompt) два значення і виводить (alert) true, якщо значення рівні, false - якщо ні
// const number1 = prompt('Введіть перше значення')
// const number2 = prompt('Введіть друге значення')
// const result = number1 === number2
// console.log(Boolean (result))
// alert(Boolean (result))
const x = prompt('User write text')
const y = /^[0-9]+$/g

if (y.test(x)!==""){
    alert('Юзер вводит текст')}
else {
    alert('Юзер вводит пустую строку')
}



// const i = 'asdasd1'
// console.log(isNaN(i))
