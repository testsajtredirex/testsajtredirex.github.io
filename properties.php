<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection
$host = 'localhost';
$db   = 'business_cards';
$user = 'jedanklik';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    echo 'Database connection failed: ' . $e->getMessage();
    exit();
}

// Query database for all submissions, ordered with newest at the end
try {
    $stmt = $pdo->query("SELECT * FROM submissions ORDER BY id ASC"); // Change submitted_at to id if needed
    if ($stmt) {
        $submissions = $stmt->fetchAll();
    } else {
        $submissions = [];
    }
} catch (\PDOException $e) {
    echo 'Query failed: ' . $e->getMessage();
    exit();
}
?>


<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet">

  <title>Jedan Klik</title>
  <link rel="icon" type="image/x-icon" href="assets/images/android-chrome-192x192.png">
  <script src="https://sdk.flowpoint.ai?apiKey=t_89176ea60c3f8173f562af7934af5a78&clientId=zWnlveNn98H61eF5wGHa4tZAypC5hB"></script>
  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <!-- Additional CSS Files -->
  <!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
<!-- Bootstrap JS Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>

  <link rel="stylesheet" href="./assets/css/properties_css.css">
  <link rel="stylesheet" href="./assets/css/fontawesome.css">
  <link rel="stylesheet" href="./assets/css/templatemo-villa-agency.css">
  <!--<link rel="stylesheet" href="assets/css/owl.css"> -->
  <link rel="stylesheet" href="./assets/css/animate.css">
  <link rel="stylesheet" href="./https://unpkg.com/swiper@7/swiper-bundle.min.css" />
  <style>

/* CSS */
.button-6 {
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

.button-6:hover,
.button-6:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}

.button-6:hover {
  transform: translateY(-1px);
}

.button-6:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}

  .image-container {
    position: relative;
    display: inline-block;
  }

  @media (min-width: 768px) {
    .recommendation-badge {
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(50%, -50%);
    }
  }

  /* Dodajte ovaj CSS stil u vaš stilski list */
  .image-click:hover {
    transform: scale(1.15);
    /* Povećajte sliku za 10% kada korisnik pređe mišem preko nje */
    transition: transform 0.3s ease;
    /* Dodajte prelazni efekat */
  }


  .properties-box {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    /* Razmak između kartica */
  }

  .properties-items {
    width: 32%;
    /* Kartice će zauzimati 1/3 širine kontejnera */
  }

  .item {
    width: 100%;
    /* Kartice će zauzimati celu širinu svog roditeljskog elementa */
  }

  .hidden {
    display: none !important;
  }

  .item:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .item img {
    width: 100%;
    height: auto;
  }

  .category {
    display: block;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
  }

  .item h4 {
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 18px;
  }

  .item ul {
    list-style: none;
    padding: 0 15px;
    margin: 0;
    display: flexbox;
  }

  .item ul li {
    margin: 5px 0;
    font-size: 14px;
  }

  .item ul li span {
    font-weight: bold;
  }

  .item p {
    padding: 0 5px;
    font-size: 14px;
    color: #555;
  }

  .main-button {
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: #f8f8f8;
  }

  .main-button a {
    color: #007bff;
    margin: 0 5px;
    font-size: 20px;
    text-decoration: none;
  }

  #filter-container {
    padding: 20px;
    background-color: #f8f8f8;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 20px;
  }

  #filter-container select,
  #filter-container input {
    width: 100%;
    max-width: 300px;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  #additional-filters {
    flex-basis: 100%;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    .properties-items {
      width: 100%;
      /* Kartice će zauzimati punu širinu ekrana */
    }

    .recommendation-badge {
      position: absolute;
      bottom: 30%;
      right: 10%;
      transform: translate(50%, -50%);
    }

    .item ul {
      display: block;
      /* Popravićemo display fleksbox na display block */
    }
  }

.properties .item {
  background-color: #fafafa;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 30px;
}

.properties .item img {
  border-radius: 10px;
}

