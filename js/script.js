
let divbox= document.body.querySelector('.contenitore-elementi');
let boxelementi= document.body.querySelector('.centrato');
let contenitorenodi= document.body.querySelector('.box');

function creaNodo(selettore, tag, id, classlist, nodo){
    let box= document.body.querySelector(selettore);
    let elemento= document.createElement(tag);
    elemento.id= id;
    elemento.classList.add(classlist[0], classlist[1]);
    elemento.innerHTML= nodo;
    box.appendChild(elemento);

    return elemento;
}

let button1= creaNodo('.primo', 'button', 'decremento', ['btn', 'btn-danger'], '<strong>-</strong>');
let punti= creaNodo('.secondo', 'p', 'punteggio', '', '<strong>0</strong>');
let button2= creaNodo('.terzo', 'button', 'incremento', ['btn', 'btn-success'], '<strong>+</strong>');

let score= 0;

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