
let divbox= document.body.querySelector('.contenitore-elementi');

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
        if (punteggio === 0){
            alert('Sei già a zero');
        }
        else{
            punteggio= 0;
            console.log('Sei a zero');
        }
    }
}