.properties .item span.category {
  background: linear-gradient(45deg, #2196F3,#004aad,#004aad,#2196F3);
  font-weight: 500;
  border-radius: 5px;
  font-size: 14px;
  color: whitesmoke;
  padding: 5px 12px;
  display: inline-block;
  margin-top: 2px;
  width: 100%;
}



.properties .item ul li {
  display: inline-block;
  font-size: 15px;
  color: #4a4a4a;
  margin-right: 20px;
}

.properties .item ul li span {
  font-weight: 600;
  color: #1e1e1e;
}

.properties .item ul {
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 10px;
  padding-bottom: 30px;
}

.properties .item h6 {
  font-size: 20px;
  color: #f35525;
  margin-top: 6px;
  display: inline-block;
  float: right;
  margin-top: 30px;
}

.properties .item .main-button {
  text-align: center;
}

.main-button-info{
  border-radius: 1em;
  margin: 0 auto;
  line-height: 40px;
  height: 40px;
  width: 90%;
  display: block;
  background-color: #343a40;
}

.main-button-info:hover {
  border-radius: 1em;
  margin: 0 auto;
  line-height: 40px;
  height: 40px;
  width: 90%;
  display: block;
  background-color: #f35525;
}


#backToTopBtn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  color: rgb(23, 23, 24);
  border: 2px solid rgb(23, 23, 24);
  background-color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

#backToTopBtn:hover {
  background-color:#fd7e14;
  color: white;
  border: 1px solid white;
}




    /* Loading Screen */
    #loading-screen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column; /* Stack the text and spinner vertically */
        z-index: 9999;
        text-align: center; /* Center the text */
    }
    
    .spinner {
        border: 4px solid #f3f3f3;
        border-radius: 60%;
        border-top:4px solid rgb(3, 175, 255);
        width: 5em;
        height: 5em;
        animation: spin 2s linear infinite;
        margin: 5em 0; /* Add spacing between text and spinner */
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    /* Text Styling */
    #loading-screen p {
        font-size: 2em; /* Increase font size */
        font-weight: bold; /* Make text bold */
        color: #fff; /* White color for the text */
        margin: 0; /* Remove default margins */
    }
    
    /* Optionally style the page content */
    #content {
        padding: 20px;
    }
    
      </style>
</head>
<body>

  <!-- ***** Preloader Start ***** 
  <div id="js-preloader" class="js-preloader">
    <div class="preloader-inner">
      <span class="dot"></span>
      <div class="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
  ***** Preloader End ***** -->


  <!-- ***** Header Area Start ***** -->
  <header style="border-bottom: 1px solid gray;" class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <a href="index.html" class="logo">
              <img src="assets/images/JEDAN KLIK.webp" alt="">
            </a>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li><a href="index.html">Glavna Stranica</a></li>
              <li><a href="properties.html" class="active">Pretraži</a></li>
              <li><a href="contact.html">Kontaktirajte Nas</a></li>
              <li><a href="joining.html"><i class="fa fa-calendar"></i> Pridružite nam se</a></li>
            </ul>
            <a class='menu-trigger'>
              <span>Više</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->

  <div id="loading-screen" class="loader">
    <p>S V E  <br><br><br> N A</p>
    <div class="spinner"></div>
    
    <p>J E D A N <br><br><br> K L I K</p>
</div>

  <div style="margin-top:1em;" class="section properties">
    <div class="container">
      <div id="filter-container">
        <select id="city">
        <option value="ALL">svi gradovi</option>

          <!-- Dodajte ostale gradove -->
        </select>

        <select id="occupation">
        <option value="ALL">ALL Occupations</option>
        </select>

        <input type="text" id="search" placeholder="Pretraga...">
        <button class="button-6" id="reset-filters">Reset Filter</button>
      </div>
      
        <p style="width: 100%; text-align: center;">Dobrodošli na stranicu koja olakšava pronalaženje usluga u vašoj blizini!</p>  <br> <br>
        <p style="margin: auto; width: 90%; height: 10em; text-align: center;">
        Ovde možete pregledati raznovrsne kartice usluga koje pokrivaju sve od online prodaje do vodoinstalacija. 
        Zahvaljujući naprednim filterima, pretražite ponude prema gradu, vrsti usluge ili jednostavno unesite ključne reči u polje za pretragu kako biste brzo pronašli ono što vam je potrebno. 
        Učinite potragu za uslugama jednostavnom i efikasnom uz naše prilagođene opcije filtriranja.
        </p>


