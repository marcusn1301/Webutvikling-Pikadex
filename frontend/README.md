# Prosjekt 3 - Pikadex

Pikadex er en nettside som gir brukere muligheten til å søke og filtrere på hele 801 Pokemon fra generasjon 1-7. Pokemonene er fremvist på listeform, der kun en liten mengde data er synlig - navn, bilde, indeksnummer og type. Ved å trykke på en vilkårlig pokemon vil mer informasjon om den gitte pokemon dukke opp. Brukeren har også mulighet til å like pokemon.

## Kjøring og oppsett av prosjekt

Klon repoet med SHH/HTTPS til ønsket lokasjon.

### Installering og kjøring av backend/frontend

Gå i backend-mappa og kjør `npm install` etterfulgt av `npm start`.
Deretter gjør du det samme i frontend-mappa.

Du vil nå ha nettsiden kjørende i fanen http://localhost:3000.

## Styling og funksjonalitet

CSS-en er lagd fra bunnen av på bakgrunn av detaljerte Figma-mockups som ble designet tidlig i utviklingsfasen. Vi har brukt CSS-Grid, CSS-Flexbox, og media queries for å gjøre nettsiden responsiv.

Hovedsiden “Homepage.tsx” og resten av komponentene på siden er stylet ved bruk av “styled-components”. Dette gjør strukturene til komponentene mer oversiktlig. I stedet for å returnere vanlige div-elementer får man heller en komponent som man f.eks. kan angi som et div-element. Vi har ikke brukt tags som `<section>` og `<article>`, men bare `<div>` og `<img>`. Fordelen med å bruke andre tags framfor hovedsakelig `<div>`er at de fungerer bedre med skjermlesere, noe som øker tilgjengeligheten til siden. Vi kunne blant annet brukt `<section>`rundt alle typene i navbar-en.

For å gi mer bærekraftig kode, så burde man designe enklere nettsider som kun laster inn det nødvendige. Dette har vært en gjennomgående tanke under utviklingen av spørringene til databasen, samt filtreringen og pagination. Vi har unngått å laste inn unødvendig store datamengder ved å filtrere på server-siden, i tillegg til caching. Slik unngår man at “for mye” overføres hver gang.

På “Homepage.tsx” importeres Navbar- og Card-komponentene, noe som til sammen utgjør hele siden. “Homepage.tsx” består hovedsakelig av et grid som inneholder Card-komponenter. I tillegg til det, foregår filtreringen og spørringer til databasen her. Grid-et til kortene er lagd slik at det tar opp all plassen under Navbar-komponenten. Ved hjelp av media-queries, øker antallet kolonner i grid-et basert på vindu-størrelsen, og bidrar til økt responsivitet. Dette øker fra 1 til 5 kolonner, ved de respektive størrelsene, 500px, 900px, 1200px og 1500px.

Card-komponenten tar inn data som props fra Homepage, slik at man kan se informasjon om en Pokemon som indeksen, bilde, pokemon-type, og navn. I tillegg til det, tar også kortet inn en state fra Homepage som oppdaterer en boolsk verdi når et kort trykkes på. Denne verdien (toggleClick) brukes i Card-komponenten for å sjekke om en annen Card-komponent allerede har blitt trykket på. Hvis den er False vil det være mulig å sette en state (isExpanded) i Card til True. Denne state-en brukes til å angi hva som returneres i Card-komponenten. Slik kan man utvide kortet når det trykkes på ved å returnere forskjellige komponenter. De utvidede kortene viser dermed mer informasjon om en pokemon, som vekt, høyde og exp.

Videre er kortene satt opp med et grid delt inn i rader. Flexbox blir også brukt her for å gjøre ting som sentrering av barn-elementer enkelt. Et eksempel på dette er PokeIndex-komponenten i “CardStyles.tsx”, hvor flex brukes til å justere plasseringen til et elementet som allerede er i et grid.

