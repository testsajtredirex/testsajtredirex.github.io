
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
          {
city: "Valjevo",
title: "Zelena Bajka",
occupation: "Zanatlija",  // Occupation or service type
contact: "060/1632-364 ; 061/3002-627",
description: "Vaše dvorište će uvek izgledati besprekorno uz naše usluge skupljanja trave i lišća...",
imgSrc: "assets/images/deal-01.png",  // Image for the card
modalImgSrc: "assets/images/deal-01.png",  // Image for the modal
fbLink: "https://www.facebook.com/Dusan.Vlajkovic98",
instaLink: "https://www.instagram.com/zelena_bajka_valjevo",
websiteLink: null,
personalPageLink: "https://testsajtredirex.github.io/JedanKlik/stranice/zelena_bajka/index.html",
          },
          {
city: "Požarevac",
title: "Električar",
occupation: "Majstor",  // Occupation or service type
contact: "064/9696-625",
email: "bogic.elektro@gmail.com",
description: "Električne instalacije, rasveta, led svetla, popravke instalacija, izvođenje novih instalacija u kucama, stanovima, radionicama, fabrikama, poslovnim prostorima.",
imgSrc: "assets/images/oglas-01.png",  // Image for the card
modalImgSrc: "assets/images/featured2.png",  // Image for the modal
fbLink: "https://www.facebook.com/elektricar012/",
instaLink: null,  // Add Instagram link if available
websiteLink: null,
          },
          {
city: "Čačak",
title: "Građevinski Radovi Čačak",
occupation: "Majstor",  // Occupation or service type
contact: "065/9577-821",
description: "Pružamo građevinske usluge u Čačku, uključujući betonažu, šolovanje, zidanje, i lepljenje pločica, sa posebnim akcentom na kvalitet i poverenje.",
imgSrc: "assets/images/slikekartica/kartica-001.png",  // Image for the card
modalImgSrc: "assets/images/slikekartica/modal-001.png",  // Image for the modal
fbLink: "https://www.facebook.com/gradjevinski.radovi.cacak",
instaLink: null,  // Add Instagram link if available
websiteLink: null,
        },
        {
city: "Kovačica",
title: "PVC i ALU stolarija Kovačica",
occupation: "Majstor",  // Occupation or service type
contact: "064/6713-899",
email: "stolarijapavel@gmail.com",
description: "-Ugradnja PVC i Al stolarije <br>-Ugradnja PVC i Al roletni<br>-Ugradnja rolo, fiksnih i plisa komarnika<br>-Ugradnja zebra, rolo i trakastih zavesa<br>-Ugradnja rolo garažnih vrata",
imgSrc: "assets/images/slikekartica/kartica-002.png",  // Image for the card
modalImgSrc: "assets/images/slikekartica/modal-002.png",  // Image for the modal
fbLink: "https://www.facebook.com/pvcalstolarijapavel/",
instaLink: null,
websiteLink: "https://www.stolarijapavel.rs/"
        },
        {
city: "Bačka Palanka",
title: "Auto enterijer Brkic BP",
occupation: "Majstor",  // Occupation or service type
contact: "060/4233-080 ; 060/4233-088 ; 063/1618-450",
description: "U našoj autoperionici, svaki automobil prolazi kroz pažljiv proces čišćenja koji ne samo da uklanja svaku mrlju, već i vraća sjaj vašem vozilu, pružajući vam osjećaj svežine i ponosa svaki put kada sednete za volan.",
imgSrc: "assets/images/slikekartica/kartica-003.png",  // Image for the card
modalImgSrc: "assets/images/slikekartica/modal-003.png",  // Image for the modal
fbLink: "https://www.facebook.com/dejan.brkic.334",
instaLink: null,
websiteLink: null,
        },
        {
city: "Beograd",
title: "House Shop",
occupation: "Prodavnica",  // Occupation or service type
email: "houseshop093@gmail.com",
description: "Obezbedite udobnost i praktičnost za svaki deo vašeg doma uz našu online prodavnicu raznih proizvoda za kuću. Pronađite sve što vam je potrebno da učinite svoj život lakšim i vaš dom udobnijim. Poručite kvalitetne proizvode uz brzu dostavu!",
imgSrc: "assets/images/slikekartica/kartica-004.png",  // Image for the card
modalImgSrc: "assets/images/slikekartica/modal-004.png",  // Image for the modal
fbLink: "https://www.facebook.com/profile.php?id=61550908141131",
instaLink: null,
websiteLink: null,
        },
        {
city: "Vršac",
title: "BZ Computers",
occupation: "Online prodaja",  // Occupation or service type
contact: "063/8114-459",
email: "bzcomputers@gmail.com",
description: "Potrebna vam je brza popravka računara ili želite da nabavite novi uređaj? Ne tražite dalje! Nudimo vrhunski servis i širok asortiman računara po pristupačnim cenama. Obezbedite sebi kvalitetnu računarsku podršku već danas - kontaktirajte nas!",
imgSrc: "assets/images/slikekartica/kartica-005.png",  // Image for the card
modalImgSrc: "assets/images/slikekartica/modal-005.png",  // Image for the modal
fbLink: "https://www.facebook.com/profile.php?id=61556268548579",
instaLink: null,
websiteLink: null,
        },
        {
city: "Niš",
title: "Dubinsko pranje auto-enterijera",
occupation: "usluzna auto",
contact: "064/185-1000, 069/185-1000",
email: null,
description: "Dubinsko pranje celokupnog enterijera automobila pranje poda.sedišta kao i delove plastike. Dubinsko pranje vršimo na zakazivanje kao i mogućnost dolaska na kućnoj adresi.",
imgSrc: "assets/images/slikekartica/kartica-006.jpg",  // Image for the card
modalImgSrc: "assets/images/slikekartica/modal-006.png",  // Image for the modal
fbLink: "https://www.facebook.com/people/Dubinsko-pranje-auto-enterijera-Ni%C5%A1/100063786406117/",  // Add the Facebook link if available
instaLink: null,
websiteLink: null,
        },
        {
city: "Vrbas",
title: "Samba Kafa",
occupation: "Online prodaja",
contact: "021/794-731",
email: "samba@samba.rs",
description: "Želimo da vam kažemo veliko hvala za svaku lepu reč koju podelite sa nama! Kada znamo da vi uživate imamo još više motivacije da rastemo i održavamo naš kvalitet na nivou jer vi to zaslužujete. Već 25 godina pravimo Sambu za VAS. I još više se radujemo godinama koje dolaze!!",
imgSrc: "assets/images/slikekartica/kartica-007.jpg",
modalImgSrc: "assets/images/slikekartica/modal-007.png",
fbLink: "https://www.facebook.com/samba.kafa",
instaLink: null,
websiteLink: "https://samba.rs/?_rstr_nocache=rstr99266571aa20bf47",
        },
        {
city: "Niš",
title: "Jez Cisto - Ciscenje i Odrzavanje",
occupation: "Zanatlija",
contact: "064/3466-232",
email: "jezcistonis@gmail.com",
description: "Ciscenje Poslovnog i Kancelarijskog prostora u Nisu i okolini.",
imgSrc: "assets/images/slikekartica/kartica-008.png",
modalImgSrc: "assets/images/slikekartica/modal-008.png",
fbLink: "https://www.facebook.com/JezcistoNis/",
instaLink: null,
websiteLink: null,
        },
        {
city: "Kruševac",
title: "Odrzavanje dvorista Krusevac",
occupation: "Zanatlija",
contact: "062/8898-896",
email: null,
description: "Kosenje dvorista, placeva, vocnjaka.",
imgSrc: "assets/images/slikekartica/kartica-009.png",
modalImgSrc: "assets/images/slikekartica/modal-009.png",
fbLink: "https://www.facebook.com/profile.php?id=100070227195804",
instaLink: null,
websiteLink: null,
        },
        {
city: "Niš",
title: "Računari Srbija",
occupation: "Online prodaja",
contact: "060/5498-830",
email: "bridge7802@yahoo.com",
description: "Prodaja polovnih računara, otkup vaseg uz doplatu uz jači, takodje i servis istih...",
imgSrc: "assets/images/slikekartica/kartica-010.png",
modalImgSrc: "assets/images/slikekartica/modal-010.png",
fbLink: "https://www.facebook.com/0605498830bridge/",
instaLink: null,
websiteLink: null,
        },
        {
city: "Niš",
title: "MCZ online prodavnica",
occupation: "Online prodaja",
contact: "063/8492-774",
email: null,
description: "Najbolji online shop za tehniku i pokucstvo.",
imgSrc: "assets/images/slikekartica/kartica-011.png",
modalImgSrc: "assets/images/slikekartica/modal-011.png",
fbLink: "https://www.facebook.com/mczholanis/",
instaLink: null,
websiteLink: null,
        },
        
        {
city: "Kraljevo",
title: "Odrzavanje dvorista",
occupation: "Zanatlija",
contact: "069/1012-119",
email: null,
description: "Sve usluge uredjivanja. Trimer - kosacica. ✅ Cena: Dogovor (zavisi od povrsine, velicine trave). 🤝 Snimite povrsinu, kazemo Vam cenu. ✅👌",
imgSrc: "assets/images/slikekartica/kartica-012.png",
modalImgSrc: "assets/images/slikekartica/modal-012.png",
fbLink: "https://www.facebook.com/profile.php?id=61558558743791",
instaLink: null,
websiteLink: null,
        },
        {
city: "Zaječar",
title: "Održavanje voćnjaka i rezidbe Petrović",
occupation: "Zanatlija, Poljoprivreda",
contact: "060/6419-316",
email: null,
description: "Usluge održavanja voćnjaka i rezidbi. Rezidba voca. <br> Formiranje mladih zasada, <br> Rezidba oraha i lesnika <br> Malciranje, Voskiranje, Krecenje, <br> Plan i program zastite",
imgSrc: "assets/images/slikekartica/kartica-013.png",
modalImgSrc: "assets/images/slikekartica/modal-013.png",
fbLink: "https://www.facebook.com/profile.php?id=100038356303030",
instaLink: null,
websiteLink: null,
        },
        {
city: "Požega",
title: "Relić Računari",
occupation: "Zanatlija",
contact: "031/811-290, 064/6164-414",
email: "relicracunari@gmail.com",
description: "Servis i prodaja računara i prateće opreme...",
imgSrc: "assets/images/slikekartica/kartica-014.png",
modalImgSrc: "assets/images/slikekartica/modal-014.jpg",
fbLink: "https://www.facebook.com/ServisPozega/",
instaLink: null,
websiteLink: null,
      },
      {
city: "Jagodina",
title: "Računari FIM Jagodina",
occupation: "Zanatlija",
contact: "035/8222-020",
email: "racunari.jagodina@gmail.com",
description: "Prodaja, servis i održavanje računara i laptopova. 24 godina na istom mestu.",
imgSrc: "assets/images/slikekartica/kartica-015.png",
modalImgSrc: "assets/images/slikekartica/modal-015.jpg",
fbLink: "https://www.facebook.com/racunari.jagodina/",
instaLink: null,
websiteLink: "https://fimteck.rs/",
        
      },
        {
city: "Kraljevo",
title: "Sax-Al Kraljevo",
occupation: "Zanatlija",
contact: "060/3116-880, 066/311-688",
email: null,
description: "Aluminijumska i PVC stolarija sa pratecim elementima.",
imgSrc: "assets/images/slikekartica/kartica-016.png",
modalImgSrc: "assets/images/slikekartica/kartica-016.png",
fbLink: "https://www.facebook.com/saxal.kraljevo",
instaLink: null,
websiteLink: null,
          },
          {
city: "Novi Sad",
title: "Slep Sluzba Iskop Galians",
occupation: "Zanatlija",
contact: "065/2127-601",
email: "galijans2023@gmail.com",
description: "N/A",
imgSrc: "assets/images/slikekartica/kartica-017.png",
modalImgSrc: "assets/images/slikekartica/modal-017.jpg",
fbLink: "https://www.facebook.com/profile.php?id=100091580266772",
instaLink: null,
websiteLink: null,
          },
          {
city: "Kraljevo",
title: "Nsd Bravarska Radionica",
occupation: "Zanatlija",
contact: "064/5115-801",
email: null,
description: "Posetite našu facebook stranicu gde možete videti sve naše radove!",
imgSrc: "assets/images/slikekartica/kartica-018.png",
modalImgSrc: "assets/images/slikekartica/modal-018.jpg",
fbLink: "https://www.facebook.com/profile.php?id=100079861255768",
instaLink: null,
websiteLink: null,
          },
          {
city: "Srbobran",
title: "Racunari Srbobran",
occupation: "Prodavnica IT-tehnologija",
contact: "Preko Facebooka",
email: null,
description: "Računari s 10-godišnjim iskustvom. Popravke i prodaja. Kvalitetna oprema. Vaš pouzdan partner.",
imgSrc: "assets/images/slikekartica/kartica-019.png",
modalImgSrc: "assets/images/slikekartica/kartica-019.png",
fbLink: "https://www.facebook.com/profile.php?id=61556415501873",
instaLink: null,
websiteLink: null,
          },
          
          {
city: "Online",
title: "Srbija Online Prodaja",
occupation: "Online prodaja",
contact: "Preko Facebooka",
email: null,
description: "🔥 FENOMENALNA PONUDA🔥 <br>✅Veličine od 36 Do 47✅ <br>📦BRZA DOSTAVA 24/48h⏳ <br>📸SLIKE UŽIVO📸 <br>📍Moguća zamena👍 <br>🔹Slanje na kućnu adresu🔹 <br>💰Plaćanje  pouzećem👌🏼 <br>Slanje bex kurirskom službom, 490 ptt",
imgSrc: "assets/images/slikekartica/kartica-020.png",
modalImgSrc: "assets/images/slikekartica/kartica-020.png",
fbLink: "https://www.facebook.com/profile.php?id=100091307641928",
instaLink: null,
websiteLink: null,
          },
          {
city: "Vršac",
title: "Prodavnica Nestor Vršac",
occupation: "Prodavnica",
contact: "062/8330-655",
email: "nestordoo@gmail.com",
description: "-vodovod <br>-kanalizacija <br>-sanitarija, bojleri, slavine <br>-baštenski program <br>-navodnjavanje kap po kap",
imgSrc: "assets/images/slikekartica/kartica-21.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-21.jpg",
fbLink: "https://www.facebook.com/nestordoo/",
instaLink: null,
websiteLink: null,
          },
          {
city: "Smederevo",
title: "Prodavnica 'Kod Ilije'",
occupation: "Prodavnica",
contact: "060/6637-729",
email: null,
description: "Prodavnica sa NAJNIŽIM CENAMA! <br> Kod Ilije sve milije!",
imgSrc: "assets/images/slikekartica/kartica-22.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-22.jpg",
fbLink: "https://www.facebook.com/kodilijee/",
instaLink: null,
websiteLink: null,
          },
          {
city: "Vrnjačka Banja",
title: "Dubinsko pranje Vrnjacka Banja",
occupation: "usluzna-delatnost",
contact: "062/9748-634",
email: null,
description: "Dubinsko pranje tepiha, automobila, nameštaja, pranje svih vrsta podova. <br> Poliranje automobila i farova",
imgSrc: "assets/images/slikekartica/kartica-23.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-23.jpg",
instaLink: null,
fbLink: "https://www.facebook.com/kumicx5/",
websiteLink: null,
          },
          {
city: "Beograd",
title: "Dubinsko Pranje Nenad",
occupation: "usluzna-delatnost",
contact: "064/2420-865",
email: "Nenad1981@gmail.com",
description: "Profesionalno dubinsko pranje mebliranog i kožnog nameštaja u Vašem domu!",
imgSrc: "assets/images/slikekartica/kartica-24.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-24.jpg",
instaLink: null,
fbLink: "https://www.facebook.com/profile.php?id=100063554051831",
websiteLink: null,
          },
          {
city: "Požarevac",
title: "Pranje tepiha 'Tepih Sjaj'",
occupation: "usluge zanatlija",
contact: "069/1747-086",
email: null, // Nema emaila u ovom slučaju
description: "Pranje tepiha TEPIH SJAJ, usluga pranja tepiha na najsavremenijim mašinama.<br>- Pranje tepiha, staza, etisona<br>- Pranje jorgana i ćebadi<br>- Dubinsko pranje nameštaja i automobila<br>Suv i mirišljav tepih danas za sutra!<br>Pranje tepiha i leti i zimi, mogućnost prevoza.<br>Povoljne cene!",
imgSrc: "assets/images/slikekartica/kartica-25.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-25.jpg",
instaLink: "https://www.instagram.com/tepihsjaj8479/",
fbLink: "https://www.facebook.com/tepihsjajpo/",
websiteLink: null, // Nema websajta
          },
          {
city: "Bor",
title: "Dubinsko pranje Bor",
occupation: "usluge zanatlija",
contact: "060/0434-495",
email: "licics@yahoo.com",
description: "-DUBINSKO PRANJE.<br>Pranje nameštaja, pranje automobila.<br>USLUŽNO PRANJE U ULTRAZVUČNOJ KADI",
imgSrc: "assets/images/slikekartica/kartica-26.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-26.jpg",
instaLink: null,
fbLink: "https://www.facebook.com/profile.php?id=100063759354934",
websiteLink: null
          },
          {
city: "Novi Pazar",
title: "Namestaj Bruncevic",
occupation: "namestaj",
contact: "069/607-022",
email: null,
description: "Izrada nameštaja po meri i želji",
imgSrc: "assets/images/slikekartica/kartica-27.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-27.jpg",
instaLink: "https://www.instagram.com/namestaj_bruncevic/",
fbLink: "https://www.facebook.com/profile.php?id=100063640477545",
websiteLink: null
          },
          // Treci blok
          {
city: "Lajkovac",
title: "Dubinsko Pranje Dule Miljanić",
occupation: "usluge zanatlija",
contact: "064/5988-336",
email: null,
description: "Dubinsko pranje, mogućnost pranja firminih vozila.",
imgSrc: "assets/images/slikekartica/kartica-28.jpg",
modalImgSrc: "assets/images/slikekartica/modal-28.jpg",
instaLink: null,
fbLink: "https://www.facebook.com/dubinskopranjedulemiljanic",
websiteLink: null
          },
          {
city: "Online",
title: "Profi alati",
occupation: "prodavnica",
contact: "061/1938-110",
email: "",
description: "Profi alati se bave prodajom profi, hobi i specijalizovanog alata za mehaničare. <br>Dostavljamo robu kurirskom službom. <br>Alat se može poručiti putem poruke ovde, Vibera, pozivom ili SMS-om.",
imgSrc: "assets/images/slikekartica/kartica-29.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-29.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/profile.php?id=100064195354543",
websiteLink: ""
          },
          {
city: "Beograd",
title: "SmartGlass",
occupation: "prodavnica",
contact: "060/6165-220",
email: "sbojan46@gmail.com",
description: "Izrada tuš kabina po meri. Staklo 8mm kaljeno. Inoks okov. Ugradnja je uračunata u cenu. Dostava je besplatna za Beograd i okolinu. Kratki rokovi isporuke. Pozovite nas.",
imgSrc: "assets/images/slikekartica/kartica-30.jpg",
modalImgSrc: "assets/images/slikekartica/modal-30.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/tuskabine101/",
websiteLink: ""
          },
          {
city: "Pančevo",
title: "Parket Kalmar - Debeljača",
occupation: "majstor",
contact: "066/6654-955",
description: "Vršimo ugradnju svih vrsta parketa, bambus parket, laminat, brodski pod. Takođe i obradu starih parketa - hoblovanje, fugovanje, bajcovanje i lakiranje.",
imgSrc: "assets/images/slikekartica/kartica-31.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-31.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/profile.php?id=100045551456298",
websiteLink: ""
          },
          {
city: "Niška Banja",
title: "Parket Servis \"Kocić\"",
occupation: "majstor",
contact: "063/335-577",
email: "oliverkocic@hotmail.com",
description: "Parketarske usluge kao što su postavljanje, hoblovanje, lakiranje i poliranje parketa je delatnost kojom se parket servis „Kocić“ sa uspehom bavi od 1938. godine.",
imgSrc: "assets/images/slikekartica/kartica-32.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-32.jpg",
instaLink: "https://www.instagram.com/parketservisoliverkocic/",
fbLink: "https://www.facebook.com/parketservis/",
websiteLink: "https://parketparket.com/"
          },
          {
city: "Pančevo",
title: "Swiss Design",
occupation: "namestaj",
contact: "069/1010-212; 060/5101-017",
email: "swissdesign1010@gmail.com",
description: "Vaš partner za besprekoran dizajn i vrhunski kvalitet enterijera.",
imgSrc: "assets/images/slikekartica/kartica-33.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-33.jpg",
instaLink: null,
fbLink: "https://www.facebook.com/mister.in/",
websiteLink: null,
          },
          {
city: "Novi Pazar",
title: "Sve za vaseg ljubimca na 4 tocka",
occupation: "auto online-prodaja",
contact: "069/1010-212; 060/5101-017",
email: "draganakovac74@gmail.com",
description: "Vaš partner za besprekoran dizajn i vrhunski kvalitet enterijera",
imgSrc: "assets/images/slikekartica/kartica-34.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-34.jpg",
instaLink: null,
fbLink: "https://www.facebook.com/draganaauto/",
websiteLink: null,
          },
          {
city: "Sombor",
title: "Usluzni Radovi Sombor košenje Trave i drugo",
occupation: "zanatlija usluzna-delatnost",
contact: "061/6864-220",
email: null,
description: "Košenje trave, obaranje drveća, grana, prskanje i orezivanje voćki, agro zastita (plavo ulje, bakar, itd.), oblikovanje tuja, žive ograde, bršljen, prskanje total.korova, sadnja i sve oko holtikulture.",
imgSrc: "assets/images/slikekartica/kartica-35.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-35.jpg",
instaLink: null,
fbLink: "https://www.facebook.com/profile.php?id=100083416476873",
websiteLink: null,
            
          },
          {
city: "Online",
title: "home decor vanila - sve za dom",
occupation: "online-prodaja kupatilo kuhinja",
contact: "",
email: null,
description: "Unesite toplinu i eleganciju u svoj dom uz Home Decor Vanila. Nudimo širok asortiman dekorativnih predmeta i dodataka za savršen ambijent.",
imgSrc: "assets/images/slikekartica/kartica-36.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-36.jpg",
instaLink: null,
fbLink: "https://www.facebook.com/profile.php?id=100042521227483",
websiteLink: null,
          },
          {
city: "Online",
title: "Sve za dom - Online Shop",
occupation: "online-prodaja kupatilo kuhinja",
contact: "",
email: "",
description: "Nudimo širok asortiman dekorativnih predmeta i dodataka za savršen ambijent.",
imgSrc: "assets/images/slikekartica/kartica-37.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-37.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/profile.php?id=61556184224106",
websiteLink: "",
          },
          {
city: "Šid",
title: "Usluzno kosenje i krcenje",
occupation: "usluzna-delatnost zanatlija majstor",
contact: "061/265-33-78; 066/4227-355",
email: null,
description: "Usluzno kosenje, krcenje zaraslih povrsina kvalitetnom opremom. Odvoz i dovoz prikolicom, orezivanje žive ograde i prskanje voća atomizerom.",
imgSrc: "assets/images/slikekartica/kartica-38.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-38.jpg",
instaLink: "",
fbLink: "",
websiteLink: "",
          },
          {
city: "Šabac",
title: "Košenje - Šabac",
occupation: "Majstor",
contact: "060/3705-955 - Milan",
email: "milankrstaric@gmail.com",
description: "Održavanje i uređenje travnjaka, voćnjaka, vinograda,..",
imgSrc: "assets/images/slikekartica/kartica-39.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-39.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/profile.php?id=100063104715741",
websiteLink: ""
          },
          {
city: "Pančevo",
title: "Košenje travnjaka, šišanje ograde, tuja i orezivanje voća, Pančevo",
occupation: "Majstor",
contact: "069/1303-591 - Igor",
email: "",
description: "Košenje trave, šišanje ograda i tuja, Pančevo.",
imgSrc: "assets/images/slikekartica/kartica-40.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-40.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/profile.php?id=100064918051556",
websiteLink: ""
          },
          {
city: "Novi Sad",
title: "Košenje NS",
occupation: "Majstor",
contact: "061/2100-811",
email: "kosenjens@gmail.com",
description: "Obaranje stabala i košenje, krčenje zaraslih površina, orezivanje žive ograde, tuja, stabala (korpa). Postavljanje tepih travnjaka i pravljenje novih travnjaka. Nivelacija, kultiviranje, nasipanje a potom i ravnanje bagerom. Rušenje starih kuća i objekata.",
imgSrc: "assets/images/slikekartica/kartica-41.jpg",
modalImgSrc: "assets/images/slikekartica/modal-41.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/kosenjens/",
websiteLink: ""
          },
          {
city: "Beograd",
title: "Električar Zvezdara",
occupation: "Električar",
contact: "064/4766-561; 065/6127-192",
email: "",
description: "Električar sa 35 godina iskustva. Povoljno a pre svega kvalitetno.",
imgSrc: "assets/images/slikekartica/kartica-42.jpg",
modalImgSrc: "assets/images/slikekartica/modal-42.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/profile.php?id=100078502579039",
websiteLink: ""
          },
          {
city: "Beograd",
title: "Građevinska Limarija",
occupation: "Limarski Radovi",
contact: "065/8016-470; 064/1133-971",
email: "limbg011@gmail.com",
description: "LIM BG PLUS stoji Vam na usluzi za sve vrste limarskih radova - oluci, okapnice, opšivanja dimnjaka i oluka, slivnici, sanacija i hidroizolacija krovova. Takođe, ostali limarski radovi su poslovi koje radimo stručno, povoljno i brzo.",
imgSrc: "assets/images/slikekartica/kartica-43.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-43.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/profile.php?id=100078502579039",
websiteLink: "https://limbgplus.com"
          },
          {
city: "Online",
title: "Ručni radovi Dijana",
occupation: "Ručno pravljeni proizvodi",
contact: "",
email: "",
description: "Budite originalni! Jedinstvene ručno rađene igračke, kapice, šalovi, papice, trakice i još mnogo toga.",
imgSrc: "assets/images/slikekartica/kartica-44.jpg",
modalImgSrc: "assets/images/slikekartica/modal-44.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/dihandmade8",
websiteLink: ""
          },
          {
city: "Beograd - Zemun",
title: "Igraonica Džunglica",
occupation: "Igraonica",
contact: "065/2280-724",
email: "dzunglica.igraonica@gmail.com",
description: "Igraonica za decu u Zemunu, proslava rođendana i drugih zabava za decu",
imgSrc: "assets/images/slikekartica/kartica-45.jpg",
modalImgSrc: "assets/images/slikekartica/modal-45.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/dihandmade8",
websiteLink: "https://dzunglica.com"
          },
          {
city: "Požarevac",
title: "Restoran i Dečija Igraonica Zamak Pozarevac",
occupation: "Restoran i Igraonica",
contact: "064/232-88-66",
email: "",
description: "Restoran sa dečijom igraonicom. Rođendani su zatvorenog tipa. Igraonica za decu.",
imgSrc: "assets/images/slikekartica/kartica-46.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-46.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/zamakpozarevac/",
websiteLink: ""
          },
          {
city: "Požarevac",
title: "Pinjate Pozarevac",
occupation: "Online Prodaja",
contact: "",
email: "",
description: "Sve pinjate su ručni rad i unikat. Potrebno je poručiti ih 5 dana unapred.",
imgSrc: "assets/images/slikekartica/kartica-47.jpg",
modalImgSrc: "assets/images/slikekartica/modal-47.jpg",
instaLink: "https://www.instagram.com/pinjatepozarevac",
fbLink: "https://www.facebook.com/pinjatepozarevac",
websiteLink: ""
          },
          {
city: "Doljevac - Pukovac",
title: "Izgradnja Solarne Elektrane - ProElectric",
occupation: "Izgradnja Solarne Elektrane",
contact: "065/663-51-72",
email: "proelectricrs@gmail.com",
description: "Ugradnja solarnih panela za proizvodnju struje",
imgSrc: "assets/images/slikekartica/kartica-48.png",
modalImgSrc: "assets/images/slikekartica/modal-48.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/profile.php?id=100085168274509",
websiteLink: "https://www.proelectric.rs"
          },
          {
city: "Velika Plana",
title: "Alu i PVC stolarija Boda",
occupation: "ALU i PVC stolarija",
contact: "069/4140-045",
email: "alupvcboda@gmail.com",
description: "Proizvodnja ALU i PVC stolarije. Roletne, komarnici, garažna vrata, zastakljivanje terasa. Sve po želji.",
imgSrc: "assets/images/slikekartica/kartica-49.jpg",
modalImgSrc: "assets/images/slikekartica/modal-49.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/AluPVCBoda/",
websiteLink: ""
          },
          {
city: "Smederevo",
title: "Garniture od paleta - Smederevo",
occupation: "Proizvodnja garnitura od paleta",
contact: "064/9689-418",
email: "zdravkovicnegovan222@gmail.com",
description: "Garniture od paleta za ulepšavanje vaših dvorišta i terasa.",
imgSrc: "assets/images/slikekartica/kartica-50.jpg",
modalImgSrc: "assets/images/slikekartica/modal-50.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/Garnitureodpaletasd/",
websiteLink: ""
          },
          {
city: "Beograd - Boleč",
title: "Pro Detailing - Beograd",
occupation: "Auto Detailing",
contact: "",
email: "",
description: "Uživajte u besprekorno čistom vozilu sa našom uslugom detaljnog čišćenja. Od osvežavanja unutrašnjosti do savršenog sjaja spoljašnjosti – brinemo o svakom detalju!",
imgSrc: "assets/images/slikekartica/kartica-51.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-51.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/Prodetailing0",
websiteLink: ""
          },
          {
city: "",
title: "Delux Nameštaj",
occupation: "Prodaja nameštaja",
contact: "065/8256-698",
email: "dejanmilosevicmp@gmail.com",
description: "Delux Nameštaj – Vaša destinacija za luksuzan i moderan nameštaj!",
imgSrc: "assets/images/slikekartica/kartica-52.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-52.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/deluxnamestajmalipozarevac",
websiteLink: ""
          },
          {
city: "Beograd",
title: "Nameštaj M",
occupation: "Prodaja tapaciranog nameštaja",
contact: "061/2489-765",
email: "namestajm.rs@gmail.com",
description: "Nameštaj M – Vaš partner za savršeni tapacirani nameštaj!",
imgSrc: "assets/images/slikekartica/kartica-53.jpg",
modalImgSrc: "assets/images/slikekartica/modal-53.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/milicnamestaj",
websiteLink: ""
          },
          {
city: "Bečej",
title: "Namestaj Ivan",
occupation: "Prodaja nameštaja",
contact: "062/8400-198",
email: "",
description: "Poštovani kupci! Nudimo vam veliki izbor nameštaja, brzu i efikasnu isporuku! 0628400198",
imgSrc: "assets/images/slikekartica/kartica-54.jpg",
modalImgSrc: "assets/images/slikekartica/modal-54.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/profile.php?id=100068032493773",
websiteLink: ""
          },
          {
city: "Paraćin",
title: "Parketar Bole",
occupation: "Građevinski radovi",
contact: "061/1974-572",
email: "",
description: "Postavljanje, hoblovanje, lakiranje, reparacija starog i oštećenog parketa, ugradnja laminata, sobnih vrata, kuhinja, itd. NE VERUJTE NA REČ, VEĆ SE SAMI UVERITE BOLE - 061/197-45-72",
imgSrc: "assets/images/slikekartica/kartica-57.jpg",
modalImgSrc: "assets/images/slikekartica/modal-57.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/parketarbole",
websiteLink: ""
          },
          {
city: "Kruševac",
title: "Namestaj Home Enterijer",
occupation: "Prodaja nameštaja",
contact: "069/1103-030",
email: "Info@homeenterijer.rs",
description: "✨Savršen nameštaj za vaš dom. ✨Prevoz i montaža do željene adrese. ✨Kvalitet, najbolji materijali...",
imgSrc: "assets/images/slikekartica/kartica-58.jpg",
modalImgSrc: "assets/images/slikekartica/modal-58.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/profile.php?id=61552064458133",
websiteLink: ""
          },
          {
city: "Požega",
title: "Elektro Sretenović",
occupation: "Električar / Zanat",
contact: "064/1889-740",
email: "vladimirsretenovics@gmail.com",
description: "- Sve vrste elektro i gromobranskih instalacija\n- Ugradnja i održavanje elektro pumpi\n- Video nadzor i alarmni sistemi",
imgSrc: "assets/images/slikekartica/kartica-59.jpg",
modalImgSrc: "assets/images/slikekartica/modal-59.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/vlade.sretenovic",
websiteLink: ""
},
{
city: "Aleksandrovac",
title: "Jelena Radno Odelo",
occupation: "Online prodaja radnih odela",
contact: "",
email: "",
description: "Nudimo radna odela koja kombinuju izdržljivost i stil. Idealna za sve potrebe, od radnih mesta do profesionalnih događaja. Pronađite savršeno odelo za vas.",
imgSrc: "assets/images/slikekartica/kartica-60.jpg",
modalImgSrc: "assets/images/slikekartica/modal-60.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/profile.php?id=100069071651413",
websiteLink: ""
          },
          {
city: "Novi Sad",
title: "Montaža i Servis Klima Uređaja",
occupation: "Majstor za klime",
contact: "063/492-686",
email: "",
description: "Potrebna vam je instalacija ili servis klima uređaja? Naša stručna ekipa pruža brzu i pouzdanu ugradnju i održavanje klima uređaja. Osigurajte savršenu temperaturu u svom prostoru uz našu pomoć.",
imgSrc: "assets/images/slikekartica/kartica-61.jpg",
modalImgSrc: "assets/images/slikekartica/kartica-61.jpg",
instaLink: "",
fbLink: "https://www.facebook.com/profile.php?id=61558725333902",
websiteLink: "",
          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },

          
          // Add more card data here...
      ];




























      


