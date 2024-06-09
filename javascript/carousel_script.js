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

                headline_heading: "KARRUSEL",
                headline_text: "Velkommen til vores guide om, hvordan man koder en karrusel! En karrusel, også kendt som en slider, er et roterende sæt af billeder eller indhold, der kan tilføje et dynamisk og interaktivt element til din hjemmeside. Denne tutorial vil lede dig gennem oprettelsen af en simpel, funktionel karrusel ved hjælp af HTML, CSS og JavaScript.",
               
                elaboration_heading: "UDDYBNING",

                prereq_heading:"Forudsætninger",
                prereq_text:"Før vi begynder, skal du sikre dig, at du har følgende færdigheder og værktøjer:",

                skills_subheading: "Nødvendige færdigheder:",
                skills_text: "Grundlæggende kendskab til HTML, CSS og JavaScript.",

                tools_subheading:"Værktøjer og biblioteker:",
                tools_list1:"En teksteditor (f.eks. VS Code, Sublime Text).",
                tools_list2:"Grundlæggende forståelse af webudvikling.",

                enviroment_heading: "Opsætning af koden",
                enviroment_subheading: "Projektstruktur",
                enviroment_text: "Opret en ny mappe til dit projekt og organiser den på følgende måde:",

                boiler_subheading: "HTML Grundstruktur",
                boiler_text:"Start med at opsætte en grundlæggende HTML-struktur i index.html:",

                markup_heading:"HTML-markup",
                markup_subheading:"Oprettelse af karruselstrukturen",
                markup_text:"Tilføj følgende HTML inden for body -taggene for at definere strukturen af karrusellen:",

                styling_heading: "Styling med CSS",
                styling_subheading: "Grundlæggende stilarter",
                styling_text: "Opret en styles.css-fil og tilføj følgende CSS for at style karrusellen:",

                functionality_heading:"Tilføjelse af JavaScript-funktionalitet",
                functionality_subheading: "Grundlæggende funktionalitet",
                functionality_text:"Opret en script.js-fil og tilføj følgende JavaScript for at håndtere karruselens funktionalitet:",

                enhancements_heading: "Forbedringer",
                enhancements_subheading: "Automatisk diasoplevelse", 
                enhancements_text: "For at tilføje automatisk skiftende funktionalitet, ændr din JavaScript som følger:",

                indicators_heading: "Indikatorer",
                indicators_text: "Tilføj indikatorer for hver dias og opdater din HTML og JavaScript:",
                indicators_html_title: "Html:",
                indicators_javascript_title: "JavaScript:",

                advanced_heading: "Avancerede funktioner",
                advanced_subheading: "At bruge et bibliotek",
                advanced_text: "For mere avancerede karruseller, overvej at bruge biblioteker som Slick, Swiper eller Bootstrap. Her er et kort eksempel på brug af Bootstrap's karruselkomponent:",

                advanced_1_subheading: "1. Inkluder Bootstrap:",
                advanced_1_text: "Tilføj følgende i head -sektionen af din HTML-fil:",
                
                advanced_2_subheading: "2. Bootstrap Karrusel Markup:",

                should_heading: "Hvordan den endelige kode bør se ud med bootstrap",

                troubleshooting_heading: "Fejlfinding",

                common_subheading: "Almindelige problemer",
                common_point_1: "Billeder vises ikke:",
                common_text_1: "Sørg for, at billedstierne er korrekte, og at billederne er i den passende mappe.",
                common_point_2: "Karrusel skifter ikke dias:",
                common_text_2: "Tjek efter JavaScript-fejl i konsollen og sørg for, at alle hændelseslyttere er korrekt tilknyttet.",

                debug_subheading: "Fejlfindingstips",
                debug_point_1: "Brug browserens udviklerværktøjer til at inspicere karrusellelementerne og tjekke for CSS- eller JavaScript-problemer.",
                debug_point_2: "Log JavaScript-variabler og begivenheder til konsollen for at spore din kodes flow.",

                conclusion_heading: "Konklusion",
                conclusion_text: "Tillykke! Du har succesfuldt oprettet en funktionel karrusel. Denne guide dækkede det grundlæggende for opsætning af HTML, CSS og JavaScript til en simpel karrusel samt nogle forbedringer for at gøre den mere interaktiv.",

                video_heading: "VIDEO GUIDE",
                video_subheading: "En anden måde at kode det på",

                quiz_heading: "Vil du teste dig selv? \r\n Tag vores quiz her!",
                quiz_subheading: "Quiz dig selv",

                footer_text: "Følg os på sociale medier:"

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
            
            prereq_heading.textContent = language.dk.prereq_heading;
            prereq_text.textContent = language.dk.prereq_text;

            skills_subheading.textContent = language.dk.skills_subheading;
            skills_text.textContent = language.dk.skills_text;

            tools_subheading.textContent = language.dk.tools_subheading;
            tools_list1.textContent = language.dk.tools_list1;
            tools_list2.textContent = language.dk.tools_list2;

            enviroment_heading.textContent = language.dk.enviroment_heading;
            enviroment_subheading.textContent = language.dk.enviroment_subheading;
            enviroment_text.textContent = language.dk.enviroment_text;

            boiler_subheading.textContent = language.dk.boiler_subheading;
            boiler_text.textContent = language.dk.boiler_text;

            markup_heading.textContent = language.dk.markup_heading;
            markup_subheading.textContent = language.dk.markup_subheading;
            markup_text.textContent = language.dk.markup_text;

            styling_heading.textContent = language.dk.styling_heading;
            styling_subheading.textContent = language.dk.styling_subheading;
            styling_text.textContent = language.dk.styling_text;

            functionality_heading.textContent = language.dk.functionality_heading;
            functionality_subheading.textContent = language.dk.functionality_subheading;
            functionality_text.textContent = language.dk.functionality_text;

            enhancements_heading.textContent = language.dk.enhancements_heading;
            enhancements_subheading.textContent = language.dk.enhancements_subheading;
            enhancements_text.textContent = language.dk.enhancements_text;

            indicators_heading.textContent = language.dk.indicators_heading;
            indicators_text.textContent = language.dk.indicators_text;
            indicators_html_title.textContent = language.dk.indicators_html_title;
            indicators_javascript_title.textContent = language.dk.indicators_javascript_title;

            advanced_heading.textContent = language.dk.advanced_heading;
            advanced_subheading.textContent = language.dk.advanced_subheading;
            advanced_text.textContent = language.dk.advanced_text;

            advanced_1_subheading.textContent = language.dk.advanced_1_subheading;
            advanced_1_text.textContent = language.dk.advanced_1_text;
            
            advanced_2_subheading.textContent = language.dk.advanced_2_subheading;

            should_heading.textContent = language.dk.should_heading;

            common_subheading.textContent = language.dk.common_subheading;
            common_point_1.textContent = language.dk.common_point_1;
            common_text_1.textContent = language.dk.common_text_1;
            common_point_2.textContent = language.dk.common_point_2;
            common_text_2.textContent = language.dk.common_text_2;

            debug_subheading.textContent = language.dk.debug_subheading;
            debug_point_1.textContent = language.dk.debug_point_1;
            debug_point_2.textContent = language.dk.debug_point_2;

            conclusion_heading.textContent = language.dk.conclusion_heading;
            conclusion_text.textContent = language.dk.conclusion_text;

            video_heading.textContent = language.dk.video_heading;
            video_subheading.textContent = language.dk.video_subheading;

            quiz_heading.textContent = language.dk.quiz_heading;
            quiz_subheading.textContent = language.dk.quiz_subheading;

            footer_text.textContent = language.dk.footer_text;
            
            }

