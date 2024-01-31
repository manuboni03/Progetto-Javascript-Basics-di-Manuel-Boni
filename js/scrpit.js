
let divbox= document.body.querySelector('.centrato');

let punteggio= 0;

divbox.onclick= function(e){
    let target= e.target.closest('button');
    let targetid= target.id;

    if(targetid === 'incremento'){
        ++punteggio;
        console.log(`Incremento: punteggio attuale--> ${punteggio}`);
    }
    else if(target.id === 'decremento'){
        --punteggio;
        console.log(`Decremento: punteggio attuale--> ${punteggio}`);
    }
    else{
        punteggio= 0;
        console.log('Sei ripartito da zero');
    }
}