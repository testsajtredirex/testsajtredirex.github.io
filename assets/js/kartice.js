
document.getElementById('occupation').addEventListener('change', function() {
  const selectedOccupation = this.value; // Get the selected occupation from the dropdown
  if (selectedOccupation) {
      filterCards(selectedOccupation); // Call the filter function if an occupation is selected
  } else {
      displayAllCards(); // Display all cards if no occupation is selected
  }
});

function filterCards(selectedOccupation) {
  // Clear the propertiesBox before applying the filter
  propertiesBox.innerHTML = '';

  // Filter the card data based on the selected occupation
  const filteredCards = cardData.filter(card => 
      card.occupation.includes(selectedOccupation)
  );

  // Create the cards dynamically for the filtered result
  filteredCards.forEach((card, index) => {
      createCard(card, index); // Use your createCard function to generate each card
  });
}


document.addEventListener("DOMContentLoaded", function () {
      const propertiesBox = document.getElementById('properties-box');
/*
"">Sva zanimanja
auto" - Automobilizam
zanatlija" - Zanatlija
online-prodaja" - Online Prodaja
gradjevina" - Građevinski radovi
usluzna" - Uslužna delatnost
it-tehnologija" - IT i Tehnologija
poljoprivreda" - Poljoprivreda
zdravstvo" - Zdravstvo
majstor" - Majstor
prodavnica" - Prodavnica
namestaj" - Nameštaj
kupatilo" - Sve za Kupatilo
kuhinja" - Sve za Kuhinju
*/
      // Example card data
      const cardData = [
  ];




//normalizacija slova
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
function createCard(cardInfo, index) {
const card = document.createElement('div');
card.classList.add('col-lg-4', 'col-md-6', 'properties-items');

card.innerHTML = `
<div class="item ${cardInfo.city.toLowerCase()} ${cardInfo.occupation.toLowerCase()}">
<p><strong>${cardInfo.city}</strong></p>
<div class="image-container">
<img loading="lazy" style="cursor: pointer;" src="${cardInfo.imgSrc}" alt="" class="image-click"
data-modal="modal${index + 1}" data-image="${cardInfo.imgSrc}">
</div>
<h4>${cardInfo.title}</h4>
<ul>
${cardInfo.contact ? `<li>Kontakt: <span>${cardInfo.contact}</span></li>` : ''}
${cardInfo.email ? `<li>Email: <span>${cardInfo.email}</span></li>` : ''}
<p>${cardInfo.description}</p>
</ul>
${cardInfo.personalPageLink ? `<div class="main-button-info" style="width: 90%; margin: 0 auto;"><a href="${cardInfo.personalPageLink}" style="display: block; text-align: center; color: white;">Detaljnije</a></div>` : ''}
<div class="main-button">
${cardInfo.fbLink ? `<a style="color: white;" href="${cardInfo.fbLink}" target="_blank"><i class="fa-brands fa-facebook"></i></a>` : ''}
${cardInfo.instaLink ? `<a style="color: white;" href="${cardInfo.instaLink}" target="_blank"><i class="fa-brands fa-instagram"></i></a>` : ''}
${cardInfo.websiteLink ? `<a style="color: white;" href="${cardInfo.websiteLink}" target="_blank"><i class="fa-solid fa-globe"></i></a>` : ''}
${cardInfo.kpLink ? `<a style="background-color: white;border:1px solid gray;display: block; text-align: center;" href="${cardInfo.kpLink}" target="_blank"><img src="assets/images/kp-logo.png" alt="" style="width: 50px; "></a>` : ''}
</div>
</div>
`;


propertiesBox.appendChild(card);
return card;
}


// Function to load all cards at once
function loadAllCards() {
const fragment = document.createDocumentFragment(); // To optimize performance by appending all at once
cardData.forEach((cardInfo, index) => {
createCard(cardInfo, index);
});
propertiesBox.appendChild(fragment); // Append all cards at once to the DOM
}

// Load all cards when the page loads
loadAllCards();
const lazyImages = document.querySelectorAll('.lazy-load');

const loadImage = (image) => {
  const src = image.getAttribute('data-src');
  if (src) {
    image.src = src;
    image.classList.remove('lazy-load');
  }
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadImage(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

lazyImages.forEach(image => {
  observer.observe(image);
});

});
