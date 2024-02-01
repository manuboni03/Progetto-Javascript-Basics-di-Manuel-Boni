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

Per quanto riguarda i pulsanti è stata aggiunta anche una componente Javascript che ne
permette il funzionamento. Entrambi sono stati inizializzati attraverso funzioni che ne hanno riportato poi l'**id**;
eccone un esempio dove viene creato il pulsante *incremento*:

```javascript
function creaIncremento(){
    let incremento= document.createElement('button');
    incremento.id= 'incremento';
    incremento.classList.add('btn', 'btn-success');
    incremento.innerHTML= '<strong>+</strong>';
    box3.appendChild(incremento);

    return incremento.id;
}

let incrementoid= creaIncremento();

//stessa cosa per il pulsante decremento
```

Per il punteggio è un po' diverso in quanto ho inizializzato il nodo di testo fuori dalla funzione per poi richiamarlo
al momento del cambio valore del counter, in questo modo: 

```javascript
let punteggio= document.createElement('p');
let score= 0;

function creaPunteggio(){
    punteggio.id= 'punteggio';
    punteggio.innerHTML= '<strong>0</strong>';
    box2.appendChild(punteggio);

    return punteggio.id;
}
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
    
    punteggio.style.fontSize= '50px';
    punteggio.style.fontWeight= 'bold';
    punteggio.style.marginRight= '10px';
    punteggio.style.marginLeft= '10px';

    punteggio.innerHTML= `${num}`;
    box2.appendChild(punteggio);
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
