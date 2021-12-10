let date = new Date();
let customDate = {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
};
let dateNames = {
    month: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
        'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
    hours: ['час', 'часа', 'часов'],
    minutes: ['минута', 'минуты', 'минут']
};

let hourWord = function (hour, hoursObj) {
    let word = '';
    let lastNumber = String(hour).slice(-1);
    console.log(hoursObj);
    switch (true) {
        case (lastNumber == 1):
            console.log('1');
            word = hoursObj[0];
            break;
        case (1 < lastNumber && lastNumber < 5):
            console.log('2');
            word = hoursObj[1];
            break;
        case (lastNumber > 5):
            console.log('3');
            word = hoursObj[2];
            break;
        default:
            console.log('333');
    }

    console.log('asdasdasd', lastNumber);
    return word;
};

let getCustomDate = function (dateObj) {
    let cdate = function (monthArray, mounthCount) {
        return monthArray[mounthCount];
    };

    return 'Сегодня ' + dateObj.date + ' ' + cdate(dateNames.month, dateObj.month) + ' ' + dateObj.year +
        ' Года, ' + dateObj.hours + ' ' +
        hourWord(dateObj.hours, dateNames.hours);
};
console.dir(getCustomDate(customDate));
console.log(date);













console.log('Сегодня', date.toLocaleString('ru-RU', {
    weekday: 'long', // long, short, narrow
    day: 'numeric', // numeric, 2-digit
    year: 'numeric', // numeric, 2-digit
    month: 'long', // numeric, 2-digit, long, short, narrow
    hour: 'numeric', // numeric, 2-digit
    minute: 'numeric', // numeric, 2-digit
    second: 'numeric', // numeric, 2-digit
}));
console.log(date.toLocaleString('ru-RU'));


