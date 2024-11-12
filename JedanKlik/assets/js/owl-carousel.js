document.addEventListener('DOMContentLoaded', function() {
    const cityFilter = document.getElementById('city');
    const occupationFilter = document.getElementById('occupation');
    const searchFilter = document.getElementById('search');
    const resetButton = document.getElementById('reset-filters');

    // Function to normalize special characters
    function normalizeString(str) {
        return str
            .toLowerCase()
            .replace(/č/g, 'c')
            .replace(/ć/g, 'c')
            .replace(/ž/g, 'z')
            .replace(/š/g, 's')
            .replace(/đ/g, 'dj');
    }

    // Event listeners for filters
    cityFilter.addEventListener('change', filterCards);
    occupationFilter.addEventListener('change', filterCards);
    searchFilter.addEventListener('input', filterCards);
    resetButton.addEventListener('click', resetFilters);

    function filterCards() {
        const city = cityFilter.value.toLowerCase();
        const occupation = occupationFilter.value.toLowerCase();
        const search = normalizeString(searchFilter.value);  // Normalize search input

        const cards = document.querySelectorAll('.properties-items');

        cards.forEach(card => {
            const cardCity = card.querySelector('.item').classList.contains(city);
            const cardOccupation = card.querySelector('.item').classList.contains(occupation);
            const cardText = normalizeString(card.querySelector('.item').textContent);  // Normalize card text

            const cityMatch = !city || cardCity;
            const occupationMatch = !occupation || cardOccupation;
            const searchMatch = search.split(' ').every(term => cardText.includes(term));
            
            if ((cityMatch && occupationMatch && searchMatch) || 
                (cityMatch && !occupation && searchMatch) || 
                (!city && occupationMatch && searchMatch)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function resetFilters() {
        // Reset filter values
        cityFilter.value = '';
        occupationFilter.value = '';
        searchFilter.value = '';

        // Show all cards
        const cards = document.querySelectorAll('.properties-items');
        cards.forEach(card => {
            card.style.display = 'block';
        });
    }
});
