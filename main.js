"use strict"

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function convertInFullNumber () {
    const Firstnumber =  prompt("Твоя перша цифра?");
    const Secondnumber = prompt("Твоя друга цифра?");
    const Thirdnumber = prompt("Твоя третя цифра?");

    const plusNumbers = Firstnumber + Secondnumber + Thirdnumber;
    return plusNumbers;
}

alert("Твоє повне число " + convertInFullNumber());

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні. 

const returnNumbers = function() {

    const Firstnumber = prompt("Твоє перше число?")
    const Secondnumber = prompt("Твоє друге число?")

    if (Firstnumber > Secondnumber) {
        alert ("Перше число більше ніж друге = 1");
    } else if (Firstnumber < Secondnumber) {
        alert ("Друге число більше ніж перше = -1");
    } else {
        alert ("Числа є рівними = 0");
    }
}

returnNumbers();

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.


function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
    return sum == number;
  }
  
  const number = prompt("Введіть ваше числа");

    if (isPerfectNumber(number)) {
        alert(`${number} є досконалим числами`);
}   else {
        alert(`${number} не є досконалим числами`);
}

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, 
// і виводить тільки ті числа з діапазону, які є досконалими. 
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function diapason() {
    const min = parseInt(prompt('Введіть мінімальне значення діапазону:'));
    const max = parseInt(prompt('Введіть максимальне значення діапазону:'));
    
    for (let i = min; i <= max; i++) {
      if (isPerfectNumber(i)) {
        confirm(i + ' є досконалим числом');
      }
    }
  }
  
  diapason();
  