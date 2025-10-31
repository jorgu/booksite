'use strict'
/* 

https://jorgu.github.io/booksite/;

https://chatgpt.com/share/69047782-725c-800b-aec3-b6493bd440e1

*/
//import { init } from './data.js';

const isAdmin = window.location.href.toLowerCase().indexOf('theking') > 0 ? true : false; 
const toBuy   = window.location.href.toLowerCase().indexOf('buy') > 0 ? true : false; 
let allTables = [];
let writers   = [];

const books = init(isAdmin, toBuy);
writers = getAllAuthors(books);

let id = 0;
writers.forEach(writer => {
    skapaTabell(++id, writer, isAdmin);
    allTables.push('tabell' + id);
});



// Funktion för att visa en viss tabell och dölja de andra
function visaTabell(tabellId) {
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

// Fyll tabellerna 
function skapaTabell(Id, writer, isAdmin) {
    const tableId           = 'tabell' + Id;
    const tableContainer    = document.getElementById('tableContainer');
    const newTable          = document.createElement('table');
    newTable.id             = tableId;

    const headerRow         = document.createElement('tr');
    const header1           = document.createElement('th');
    header1.textContent     = writer;
    headerRow.appendChild(header1);

    const header2 = document.createElement('th');
    header2.textContent = 'Bok';
    headerRow.appendChild(header2);

    const header3 = document.createElement('th');
    header3.textContent = 'År';
    headerRow.appendChild(header3);

    newTable.appendChild(headerRow);

    tableContainer.appendChild(newTable);
    let bookSerie           = '';
    let color;
    let defaultColor        = 'darkblue';
    let notDefaultColor     = 'green';
    let notNotDefaultColor  = 'darkorange';

    // Get author's books
    let bookList = books.filter(function (item) {return item.author==writer}) ;
    
    bookSerie    = bookList[0]["serie"];
    color        = defaultColor;

    bookList.forEach( book => {
        if(bookSerie != book.serie) {
            color == notDefaultColor ? color = notNotDefaultColor : color = notDefaultColor;
        } 
        skapaRad(color, newTable, book, isAdmin)
        bookSerie = book.serie;    
    } )

    
    const buttonContainer = document.getElementById('buttonContainer')
    const btn             = document.createElement('button')
          btn.id 		  = 'btn' + Id;
          btn.innerHTML	  = writer;
          btn.setAttribute('onclick', 'visaTabell("' + newTable.id + '")')
          buttonContainer.appendChild(btn);
        
}

function skapaCell(color, text, bought, isAdmin = false) {
    const cell = document.createElement('td');
    if (color.length > 0) { cell.style.color = color}
    cell.textContent = text;

    if (isAdmin && bought == 'TRUE') {
        cell.style.color = 'lightgray'; // Gör texten grå
        cell.style.fontStyle = 'italic'
        cell.style.textDecoration = 'line-through'; // Gör texten överstruken
        cell.style.fontStyle = 'italic'
    }

    return cell;
}

function skapaRad(color, tabell, book, isAdmin) {
    const rad = document.createElement('tr');
    
    // Exempel: Kolumn 1 vanlig, Kolumn 2 grå, Kolumn 3 grå + överstruken
    rad.appendChild(skapaCell(color, book.serie));
    rad.appendChild(skapaCell(color, book.book, book.bought, isAdmin)); // grå
    rad.appendChild(skapaCell(color, book.year, book.bought, isAdmin)); // grå + överstruken

    tabell.appendChild(rad);
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