<div class="row properties-box" id="properties-box">
      <?php foreach ($submissions as $submission): ?>
    <div class="item <?= strtolower($submission['city']) ?> <?= strtolower($submission['occupation']) ?>" style="width:32%">
        <p><strong><?= htmlspecialchars($submission['city']) ?></strong></p>
        
        <div class="image-container">
            <img loading="lazy" style="cursor: pointer; width: 100%; height: auto;" src="<?= htmlspecialchars($submission['imgSrc']) ?>" alt="" class="image-click"
                 data-modal="modal<?= $submission['id'] ?>" data-image="<?= htmlspecialchars($submission['imgSrc']) ?>">
        </div>

        <h4><?= htmlspecialchars($submission['title']) ?></h4>
        
        <ul>
            <?php if ($submission['contact']): ?>
                <li>Kontakt: <span><?= htmlspecialchars($submission['contact']) ?></span></li>
            <?php endif; ?>
            
            <?php if ($submission['email']): ?>
                <li>Email: <span><?= htmlspecialchars($submission['email']) ?></span></li>
            <?php endif; ?>
            
            <p><?= nl2br(htmlspecialchars($submission['description'])) ?></p>
        </ul>

        <?php if (isset($submission['personalPageLink']) && $submission['personalPageLink']): ?>
            <div class="main-button-info" style="width: 90%; margin: 0 auto;">
                <a href="<?= htmlspecialchars($submission['personalPageLink']) ?>" style="display: block; text-align: center; color: white;">Detaljnije</a>
            </div>
        <?php endif; ?>

        <div class="main-button">
            <?php if (isset($submission['fbLink']) && $submission['fbLink']): ?>
                <a style="color: white;" href="<?= htmlspecialchars($submission['fbLink']) ?>" target="_blank">
                    <i class="fa-brands fa-facebook"></i>
                </a>
            <?php endif; ?>
            
            <?php if (isset($submission['instaLink']) && $submission['instaLink']): ?>
                <a style="color: white;" href="<?= htmlspecialchars($submission['instaLink']) ?>" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            <?php endif; ?>
            
            <?php if (isset($submission['websiteLink']) && $submission['websiteLink']): ?>
                <a style="color: white;" href="<?= htmlspecialchars($submission['websiteLink']) ?>" target="_blank">
                    <i class="fa-solid fa-globe"></i>
                </a>
            <?php endif; ?>
            
            <?php if (isset($submission['kpLink']) && $submission['kpLink']): ?>
                <a style="background-color: white; border: 1px solid gray; display: block; text-align: center;" href="<?= htmlspecialchars($submission['kpLink']) ?>" target="_blank">
                    <img src="assets/images/kp-logo.png" alt="" style="width: 50px;">
                </a>
            <?php endif; ?>
        </div>
    </div>
<?php endforeach; ?>

      </div>
    </div>
  </div>
 
  <div id="Modal1" class="modal" onclick="closeModal()">
    <span class="close" onclick="closeModal()">&times;</span>
    <img class="modal-content" id="modalImage">
</div>  

