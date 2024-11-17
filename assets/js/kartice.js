document.getElementById('occupation').addEventListener('change', function() {
      const selectedOccupation = this.value; // Get the selected occupation from the dropdown
      if (selectedOccupation) {
        filterCards(selectedOccupation); // Call the filter function if an occupation is selected
      } else {
        loadCards(cardData, currentIndex, batchSize); // Load all cards when no occupation is selected
      }
    });
    
    function filterCards(selectedOccupation) {
      // Clear the propertiesBox before applying the filter
      propertiesBox.innerHTML = '';
    
      // Filter the card data based on the selected occupation
      const filteredCards = cardData.filter(card => 
        card.occupation.includes(selectedOccupation)
      );
    
      // Reset the currentIndex and load the filtered cards in batches
      currentIndex = 0;
      loadCards(filteredCards, currentIndex, batchSize); // Load filtered cards
    }
    
    document.addEventListener("DOMContentLoaded", function () {
      const propertiesBox = document.getElementById('properties-box');
    
      // Example card data
      const cardData = [
        // Add your card data here...
      ];
    
      let currentIndex = 0;
      const batchSize = 15;  // Number of cards per batch
      let scrolledCards = 0;  // Track the number of cards scrolled through
    
      // Load the first batch of cards
      loadCards(cardData, currentIndex, batchSize);
    
      document.querySelectorAll('.item').forEach(item => {
        item.querySelector('.image-container').addEventListener('click', function() {
          // Toggle 'active' class on the parent .item div
          this.parentElement.classList.toggle('active');
        });
      });
    
      // Normalization function
      function normalizeString(str) {
        return str
          .toLowerCase()
          .replace(/č/g, 'c')
          .replace(/ć/g, 'c')
          .replace(/ž/g, 'z')
          .replace(/š/g, 's')
          .replace(/đ/g, 'dj');
      }
    
      // Function to create a single card dynamically based on the card data
      function createCard(cardInfo) {
        const card = document.createElement('div');
        card.classList.add('col-lg-4', 'col-md-6', 'properties-items');
        card.innerHTML = `
          <div class="item ${cardInfo.city.toLowerCase()} ${cardInfo.occupation.toLowerCase()}">
            <p><strong>${cardInfo.city}</strong></p>
            <div class="image-container">
              <img src="${cardInfo.imgSrc}" alt="">
            </div>
            <h4>${cardInfo.title}</h4>
            <ul>
              ${cardInfo.contact ? `<li>Kontakt: <span>${cardInfo.contact}</span></li>` : ''}
              ${cardInfo.email ? `<li>Email: <span>${cardInfo.email}</span></li>` : ''}
              <p>${cardInfo.description}</p>
            </ul>
            ${cardInfo.personalPageLink ? `<div class="main-button-info" style="width: 90%; margin: 0 auto;">
              <a href="${cardInfo.personalPageLink}" style="display: block; text-align: center; color: white;">Detaljnije</a></div>` : ''}
            <div class="main-button">
              ${cardInfo.fbLink ? `<a style="color: white;" href="${cardInfo.fbLink}" target="_blank"><i class="fa-brands fa-facebook"></i></a>` : ''}
              ${cardInfo.instaLink ? `<a style="color: white;" href="${cardInfo.instaLink}" target="_blank"><i class="fa-brands fa-instagram"></i></a>` : ''}
              ${cardInfo.websiteLink ? `<a style="color: white;" href="${cardInfo.websiteLink}" target="_blank"><i class="fa-solid fa-globe"></i></a>` : ''}
              ${cardInfo.kpLink ? `<a style="background-color: white;border:1px solid gray;display: block; text-align: center;" href="${cardInfo.kpLink}" target="_blank">
                <img src="assets/images/kp-logo.png" alt="" style="width: 50px; "></a>` : ''}
            </div>
          </div>
        `;
        propertiesBox.appendChild(card);
      }
    
      // Function to load cards in batches
      function loadCards(cardData, startIndex, batchSize) {
        const fragment = document.createDocumentFragment();
        const endIndex = Math.min(startIndex + batchSize, cardData.length);
    
        // Add cards to the DOM
        for (let i = startIndex; i < endIndex; i++) {
          createCard(cardData[i]);
        }
    
        propertiesBox.appendChild(fragment); // Append cards to the DOM
        currentIndex = endIndex; // Update the currentIndex to the new end
      }
    
      // Lazy loading (scroll event for loading more cards)
      window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.body.offsetHeight;
    
        // Check if we are near the bottom of the page
        if (scrollPosition >= pageHeight - 100) {
          scrolledCards++;
    
          // Trigger load for a new batch after 10 cards have been scrolled
          if (scrolledCards % 10 === 0 && currentIndex < cardData.length) {
            loadCards(cardData, currentIndex, batchSize); // Load more cards when we are close to the bottom
          }
        }
      });
    });
    