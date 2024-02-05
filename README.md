# ***Progetto Javascript Basics***


## Ecco il mio secondo progetto
___

In questo progetto ho realizzato una pagina web nella quale è possibile modificare un counter tramite comandi
specfici. 

**Per accedere ad essa, clicca qui su [Progetto](https://manuboni03.github.io/Progetto-Javascript-Basics-di-Manuel-Boni/index.html)**

## Introduttiva 

___

Si tratta semplicemente di un counter in cui è possibile utilizzare 3 comandi: 
- "+" per incrementare il punteggio
- "-" per decrementare il punteggio
- "Riparti da zero" (come dice il nome) per azzerarlo 


Per realizzarlo ho utilizzato le seguenti linguaggi di programmazione web:
1. **HTML**
2. **CSS**
3. **Javascript**

Mentre per quanto riguarda le librerie ho usato: 
- [Bootstrap](https://getbootstrap.com/)


## Come funziona 

___

La pagina con cui si interfaccia l'utente è stata realizzata interamente con HTML e CSS, a cui è stato
aggiunto l'utilizzo della libreria Bootstrap per rendere il layout responsive più efficace

Per quanto riguarda i pulsanti e il punteggio ho creato una sola funzione a cui passare i vari valori per
la creazione di un nodo e tutte le modifiche da apportargli:

```javascript
function creaNodo(selettore, tag, id, classlist, nodo){
    let box= document.body.querySelector(selettore);
    let elemento= document.createElement(tag);
    elemento.id= id;
    elemento.classList.add(classlist[0], classlist[1]);
    elemento.innerHTML= nodo;
    box.appendChild(elemento);

    return elemento;
}
```

Questa funzione restituisce il tag dell'elemento, che servirà poi per modificarne lo stile. 
Subito dopo ho passato per 3 volte (2 per i pulsanti e uno per il punteggio) i valori alla funzione in questo modo: 

```javascript
let button1= creaNodo('.primo', 'button', 'decremento', ['btn', 'btn-danger'], '<strong>-</strong>');
let punti= creaNodo('.secondo', 'p', 'punteggio', '', '<strong>0</strong>');
let button2= creaNodo('.terzo', 'button', 'incremento', ['btn', 'btn-success'], '<strong>+</strong>');
```
Infine ho creato un Event Delegation per il click del mouse con un istruzione **if** la quale in base all'id 
riportato dal click compie istruzioni di output specifiche: 

```javascript
divbox.onclick= function(e){
    let target= e.target.closest('button').id;

    if(target === 'incremento'){
        ++score;
        cambiaestampapunteggio(score);
        console.log(`Incremento: punteggio attuale--> ${score}`);
    }
    else if(target === 'decremento'){
        --score;
        cambiaestampapunteggio(score);
        console.log(`Decremento: punteggio attuale--> ${score}`);
    }
    else{
        score= 0;
        cambiaestampapunteggio(score);
        console.log('Sei a zero');
    }
}
```

Così facendo possiamo modificare il punteggio nella pagina tramite funzioni che agiscono a seconda
del nostro click. Come ultmo passaggio la funzione ***cambiaestampapunteggio(score);*** cambia lo stile di
default del'output per convertirlo a quello del formato iniziale:

```javascript
function cambiaestampapunteggio(num){
    punti.style.fontSize= '50px';
    punti.style.fontWeight= 'bold';
    punti.style.marginRight= '10px';
    punti.style.textAlign= 'center';

    punti.style.width= '100px';
    button1.style.width= '100px';
    button2.style.width= '100px';

    boxelementi.style.justifyContent= 'center';
    
    punti.innerHTML= `${num}`;
}
```



## Uso

___


L'uso da parte dell'utente non richiede nessun procedimento a livello di codice, serve solamente
entrare nella pagina e interagire col counter cliccando sui pulsanti:
- pulsante **verde** --> *incremento*
- pulsante **rosso** --> *decremento*
- pulsante **celeste** --> *azzeramento couter*


## Contatto 

___


Per qualsiasi problema, chiarimento o informazioni puoi contattarmi qui:

- La mia pagina web:
[Vai alla mia pagina](https://manuboni03.github.io/Progetto-HTML-e-CSS-di-Manuel-Boni/sito.html)

- Il mio indirizzo email:
manuelboni2904@gmail.com

Per dare un'occhiata ai miei progetti visita il mio profilo Git:
[Github](https://github.com/manuboni03)
