document.addEventListener('DOMContentLoaded', function() {
    const cityFilter = document.getElementById('city');
    const occupationFilter = document.getElementById('occupation');
    const searchFilter = document.getElementById('search');
    const additionalFilters = document.getElementById('additional-filters');

    // Event listeneri za filtere
    cityFilter.addEventListener('change', filterCards);
    occupationFilter.addEventListener('change', function() {
        showOccupationFilters();
        filterCards();
    });
    searchFilter.addEventListener('input', filterCards);

    // Event listeneri za dodatne filtere
    additionalFilters.addEventListener('change', filterCards);
    
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
                    <option value=".stolar">Stolar</option>
                    <option value=".vodoinstalater">Vodoinstalater</option>
                    <option value=".elektricar">Električar</option>
                </select>
            `;
        } else if (occupation === 'majstor') {
            additionalFilters.innerHTML = `
                <label for="majstor-type">Tip Majstora:</label>
                <select id="majstor-type" class="filter">
                    <option value="">Svi tipovi</option>
                    <option value=".automehanicar">Automehaničar</option>
                    <option value=".moler">Moler</option>
                    <option value=".krovopokrivac">Krovopokrivač</option>
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
                card.style.display = 'block';
                visibleCards.push(card);
            } else {
                card.style.display = 'none';
            }
        });

        // Reorder cards
        const propertiesBox = document.querySelector('.row.properties-box');
        visibleCards.forEach(card => {
            propertiesBox.appendChild(card);
        });
    }
});