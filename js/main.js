// Напишіть скрипт, який переводить години в секунди і має робити наступне:
// запитати у користувача кількість годин;
// порахувати, скільки секунд у цій кількості годин;
// записати обчислене значення у змінну;
// вивести цю змінну користувачеві через alert.

const hours = +prompt('How many hours are?');

if (isNaN(hours)) {
    alert('Incorrect value. Must be a number!');
} else {
    const seconds = hours * 3600;
    alert(seconds);
}