'use strict'
/* 

https://jorgu.github.io/booksite/;

*/
let books = []

init();

let tempArray = books.filter(function (item) {return item.author=='Liza Marklund'})

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

// Fyll tabellerna (utan loop, som du önskade)
function skapaTabell(tabellId, writer) {
    const tabell = document.getElementById(tabellId);

    const headerRow = document.createElement('tr');
    const header1 = document.createElement('th');
    header1.textContent = writer;
    headerRow.appendChild(header1);

    const header2 = document.createElement('th');
    header2.textContent = 'Serie';
    headerRow.appendChild(header2);

    const header3 = document.createElement('th');
    header3.textContent = 'Utgivningsår';
    headerRow.appendChild(header3);

    tabell.appendChild(headerRow);

    // 10 rader manuellt via funktionen
    let startNummer = 1;
    skapaRad(tabell, startNummer);
    skapaRad(tabell, startNummer + 1);
    skapaRad(tabell, startNummer + 2);
    skapaRad(tabell, startNummer + 3);
    skapaRad(tabell, startNummer + 4);
    skapaRad(tabell, startNummer + 5);
    skapaRad(tabell, startNummer + 6);
    skapaRad(tabell, startNummer + 7);
    skapaRad(tabell, startNummer + 8);
    skapaRad(tabell, startNummer + 9);
    
    
}

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

function skapaCell(text, grey = false, strikethrough = false) {
    const cell = document.createElement('td');
    cell.textContent = text;

    if (grey) {
        cell.style.color = 'gray'; // Gör texten grå
        cell.style.fontStyle = 'italic'
    }
    if (strikethrough) {
        cell.style.textDecoration = 'line-through'; // Gör texten överstruken
        cell.style.fontStyle = 'italic'
    }

    return cell;
}

function skapaRad(tabell, nummer) {
    const rad = document.createElement('tr');

    // Exempel: Kolumn 1 vanlig, Kolumn 2 grå, Kolumn 3 grå + överstruken
    rad.appendChild(skapaCell('Data ' + nummer));
    rad.appendChild(skapaCell('Info ' + nummer, true)); // grå
    rad.appendChild(skapaCell((nummer * 10).toString(), true, true)); // grå + överstruken

    tabell.appendChild(rad);
}


// Skapa alla tre tabeller
skapaTabell('tabell1', 'Henning Mankell');


skapaTabell('tabell2', 101);
skapaTabell('tabell3', 201);

