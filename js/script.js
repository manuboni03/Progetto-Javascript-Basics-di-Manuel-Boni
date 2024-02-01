
let divbox= document.body.querySelector('.contenitore-elementi');
let box1= document.body.querySelector('.primo');
let box2= document.body.querySelector('.secondo');
let box3= document.body.querySelector('.terzo');

let punteggio= document.createElement('p');
let score= 0;


function creaDecremento(){
    let decremento= document.createElement('button');
    decremento.id= 'decremento';
    decremento.classList.add('btn', 'btn-danger');
    decremento.innerHTML= '<strong>-</strong>';
    box1.appendChild(decremento);

    return decremento.id;
}

function creaPunteggio(){
    punteggio.id= 'punteggio';
    punteggio.innerHTML= '<strong>0</strong>';
    box2.appendChild(punteggio);

    return punteggio.id;
}

function creaIncremento(){
    let incremento= document.createElement('button');
    incremento.id= 'incremento';
    incremento.classList.add('btn', 'btn-success');
    incremento.innerHTML= '<strong>+</strong>';
    box3.appendChild(incremento);

    return incremento.id;
}

let decrementoid= creaDecremento();
let punteggioid= creaPunteggio();
let incrementoid= creaIncremento();


function cambiaestampapunteggio(num){
    
    punteggio.style.fontSize= '50px';
    punteggio.style.fontWeight= 'bold';
    punteggio.style.marginRight= '10px';
    punteggio.style.marginLeft= '10px';

    punteggio.innerHTML= `${num}`;
    box2.appendChild(punteggio);
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