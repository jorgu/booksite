'use strict'
/* 

https://jorgu.github.io/booksite/;

*/
let isAdmin = window.location.href.toLowerCase().indexOf('theking') > 0 ? true : false; 
var books   = [];
let allTables = []

init();
let writers = getAllAuthors(books);
let id = 0;
writers.forEach(writer => {
    skapaTabell(++id, writer);
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
function skapaTabell(Id, writer) {
    const table = 'tabell' + Id;
    const tabell = document.getElementById(table);

    const headerRow = document.createElement('tr');
    const header1 = document.createElement('th');
    header1.textContent = writer;
    headerRow.appendChild(header1);

    const header2 = document.createElement('th');
    header2.textContent = 'Bok';
    headerRow.appendChild(header2);

    const header3 = document.createElement('th');
    header3.textContent = 'Utgivningsår';
    headerRow.appendChild(header3);

    tabell.appendChild(headerRow);

    // Get author's books
    let bookList = books.filter(function (item) {return item.author==writer}) ;
    bookList.forEach( book => {
        skapaRad(tabell, book)    
    } )

    
    const buttonContainer = document.getElementById('buttonContainer')
    const btn             = document.createElement('button');
    // <button id="btn1" onclick="visaTabell('tabell1')">Visa Tabell 1</button>
          btn.id 		  = 'btn' + Id;
          btn.innerHTML	  = writer;
          btn.onclick 	  = 'visaTabell("tabell1")' //'visaTabell("' + table + '")';
          buttonContainer.appendChild(btn);
        
    //document.getElementById('btn' + Id).innerHTML = '.' + writer;

    
}

function sorteraKolumn3(tabellId) {
    const tabell = document.getElementById(tabellId);
    const rows = Array.from(tabell.rows).slice(1); // Hoppa över headern

    // Sortera raderna baserat på textinnehållet i tredje kolumnen
    const sortedRows = rows.sort((a, b) => {
        const aText = a.cells[2].textContent.trim();
        const bText = b.cells[2].textContent.trim();
        
        // Om innehållet är siffror, jämför som siffror
        const aNum = parseFloat(aText);
        const bNum = parseFloat(bText);

        if (!isNaN(aNum) && !isNaN(bNum)) {
            return aNum - bNum;
        } else {
            return aText.localeCompare(bText, 'sv');
        }
    });

    // Lägg tillbaka raderna i tabellen i rätt ordning
    sortedRows.forEach(row => tabell.appendChild(row));
}

function skapaCell(text, isAdmin = false) {
    const cell = document.createElement('td');
    cell.textContent = text;

    if (isAdmin) {
        cell.style.color = 'lightgray'; // Gör texten grå
        cell.style.fontStyle = 'italic'
        cell.style.textDecoration = 'line-through'; // Gör texten överstruken
        cell.style.fontStyle = 'italic'
    }

    return cell;
}

function skapaRad(tabell, book) {
    const rad = document.createElement('tr');
    let isBought = false;
    if (isAdmin) {
        book.bought.toLowerCase() == "x" ? isBought = true : isBought = false;
    }

    // Exempel: Kolumn 1 vanlig, Kolumn 2 grå, Kolumn 3 grå + överstruken
    rad.appendChild(skapaCell(book.serie));
    rad.appendChild(skapaCell(book.book, isBought)); // grå
    rad.appendChild(skapaCell(book.year, isBought)); // grå + överstruken

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




