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
3 - Finchè ho elmenti nella lista li stampo in pagina 
*/

// 1 - Creo un array contenente una lista della spesa.
const listElement = ['pane', 'latte', 'uova', 'sale', 'zucchero'];
// console.log(listElement);

// 2 - Prendo l'elemento dalla pagina.
const bagElement = document.getElementById('bag');
// console.log(bagElement);

// 3 - Finchè ho elmenti nella lista li stampo in pagina.
let i = 0;
let currentElement = ' ';
while (i < listElement.length) {
    console.log(listElement[i]);
    currentElement += listElement[i];
    // bagElement.innerText += listElement[i];
    i++;
}

bagElement.innerText = currentElement;
