console.log(' JS OK');

/*
TRACCIA:

Data una lista della spesa (inventatela), 
stampare in pagina gli elementi della lista individualmente con un ciclo while.
*/

/*
ANALISI:

1 - Creo un array contenente una lista della spesa.
2 - Prendo l'elemento dalla pagina.
3 - Creo due variabili: una mi serve per contare gli elementi, l'altra per creare una lista.
4 - Finchè ho elmenti nella lista li raccolgo per inserirli nella borsa.
5 - Chiusura della lista.
6 - Stampa in pagina.
*/

// 1 - Creo un array contenente una lista della spesa.
const listElement = ['pane', 'latte', 'uova', 'sale', 'zucchero'];
// console.log(listElement);

// 2 - Prendo l'elemento dalla pagina.
const bagElement = document.getElementById('bag');
// console.log(bagElement);

// 3 - Creazione due variabili.
let i = 0;
let currentElement = `<ul>`;

// 4 - Finchè ho elmenti nella lista li raccolgo per inserirli nella borsa.
while (i < listElement.length) {
    // console.log(listElement[i]);
    currentElement += `<li>${listElement[i]}</li>`;
    
    i++;
}

// 5 - Chiusura lista.
currentElement += `</ul>`;

// 6 - Stampa in pagina.
console.log(currentElement);
bagElement.innerHTML = currentElement;
