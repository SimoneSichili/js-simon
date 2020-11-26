/* Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati. */

$(document).ready(function () {
    //START JS

    //#1 Creare un array con 5 numeri casuali diversi e mostrarli in un alert
    var randomList = [];
    var randomNumber;

    while (randomList.length < 5) {

        randomNumber = generateNumber(1, 100);

        var comparedNumber = isIncluded(randomNumber, randomList);
        
        if (comparedNumber == false) {
            randomList.push(randomNumber);
        } 
    
    }

    console.log("Lista di 5 numeri casuali compresi tra 1 e 100:", randomList);

    //Mostro la lista dei numeri da ricordare
    alert(randomList);

    //#2 Fare 5 prompt ed inserire i numeri all'interno di un altro array (confrontandoli con quelli del primo array)
    var userList = [];

    setTimeout(
        function(){

            for (var i = 0; i < 5; i++) {
        
                // var number = parseInt(prompt("Inserisci i numeri che ricordi"));
                do {

                    var number = parseInt(prompt("Inserisci un numero che ricordi tra 1 e 100")); 
                    
                    if (number <= 0) {
                        alert("Non puoi inserire un numero minore di 1");
                    } else if (number >= 101) {
                        alert("Non puoi inserire un numero maggiore di 100");
                    } else if (isNaN(number)) {
                        alert("Non puoi inserire una parola");
                    }
            
                } while (number <= 0 || number >= 101 || isNaN(number));

                var comparedNumber = isIncluded(number, randomList);
        
                if (comparedNumber == true) {
                    userList.push(number);
                } 
        
            }

            //#3 Il software dice quanti e quali numeri sono stati ricordati.
            console.log("Hai ricordato " + userList.length + " numeri.");
            console.log("I numeri che hai ricordato sono:", userList);
            
        },3000); //secondi per settare il countdown


    //END JS
});

// MY FUNCTIONS--------------------------

function generateNumber(min, max) {
    // Generazione numero random (min e max inclusi)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isIncluded(nmb, array) {

    var result = false;

    for (var j = 0; j < array.length; j++) {
        
        if (nmb == array[j]) {
            result = true;
        } 

    }

    return result;

}

