document.addEventListener('DOMContentLoaded', function() {
    const cityFilter = document.getElementById('city');
    const occupationFilter = document.getElementById('occupation');
    const searchFilter = document.getElementById('search');
    const additionalFilters = document.getElementById('additional-filters');

    // Event listeners for filters
    cityFilter.addEventListener('change', filterCards);
    occupationFilter.addEventListener('change', function() {
        showOccupationFilters();
        filterCards();
    });
    searchFilter.addEventListener('input', filterCards);

    // Event listeners for additional filters
    additionalFilters.addEventListener('change', filterCards);
    
    function showOccupationFilters() {
        const occupation = occupationFilter.value;

        // Clear previous additional filters
        additionalFilters.innerHTML = '';

        // Add filters based on selected occupation
        let filterHTML = '';
        if (occupation === 'zanatlija') {
            filterHTML = `
              <label for="zanatlija-type">Tip Zanatlije:</label>
              <select id="zanatlija-type" class="filter">
                <option value="">Svi tipovi</option>
                <option value=".stolar">Stolar</option>
                <option value=".vodoinstalater">Vodoinstalater</option>
                <option value=".elektricar">Električar</option>
                <option value=".keramicar">Keramičar</option>
              </select>
            `;
        } else if (occupation === 'gradjevinski-radnik') {
            filterHTML = `
              <label for="gradjevinski-radnik-type">Tip Građevinskog Radnika:</label>
              <select id="gradjevinski-radnik-type" class="filter">
                <option value="">Svi tipovi</option>
                <option value=".zidar">Zidar</option>
                <option value=".moler">Moler</option>
                <option value=".teslar">Teslar</option>
              </select>
            `;
        } else if (occupation === 'usluzna-delatnost') {
            filterHTML = `
              <label for="usluzna-delatnost-type">Tip Uslužne Delatnosti:</label>
              <select id="usluzna-delatnost-type" class="filter">
                <option value="">Svi tipovi</option>
                <option value=".frizer">Frizer</option>
                <option value=".kozmeticar">Kozmetičar</option>
                <option value=".cistac">Čistač</option>
              </select>
            `;
        } else if (occupation === 'it-tehnologija') {
            filterHTML = `
              <label for="it-tehnologija-type">Tip IT i Tehnologije:</label>
              <select id="it-tehnologija-type" class="filter">
                <option value="">Svi tipovi</option>
                <option value=".programer">Programer</option>
                <option value=".sistem-administrator">Sistem Administrator</option>
                <option value=".it-podrska">IT Podrška</option>
              </select>
            `;
        } else if (occupation === 'poljoprivreda') {
            filterHTML = `
              <label for="poljoprivreda-type">Tip Poljoprivrede:</label>
              <select id="poljoprivreda-type" class="filter">
                <option value="">Svi tipovi</option>
                <option value=".poljoprivrednik">Poljoprivrednik</option>
                <option value=".stocna-proizvodnja">Stočna Proizvodnja</option>
                <option value=".ribar">Ribar</option>
              </select>
            `;
        } else if (occupation === 'zdravstvo') {
            filterHTML = `
              <label for="zdravstvo-type">Tip Zdravstva:</label>
              <select id="zdravstvo-type" class="filter">
                <option value="">Svi tipovi</option>
                <option value=".lekar">Lekar</option>
                <option value=".medicinska-sestra">Medicinska Sestra</option>
                <option value=".fizioterapeut">Fizioterapeut</option>
              </select>
            `;
        } else if (occupation === 'umetnost-zabava') {
            filterHTML = `
              <label for="umetnost-zabava-type">Tip Umetnosti i Zabave:</label>
              <select id="umetnost-zabava-type" class="filter">
                <option value="">Svi tipovi</option>
                <option value=".muzicar">Muzičar</option>
                <option value=".glumac">Glumac</option>
                <option value=".likovni-umetnik">Likovni Umetnik</option>
              </select>
            `;
        } else if (occupation === 'majstor') {
            filterHTML = `
                <label for="majstor-type">Tip Majstora:</label>
                <select id="majstor-type" class="filter">
                    <option value="">Svi tipovi</option>
                    <option value=".automehanicar">Automehaničar</option>
                    <option value=".moler">Moler</option>
                    <option value=".krovopokrivac">Krovopokrivač</option>
                </select>
            `;
        } else if (occupation === 'prodavnica') {
            filterHTML = `
                <label for="prodavnica-type">Tip Prodavnice:</label>
                <select id="prodavnica-type" class="filter">
                    <option value="">Svi tipovi</option>
                    <option value=".prehrana">Prehrana</option>
                    <option value=".tehnika">Tehnika</option>
                    <option value=".odeca">Odeća</option>
                </select>
            `;
        }

        // Add the filter HTML to the page and set up event listener
        if (filterHTML !== '') {
            additionalFilters.innerHTML = filterHTML;
            additionalFilters.querySelector('.filter').addEventListener('change', filterCards);
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
            const cardCity = city ? cardItem.classList.contains(city) : true;
            const cardOccupation = occupation ? cardItem.classList.contains(occupation) : true;
            const cardText = cardItem.textContent.toLowerCase();
            const additionalMatch = additionalFilter ? cardItem.classList.contains(additionalFilter.replace('.', '')) : true;

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
});


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
});
