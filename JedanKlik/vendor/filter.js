document.addEventListener('DOMContentLoaded', function() {
    const cityFilter = document.getElementById('city');
    const occupationFilter = document.getElementById('occupation');
    const searchFilter = document.getElementById('search');
    const additionalFilters = document.getElementById('additional-filters');
    const resetButton = document.getElementById('reset-filters');

    // Check if elements are correctly selected
    console.log('City Filter:', cityFilter);
    console.log('Occupation Filter:', occupationFilter);
    console.log('Search Filter:', searchFilter);
    console.log('Additional Filters:', additionalFilters);
    console.log('Reset Button:', resetButton);

    // Event listeners for filters
    cityFilter.addEventListener('change', filterCards);
    occupationFilter.addEventListener('change', function() {
        showOccupationFilters();
        filterCards();
    });
    searchFilter.addEventListener('input', filterCards);

    // Event listeners for additional filters
    additionalFilters.addEventListener('change', filterCards);

    // Event listener for reset button
    resetButton.addEventListener('click', resetFilters);

    function showOccupationFilters() {
        const occupation = occupationFilter.value;

        // Clear previous additional filters
        additionalFilters.innerHTML = '';

        // Add filters based on selected occupation
        if (occupation === 'zanatlija') {
            additionalFilters.innerHTML = `
                <label for="zanatlija-type">Tip Zanatlije:</label>
                <select id="zanatlija-type" class="filter">
                    <option value="">Svi tipovi</option>
                    <option value=".zelenilo">Održavanje Zelenih Površina</option>
                </select>
            `;
        } else if (occupation === 'majstor') {
            additionalFilters.innerHTML = `
                <label for="majstor-type">Tip Majstora:</label>
                <select id="majstor-type" class="filter">
                    <option value="">Svi tipovi</option>
                    <option value=".krovopokrivac">Krovopokrivač</option>
                    <option value=".elektricar">Električarski Radovi</option>
                </select>
            `;
        } else if (occupation === 'prodavnica') {
            additionalFilters.innerHTML = `
                <label for="prodavnica-type">Tip Prodavnice:</label>
                <select id="prodavnica-type" class="filter">
                    <option value="">Svi tipovi</option>
                    <option value=".prehrana">Prehrana</option>
                    <option value=".tehnika">Tehnika</option>
                    <option value=".odeca">Odeća</option>
                </select>
            `;
        }
    }

    function filterCards() {
        const city = cityFilter.value.toLowerCase();
        const occupation = occupationFilter.value.toLowerCase();
        const search = searchFilter.value.toLowerCase();
        
        const cards = document.querySelectorAll('.properties-items');
        const additionalFilter = additionalFilters.querySelector('.filter') ? additionalFilters.querySelector('.filter').value.toLowerCase() : '';

        let visibleCards = [];

        cards.forEach(card => {
            const cardItem = card.querySelector('.item');
            const cardCity = cardItem.classList.contains(city);
            const cardOccupation = cardItem.classList.contains(occupation);
            const cardText = cardItem.textContent.toLowerCase();
            const additionalMatch = !additionalFilter || cardItem.classList.contains(additionalFilter.replace('.', ''));

            const cityMatch = !city || cardCity;
            const occupationMatch = !occupation || cardOccupation;
            const searchMatch = !search || cardText.includes(search);

            if (cityMatch && occupationMatch && searchMatch && additionalMatch) {
                card.classList.remove('hidden');
                visibleCards.push(card);
            } else {
                card.classList.add('hidden');
            }
        });

        // Reorder cards to ensure they fill the grid correctly
        const propertiesBox = document.querySelector('.row.properties-box');
        visibleCards.forEach(card => {
            propertiesBox.appendChild(card);
        });
    }

    function resetFilters() {
        console.log('Reset Filters Button Clicked');

        // Reset filter values
        cityFilter.value = '';
        occupationFilter.value = '';
        searchFilter.value = '';
        additionalFilters.innerHTML = '';
        
        // Reset the occupation filters
        showOccupationFilters();

        // Show all cards
        const cards = document.querySelectorAll('.properties-items');
        cards.forEach(card => {
            card.classList.remove('hidden');
        });

        console.log('Filters reset and all cards shown');
    }
});

if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() {	
        $(this).toggleClass('active');
        $('.header-area .nav').slideToggle(200);
    });
}
