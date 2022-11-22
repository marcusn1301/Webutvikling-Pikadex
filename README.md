# Project 4 - Pikadex

Pikadex er en nettside som gir brukere muligheten til å søke og filtrere på hele 801 Pokemon fra generasjon 1-7. Pokemonene er fremvist på listeform, der kun en liten mengde data er synlig - navn, bilde, indeksnummer og type. Ved å trykke på en vilkårlig pokemon vil mer informasjon om den gitte pokemon dukke opp. Brukeren har også mulighet til å sortere på indeksnummer og navn alfabetisk både stigende og synkende, og antall favourites.

> Prosjektoppgave i IT2810 - Webutvikling høst 2022

## Kjøring og setup

Klon repoet med SHH/HTTPS til ønsket lokasjon.

### Klientside

Naviger til _./frontend_-mappa and kjør kommandoene under

```sh
$ npm i # Installerer nødvendige filer

$ npm start # Starter webapplikasjonen
```

### Serverside

Naviger til _./backend_-mappa and kjør kommandoene under

```sh
$ npm i # Installerer nødvendige filer

$ npm start # Starter backend-serveren
```

## TESTING(?)

yup

## Teknologier

Prosjektet er delt opp i en klient (frontend) og en server (backend) side. Disse er separert i hver sin mappe. Klienten er en _React_-webapp og serveren er en _Node_ backend, begge er skrevet i Typescript.
All dataen blir lagret i en Neo4j-database. For å hente dataen fra databasen, og vise den på klientsiden, bruker vi Apollo. Vi har ikke et innloggingssystem, så vi bruker derfor localstorage til å huske på om en bruker allerede har likt en pokemon. Hvis en bruker ikke allerede har likt en pokemon, vil det bli lagt til en til like på pokemonen i databasen.

### Sortering og filtrering

Vi implementerte sorteringen, og det er nå mulig å sortere på navn (alfabetisk), ID (numerisk), og pokemon med flest favoritter. I applikasjonen vår kan man filtrere pokemon på typen deres, og slik som det er i spillet kan hver pokemon ha en primær og sekundær type. Dette betyr at når man filtrerer på typen er rekkefølgen på typene viktig. For eksempel hvis en pokemon har typene <b>Water</b> og <b>Poison</b>, og brukeren filtrerer på <b>Poison</b> og <b>Water</b>, så vil den ikke dukke opp med mindre brukeren filtrerer på <b>Water</b> og <b>Poison</b>

### Valg av teknologier

#### Apollo Client

Apollo client blir brukt til å cache all pokemon-dataen som blir hentet ut til klientsiden. Så dersom en pokemon blir hentet fra databasen, vil den ikke trenge å bli hentet igjen senere. Dette sparer antall kall vi gjør til databasen og gjør applikasjonen vår mer effektiv.

#### Neo4j

## Universell utforming / web accessibility 

Universell utforming / web accessibility har vært et av hovedmålene ved utviklingsprosessen. Vi har hatt Tilsynet for universell utforming av IKT sin tilsynsrapport i baktanke ved utformingen av siden. Dette har bidratt til å gjøre siden mer forståelig og robust, samt mulig å oppfatte og betjenes av folk med behov for tilpasninger grunnet problemer med syn, hørsel, motorikk eller kognisjon.

Først og fremst har vi økt kontrasten flere steder. Vi brukte Chrome sitt utviklerverktøy til å sjekke kontrastnivået mellom tekst og bakgrunn. Farger ble endret på knapper, kanter, tekst og bakgrunner. Dette er et valg som vi har tatt for å bidra til å gjøre siden vår lettere å lese for de som har nedsatt synsevne. 

Videre implementerte vi muligheten for navigasjon med tasturet. Dette har vi gjort ved å legge til en tabIndex til komponeneter som er nødvendige for bruken av siden. Slik kan man markere knapper, input-felt og viktig tekst ved å trykke på 'Tab', og 'Enter' for å aktivere knappene. Vi valgte å legge til denne funksjonen for å gjøre det mulig å navigere siden dersom man har motoriske vansker eller nedsatt synsevne, og ikke kan bruke mus.

For å gjøre det enda lettere å navigere siden vår med nedsatt synsevne la vi til aria-labels. Dette er attributter som beskriver de forskjellige komponentene på siden. Alt som kan navigeres gjennom med tastaturet har aria-labels. Skjermlesere kan dermed lese opp navnene på komponentene, og bidrar til økt web accessibility for de med nedsatt synsevne. 

## Bærekraft

Vi har gjennom hele utviklingsprosessen hatt bærekraft i tankene. Bilder og andre medier utgjør ofte de største faktorene som påvirker utslipp, og vi har derfor prøvd å minimere bruken av disse på en rekke måter.
Først og fremst har vi valgt bilder med en relativt lav oppløsning (slik de vises i selve spillet). Vi har også benyttet oss av SVG-er der det har latt seg gjøre (f.eks for ikoner, pokeballdesign i bakgrunnen, osv..). Vi bruker én GIF-fil, som ikke er det mest bærekraftige fil-formatet, men vi valgte å beholde den. I stedet kunne vi brukt en PNG

Under utviklingsprosessen har vi blant annet gjort fargene mørkere for å bidra til et lavere energiforbruk. Hovedfargene på siden er rgb(30, 30, 30) (mørkegrå bakgrunn) og rgb(66, 0, 0) (mørkerød navbar). Svart og rød er de to fargene som bruker minst energi, og en av grunnene til fargevalget vårt. Vi sparer dermed miljøet og batterinivået i samme slengen. 

## Valg av API

På grunn av den enorme mengden data som er tilgjengelig, bestemte vi oss for å bruke [**PokéAPI**](https://pokeapi.co/) for å fylle databasen. APIen kan gi deg informasjon om nesten 900 forskjellige Pokémon. Dette er en flott ressurs for å utvikle webapplikasjoner og gir mange muligheter for omfattende filtrering. I tillegg er Pokemon API godt dokumentert og enkelt å bruke. Vår applikasjon kommuniserer ikke direkte med API, men alle dataene i databasen ble en gang hentet herfra og lagt i et separat repo.

##
