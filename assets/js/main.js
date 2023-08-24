/* Descrizione:
 Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere

Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)

va applicato uno sconto del 20% per i minorenni

va applicato uno sconto del 40% per gli over 65.

MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in solo console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
Consigli:
non usate bootstrap, fate a mano per ora meno cose dobbiamo gestire e meglio é.
per semplificarvi un pó la vita almeno per ora non usate il tag form per racchiudere gli input ma metteteli semplicemente in un div.  div>input e non form>input
Bonus (opzionale):
Prova a racchiudere gli input ed il bottone in un tag form e prova a far funzionare il form evitando che la pagina si refreshi quando il form viene inviato cliccando su genera.
Questo richiederá un minimo di ricerca per capire come usare il parametro e dentro la funzione anonima dell'event listener. function(e){ console.log(e) } */


const calculate = document.querySelector('button');

//prompt km + prompt età con number

calculate.addEventListener('click', function() {

    //ottengo i dati inseriti dall'input

    const userKm = Number(document.getElementById('km').value);

    const userAge = Number(document.getElementById('age').value);

    console.log(`kilometri ${userKm}, anni ${userAge}`);

    
    //valido i dati inseriti affinchè siano numeri e nel caso faccio apparire un avviso poi ricarico la pagina.

    if ((isNaN(userKm)) || (userKm == "") || (userKm == "undefined")) {

        alert('Inserisci solo numeri!');
        window.location.reload();
    
    } else if ((isNaN(userAge)) || (userAge == "") || (userAge == "undefined")) {
    
        alert('inserisci solo i numeri anche qua!');
        window.location.reload();
    }

    //calcolo lo sconto

    let priceKm = userKm * 0.21;

    if (userAge < 18) { //sconto minorenni
        
       priceKm = (priceKm - (priceKm * 0.2)).toFixed(2);

    } else if (userAge > 65) { //sconto over 65
        priceKm = (priceKm - (priceKm * 0.4)).toFixed(2);
    }

    console.log(priceKm);

});
