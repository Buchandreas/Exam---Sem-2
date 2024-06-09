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

                text_tagline: "Om os.\r\nVores hold.\r\nVores services.",
                text_heading: "OM OS",
                text_text: "Velkommen til vores styrkende fællesskab dedikeret til at lære kvinder at kode! Hos GirlCode tror vi på, at kodning er for alle, uanset køn. Vores mission er at bryde barrierer ned og skabe et støttende miljø, hvor kvinder kan lære, vokse og udmærke sig i teknologiens verden.\r\n\r\nGrundlagt af passionerede undervisere og brancheprofessionelle, tilbyder vores platform et bredt udvalg af kodningsressourcer, tutorials og mentorordninger specielt til kvinder. Uanset om du er nybegynder, der tager dine første skridt ind i kodningens verden, eller en erfaren udvikler, der ønsker at udvide dine færdigheder, er vi her for at støtte dig hele vejen.\r\n\r\n Deltag i vores livlige fællesskab af ligesindede, deltag i kodningsudfordringer, vær med til workshops og forbind dig med inspirerende kvinder inden for tech. Sammen kan vi mindske kønsforskellen i tech-industrien og bane vejen for en mere inkluderende og mangfoldig fremtid.\r\n\r\n Gør dig klar til at frigøre dit potentiale og begive dig ud på en spændende rejse med læring, innovation og empowerment hos GirlCode. Lad os kode, skabe og erobre sammen!",

                quote_heading: "Styrker kvinder\r\ngennem kodning, former\r\nfremtidens teknologi",

                team_heading: "HOLDET",
                team_member1_subheading: "Holdleder",
                team_member1_text: "Emily leder vores team med over et årti's erfaring inden for softwareudvikling og projektledelse. Hendes strategiske vision og lederskab sikrer, at vi opnår vores mål effektivt.",
                team_member2_subheading: "Lead-udvikler",
                team_member2_text: "Patricia, vores tekniske ekspert, udmærker sig i forskellige programmeringssprog og innovative løsninger. Hendes mentorrolle og problemløsningsevner er nøglen til vores succes.",
                team_member3_subheading: "Fællesskabsspecialist",
                team_member3_text: "Ruby fremmer et støttende og inkluderende fællesskab. Med hendes baggrund i socialt arbejde og fællesskabsledelse skaber hun programmer, der opmuntrer til deltagelse og vækst.",

                services_subheading1: "Styrkende workshops og events",
                services_text1: "Deltag i vores styrkende workshops og events specielt tilrettelagt for kvinder i tech. Fra kodningsbootcamps til netværksarrangementer tilbyder vi muligheder for at lære, vokse og forbinde dig med ligesindede i branchen.\r\n\r\nFå adgang til vores omfattende bibliotek af kodningsvejledninger, kurser og workshops designet til at imødekomme alle færdighedsniveauer. Uanset om du lige er begyndt eller ønsker at videreudvikle dine kodningsevner, har vi noget for enhver.",
                services_subheading2: "Assistance til karriereudvikling",
                services_text2: "Udnyt vores ressourcer til karriereudvikling for at hjælpe dig med at lande dit drømmejob inden for tech. Fra opbygning af CV til forberedelse af interviews er vi her for at støtte dig i at fremme din karriere og nå dine mål. Vores karriereservices inkluderer personlige CV-gennemgange, mock-interviews og assistance med jobsøgning. Derudover giver vi indsigt i branchetrends og netværksmuligheder for at hjælpe dig med at forblive foran i det konkurrenceprægede tech-landskab. Lad os styrke dig til at nå nye højder i din tech-karriere.",

                partners_heading: "PARTNERE",

                contact_heading: "KONTAKT OS",
                contact_subheading: "Har du spørgsmål? Kontakt os!",
                contact_email: "Send os en email",
                contact_phone: "Ring til os"
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

            text_tagline.textContent = language.dk.text_tagline;
            text_heading.textContent = language.dk.text_heading;
            text_text.textContent = language.dk.text_text;

            quote_heading.textContent = language.dk.quote_heading;

            team_heading.textContent = language.dk.team_heading;
            team_member1_subheading.textContent = language.dk.team_member1_subheading;
            team_member1_text.textContent = language.dk.team_member1_text;
            team_member2_subheading.textContent = language.dk.team_member2_subheading;
            team_member2_text.textContent = language.dk.team_member2_text;
            team_member3_subheading.textContent = language.dk.team_member3_subheading;
            team_member3_text.textContent = language.dk.team_member3_text;

            services_subheading1.textContent = language.dk.services_subheading1;
            services_text1.textContent = language.dk.services_text1;
            services_subheading2.textContent = language.dk.services_subheading2;
            services_text2.textContent = language.dk.services_text2;

            partners_heading.textContent = language.dk.partners_heading;

            contact_heading.textContent = language.dk.contact_heading;
            contact_subheading.textContent = language.dk.contact_subheading;
            contact_email.textContent = language.dk.contact_email;
            contact_phone.textContent = language.dk.contact_phone;
            

            }

