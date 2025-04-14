'use strict'
/* 

https://jorgu.github.io/booksite/;

*/
let isAdmin = window.location.href.toLowerCase().indexOf('theking') > 0 ? true : false; 
var books   = [];

init();

// Skapa alla tre tabeller
let tableID = 'tabell1';
let writer  = 'Henning Mankell';

skapaTabell(tableID, writer);
document.getElementById('btn1').innerHTML = writer;

tableID = 'tabell2';
writer  = 'Åsa Larsson';
skapaTabell(tableID, writer);
document.getElementById('btn2').innerHTML = writer;

tableID = 'tabell3';
writer  = 'Liza Marklund';
skapaTabell(tableID, writer);
document.getElementById('btn3').innerHTML = writer;



// Funktion för att visa en viss tabell och dölja de andra
function visaTabell(tabellId) {
    const tabeller = ['tabell1', 'tabell2', 'tabell3'];

    tabeller.forEach(id => {
        const tabell = document.getElementById(id);
        if (id === tabellId) {
            tabell.style.display = 'table';  // Visa vald tabell
        } else {
            tabell.style.display = 'none';   // Dölj övriga
        }
    });
}

// Fyll tabellerna 
function skapaTabell(tabellId, writer) {
    const tabell = document.getElementById(tabellId);

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
    let bookList = getBooks(writer);
    bookList.forEach( book => {
        skapaRad(tabell, book)    
    } )
    
}
// vad fyller denna för funktion?
function skapaRad(tabell, radnummer) {
    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    td1.textContent = `Rad ${radnummer}, Kolumn 1`;
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    td2.textContent = `Rad ${radnummer}, Kolumn 2`;
    tr.appendChild(td2);

    const td3 = document.createElement('td');
    td3.textContent = `Rad ${radnummer}, Kolumn 3`;
    tr.appendChild(td3);

    tabell.appendChild(tr);
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