function init() {
    books.push({author: 'Liza Marklund', serie: 'Annika Bengtzon', book: 'Sprängaren', year: 1998, bought: 'X'});
    books.push({author: 'Liza Marklund', serie: 'Annika Bengtzon', book: 'Studio sex', year: 1999, bought: ''});
    books.push({author: 'Liza Marklund', serie: 'Annika Bengtzon', book: 'Paradiset', year: 2000, bought: 'X'});
    books.push({author: 'Liza Marklund', serie: 'Annika Bengtzon', book: 'Prime time', year: 2002, bought: 'X'});
    books.push({author: 'Liza Marklund', serie: 'Annika Bengtzon', book: 'Den röda vargen', year: 2003, bought: 'X'});
    books.push({author: 'Liza Marklund', serie: 'Annika Bengtzon', book: 'Nobels testamente', year: 2006, bought: 'X'});
    books.push({author: 'Liza Marklund', serie: 'Annika Bengtzon', book: 'Livstid', year: 2007, bought: 'X'});
    books.push({author: 'Liza Marklund', serie: 'Annika Bengtzon', book: 'En plats i solen', year: 2008, bought: ''});
    books.push({author: 'Liza Marklund', serie: 'Annika Bengtzon', book: 'Du gamla, du fria', year: 2011, bought: ''});
    books.push({author: 'Liza Marklund', serie: 'Annika Bengtzon', book: 'Lyckliga gatan', year: 2013, bought: ''});
    books.push({author: 'Liza Marklund', serie: 'Annika Bengtzon', book: 'Järnblod', year: 2015, bought: ''});
    books.push({author: 'Liza Marklund', serie: 'Stenträsk-triologin', book: 'Polcirkeln', year: 2021, bought: ''});
    books.push({author: 'Liza Marklund', serie: 'Stenträsk-triologin', book: 'Kallmyren', year: 2022, bought: ''});
    books.push({author: 'Liza Marklund', serie: 'Stenträsk-triologin', book: 'Stormberget', year: 2023, bought: ''});
    books.push({author: ' Mari Jungstedt', serie: 'Anders Knutas', book: 'Den du inte ser', year: 2003, bought: ''});
    books.push({author: ' Mari Jungstedt', serie: 'Anders Knutas', book: 'I denna stilla natt', year: 2004, bought: 'X'});
    books.push({author: ' Mari Jungstedt', serie: 'Anders Knutas', book: 'Den inre kretsen', year: 2005, bought: 'X'});
    books.push({author: ' Mari Jungstedt', serie: 'Anders Knutas', book: 'Den döende dandyn', year: 2006, bought: ''});
    books.push({author: ' Mari Jungstedt', serie: 'Anders Knutas', book: 'I denna ljuva sommartid', year: 2007, bought: ''});
    books.push({author: ' Mari Jungstedt', serie: 'Anders Knutas', book: 'Den mörka ängeln', year: 2008, bought: 'X'});
    books.push({author: ' Mari Jungstedt', serie: 'Anders Knutas', book: 'Den dubbla tystnaden', year: 2009, bought: 'X'});
    books.push({author: ' Mari Jungstedt', serie: 'Anders Knutas', book: 'Den farliga leken', year: 2010, bought: ''});
    books.push({author: ' Mari Jungstedt', serie: 'Anders Knutas', book: 'Det fjärde offret', year: 2011, bought: 'X'});
    books.push({author: ' Mari Jungstedt', serie: 'Anders Knutas', book: 'Den sista akten', year: 2012, bought: ''});
    books.push({author: ' Mari Jungstedt', serie: 'Anders Knutas', book: 'Du går inte ensam', year: 2013, bought: ''});
    books.push({author: ' Mari Jungstedt', serie: 'Anders Knutas', book: 'Den man älskar', year: 2014, bought: ''});
    books.push({author: ' Mari Jungstedt', serie: 'Anders Knutas', book: 'Det andra ansiktet', year: 2016, bought: ''});
    books.push({author: ' Mari Jungstedt', serie: 'Anders Knutas', book: 'Ett mörker mitt ibland oss', year: 2018, bought: ''});
    books.push({author: ' Mari Jungstedt', serie: 'Anders Knutas', book: 'Jag ser dig', year: 2019, bought: ''});
    books.push({author: ' Mari Jungstedt', serie: 'Anders Knutas', book: 'Där den sista lampan lyser', year: 2021, bought: ''});
    books.push({author: ' Mari Jungstedt', serie: 'Anders Knutas', book: 'Det slutna rummet', year: 2023, bought: ''});
    books.push({author: ' Mari Jungstedt', serie: 'Anders Knutas', book: 'Den sista utposten', year: 2024, bought: ''});
    books.push({author: 'Åsa Larsson', serie: 'Rebecka Martinsson', book: 'Solstorm', year: 2003, bought: 'X'});
    books.push({author: 'Åsa Larsson', serie: 'Rebecka Martinsson', book: 'Det blod som spillts', year: 2004, bought: 'X'});
    books.push({author: 'Åsa Larsson', serie: 'Rebecka Martinsson', book: 'Svart stig', year: 2006, bought: ''});
    books.push({author: 'Åsa Larsson', serie: 'Rebecka Martinsson', book: 'Till dess din vrede upphör', year: 2008, bought: ''});
    books.push({author: 'Åsa Larsson', serie: 'Rebecka Martinsson', book: 'Till offer åt Molok', year: 2012, bought: ''});
    books.push({author: 'Åsa Larsson', serie: 'Rebecka Martinsson', book: 'Fädernas missgärningar', year: 2021, bought: ''});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Mördare utan ansikte', year: 1991, bought: 'X'});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Hundarna i Riga', year: 1992, bought: 'X'});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Den vita lejoninnan', year: 1993, bought: 'X'});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Mannen som log', year: 1994, bought: ''});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Villospår', year: 1995, bought: 'X'});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Den femte kvinnan', year: 1996, bought: 'X'});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Steget efter', year: 1997, bought: 'X'});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Brandvägg', year: 1998, bought: 'X'});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Pyramiden', year: 1999, bought: ''});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Innan frosten', year: 2002, bought: ''});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Den orolige mannen', year: 2009, bought: ''});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Handen', year: 2013, bought: ''});
    books.push({author: 'Hjorth Rosenfeldt', serie: 'Sebastian Bergman', book: 'Det fördolda', year: 2010, bought: ''});
    books.push({author: 'Hjorth Rosenfeldt', serie: 'Sebastian Bergman', book: 'Lärjungen', year: 2011, bought: ''});
    books.push({author: 'Hjorth Rosenfeldt', serie: 'Sebastian Bergman', book: 'Fjällgraven', year: 2012, bought: ''});
    books.push({author: 'Hjorth Rosenfeldt', serie: 'Sebastian Bergman', book: 'Den stumma flickan', year: 2014, bought: ''});
    books.push({author: 'Hjorth Rosenfeldt', serie: 'Sebastian Bergman', book: 'De underkända', year: 2015, bought: ''});
    books.push({author: 'Hjorth Rosenfeldt', serie: 'Sebastian Bergman', book: 'En högre rättvisa', year: 2018, bought: ''});
    books.push({author: 'Hjorth Rosenfeldt', serie: 'Sebastian Bergman', book: 'Som man sår', year: 2021, bought: ''});
    books.push({author: 'Hjorth Rosenfeldt', serie: 'Sebastian Bergman', book: 'Skulden man bär', year: 2023, bought: ''});

}