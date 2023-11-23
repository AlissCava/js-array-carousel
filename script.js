document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.carousel img');
    console.log(items);

    let activeItem = 0;

    const nextBtn = document.getElementById('nextBtn');

    nextBtn.addEventListener('click', function () {
        // Rimuoviamo la classe active all'elemento corrente
        items[activeItem].classList.remove('active');
        // Incrementiamo l'indice dell'elemento da visualizzare
        activeItem++;
        
        // Verifica se siamo oltre la lunghezza dell'array, e in tal caso, torna all'inizio
        if (activeItem >= items.length) {
            activeItem = 0;
        }

        // Aggiungiamo la classe active all'elemento successivo
        items[activeItem].classList.add('active');

        // Mostrare il pulsante "Next" in caso di rimozione
        nextBtn.classList.remove('hidden');
        
        // Nascondiamo il pulsante "Next" se siamo all'ultimo elemento
        if (activeItem === items.length - 1) {
            nextBtn.classList.add('hidden');
        }
    });
});
