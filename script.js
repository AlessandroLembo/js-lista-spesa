console.log(' JS OK');

/*
TRACCIA:

Data una lista della spesa (inventatela), 
stampare in pagina gli elementi della lista individualmente con un ciclo while.
*/

// TODO Stampare in pagina usando InnerHTML
/*
ANALISI:

1 - Creo un array contenente una lista della spesa.
2 - Prendo l'elemento dalla pagina.
3 - Dichiaro due variabili: una mi serve per contare gli elementi, l'altra per creare una lista.
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

// 3 - Dichiaro due variabili.
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
// console.log(currentElement);
bagElement.innerHTML = currentElement;



// TODO: Stampare usando il sistema dei nodi
/*
ANALISI

1 - Creo un array contenente una lista della spesa.
2 - Prendo l'elemento dalla pagina.
3 - Dichiarazione 2 variabili: una per il contatore e l'altra per raggruppare gli elementi.
4 - Finchè ho elmenti nella lista li raccolgo per inserirli nella borsa.
5 - Per ogni elemento creo un nodo <li>.
6 - A ogni nodo assegno il suo contenuto.
7 - Stampo in pagina la lista.
*/

// 1 - Creo un array contenente una lista della spesa.
const listElement2 = ['pasta', 'riso', 'legumi', 'frutta', 'verdura'];
// console.log(listElement2);

// 2 - Prendo l'elemento dalla pagina.
const bigBagElement = document.getElementById('big-bag');
// console.log(bigBagElement);

// 3 - Dichiaro 2 variabili.
let j = 0;
let currentElement2 = '';

// 4 - Finchè ho elmenti nella lista li raccolgo per inserirli nella borsa.
while (j < listElement2.length) {
    currentElement2 = listElement2[j];
    
    j++;
   
    // 5 - Per ogni elemento creo un nodo <li>.
    const item = document.createElement('li');

    // 6 - A ogni nodo assegno il suo contenuto.
    item.append(currentElement2);

    // 7 - Stampo in pagina la lista.
    bigBagElement.appendChild(item);
    
}






