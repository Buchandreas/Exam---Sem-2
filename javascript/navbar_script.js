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

                headline_heading: "NAVIGATIONSBAR",
                headline_text: "Velkommen til vores omfattende guide om kodning af en navigationslinje! Navigationslinjer er en grundlæggende del af webdesign og giver brugerne en intuitiv måde at udforske din hjemmeside på. I denne vejledning vil vi dykke ned i de forskellige typer af navigationslinjer, deres betydning, og trin-for-trin instruktioner til at oprette dem fra bunden.",

                elaboration_heading: "UDDYBNING",

                navbarguide_heading: "Basal struktur:",
                navbarguide_text: "En navigationslinje, eller navbar, er typisk en samling af links, der guider brugerne til forskellige sektioner af en hjemmeside. Her er den grundlæggende HTML-struktur for en simpel navigationslinje:",

                navbarguide_codesnippet1: "<nav> tag: Definerer navigationssektionen.",
                navbarguide_codesnippet2: "<ul> tag: Representerer en uordnet liste af links.",
                navbarguide_codesnippet3: "<il> tag: Hvert listeemne inden for den uordnede liste.",
                navbarguide_codesnippet4: "<a> tag: Anchor-tags repræsenterer de faktiske links.",

                navbarguide_styling_heading: "Styling af navigationsbaren",
                navbarguide_styling_text: "At style navigationslinjen er afgørende for at gøre den visuelt tiltalende og brugervenlig. Her er et grundlæggende CSS-eksempel til at style navigationslinjen:",

                navbarguide_styling_codesnippet1: "background-color : Sætter baggrundsfarven på navigationsbaren.",
                navbarguide_styling_codesnippet2: "list-style-type : Fjerner stylingen på listen.",
                navbarguide_styling_codesnippet3: "overflow: hidden : Sikrer, at indholdet forbliver inden for navigationslinjen.",
                navbarguide_styling_codesnippet4: "float: left : Justerer listeemnerne horisontalt.",
                navbarguide_styling_codesnippet5: "text-align: center : Centrerer teksten inden i hvert link.",
                navbarguide_styling_codesnippet6: ":hover : Ændrer baggrundsfarven, når brugeren holder musen over et link.",

                navbarguide_responsive_heading: "Responsivt design",
                navbarguide_responsive_text: "En responsiv navigationslinje tilpasser sig forskellige skærmstørrelser og forbedrer brugeroplevelsen på tværs af enheder. Medieforespørgsler bruges til at opnå dette.",
                navbarguide_responsive_codesnippet1: "@media screen and (max-width: 600px) : Anvender stilarter for skærme med en bredde på 600px eller mindre.",
                navbarguide_responsive_codesnippet2: "float: none : Stabler menuelementerne lodret på mindre skærme.",

                navbarguide_advanced_heading: "Avancerede funktioner",
                navbarguide_advanced_text1: "Forbedr din navigationslinje med dropdown-menuer for en mere interaktiv oplevelse.",
                navbarguide_advanced_text2: "HTML til dropdown-menu",
                navbarguide_advanced_text3: "CSS til dropdown-menu",

                navbarguide_advanced_codesnippet1: "position: absolute : Positionerer dropdown-indholdet absolut inden i dets beholder.",
                navbarguide_advanced_codesnippet2: "list-style-type : Sætter en minimumsbredde for dropdown-indholdet.",
                navbarguide_advanced_codesnippet3: "overflow: hidden : Tilføjer en skyggeeffekt for dybde.",
                navbarguide_advanced_codesnippet4: "float: left : Viser dropdown-indholdet, når musen holdes over dropdown-knappen.",

                navbarguide_javascript_heading: "Javascript forbedringer",
                navbarguide_javascript_text: "For dynamisk interaktion kan JavaScript bruges til at skifte synligheden af dropdown'en ved klik:",

                navbarguide_javascript_codesnippet1: "querySelector : Vælger dropdown-elementet.",
                navbarguide_javascript_codesnippet2: "addEventListener : Tilføjer en hændelseslytter for 'klik'-begivenheden.",
                navbarguide_javascript_codesnippet3: "classList.toggle : Skifter 'show'-klassen til dropdown-indholdet.",

                navbarguide_accessibility_heading: "Tilgængelighedsovervejelser",
                navbarguide_accessibility_text: "Tilgængelighed er afgørende for at sikre, at din navigationslinje er brugbar for alle, herunder personer med handicap. Brug ARIA-roller og -egenskaber til at forbedre tilgængeligheden:",

                navbarguide_accessibility_codesnippet1: "role=navigation : Definerer sektionen som et navigationsområde.",
                navbarguide_accessibility_codesnippet2: "aria-label : Giver et tilgængeligt navn til linket.",

                elaboration2_heading: "Eksempler",
                elaboration2_text: "Udforsk forskellige stilarter af navigationslinjer og download brugsklare skabeloner for hurtigt at komme i gang:",
                elaboration2_list1: "Horisontale navigationsbarer",
                elaboration2_list2: "Vertikale navigationsbarer",
                elaboration2_list3: "Faste og klæbrige navigationslinjer",

                navbarguide_troubleshooting_heading: "Fejlfinding",
                navbarguide_troubleshooting_text: "Har du problemer med din navigationslinje? Her er løsninger på almindelige problemer:",
                navbarguide_troubleshooting_list1: "Links justerer sig ikke korrekt: Tjek dine CSS float- og padding-værdier.",
                navbarguide_troubleshooting_list2: "Dropdown virker ikke: Sørg for, at JavaScript er korrekt linket, og fejlret eventuelle fejl.",
                navbarguide_troubleshooting_list3: "Problemer med responsivt design: Verificer, at dine medieforespørgsler er korrekt opsat.",

                navbarguide_conclusion_heading: "Konklusion",
                navbarguide_conclusion_text: "I denne guide har vi dækket det grundlæggende og avancerede funktioner ved oprettelse af en navigationslinje. Ved at følge disse trin kan du bygge en brugervenlig og visuelt tiltalende navigationslinje til din hjemmeside. Klar til mere? Se vores næste emne om opbygning af responsive layouts og videreudvikl dine webdesignfærdigheder!",

                video_subheading: "En anden måde at kode det på",

                quiz_heading: "Vil du teste dig selv?\r\n Tag vores quiz her!",
                quiz_button: "Quiz dig selv",

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

                headline_heading.textContent = language.dk.headline_heading;
                headline_text.textContent = language.dk.headline_text;

                elaboration_heading.textContent = language.dk.elaboration_heading;

                navbarguide_heading.textContent = language.dk.navbar_heading;
                navbarguide_text.textContent = language.dk.navbar_text;

                navbarguide_codesnippet1.textContent = language.dk.navbarguide_codesnippet1;
                navbarguide_codesnippet2.textContent = language.dk.navbarguide_codesnippet2;
                navbarguide_codesnippet3.textContent = language.dk.navbarguide_codesnippet3;
                navbarguide_codesnippet4.textContent = language.dk.navbarguide_codesnippet4;

                navbarguide_styling_heading.textContent = language.dk.navbarguide_styling_heading;
                navbarguide_styling_text.textContent = language.dk.navbarguide_styling_text;

                navbarguide_styling_codesnippet1.textContent = language.dk.navbarguide_styling_codesnippet1;
                navbarguide_styling_codesnippet2.textContent = language.dk.navbarguide_styling_codesnippet2;
                navbarguide_styling_codesnippet3.textContent = language.dk.navbarguide_styling_codesnippet3;
                navbarguide_styling_codesnippet4.textContent = language.dk.navbarguide_styling_codesnippet4;
                navbarguide_styling_codesnippet5.textContent = language.dk.navbarguide_styling_codesnippet5;
                navbarguide_styling_codesnippet6.textContent = language.dk.navbarguide_styling_codesnippet6;

                navbarguide_responsive_heading.textContent = language.dk.navbarguide_responsive_heading;
                navbarguide_responsive_text.textContent = language.dk.navbarguide_responsive_text;
                navbarguide_responsive_codesnippet1.textContent = language.dk.navbarguide_responsive_codesnippet1;
                navbarguide_responsive_codesnippet2.textContent = language.dk.navbarguide_responsive_codesnippet2;

                navbarguide_advanced_heading.textContent = language.dk.navbarguide_advanced_heading;
                navbarguide_advanced_text1.textContent = language.dk.navbarguide_advanced_text1;
                navbarguide_advanced_text2.textContent = language.dk.navbarguide_advanced_text2;
                navbarguide_advanced_text3.textContent = language.dk.navbarguide_advanced_text3;

                navbarguide_advanced_codesnippet1.textContent = language.dk.navbarguide_advanced_codesnippet1;
                navbarguide_advanced_codesnippet2.textContent = language.dk.navbarguide_advanced_codesnippet2;
                navbarguide_advanced_codesnippet3.textContent = language.dk.navbarguide_advanced_codesnippet3;
                navbarguide_advanced_codesnippet4.textContent = language.dk.navbarguide_advanced_codesnippet4;

                navbarguide_javascript_heading.textContent = language.dk.navbarguide_javascript_heading;
                navbarguide_javascript_text.textContent = language.dk.navbarguide_javascript_text;
                navbarguide_javascript_codesnippet1.textContent = language.dk.navbarguide_javascript_codesnippet1;
                navbarguide_javascript_codesnippet2.textContent = language.dk.navbarguide_javascript_codesnippet2;
                navbarguide_javascript_codesnippet3.textContent = language.dk.navbarguide_javascript_codesnippet3;

                navbarguide_accessibility_heading.textContent = language.dk.navbarguide_accessibility_heading;
                navbarguide_accessibility_text.textContent = language.dk.navbarguide_accessibility_text;

                navbarguide_accessibility_codesnippet1.textContent = language.dk.navbarguide_accessibility_codesnippet1;
                navbarguide_accessibility_codesnippet2.textContent = language.dk.navbarguide_accessibility_codesnippet2;

                elaboration2_heading.textContent = language.dk.elaboration2_heading;
                elaboration2_text.textContent = language.dk.elaboration2_text;
                elaboration2_list1.textContent = language.dk.elaboration2_list1;
                elaboration2_list2.textContent = language.dk.elaboration2_list2;
                elaboration2_list3.textContent = language.dk.elaboration2_list3;

                navbarguide_troubleshooting_heading.textContent = language.dk.navbarguide_troubleshooting_heading;
                navbarguide_troubleshooting_text.textContent = language.dk.navbarguide_troubleshooting_text;
                navbarguide_troubleshooting_list1.textContent = language.dk.navbarguide_troubleshooting_list1;
                navbarguide_troubleshooting_list2.textContent = language.dk.navbarguide_troubleshooting_list2;
                navbarguide_troubleshooting_list3.textContent = language.dk.navbarguide_troubleshooting_list3;

                navbarguide_conclusion_heading.textContent = language.dk.navbarguide_conclusion_heading;
                navbarguide_conclusion_text.textContent = language.dk.navbarguide_conclusion_text;

                video_subheading.textContent = language.dk.video_subheading;

                quiz_heading.textContent = language.dk.quiz_heading;
                quiz_button.textContent = language.dk.quiz_button;

                footer_text.textContent = language.dk.footer_text;


            }

