'use strict'
/* 

https://jorgu.github.io/booksite/;

https://chatgpt.com/share/69047782-725c-800b-aec3-b6493bd440e1

*/

import { init as getBooks } from './data.js'; 
import { skapaTabell } from './helpers.js';

const isAdmin = window.location.href.toLowerCase().indexOf('theking') > 0 ? true : false; 
const toBuy   = window.location.href.toLowerCase().indexOf('buy') > 0 ? true : false; 
let allTables = [];

export function startApp () {
    let writers   = [];

    const books = getBooks(isAdmin, toBuy);
    writers = getAllAuthors(books);

    let id = 0;
    writers.forEach(writer => {
        skapaTabell(++id, books, writer, isAdmin);
        allTables.push('tabell' + id);
    });

}

// Funktion för att visa en viss tabell och dölja de andra
export function visaTabell(tabellId) {
    //const tabeller = ['tabell1', 'tabell2', 'tabell3', 'tabell4', 'tabell5', 'tabell6'];

    allTables.forEach(id => {
        const tabell = document.getElementById(id);
        if (id === tabellId) {
            tabell.style.display = 'table';  // Visa vald tabell
        } else {
            tabell.style.display = 'none';   // Dölj övriga
        }
    });
}



function getAllAuthors (bookList) {
    let authors = [];
    
    bookList.forEach(item => {
         if (!authors.includes(item.author)) {
            authors.push(item.author);
         }
        });

    return authors;
    
}


