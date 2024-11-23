document.addEventListener('DOMContentLoaded', function() {
    const cityFilter = document.getElementById('city');
    const occupationFilter = document.getElementById('occupation');
    const searchFilter = document.getElementById('search');
    const resetButton = document.getElementById('reset-filters');
    
    const propertiesBox = document.querySelector('.row.properties-box');
    
    // Sačuvaj originalni redosled kartica
    const originalCardsOrder = Array.from(propertiesBox.children);

    // Event listener za filtere
    cityFilter.addEventListener('change', filterCards);
    occupationFilter.addEventListener('change', filterCards);
    searchFilter.addEventListener('input', filterCards);

    // Event listener za resetovanje filtera
    resetButton.addEventListener('click', resetFilters);

    // Funkcija za resetovanje filtera
    function resetFilters() {
        console.log('Reset Filters Button Clicked');

        // Resetuj vrednosti filtera
        cityFilter.value = '';
        occupationFilter.value = '';
        searchFilter.value = '';
        
        // Ukloni sve trenutno prikazane "hidden" kartice
        const cards = document.querySelectorAll('.properties-items');
        cards.forEach(card => {
            card.classList.remove('hidden');
        });

        // Ponovo dodaj kartice u originalni redosled
        originalCardsOrder.forEach(card => {
            propertiesBox.appendChild(card); // Dodaj kartice u originalnom redosledu
        });

        console.log('Filters reset and all cards shown');
    }

    // Funkcija za filtriranje kartica
    function filterCards() {
        const city = cityFilter.value.toLowerCase();
        const occupation = occupationFilter.value.toLowerCase();
        const search = searchFilter.value.toLowerCase();

        const cards = document.querySelectorAll('.properties-items');

        let visibleCards = [];

        cards.forEach(card => {
            const cardItem = card.querySelector('.item');
            const cardCity = cardItem.classList.contains(city);
            const cardOccupation = cardItem.classList.contains(occupation);
            const cardText = cardItem.textContent.toLowerCase();

            const cityMatch = !city || cardCity;
            const occupationMatch = !occupation || cardOccupation;
            const searchMatch = !search || cardText.includes(search);

            if (cityMatch && occupationMatch && searchMatch) {
                card.classList.remove('hidden');
                visibleCards.push(card);
            } else {
                card.classList.add('hidden');
            }
        });

        // Ponovo dodaj filtrirane kartice u DOM, u originalnom redosledu
        visibleCards.forEach(card => {
            propertiesBox.appendChild(card);
        });
    }
});




if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() {	
        $(this).toggleClass('active');
        $('.header-area .nav').slideToggle(200);
    });
}