<button id="backToTopBtn" onclick="scrollToTop()">Nazad na Vrh</button>

  <footer style="margin-top: 4em;" class="footer-section">
    <div class="container">
      <div class="footer-cta pt-5 pb-5">
        <div class="row">
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <i class="fas fa-phone"></i>
              <div class="cta-text">
                <h4>Kontakt</h4>
                <span>(+381)66/935-8484</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <i class="far fa-envelope-open"></i>
              <div class="cta-text">
                <h4>Email</h4>
                <span>jedanklikinfo@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-content pt-5 pb-5">
        <div class="row">
          <div class="col-xl-4 col-lg-4 mb-50">
            <div class="footer-widget">
              <div class="footer-logo">
                <img src="assets/images/JEDAN KLIK-1.png" class="img-fluid" alt="logo">
              </div>
              <div class="footer-text">
                <p>Istaknite se pred širom publikom i budite vidljivi svakome u svakom trenutku.</p>
              </div>
              <div class="footer-social-icon">
                <span>Zapratite Nas</span>
                <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                <a href="#"><i class="fab fa-instagram instagram-bg"></i></a>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div class="footer-widget">
              <div class="footer-widget-heading">
                <h3>Korisne Veze</h3>
              </div>
              <ul>
                <li><a href="index.html">Glavna Strana</a></li>
                <li><a href="properties.html">Pretraga</a></li>
                <li><a href="contact.html">Kontaktirajte Nas</a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
            <img src="assets/images/footer-img2.png" alt="">
            <!--  <div class="footer-widget">
                          <div class="footer-widget-heading">
                              <h3>Subscribe</h3>
                          </div>
                          <div class="footer-text mb-25">
                              <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                          </div>
                          <div class="subscribe-form">
                              <form action="#">
                                  <input type="text" placeholder="Email Address">
                                  <button><i class="fab fa-telegram-plane"></i></button>
                              </form>
                          </div>
                      </div> -->
          </div>
        </div>
      </div>
    </div>
    <!--  <div class="copyright-area">
          <div class="container">
              <div class="row">
                  <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                      <div class="copyright-text">
                          <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
                      </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                      <div class="footer-menu">
                          <ul>
                              <li><a href="#">Home</a></li>
                              <li><a href="#">Terms</a></li>
                              <li><a href="#">Privacy</a></li>
                              <li><a href="#">Policy</a></li>
                              <li><a href="#">Contact</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div> -->
  </footer>
  <script>






    window.addEventListener('load', function () {
    // Select the loader screen
    const loadingScreen = document.getElementById('loading-screen');

    // Add a class that will trigger the fade-out effect
    loadingScreen.style.opacity = 0;

    // After the fade-out is complete, remove the loader from the DOM
    setTimeout(function () {
        loadingScreen.style.display = 'none';  // Optionally hide the loader completely after fading out
    }, 1000);  // Match this duration to the fade-out time in the CSS
});





  </script>
  <!-- Scripts -->
  <!-- Bootstrap core JavaScript -->
  <script src="assets/js/kartice.js"></script>
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
  <script src="assets/js/isotope.min.js"></script>
  <script src="assets/js/owl-carousel.js"></script>
  <script src="assets/js/counter.js"></script>
  <script src="assets/js/custom.js"></script>
  <script src="vendor/filter.js"></script>
<script>
  // Prikazivanje dugmeta kada korisnik skroluje 100px niz stranicu
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
};

// Funkcija za skrolovanje na vrh
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to handle the form submission and update filters
function handleFormSubmit(event) {
    event.preventDefault();

    // Collect the form data
    let formData = new FormData(document.getElementById('business_form')); // Replace with your actual form ID

    fetch('submit_form.php', { // Replace with your actual PHP script path
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert(data.message);

            // Dynamically add city and occupation to the filter dropdowns if they don't exist
            addFilterOption('city', data.city);
            addFilterOption('occupation', data.occupation);
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Function to add new options to the filter dropdowns
function addFilterOption(filterId, value) {
    const filterElement = document.getElementById(filterId);
    
    // Check if the value is not "ALL" and if it's already in the filter
    if (value !== 'ALL' && !Array.from(filterElement.options).some(option => option.value === value)) {
        const newOption = document.createElement('option');
        newOption.value = value;
        newOption.textContent = value;
        filterElement.appendChild(newOption);
    }
}

// Bind the form submit handler
document.getElementById('yourFormId').addEventListener('submit', handleFormSubmit);

document.getElementById('reset-filters').addEventListener('click', function() {
    document.getElementById('city').value = 'ALL';
    document.getElementById('occupation').value = 'ALL';
    document.getElementById('search').value = ''; // Clear the search input
});


</script>

</body>
</html>