const elevi = [
	{ nume: 'Andrei Popescu', note: [8, 7, 9], medie: (8 + 7 + 9) / 3 },
	{ nume: 'Maria Ionescu', note: [10, 9, 10], medie: (10 + 9 + 10) / 3 },
	{ nume: 'Alexandru Dumitrescu', note: [7, 8, 6], medie: (7 + 8 + 6) / 3 },
	{ nume: 'Ioana Georgescu', note: [9, 8, 9], medie: (9 + 8 + 9) / 3 },
	{ nume: 'Mihai Marinescu', note: [6, 7, 8], medie: (6 + 7 + 8) / 3 },
	{ nume: 'Elena Vasilescu', note: [10, 10, 10], medie: (10 + 10 + 10) / 3 },
	{ nume: 'Gabriel Petrescu', note: [7, 8, 7], medie: (7 + 8 + 7) / 3 },
	{ nume: 'Ana Radu', note: [9, 9, 8], medie: (9 + 9 + 8) / 3 },
	{ nume: 'Cristian Stan', note: [8, 7, 6], medie: (8 + 7 + 6) / 3 },
	{ nume: 'Roxana Barbu', note: [10, 9, 8], medie: (10 + 9 + 8) / 3 },
];

const inputNumeElev = document.getElementById('nume-elev-input');
const butonAdaugareElev = document.getElementById('adauga-elev-btn');
const tabelElevi = document.getElementById('tabel-elevi');
const sectiuneNote = document.getElementById('note-elev-wrapper');
const butonAscundereNote = document.getElementById('ascunde-note');

afisareTabel(elevi);
butonAdaugareElev.addEventListener('click', adaugareElevInTabel);
tabelElevi.addEventListener('click', trateazaActiuniTabel);
butonAscundereNote.addEventListener('click', ascundeSectiuneNote);

function adaugareElevInTabel() {
	const numeElev = inputNumeElev.value;
	if (numeElev.length > 2) {
		elevi.push({ nume: numeElev, medie: 0, note: [] });
	} else {
		alert('Numele elevului trebuie sa contina minim 3 caractere');
	}
	afisareTabel(elevi);
}

function afisareTabel(elevi) {
	const tableBody = tabelElevi.querySelector('tbody');
	tableBody.innerHTML = '';

	for (let i = 0; i <= elevi.length - 1; i++) {
		// template literals
		tableBody.innerHTML += `
         <tr>
            <td>${elevi[i].nume}</td>
            <td>${elevi[i].medie.toFixed(2)}</td>
            <td><button class="vezi-note">Vezi Notele</button></td>
            <td><button class="sterge-elev">X</button></td>
         </tr>
      `;
	}
}

function trateazaActiuniTabel(e) {
	if (e.target.classList.contains('vezi-note')) {
		sectiuneNote.classList.remove('hide');
	}
}

function ascundeSectiuneNote() {
	sectiuneNote.classList.add('hide');
}