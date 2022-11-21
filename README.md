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

## Teknologier

Prosjektet er delt opp i en klient (frontend) og en server (backend) side. Disse er separert i hver sin mappe. Klienten er en _React_-webapp og serveren er en _Node_ backend, begge er skrevet i Typescript.
All dataen blir lagret i en Neo4j-database - dette består hovedsakelig av antall likes hver pokemon har. Vi bruker også localstorage for ...

### Valg av teknologier

#### Apollo Client

#### Neo4j

## Universell utforming

## Bærekraft

Vi har gjennom hele utviklingsprosessen hatt bærekraft i tankene. Bilder og andre medier utgjør ofte de største faktorene som påvirker utslipp, og vi har derfor prøvd å minimere bruken av disse på en rekke måter.
Først og fremst, er det kun bilder av Pokemon som blir lastet inn, i tillegg er disse bildene av lavere oppløsning (hvordan de vises i selve spillet). Vi har også benyttet oss av SVG-er der det har latt seg gjøre (f. eks for ikoner, pokeballdesign i bakgrunnen osv..)

## Valg av API

På grunn av den enorme mengden data som er tilgjengelig, bestemte vi oss for å bruke [**PokéAPI**](https://pokeapi.co/) for å fylle databasen. APIen kan gi deg informasjon om nesten 900 forskjellige Pokémon. Dette er en flott ressurs for å utvikle webapplikasjoner og gir mange muligheter for omfattende filtrering. I tillegg er Pokemon API godt dokumentert og enkelt å bruke. Vår applikasjon kommuniserer ikke direkte med API, men alle dataene i databasen ble en gang hentet herfra og lagt i et separat repo.

##
