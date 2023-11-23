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
        
        // Aggiungiamo la classe active all'elemento successivo
        items[activeItem].classList.add('active');

        // Nascondiamo il pulsante "Next" se siamo all'ultimo elemento
        if (activeItem === items.length - 1) {
            nextBtn.classList.add('hidden');
        }
    });
});
