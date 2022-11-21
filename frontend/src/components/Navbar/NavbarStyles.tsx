import styled from "styled-components";

// Media queries https://www.w3schools.com/css/css_rwd_mediaqueries.asp

interface Epic {
    height: any;
    transition: any;
}

//The wrapper for our Navbar
export const NavbarOuter = styled.div<Epic>`
    // Sets only animation when scrolling down
    transition: ${(props) => (props.transition ? "0.3s all" : "0s")};
    height: ${(props) => props.height};
    position: fixed;
    width: 100%;
    background-color: #bd1808;

    .pikachu {
        position: absolute;

        @media (max-width: 600px) {
            visibility: hidden;
        }
    }

    @media (max-width: 600px) {
        // Sets only animation when scrolling down
        transition: ${(props) => (props.transition ? "0.3s all" : "0s")};
        height: ${(props) => props.height};
        position: fixed;
        width: 100%;
        background-color: #bd1808;
    }
`;

//Wraps the content inside the navbar. Scroll on vertical overflow. Dynamic heighs.
export const OverflowWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 172px;
    max-height: 85vh;

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */

    ::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }
`;

//Wrapper for the logo and the textbox
export const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 96%;
    margin: 15px 0 0 2%;
    height: 32px;
    background-color: rgba(234, 234, 234, 0.2);
    border-radius: 4px;
    color: white;
    font-size: 24px;
    @media (max-width: 600px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 96%;
        margin: 15px 0 0 2%;
        height: 32px;
        background-color: rgba(234, 234, 234, 0.2);
        border-radius: 4px;
        color: white;
        font-size: 24px;
    }
`;

export const LogoTextbox = styled.div`
    /* transition: 0.5s all; */

    display: flex;
    justify-content: space-between;
    gap: 10px;
    @media (max-width: 600px) {
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }
    &:hover {
        cursor: pointer;
        filter: invert(20%);
    }
`;

export const Logo = styled.img`
    width: 25px;
    margin-left: 8px;
    @media (max-width: 600px) {
        width: 25px;
        margin-left: 8px;
    }
`;

export const DownArrow = styled.img`
    transition: 0.5s all;
    width: 25px;
    position: relative;
    bottom: 4px;
    right: 5px;

    @media (max-width: 600px) {
        width: 25px;
        position: relative;
        bottom: 4px;
        right: 5px;
    }
`;

export const PokeBall = styled.img`
    width: 120px;
    position: absolute;
    right: 10px;
    top: 10px;
    @media (max-width: 600px) {
        width: 120px;
        position: absolute;
        right: 10px;
        top: 10px;
    }
`;

//The grid creates equally sized rows. Used by the search bar, pokeball, types-box, sort-by-box, and the
//buttons at the bottom of the navbar.
export const GridContainer = styled.div`
    display: grid;
    margin-top: 20px;
    padding: 0 20px 0 20px;
    grid-template-rows: repeat(1fr);
    row-gap: 20px;
    @media (max-width: 600px) {
        display: grid;
        margin-top: 20px;
        padding: 0 20px 0 20px;
        grid-template-rows: repeat(1fr);
        row-gap: 20px;
    }
`;

//Wrapper for the searchbar and pokeball button
export const SearchOuter = styled.div`
    display: grid;
    width: 65%;
    height: 40px;
    grid-template-columns: 1fr 4fr 2.5fr;
    grid-column-gap: 0px;
    margin: auto;
    @media (max-width: 950px) {
        grid-template-columns: 1fr 4fr 1fr;
    }

    .searchbar {
        outline: none;
        height: 38px;
        flex: 1;
        border: none;
        padding-left: 10px;
        font-size: 15px;
        width: 100%;
        margin-right: 20vw;
    }

    .searchContainer {
        display: inline-flex;
        flex: 1;
        border: 1px solid grey;
        background-color: #f4f4f4;
        border-radius: 6px;
        overflow: hidden;
    }

    .searchIcon {
        padding: 0.45rem;
        background-color: #f8f8f8;

        &:hover {
            cursor: pointer;
            background-color: rgb(200, 200, 200);
        }
        /* display: flex; */
        /* align-items: center; */
        /* background-color: black;
            -webkit-mask-image: url(icon.svg);
            mask-image: url(icon.svg); */
    }
    @media (max-width: 600px) {
        display: grid;
        width: 90%;
        height: 40px;
        grid-template-columns: 4fr 1fr;
        grid-column-gap: 5px;

        .filler {
            display: none;
        }

        .searchContainer {
            display: inline-flex;
            flex: 1;
            border: 1px solid grey;
            background-color: #f8f8f8;
            border-radius: 6px;
            overflow: hidden;
        }

        .searchbar {
            outline: none;
            /* padding: 0.5rem 0.5rem 0.5rem 0; */
            flex: 1;
            border: none;
            padding-left: 10px;
            font-size: 15px;
            width: 100%;
        }

        .searchIcon {
            padding: 0.45rem;
            background-color: #f8f8f8;
            /* display: flex; */
            /* align-items: center; */
            /* background-color: black;
            -webkit-mask-image: url(icon.svg);
            mask-image: url(icon.svg); */
        }
    }
    @media (min-width: 900px) {
        width: 55%;
    }
    @media (min-width: 1200px) {
        width: 45%;
    }
    @media (min-width: 1600px) {
        width: 55%;
    }
`;

