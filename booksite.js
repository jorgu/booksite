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




function init() {
    books.push({author: 'Liza Marklund', serie: 'Annika Bengtzon', book: 'Sprängaren', year: 1998, bought: 'TRUE'});
    books.push({author: 'Liza Marklund', serie: 'Annika Bengtzon', book: 'Studio sex', year: 1999, bought: 'TRUE'});
    books.push({author: 'Liza Marklund', serie: 'Annika Bengtzon', book: 'Paradiset', year: 2000, bought: 'TRUE'});
    books.push({author: 'Liza Marklund', serie: 'Annika Bengtzon', book: 'Prime time', year: 2002, bought: 'TRUE'});
    books.push({author: 'Liza Marklund', serie: 'Annika Bengtzon', book: 'Den röda vargen', year: 2003, bought: 'TRUE'});
    books.push({author: 'Liza Marklund', serie: 'Annika Bengtzon', book: 'Nobels testamente', year: 2006, bought: 'TRUE'});
    books.push({author: 'Liza Marklund', serie: 'Annika Bengtzon', book: 'Livstid', year: 2007, bought: 'TRUE'});
    books.push({author: 'Liza Marklund', serie: 'Annika Bengtzon', book: 'En plats i solen', year: 2008, bought: 'TRUE'});
    books.push({author: 'Liza Marklund', serie: 'Annika Bengtzon', book: 'Du gamla du fria', year: 2011, bought: 'TRUE'});
    books.push({author: 'Liza Marklund', serie: 'Annika Bengtzon', book: 'Lyckliga gatan', year: 2013, bought: 'FALSE'});
    books.push({author: 'Liza Marklund', serie: 'Annika Bengtzon', book: 'Järnblod', year: 2015, bought: 'FALSE'});
    books.push({author: 'Liza Marklund', serie: 'Stenträsk-triologin', book: 'Polcirkeln', year: 2021, bought: 'FALSE'});
    books.push({author: 'Liza Marklund', serie: 'Stenträsk-triologin', book: 'Kallmyren', year: 2022, bought: 'FALSE'});
    books.push({author: 'Liza Marklund', serie: 'Stenträsk-triologin', book: 'Stormberget', year: 2023, bought: 'FALSE'});
    books.push({author: 'Mari Jungstedt', serie: 'Anders Knutas', book: 'Den du inte ser', year: 2003, bought: 'FALSE'});
    books.push({author: 'Mari Jungstedt', serie: 'Anders Knutas', book: 'I denna stilla natt', year: 2004, bought: 'TRUE'});
    books.push({author: 'Mari Jungstedt', serie: 'Anders Knutas', book: 'Den inre kretsen', year: 2005, bought: 'TRUE'});
    books.push({author: 'Mari Jungstedt', serie: 'Anders Knutas', book: 'Den döende dandyn', year: 2006, bought: 'FALSE'});
    books.push({author: 'Mari Jungstedt', serie: 'Anders Knutas', book: 'I denna ljuva sommartid', year: 2007, bought: 'TRUE'});
    books.push({author: 'Mari Jungstedt', serie: 'Anders Knutas', book: 'Den mörka ängeln', year: 2008, bought: 'TRUE'});
    books.push({author: 'Mari Jungstedt', serie: 'Anders Knutas', book: 'Den dubbla tystnaden', year: 2009, bought: 'TRUE'});
    books.push({author: 'Mari Jungstedt', serie: 'Anders Knutas', book: 'Den farliga leken', year: 2010, bought: 'FALSE'});
    books.push({author: 'Mari Jungstedt', serie: 'Anders Knutas', book: 'Det fjärde offret', year: 2011, bought: 'TRUE'});
    books.push({author: 'Mari Jungstedt', serie: 'Anders Knutas', book: 'Den sista akten', year: 2012, bought: 'FALSE'});
    books.push({author: 'Mari Jungstedt', serie: 'Anders Knutas', book: 'Du går inte ensam', year: 2013, bought: 'FALSE'});
    books.push({author: 'Mari Jungstedt', serie: 'Anders Knutas', book: 'Den man älskar', year: 2014, bought: 'FALSE'});
    books.push({author: 'Mari Jungstedt', serie: 'Anders Knutas', book: 'Det andra ansiktet', year: 2016, bought: 'FALSE'});
    books.push({author: 'Mari Jungstedt', serie: 'Anders Knutas', book: 'Ett mörker mitt ibland oss', year: 2018, bought: 'FALSE'});
    books.push({author: 'Mari Jungstedt', serie: 'Anders Knutas', book: 'Jag ser dig', year: 2019, bought: 'FALSE'});
    books.push({author: 'Mari Jungstedt', serie: 'Anders Knutas', book: 'Där den sista lampan lyser', year: 2021, bought: 'FALSE'});
    books.push({author: 'Mari Jungstedt', serie: 'Anders Knutas', book: 'Det slutna rummet', year: 2023, bought: 'FALSE'});
    books.push({author: 'Mari Jungstedt', serie: 'Anders Knutas', book: 'Den sista utposten', year: 2024, bought: 'FALSE'});
    books.push({author: 'Åsa Larsson', serie: 'Rebecka Martinsson', book: 'Solstorm', year: 2003, bought: 'TRUE'});
    books.push({author: 'Åsa Larsson', serie: 'Rebecka Martinsson', book: 'Det blod som spillts', year: 2004, bought: 'TRUE'});
    books.push({author: 'Åsa Larsson', serie: 'Rebecka Martinsson', book: 'Svart stig', year: 2006, bought: 'FALSE'});
    books.push({author: 'Åsa Larsson', serie: 'Rebecka Martinsson', book: 'Till dess din vrede upphör', year: 2008, bought: 'FALSE'});
    books.push({author: 'Åsa Larsson', serie: 'Rebecka Martinsson', book: 'Till offer åt Molok', year: 2012, bought: 'FALSE'});
    books.push({author: 'Åsa Larsson', serie: 'Rebecka Martinsson', book: 'Fädernas missgärningar', year: 2021, bought: 'FALSE'});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Mördare utan ansikte', year: 1991, bought: 'TRUE'});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Hundarna i Riga', year: 1992, bought: 'TRUE'});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Den vita lejoninnan', year: 1993, bought: 'TRUE'});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Mannen som log', year: 1994, bought: 'TRUE'});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Villospår', year: 1995, bought: 'TRUE'});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Den femte kvinnan', year: 1996, bought: 'TRUE'});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Steget efter', year: 1997, bought: 'TRUE'});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Brandvägg', year: 1998, bought: 'TRUE'});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Pyramiden', year: 1999, bought: 'TRUE'});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Innan frosten', year: 2002, bought: 'TRUE'});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Den orolige mannen', year: 2009, bought: 'TRUE'});
    books.push({author: 'Henning Mankell', serie: 'Kurt Wallander', book: 'Handen', year: 2013, bought: 'FALSE'});
    books.push({author: 'Hjorth Rosenfeldt', serie: 'Sebastian Bergman', book: 'Det fördolda', year: 2010, bought: 'FALSE'});
    books.push({author: 'Hjorth Rosenfeldt', serie: 'Sebastian Bergman', book: 'Lärjungen', year: 2011, bought: 'FALSE'});
    books.push({author: 'Hjorth Rosenfeldt', serie: 'Sebastian Bergman', book: 'Fjällgraven', year: 2012, bought: 'FALSE'});
    books.push({author: 'Hjorth Rosenfeldt', serie: 'Sebastian Bergman', book: 'Den stumma flickan', year: 2014, bought: 'FALSE'});
    books.push({author: 'Hjorth Rosenfeldt', serie: 'Sebastian Bergman', book: 'De underkända', year: 2015, bought: 'FALSE'});
    books.push({author: 'Hjorth Rosenfeldt', serie: 'Sebastian Bergman', book: 'En högre rättvisa', year: 2018, bought: 'FALSE'});
    books.push({author: 'Hjorth Rosenfeldt', serie: 'Sebastian Bergman', book: 'Som man sår', year: 2021, bought: 'FALSE'});
    books.push({author: 'Hjorth Rosenfeldt', serie: 'Sebastian Bergman', book: 'Skulden man bär', year: 2023, bought: 'FALSE'});
    books.push({author: 'Camilla Läckberg', serie: 'Fjällbacka', book: 'Isprinsessan', year: 2003, bought: 'FALSE'});
    books.push({author: 'Camilla Läckberg', serie: 'Fjällbacka', book: 'Predikanten', year: 2004, bought: 'FALSE'});
    books.push({author: 'Camilla Läckberg', serie: 'Fjällbacka', book: 'Stenhuggaren', year: 2005, bought: 'FALSE'});
    books.push({author: 'Camilla Läckberg', serie: 'Fjällbacka', book: 'Olycksfågeln', year: 2006, bought: 'FALSE'});
    books.push({author: 'Camilla Läckberg', serie: 'Fjällbacka', book: 'Tyskungen', year: 2007, bought: 'FALSE'});
    books.push({author: 'Camilla Läckberg', serie: 'Fjällbacka', book: 'Sjöjungfrun', year: 2008, bought: 'FALSE'});
    books.push({author: 'Camilla Läckberg', serie: 'Fjällbacka', book: 'Fyrvaktaren', year: 2009, bought: 'FALSE'});
    books.push({author: 'Camilla Läckberg', serie: 'Fjällbacka', book: 'Änglamakerskan', year: 2011, bought: 'FALSE'});
    books.push({author: 'Camilla Läckberg', serie: 'Fjällbacka', book: 'Lejontämjaren', year: 2014, bought: 'FALSE'});
    books.push({author: 'Camilla Läckberg', serie: 'Fjällbacka', book: 'Häxan', year: 2017, bought: 'FALSE'});
    books.push({author: 'Camilla Läckberg', serie: 'Fjällbacka', book: 'Gökungen', year: 2022, bought: 'FALSE'});
    books.push({author: 'Jan Guillou', serie: 'Hamilton', book: 'Coq Rouge', year: 1986, bought: 'FALSE'});
    books.push({author: 'Jan Guillou', serie: 'Hamilton', book: 'Den demokratiske terroristen', year: 1987, bought: 'FALSE'});
    books.push({author: 'Jan Guillou', serie: 'Hamilton', book: 'I nationens intresse', year: 1988, bought: 'FALSE'});
    books.push({author: 'Jan Guillou', serie: 'Hamilton', book: 'Fiendens fiende (roman)', year: 1989, bought: 'FALSE'});
    books.push({author: 'Jan Guillou', serie: 'Hamilton', book: 'Den hedervärde mördaren', year: 1990, bought: 'FALSE'});
    books.push({author: 'Jan Guillou', serie: 'Hamilton', book: 'Vendetta', year: 1991, bought: 'FALSE'});
    books.push({author: 'Jan Guillou', serie: 'Hamilton', book: 'Ingen mans land', year: 1992, bought: 'FALSE'});
    books.push({author: 'Jan Guillou', serie: 'Hamilton', book: 'Den enda segern', year: 1993, bought: 'FALSE'});
    books.push({author: 'Jan Guillou', serie: 'Hamilton', book: 'I hennes majestäts tjänst', year: 1994, bought: 'FALSE'});
    books.push({author: 'Jan Guillou', serie: 'Hamilton', book: 'En medborgare höjd över varje misstanke', year: 1995, bought: 'FALSE'});
    books.push({author: 'Jan Guillou', serie: 'Hamilton', book: 'Hamlon', year: 1995, bought: 'FALSE'});
    books.push({author: 'Jan Guillou', serie: 'Hamilton', book: 'Madame Terror', year: 2006, bought: 'FALSE'});
    books.push({author: 'Jan Guillou', serie: 'Hamilton', book: 'Men inte om det gäller din dotter', year: 2008, bought: 'FALSE'});
    books.push({author: 'Jo Nesbø', serie: 'Harry Hole', book: 'Fladdermusmannen', year: 2000, bought: 'FALSE'});
    books.push({author: 'Jo Nesbø', serie: 'Harry Hole', book: 'Kackerlackorna', year: 2007, bought: 'FALSE'});
    books.push({author: 'Jo Nesbø', serie: 'Harry Hole', book: 'Rödhake', year: 2002, bought: 'FALSE'});
    books.push({author: 'Jo Nesbø', serie: 'Harry Hole', book: 'Nemesis', year: 2004, bought: 'FALSE'});
    books.push({author: 'Jo Nesbø', serie: 'Harry Hole', book: 'Djävulsstjärnan', year: 2004, bought: 'FALSE'});
    books.push({author: 'Jo Nesbø', serie: 'Harry Hole', book: 'Frälsaren', year: 2006, bought: 'FALSE'});
    books.push({author: 'Jo Nesbø', serie: 'Harry Hole', book: 'Snömannen', year: 2008, bought: 'FALSE'});
    books.push({author: 'Jo Nesbø', serie: 'Harry Hole', book: 'Pansarhjärta', year: 2010, bought: 'FALSE'});
    books.push({author: 'Jo Nesbø', serie: 'Harry Hole', book: 'Gengångare', year: 2012, bought: 'FALSE'});
    books.push({author: 'Jo Nesbø', serie: 'Harry Hole', book: 'Polis', year: 2013, bought: 'FALSE'});
    books.push({author: 'Jo Nesbø', serie: 'Harry Hole', book: 'Törst', year: 2017, bought: 'FALSE'});
    books.push({author: 'Jo Nesbø', serie: 'Harry Hole', book: 'Kniv', year: 2019, bought: 'FALSE'});
    books.push({author: 'Jo Nesbø', serie: 'Harry Hole', book: 'Blodmåne', year: 2023, bought: 'FALSE'});
    books.push({author: 'Viveca Lärn', serie: 'Saltön', book: 'Midsommarvals', year: 1999, bought: 'FALSE'});
    books.push({author: 'Viveca Lärn', serie: 'Saltön', book: 'Hummerfesten', year: 2000, bought: 'FALSE'});
    books.push({author: 'Viveca Lärn', serie: 'Saltön', book: 'En fröjdefull jul', year: 2001, bought: 'FALSE'});
    books.push({author: 'Viveca Lärn', serie: 'Saltön', book: 'Sol och vår', year: 2002, bought: 'FALSE'});
    books.push({author: 'Viveca Lärn', serie: 'Saltön', book: 'Saltön', year: 2005, bought: 'FALSE'});
    books.push({author: 'Viveca Lärn', serie: 'Saltön', book: 'Värmebölja', year: 2007, bought: 'FALSE'});
    books.push({author: 'Viveca Lärn', serie: 'Saltön', book: 'Aprilväder', year: 2008, bought: 'FALSE'});
    books.push({author: 'Viveca Lärn', serie: 'Saltön', book: 'Södra vägen till Saltön', year: 2014, bought: 'FALSE'});
    books.push({author: 'Viveca Lärn', serie: 'Saltön', book: 'Halta Hönans hotell', year: 2016, bought: 'FALSE'});
    books.push({author: 'Viveca Sten', serie: 'Sandhamn', book: 'I de lugnaste vatten (Filmatiserad 2010)', year: 2008, bought: 'FALSE'});
    books.push({author: 'Viveca Sten', serie: 'Sandhamn', book: 'I den innersta kretsen (Filmatiserad 2012)', year: 2009, bought: 'FALSE'});
    books.push({author: 'Viveca Sten', serie: 'Sandhamn', book: 'I grunden utan skuld (Filmatiserad 2013)', year: 2010, bought: 'FALSE'});
    books.push({author: 'Viveca Sten', serie: 'Sandhamn', book: 'I natt är du död (Filmatiserad 2014)', year: 2011, bought: 'FALSE'});
    books.push({author: 'Viveca Sten', serie: 'Sandhamn', book: 'I stundens hetta (Filmatiserad 2015)', year: 2012, bought: 'FALSE'});
    books.push({author: 'Viveca Sten', serie: 'Sandhamn', book: 'I farans riktning', year: 2013, bought: 'FALSE'});
    books.push({author: 'Viveca Sten', serie: 'Sandhamn', book: 'I maktens skugga (Filmatiserad 2018)', year: 2014, bought: 'FALSE'});
    books.push({author: 'Viveca Sten', serie: 'Sandhamn', book: 'I sanningens namn (Filmatiserad 2018)', year: 2015, bought: 'FALSE'});
    books.push({author: 'Viveca Sten', serie: 'Sandhamn', book: 'Iskalla ögonblick', year: 2017, bought: 'FALSE'});
    books.push({author: 'Viveca Sten', serie: 'Sandhamn', book: 'I fel sällskap', year: 2018, bought: 'FALSE'});
    books.push({author: 'Viveca Sten', serie: 'Sandhamn', book: 'I hemlighet begravd', year: 2019, bought: 'FALSE'});
    books.push({author: 'Diverse', serie: 'Katarina Mazetti', book: 'Grabben i graven brevid', year: 2002, bought: 'FALSE'});
    books.push({author: 'Diverse', serie: 'Katarina Mazetti', book: 'Familjegraven', year: 2008, bought: 'TRUE'});
    books.push({author: 'Diverse', serie: 'Jonas Jonasson', book: 'Hundraåringen som klev ut ...', year: 2021, bought: 'TRUE'});
}
