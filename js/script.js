
let incremento= document.getElementById('incremento');
let decremento= document.getElementById('decremento');
let punteggio= document.getElementById('punteggio');
let rincomincia= document.getElementById('rincomincia');


let numero= 0;

function Stampanumero(strnum){
    punteggio.innerHTML=`${strnum}`;
}

function Cambiafont(){
    punteggio.style.fontSize= "90px";
    punteggio.style.fontWeight= "bold";
    punteggio.style.paddingRight= "20px";
    punteggio.style.paddingLeft= "20px";
}

function Cambiapunteggio(risp, tot){
    if(risp===true){
        ++tot;
        console.log(`Incremento. Il punteggio attuale è: ${tot}`);
    }
    else{
        --tot;
        console.log(`Decremento. IL punteggio attuale è: ${tot}`);
    }

    return tot;
}

incremento.addEventListener('click', (e)=>{
    let risposta= true;
    numero= Cambiapunteggio(risposta, numero);
    Cambiafont();
    Stampanumero(`${numero}`);
});

decremento.addEventListener('click', (e)=>{
    let risposta= false;
    numero= Cambiapunteggio(risposta, numero);
    Cambiafont();
    Stampanumero(`${numero}`);
});

rincomincia.addEventListener('click', ()=>{
    numero= 0;
    Stampanumero(`${numero}`);
    console.log('Sei ripartito/a da zero');
});

