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
permette il funzionamento. Basta assegnare un **id** univoco nei **button** in *index.html* e riprenderli in *script.js*
in questo modo: 

```javascript
let incremento= document.getElementById('incremento');
let decremento= document.getElementById('decremento');
let punteggio= document.getElementById('punteggio');
let rincomincia= document.getElementById('rincomincia');
```

Così facendo possiamo modificare il punteggio nella pagina tramite funzioni che agiscono a seconda
del nostro click.



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
