// Language selector


// Create a function to change
        // the hash value of the page
        function changeLanguage(lang) {
            localStorage.setItem('language', lang)
            location.reload();
        }
 
        // Define the language reload anchors
        let language = {
            dk: {
                navbar_home: "Hjem",
                navbar_navbar: "Navigationsbar",
                navbar_carousel: "Karrusel",
                navbar_hosting: "Hosting",
                navbar_other: "Andre guides",
                navbar_about: "Om os",

                bg_image_heading: "Kodning behøver ikke at være svært.",
                bg_image_subheading: "Start din rejse med GirlCode",
                bg_image_text: "Fordi kodning er for alle.",
                bg_image_button: "START NU",

                card_heading: "HVAD FÅR DU UD AF DET?",
                card1_subheading: "Praktisk læring",
                card1_text: "Deltag i et dynamisk event med praktisk læring hos GirlCode! Dyk ned i kodning gennem interaktive workshops og samarbejdsprojekter, der er designet til at give dig praktisk erfaring. Arbejd sammen med mentorer og jævnaldrende for at bygge, skabe og løse problemer i et støttende miljø. Uanset om du er nybegynder eller ønsker at skærpe dine færdigheder, er dette event den perfekte mulighed for at lære ved at gøre og tage dine kodningsevner til næste niveau. Gå ikke glip af denne spændende chance for at gøre dine idéer til virkelighed!",
                card2_subheading: "Expert kodning hjælp",
                card2_text: "Hos GirlCode tilbyder vi Ekspert Kodningshjælp til at støtte din rejse inden for teknologi. Vores team af erfarne mentorer er her for at give personlig vejledning, besvare dine spørgsmål og hjælpe dig med at overvinde enhver kodningsudfordring, du står over for. Uanset om du fejlretter kode, lærer et nyt programmeringssprog eller arbejder på komplekse projekter, er vores eksperter dedikerede til at hjælpe dig med at få succes. Styrk dine kodningsevner med GirlCodes professionelle og imødekommende assistance. Find mere via om os.",
                card3_subheading: "Anvendelige færdigheder",
                card3_text: "Hos GirlCode lægger vi vægt på kodningsfærdigheder, der er alsidige og efterspurgte i hele tech-industrien. Vores omfattende pensum dækker flere programmeringssprog, webudvikling og software engineering principper. Disse bredt anvendelige færdigheder sikrer, at du er forberedt på diverse roller, fra front-end design til back-end udvikling og alt derimellem. Med GirlCode vil du opnå den kodningsekspertise, der er nødvendig for at trives i ethvert teknologisk miljø og bygge en succesfuld karriere.",

                text_heading: "Kvinder udgør kun 25% af alle kodningsjobs, men tjener 30% mindre end mænd",
                text_subheading: "Girlcode er til for at ændre dette",

                guides_heading1: "Navigationsbar",
                guides_text1: "Lær hvordan du kan bygge en navigationsbar til din hjemmeside",
                guides_link1: "Læs mere",

                guides_heading2: "Karrusel",
                guides_text2: "Lær hvordan du kan bygge en karrusel til din hjemmeside",
                guides_link2: "Læs mere",

                guides_heading3: "Hosting",
                guides_text3: "Lær hvordan du kan hoste din hjemmeside på forskellige måder",
                guides_link3: "Læs mere",

                video_heading: "HVAD VI KAN GØRE FOR DIG",

                footer_text: "Følg os på sociale medier",
            }
        };
 
        // Check if a hash value exists in the URL
        if(localStorage.getItem('language') == 'dk') {
 
            // Set the content of the webpage
            // depending on the hash value
                navbar_home.textContent = language.dk.navbar_home;
                navbar_navbar.textContent = language.dk.navbar_navbar;
                navbar_carousel.textContent = language.dk.navbar_carousel;
                navbar_hosting.textContent = language.dk.navbar_hosting;
                navbar_other.textContent = language.dk.navbar_other;
                navbar_about.textContent = language.dk.navbar_about;

                bg_image_heading.textContent = language.dk.bg_image_heading;
                bg_image_subheading.textContent = language.dk.bg_image_subheading;
                bg_image_text.textContent = language.dk.bg_image_text;
                bg_image_button.textContent = language.dk.bg_image_button;

                card_heading.textContent = language.dk.card_heading;
                card1_subheading.textContent = language.dk.card1_subheading;
                card1_text.textContent = language.dk.card1_text;
                card2_subheading.textContent = language.dk.card2_subheading;
                card2_text.textContent = language.dk.card2_text;
                card3_subheading.textContent = language.dk.card3_subheading;
                card3_text.textContent = language.dk.card3_text;

                text_heading.textContent = language.dk.text_heading;
                text_subheading.textContent = language.dk.text_subheading

                guides_heading1.textContent = language.dk.guides_heading1;
                guides_text1.textContent = language.dk.guides_text1;
                guides_link1 = language.dk.guides_link1;

                guides_heading2.textContent = language.dk.guides_heading2;
                guides_text2.textContent = language.dk.guides_text2;
                guides_link2 = language.dk.guides_link2;

                guides_heading3.textContent = language.dk.guides_heading3;
                guides_text3.textContent = language.dk.guides_text3;
                guides_link3 = language.dk.guides_link3;

                video_heading.textContent = language.dk.video_heading;

                footer_text.textContent = language.dk.footer_text;
            }

