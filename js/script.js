'use strict';

const body = document.querySelector('body');
const books = document.querySelector('.books');
const book = document.querySelectorAll('div.book');
const adv = document.querySelector('.adv');
const b2ChapterLi = book[0].querySelectorAll('li');
const b5ChapterLi = book[5].querySelectorAll('li');
const b6ChapterLi = book[2].querySelectorAll('li');
let b6Chapter8 = document.createElement('li');

// p1
book[2].remove();
books.append(book[2]);
book[1].remove();
books.prepend(book[1]);
book[3].before(book[4]);

// p.2
body.style.backgroundImage = "url('image/you-dont-know-js.jpg')"; //в логе не видно стилей

// p.3
book[4].childNodes[1].childNodes[1].textContent = 'Книга 3. this и Прототипы Объектов';

// p.4
adv.remove();

// P.5
b2ChapterLi[9].after(b2ChapterLi[2]);
b2ChapterLi[3].after(b2ChapterLi[6]);
b2ChapterLi[6].after(b2ChapterLi[8]);

b5ChapterLi[1].after(b5ChapterLi[9]);
b5ChapterLi[4].after(b5ChapterLi[2]);
b5ChapterLi[7].after(b5ChapterLi[5]);

// p.6
b6Chapter8.textContent = 'Глава 8: За пределами ES6';
b6ChapterLi[8].after(b6Chapter8);



// console.log();
// console.log(book);
// console.log(books);
// console.dir(body);
// console.log(b2ChapterLi);
// console.log(b5ChapterLi);
// console.log(b6ChapterLi);




