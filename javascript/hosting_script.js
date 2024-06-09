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

                headline_text: "I det digitale landskab er det afgørende for både virksomheder og enkeltpersoner at etablere en online tilstedeværelse. Når det kommer til at lancere en hjemmeside, er en vigtig beslutning, om man skal selv-hoste eller benytte en webhosting-tjeneste. Hver tilgang har sine fordele og overvejelser, som imødekommer forskellige behov og præferencer.",

                text_heading1: "Selv-hosting",
                text_subheading1: "Selv-hosting indebærer at administrere og vedligeholde din hjemmesides infrastruktur uafhængigt. Her er nogle nøgleaspekter at overveje:",
                text_text1: "1. Total kontrol: Med selv-hosting har du fuldstændig kontrol over din hjemmesides miljø. Du kan tilpasse serverkonfigurationer, installere enhver software du har brug for, og have ubegrænset adgang til serverressourcer.\r\n\r\n 2. Skalerbarhed: Selv-hosting tilbyder skalerbarhed tilpasset dine behov. Du kan opgradere serverressourcer, efterhånden som din hjemmeside vokser, uden at være begrænset af foruddefinerede hostingplaner.\r\n\r\n 3. Omkostningsovervejelser: Selvom selv-hosting kan virke omkostningseffektivt i starten, kræver det investeringer i hardware, softwarelicenser og løbende vedligeholdelse. Det er vigtigt at vurdere de langsigtede udgifter i forhold til fordelene ved autonomi.\r\n\r\n 4. Teknisk ekspertise: Selv-hosting kræver teknisk kunnen til at opsætte servere, konfigurere sikkerhedsforanstaltninger og fejlsøge problemer. Det er ideelt for enkeltpersoner eller virksomheder med IT-ekspertise eller dem, der er villige til at investere tid i at lære serveradministration.",

                text_heading2: "Komplette hosting-tjenester",
                text_subheading2: "Webhosting-tjenester leverer infrastruktur og support til hosting af hjemmesider på eksterne servere. Her er, hvad du bør vide om denne mulighed:",
                text_text2: "1. Bekvemmelighed: Webhosting-tjenester tilbyder en problemfri løsning, hvor de håndterer serveradministration, sikkerhedsopdateringer og teknisk support. Dette frigør dig fra kompleksiteten ved serveradministration, så du kan fokusere på hjemmesidens indhold og funktionalitet.\r\n\r\n 2. Omkostningsstruktur: Webhosting-tjenester tilbyder typisk trinopdelte prisplaner baseret på ressourceallokering og funktioner. Dette gør det nemt at vælge en plan, der passer til dine hjemmesides krav og budget, uden forudgående investeringer i hardware eller software.\r\n\r\n 3. Pålidelighed og sikkerhed: Respektable webhosting-udbydere sikrer høje oppetidssatser og robuste sikkerhedsforanstaltninger, der beskytter din hjemmeside mod potentielle trusler. De anvender professionel overvågning og backup-systemer, hvilket minimerer risikoen for datatab eller nedetid.\r\n\r\n 4. Begrænset kontrol: Mens webhosting-tjenester tilbyder bekvemmelighed, kommer de med begrænsninger i tilpasning og kontrol sammenlignet med selv-hosting. Avancerede konfigurationer kan være begrænsede, og du er afhængig af udbyderens infrastruktur og politikker.",

                text2_heading: "At vælge den rigtige vej for dig:",
                text2_text: "Beslutningen mellem selv-hosting og brug af en webhosting-tjeneste afhænger af forskellige faktorer, herunder teknisk kunnen, budget, skalerbarhedsbehov og ønsket kontrolniveau. Overvej dine prioriteter, langsigtede mål og tilgængelige ressourcer, før du træffer en beslutning. For teknisk kyndige individer eller virksomheder, der søger autonomi og fleksibilitet, kan selv-hosting være den foretrukne løsning. Omvendt kan de, der prioriterer bekvemmelighed, pålidelighed og support, finde webhosting-tjenester mere passende. I sidste ende tilbyder både selv-hosting og webhosting-tjenester levedygtige veje til at etablere og opretholde en succesfuld online tilstedeværelse. Ved at veje fordele og ulemper ved hver tilgang kan du træffe en informeret beslutning, der stemmer overens med din hjemmesides mål og krav.",

                card_heading1: "Selv-hosting software",
                card_text1: "Self-hosting software henviser til praksissen med at køre applikationer og tjenester på ens eget infrastruktur i stedet for at stole på tredjepartsudbydere. Denne tilgang tilbyder større kontrol, privatliv og fleksibilitet, hvilket giver enkeltpersoner og organisationer mulighed for at tilpasse deres opsætning til specifikke behov. Fra e-mail-servere til indholdsstyringssystemer og samarbejdsværktøjer muliggør selv-hosting software, at brugerne kan administrere deres digitale tilstedeværelse autonomt. Det kræver dog teknisk ekspertise til opsætning, vedligeholdelse og sikkerhed, hvilket gør det bedst egnet til dem med IT-færdigheder eller en vilje til at lære.",
                card_heading2: "Løsninger til webbaseret hosting",
                card_text2: "Webbaserede hostingløsninger giver en effektiv måde at værtstjenester og applikationer på internettet. Disse løsninger er ideelle til enkeltpersoner og virksomheder, der ønsker at etablere en online tilstedeværelse uden behov for at vedligeholde deres eget serverinfrastruktur. Med webbaserede hostingtjenester kan brugerne oprette og administrere deres hjemmesider, applikationer og databaser gennem brugervenlige kontrolpaneler og værktøjer. Desuden tilbyder disse løsninger ofte sikkerhed, pålidelighed og teknisk support, hvilket gør dem velegnede til både nybegyndere og erfarne webmastere. Fra delt hosting til dedikerede servere og cloud hosting, findes der webbaserede hostingløsninger til enhver type projekt og behov.",

                elaboration_heading: "UDDYBNING",
                elaboration_subheading: "Selv-hosting software",
                elaboration_text1: "Selv-hosting indebærer at administrere og vedligeholde din hjemmesides infrastruktur uafhængigt. Her er nogle nøgleaspekter at overveje:",
                elaboration_text2: "1. Total kontrol: Med selv-hosting har du fuldstændig kontrol over din hjemmesides miljø. Du kan tilpasse serverkonfigurationer, installere al den software, du har brug for, og have ubegrænset adgang til serverressourcer.\r\n\r\n 2. Skalerbarhed: Selv-hosting tilbyder skalerbarhed tilpasset dine behov. Du kan opgradere serverressourcer, efterhånden som din hjemmeside vokser, uden at være begrænset af foruddefinerede hostingplaner.\r\n\r\n 3. Omkostningsovervejelser: Selvom selv-hosting kan virke omkostningseffektivt i starten, kræver det investeringer i hardware, softwarelicenser og løbende vedligeholdelse. Det er vigtigt at vurdere de langsigtede udgifter i forhold til fordelene ved autonomi.\r\n\r\n 4. Teknisk ekspertise: Selv-hosting kræver teknisk kunnen til at opsætte servere, konfigurere sikkerhedsforanstaltninger og fejlsøge problemer. Det er ideelt for enkeltpersoner eller virksomheder med IT-ekspertise eller dem, der er villige til at investere tid i at lære serveradministration.",

                elaboration2_heading: "WEB-HOSTING TJENESTER",
                elaboration2_subheading1: "Webhostingtjenester leverer infrastruktur og support til at hoste hjemmesider på eksterne servere. Her er, hvad du bør vide om denne mulighed:",
                elaboration2_text1: "1. Bekvemmelighed: Webhostingtjenester tilbyder en problemfri løsning, hvor de håndterer serveradministration, sikkerhedsopdateringer og teknisk support. Dette frigør dig fra kompleksiteten ved serveradministration, så du kan fokusere på hjemmesidens indhold og funktionalitet.\r\n\r\n 2. Omkostningsstruktur: Webhostingtjenester tilbyder typisk trinopdelte prisplaner baseret på ressourceallokering og funktioner. Dette gør det nemt at vælge en plan, der passer til dine hjemmesides krav og budget, uden forudgående investeringer i hardware eller software.\r\n\r\n 3. Pålidelighed og sikkerhed: Respektable webhosting-udbydere sikrer høje oppetidssatser og robuste sikkerhedsforanstaltninger, der beskytter din hjemmeside mod potentielle trusler. De anvender professionel overvågning og backup-systemer, hvilket minimerer risikoen for datatab eller nedetid.\r\n\r\n 4. Begrænset kontrol: Mens webhostingtjenester tilbyder bekvemmelighed, kommer de med begrænsninger i tilpasning og kontrol sammenlignet med selv-hosting. Avancerede konfigurationer kan være begrænsede, og du er afhængig af udbyderens infrastruktur og politikker.",
                elaboration2_subheading2: "At vælge den rigtige vej:",
                elaboration2_text2: "Beslutningen mellem selv-hosting og brug af en webhosting-tjeneste afhænger af forskellige faktorer, herunder teknisk kunnen, budget, skalerbarhedsbehov og ønsket kontrolniveau. Overvej dine prioriteter, langsigtede mål og tilgængelige ressourcer, før du træffer en beslutning. For teknisk kyndige individer eller virksomheder, der søger autonomi og fleksibilitet, kan selv-hosting være den foretrukne løsning. Omvendt kan de, der prioriterer bekvemmelighed, pålidelighed og support, finde webhosting-tjenester mere passende. I sidste ende tilbyder både selv-hosting og webhosting-tjenester levedygtige veje til at etablere og opretholde en succesfuld online tilstedeværelse. Ved at veje fordele og ulemper ved hver tilgang kan du træffe en informeret beslutning, der stemmer overens med din hjemmesides mål og krav.",

                footer_text: "Følg os på sociale medier"
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

                headline_text.textContent = language.dk.headline_text;

                text_heading1.textContent = language.dk.text_heading1;
                text_subheading1.textContent = language.dk.text_subheading1;
                text_text1.textContent = language.dk.text_text1;

                text_heading2.textContent = language.dk.text_heading2;
                text_subheading2.textContent = language.dk.text_subheading2;
                text_text2.textContent = language.dk.text_text2;

                text2_heading.textContent = language.dk.text2_heading;
                text2_text.textContent = language.dk.text2_text;

                card_heading1.textContent = language.dk.card_heading1;
                card_text1.textContent = language.dk.card_text1;
                card_heading2.textContent = language.dk.card_heading2;
                card_text2.textContent = language.dk.card_text2;

                elaboration_heading.textContent = language.dk.elaboration_heading;
                elaboration_subheading.textContent = language.dk.elaboration_subheading;
                elaboration_text1.textContent = language.dk.elaboration_text1;
                elaboration_text2.textContent = language.dk.elaboration_text2;

                elaboration2_heading.textContent = language.dk.elaboration2_heading;
                elaboration2_subheading1.textContent = language.dk.elaboration2_subheading1;
                elaboration2_text1.textContent = language.dk.elaboration2_text1;
                elaboration2_subheading2.textContent = language.dk.elaboration2_subheading2;
                elaboration2_text2.textContent = language.dk.elaboration2_text2;

                footer_text.textContent = language.dk.footer_text;
            }

