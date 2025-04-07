

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

// Sortera 
sorteraKolumn3('tabell1');

skapaTabell('tabell2', 101);
skapaTabell('tabell3', 201);