Navbar-komponenten håndterer nettsidens hovedfunksjonalitet; søk og filtrering. Den er i likhet med de andre hovedkomponentene satt opp ved hjelp av CSS-Grid som inneholder alle typene som man kan filtrere søkene på, i tillegg til et søkefelt og en søkeknapp. For å justere på størrelsen har vi lagd en hook som sjekker y-verdien til siden når man scroller.

## Testing

Nettsiden har blitt testet med disse nettleserne: Google Chrome, Firefox og Safari. Og på følgende enheter:

#### Desktops

- HP Pavilion 15,6''
- ASUS ROG FLOW X 13''

#### Mobile/Tablet

- Samsung Galaxy A52s 5G
- iPhone 11
- Samsung Galaxy S7
- iPad Pro
- iPad Mini

### Snapshot-tester

Vi har generert flere snapshot-tester for å forsikre oss om at siden lastes inn riktig. Det har også blitt laget en test for sjekke at forventede elementer dukker opp på siden. Vi har i hovedsak fokusert på navbaren, ettersom det virket som Jest slet med “hex-rgb”, noe som førte til at alle tester som involverte dette ikke ville kjøre. Selv etter mange økter fortsatte dette problemet.

### Kjøring av snapshot-tester

Kjører alle testene:

```
cd frontend
npm test a
```

NB! For å kjøre testene må du [satt opp prosjektet](#kjøring-og-oppsett-av-prosjekt).

### Automatisert end-to-end testing med Cypress

Vi valgte å implementere automatisert testing i Cypress, noe som forsåvidt også var et krav for prosjektet. Fordelen med denne form for testing er at man får testet nettsidens funksjonalitet bedre ved å simulere en sekvens av aktiviteter som en vanlig bruker typisk ville gjort. Og det blir testet kjapt. Cypress kommer med et visuelt grensesnitt i nettleseren, i tillegg er det godt dokumentert, noe som gjør det lett å lære seg.

Vi har laget tester for å sjekke om siden lastes inn riktig. Søkefunksjonaliteten testes ved en spesifikk pokemon, og innholdet til kortet sjekkes. Videre sjekkes pagination. Til slutt sjekkes filtrering av pokemon på types.

### Kjøring av tester i Cypress

```
cd frontend
npm run cypress:open
```

Et vindu vil dukke opp, hvor man har mulig til å kjøre testene i ulike browsere. Dette inkluderer Chrome, Edge og Firefox. Det er verdt å merke seg at testene stort sett fungerer, men skulle det skje en feil så burde man restarte testene for om feilen bare kan har skjedd ved et enkelttilfelle.

NB! For å kjøre testene må du [satt opp prosjektet](#kjøring-og-oppsett-av-prosjekt).

## Backend

Vi installerte Neo4j Graph Database på den virtuelle maskinen hostet på NTNUs server. Hovedårsaken til at vi valgte Neo4j framfor MongoDB var fordi vi ønsket å lære mer om dette databasesystemet da enkelte på gruppa allerede hadde vært borti sistnevnte. Riktignok ville nok det naturlige valget vært MongoDB, da vi ikke hadde et stort behov for relasjoner.

MER HER: Om Excel (lasting av bilder eksternt osv..)

## Teknologier

Prosjektet er basert på React og implementert med Typescript.

### Frontend pakker

Cypress - brukt for end-to-end testing
Jest - brukt for enhetstesting
React Testing Library - brukt som testverktøy for React-komponenter
Styled-Components - brukt for styling (“CSS-in-JS”)
Apollo Client - brukt for state management

### Backend pakker

Neo4j - valgte database system
ApolloGraphQL -

## Kjente feil/bugs

Hvis antallet “favorited” oppdateres og man bytter side frem og tilbake, vil ikke verdien være oppdatert. Dette skyldes at vi ikke har lagt til en cache.modify funksjon i vår mutation. Antallet “favorited” vil dog være oppdatert når hele siden lastes inn på nytt siden et nytt kall vil bli gjort til databasen.