export const PokeBallBtnContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 600px) {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const PokeballBoxSurpriseMe = styled.div`
    color: white;
    border-radius: 6px;
    background-color: rgba(15, 10, 10, 0.7);
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    &:hover {
        cursor: pointer;
        background-color: rgba(15, 10, 10, 0.8);
    }
    @media (max-width: 950px) {
        background-color: transparent;
    }
`;

export const PokeballBoxSurpriseMeText = styled.div`
    @media (max-width: 950px) {
        display: none;
    }
`;

export const PokeBallBtn = styled.img`
    width: 40px;
    transition: 0.7s;
    @media (max-width: 600px) {
        width: 40px;
    }
    &:hover {
        cursor: pointer;
        transform: rotate(-360deg);
    }
`;

//Wrapper for the type-tags. Used for the carousel.
export const SelectedTags = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 20%;
    column-gap: 20px;
    margin: auto;
    justify-content: center;
`;

//Wrapper for the type-tags. Used for the carousel.
export const TagGrid = styled.div`
    display: grid;
    height: 85%;
    margin: auto;
    grid-column-gap: 15px;
    grid-row-gap: 15px;

    //Carousel for the tags
    overflow-y: scroll;
    width: 90%;

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }

    @media (max-width: 325px) {
        grid-template-columns: repeat(2, auto);
        height: min-content;
    }
    @media (min-width: 325px) {
        grid-template-columns: repeat(3, auto);
        height: min-content;
    }
    @media (min-width: 600px) {
        grid-template-columns: repeat(6, auto);
    }

    @media (min-width: 1050px) {
        resize: none;
    }
`;

interface TagI {
    backgroundColor: string;
}

//Type tag such as Water, Bug, Fire, etc.
export const Tag = styled.div<TagI>`
    color: #ffffff;
    transition: 0.1s;
    padding: 2px 3px 2px 3px;
    background-color: rgba(15, 10, 10, 0.7);
    font-weight: 500;
    letter-spacing: 1px;
    display: flex; //Center text within tag
    align-items: center;
    justify-content: space-evenly;
    border: 5px solid ${(props) => props.backgroundColor};
    border-radius: 20px;
    &:hover {
        cursor: pointer;
        background-color: rgba(15, 10, 10, 0.8);
    }
`;

interface FilterTagsI {
    background: string;
}

export const FilterTags = styled.div<TagI>`
    color: #ffffff;
    padding: 2px 3px 2px 3px;
    transition: 0.1s;
    background-color: rgba(15, 10, 10, 0.7);
    font-weight: 500;
    letter-spacing: 1px;
    display: flex; //Center text within tag
    align-items: center;
    justify-content: space-evenly;
    border: 5px solid ${(props) => props.backgroundColor};
    outline: 1px solid white;
    border-radius: 20px;
    &:hover {
        cursor: pointer;
        opacity: 0.85;
        background-color: rgba(15, 10, 10, 0.8);
    }
`;
//The bottom edge of the navbar
export const FilterOuter = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

//Filter icon to the left of the text
export const FilterIcon = styled.div``;

//"Filter your pokemon"
export const FilterText = styled.div``;

//Adjust width based on screen size
export const DropdownContainer = styled.div`
    @media (min-width: 600px) {
        width: 90%;
        margin: auto;
    }
    @media (min-width: 1050px) {
        width: 80%;
        margin: auto;
    }
    @media (min-width: 1500px) {
        width: 70%;
        margin: auto;
    }
    @media (min-width: 1900px) {
        width: 60%;
        margin: auto;
    }
`;

//The dropdown appears when "Filter your pokemon" is clicked. The grid creates equally sized rows.
export const DropdownOuter = styled.div`
    transition: 0.5s all;
    position: relative;
    background-color: #bd1808;
    width: 100%;
    height: 500px;
    z-index: 999;
    margin-top: 15px;
    padding-top: 15px;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    display: grid;
    grid-row-gap: 50px;

    @media (max-width: 600px) {
        grid-template-rows: 3fr 3fr 1fr;
    }

    @media (min-width: 600px) {
        grid-template-columns: 2fr 1fr;
        height: 300px;
    }
`;

//Wrapper for each row-section in the dropdown grid
export const DropdownGridRow = styled.div`
    width: 100%;

    @media (max-width: 600px) {
        &:nth-child(3) {
            padding-bottom: 10px;
        }
    }

    //The buttons at the bottom of the navbar takes up two colunmns
    @media (min-width: 600px) {
        &:nth-child(3) {
            grid-column: span 2;
            width: 90%;
            display: flex;
            align-items: center;
            margin: auto;
        }
    }
