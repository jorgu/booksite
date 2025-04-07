// Hämta tabellen från HTML
const tabell = document.getElementById('minTabell');

// Skapa tabellhuvud
const headerRow = document.createElement('tr');
for (let i = 1; i <= 3; i++) {
    const headerCell = document.createElement('th');
    headerCell.textContent = `Kolumn ${i}`;
    headerRow.appendChild(headerCell);
}
tabell.appendChild(headerRow);

// Skapa 10 rader
for (let rad = 1; rad <= 10; rad++) {
    const tr = document.createElement('tr');
    for (let kolumn = 1; kolumn <= 3; kolumn++) {
        const td = document.createElement('td');
        td.textContent = `Rad ${rad}, Kolumn ${kolumn}`;
        tr.appendChild(td);
    }
    tabell.appendChild(tr);
}