// Function to create a single card dynamically based on the card data
function createCard(cardInfo, index) {
  const card = document.createElement('div');
  card.classList.add('col-lg-4', 'col-md-6', 'properties-items');

  card.innerHTML = `
  <div class="item ${cardInfo.city.toLowerCase()} ${cardInfo.occupation.toLowerCase()}">
  <p><strong>${cardInfo.city}</strong></p>
  <div class="image-container">
      <img style="cursor: pointer;" src="${cardInfo.imgSrc}" alt="" class="image-click"
      data-modal="modal${index + 1}" data-image="${cardInfo.imgSrc}">
  </div>
  <h4>${cardInfo.title}</h4>
  <ul>
      <li>Kontakt: <span>${cardInfo.contact}</span></li>
      <p>${cardInfo.description}</p>
  </ul>
  ${cardInfo.personalPageLink ? `<div class="main-button-info" style="width: 90%; margin: 0 auto;"><a href="${cardInfo.personalPageLink}" style="display: block; text-align: center; color: white;">Detaljnije</a></div>` : ''}
  <div class="main-button">
      ${cardInfo.fbLink ? `<a style="color: white;" href="${cardInfo.fbLink}" target="_blank"><i class="fa-brands fa-facebook"></i></a>` : ''}
      ${cardInfo.instaLink ? `<a style="color: white;" href="${cardInfo.instaLink}" target="_blank"><i class="fa-brands fa-instagram"></i></a>` : ''}
      ${cardInfo.websiteLink ? `<a style="color: white;" href="${cardInfo.websiteLink}" target="_blank"><i class="fa-solid fa-globe"></i></a>` : ''}
  </div>
</div>
  `;

  propertiesBox.appendChild(card);
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


  });