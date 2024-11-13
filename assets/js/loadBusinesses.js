// Sample data array (replace with your actual data)
const cardData = [
    // Your card objects here (e.g., { city: 'CityName', ... })
  ];
  
  let startIndex = 0;
  const itemsPerPage = 12; // Number of cards to load per batch
  
  // Function to load a set of cards (e.g., 12 at a time)
  function loadBusinesses() {
    const container = document.getElementById("properties-box');
    const fragment = document.createDocumentFragment();
    const endIndex = Math.min(startIndex + itemsPerPage, cardData.length);
  
    for (let i = startIndex; i < endIndex; i++) {
      const card = createCard(cardData[i], i); // Create each card and append it to the fragment
      fragment.appendChild(card);
    }
  
    container.appendChild(fragment); // Append all created cards at once to optimize DOM rendering
    startIndex += itemsPerPage;
  
    // Remove scroll event if all cards are loaded
    if (startIndex >= cardData.length) {
      window.removeEventListener('scroll', handleScroll);
    }
  }
  
  // Function to handle the scroll event
  function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      loadBusinesses(); // Load more cards when the user scrolls to the bottom
    }
  }
  
  // Initial load when the page is loaded
  document.addEventListener('DOMContentLoaded', loadBusinesses);
  
  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);
  