`;

//Header for "Types" and "Sort by"
export const DropdownHeader = styled.div`
    color: #ffffff;
    font-size: 1.2rem;
`;

//Box and grid for the types-section. Parent of the TagOuter containing the carousel.
export const TypesBox = styled.div`
    background-color: rgba(255, 255, 255, 0.2);
    display: grid;
    align-items: center;
    height: 100%;
    border-radius: 10px;
    width: 95%;
    margin: auto;
    z-index: 999999;
`;

//Box and grid for the sort-by-section
export const SortByBox = styled.div`
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(auto, auto));
    border-radius: 10px;
    width: 95%;
    align-items: center;
    margin: auto;
    z-index: 99999999999;
`;

//"Sort by"-tags such as "A - Z"
export const SortTag = styled.div`
    background-color: rgba(15, 10, 10, 0.7);
    color: #ffffff;
    border-radius: 10px;
    font-size: 1.2rem;
    width: 80%;
    height: 40px;
    display: grid;
    align-items: center;
    margin: auto;

    //Last tag takes up width of two columns
    &:nth-child(5) {
        border-spacing: 10px;
        grid-column: span 2;
        width: 90%;
    }

    font-size: 0.9rem;
    padding: 0 5px 0 5px;
    @media screen and (max-width: 320px) {
        font-size: 0.9rem;
        padding: 0 5px 0 5px;
    }
    &:hover {
        cursor: pointer;
        background-color: rgba(15, 10, 10, 0.8);
    }
`;

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .formButton {
        width: 100%;
    }
`;

export const ButtonOuter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 600px) {
        width: 90%;
    }
    @media screen and (min-width: 600px) {
        width: 40%;
    }
`;

export const ResetBtn = styled.div`
    background-color: rgba(15, 10, 10, 0.7);
    color: #ffffff;
    padding: 5px 0 5px 0;
    width: 70%;
    border-radius: 10px;
    font-size: 1.2rem;
    margin: auto;

    @media screen and (max-width: 320px) {
        font-size: 1rem;
    }
    &:hover {
        cursor: pointer;
        background-color: rgba(15, 10, 10, 0.8);
    }
`;

export const SearchBtn = styled.button`
    background-color: rgba(15, 10, 10, 0.7);
    color: #ffffff;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px;
    font-size: 1.2rem;

    @media screen and (max-width: 320px) {
        font-size: 1rem;
    }
    &:hover {
        cursor: pointer;
        background-color: rgba(15, 10, 10, 0.8);
    }
`;

export const PokemonContainer = styled.div`
    width: 25%;
    display: grid;
    position: absolute;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: 50px;
    right: 5px;
    overflow: hidden;
    top: 122px;
    column-gap: 0px;
    align-items: baseline;

    img {
        position: relative;
        bottom: 0px;
        width: 55px;
    }

    @media (max-width: 600px) {
        visibility: hidden;
    }

    .pikachu-small {
        transform: translateY(6px);
    }
    .bulbasaur {
        transform: translateY(9px);
    }
    .charmander {
        transform: translateY(5px);
    }
    .squirtle {
        transform: translateY(6px);
    }
`;

export const NavbarEdge = styled.img`
    position: absolute;
    bottom: -22px;
    z-index: 999;
    width: 270px;

    &:hover {
        cursor: pointer;
        filter: invert(7.5%);
    }

    @media (min-width: 600px) {
        width: 300px;
    }
`;

// interfaces for side lines
interface LeftEdgeI {
    height: string;
    top: string;
    offset: string;
}

interface RightEdgeI {
    height: string;
    top: string;
    offset: string;
}

export const LeftEdge = styled.img<LeftEdgeI>`
    transition: 0.2s all;
    position: fixed;
    left: ${(props) => "-" + props.offset};
    top: ${(props) => props.top};
    height: ${(props) => props.height};
    z-index: -1;

    @media (max-height: 680px) {
        height: 64vh;
    }

    @media (max-height: 550px) {
        height: 55vh;
    }

    @media (max-height: 450px) {
        height: 45vh;
    }

    @media (max-height: 400px) {
        height: 40vh;
    }
`;

export const RightEdge = styled.img<RightEdgeI>`
    transition: 0.2s all;
    position: fixed;
    right: ${(props) => "-" + props.offset};
    transform: translateX(0px);
    top: ${(props) => props.top};
    height: ${(props) => props.height};
    z-index: -1;

    @media (max-height: 680px) {
        height: 64vh;
    }

    @media (max-height: 550px) {
        height: 55vh;
    }

    @media (max-height: 450px) {
        height: 45vh;
    }

    @media (max-height: 400px) {
        height: 40vh;
    }
`;
