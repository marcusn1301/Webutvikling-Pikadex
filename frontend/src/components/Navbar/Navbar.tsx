import { useEffect, useState } from "react";

import pokeballIcon from "../../assets/icons/pokeball_icon.svg";
import logo from "../../assets/Logo.svg";
import navbarEdge from "../../assets/pageEdges/navbarEdge.svg";

import leftEdge from "../../assets/pageEdges/leftEdge.svg";
import rightEdge from "../../assets/pageEdges/rightEdge.svg";

import pokeball from "../../assets/Pokeball.svg";
import { useScroll } from "../../hooks/useScroll";
import { HiMagnifyingGlass } from "react-icons/hi2";
import {
    ButtonsContainer,
    DropdownGridRow,
    DropdownHeader,
    DropdownOuter,
    FilterOuter,
    GridContainer,
    Logo,
    LogoContainer,
    LogoTextbox,
    NavbarEdge,
    NavbarOuter,
    PokeBall,
    PokeBallBtn,
    PokeBallBtnContainer,
    PokemonContainer,
    ResetBtn,
    SearchBtn,
    SearchOuter,
    SortByBox,
    SortTag,
    Tag,
    SelectedTags,
    TypesBox,
    OverflowWrapper,
    TagGrid,
    DropdownContainer,
    PokeballBoxSurpriseMe,
    PokeballBoxSurpriseMeText,
    RightEdge,
    LeftEdge,
    FilterTags,
    ButtonOuter,
} from "./NavbarStyles";

import pikachu from "../../assets/Navbar/pokemon/pikachu.svg";
import squirtle from "../../assets/Navbar/pokemon/squirtle.svg";
import charmander from "../../assets/Navbar/pokemon/charmander.svg";
import bulbasaur from "../../assets/Navbar/pokemon/bulbasaur.svg";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

//Retrieved from https://gist.github.com/apaleslimghost/0d25ec801ca4fc43317bcff298af43c3
const list = [
    ["normal", "#A8A77A", "notPicked"],
    ["fire", "#EE8130", "notPicked"],
    ["water", "#6390F0", "notPicked"],
    ["electric", "#F7D02C", "notPicked"],
    ["grass", "#7AC74C", "notPicked"],
    ["ice", "#96D9D6", "notPicked"],
    ["fighting", "#C22E28", "notPicked"],
    ["poison", "#A33EA1", "notPicked"],
    ["ground", "#E2BF65", "notPicked"],
    ["flying", "#A98FF3", "notPicked"],
    ["psychic", "#F95587", "notPicked"],
    ["bug", "#A6B91A", "notPicked"],
    ["rock", "#B6A136", "notPicked"],
    ["ghost", "#735797", "notPicked"],
    ["dragon", "#6F35FC", "notPicked"],
    ["dark", "#705746", "notPicked"],
    ["steel", "#B7B7CE", "notPicked"],
    ["fairy", "#D685AD", "notPicked"],
];

interface NavbarI {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    tags: any;
    setTags: React.Dispatch<React.SetStateAction<Array<Array<string>>>>;
    filterSearch: boolean;
    setFilterSearch: React.Dispatch<React.SetStateAction<boolean>>;
    surpriseMe: boolean;
    setSurpriseMe: React.Dispatch<React.SetStateAction<boolean>>;
    init: boolean;
    setInit: React.Dispatch<React.SetStateAction<boolean>>;
    sortOrder: string;
    setSortOrder: React.Dispatch<React.SetStateAction<string>>;
    sortIndexOrder: string;
    setSortIndexOrder: React.Dispatch<React.SetStateAction<string>>;
    sortFavorited: string;
    setSortFavorited: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({
    searchTerm,
    setSearchTerm,
    tags,
    setTags,
    filterSearch,
    setFilterSearch,
    surpriseMe,
    setSurpriseMe,
    init,
    setInit,
    sortOrder,
    setSortOrder,
    sortIndexOrder,
    setSortIndexOrder,
    sortFavorited,
    setSortFavorited,
}: NavbarI) => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [height, setHeight] = useState<string>("172px");
    const [update, setUpdate] = useState<boolean>(false);
    const [searchBarSearch, setSearchBarSearch] = useState("");
    const [toggleASC, setToggleASC] = useState<boolean>(false);
    const [toggleDESC, setToggleDESC] = useState<boolean>(false);
    const [toggleIndexASC, setToggleIndexASC] = useState<boolean>(false);
    const [toggleIndexDESC, setToggleIndexDESC] = useState<boolean>(false);
    const [colorList, setColorList] = useState<Array<Array<string>>>(list);
    const [toggleFavorited, setToggleFavorited] = useState<boolean>(false);

    let search = "";

    useEffect(() => {
        decideHeight();
    }, [showDropdown]);

    const decideHeight = () => {
        showDropdown ? setHeight("fit-content") : setHeight("172px");
    };

    const yOffsetThreshold = 70;

    const yOffset = useScroll();

    let small = false;

    let lineHeight: string = "70vh";
    let lineTop: string = "200px";
    let lineOffset: string = "1px";

    // If the user has scrolled over 70 px, increase the line heights
    if (yOffset > 70) {
        lineHeight = "80vh";
        lineTop = "120px";
        lineOffset = "5px";
    }

    if (yOffset > yOffsetThreshold) {
        small = true;
    }

    const checkHeight: () => string = () => {
        if (showDropdown) return "fit-content";
        else if (small) return "63px";
        else {
            return height;
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setSearchTerm(searchBarSearch);
        setFilterSearch(!filterSearch);
        setShowDropdown(false);
    };

    const addTag = (tag: Array<string>, tagList: Array<Array<string>>, index: number) => {
        // If the tag is already in the list, dont add it
        if (tagList.includes(tag)) {
            return;
        }

        if (tagList.length >= 2) {
            colorList.map((color: Array<string>) => {
                if (color[0] === tagList[tagList.length - 1][1]) {
                    color[2] = "notPicked";
                    colorList[index][2] = "notPicked";
                }
            });

            tagList.pop();
            tagList.unshift(tag);
        } else {
            tagList.push(tag);
            colorList[index][2] = "picked";
        }

        // Sets the tags as state stored in Homepage.tsx component
        setTags(tagList);

        // The update state in only to the component to rerender
        setUpdate(!update);
    };

    const removeTag = (tagTerm: string, tagList: Array<Array<string>>) => {
        const filteredTags = tagList.filter((tag: Array<string>) => {
            return tag[0] !== tagTerm;
        });

        setTags(filteredTags);
        setUpdate(!update);

        colorList.map((color: Array<string>) => {
            if (color[0] === tagTerm) {
                color[2] = "notPicked";
            }
        });
    };

    const handleReset = () => {
        setTags([]);
        setSearchTerm("");
        setFilterSearch(!filterSearch);
        setSearchBarSearch("");
        setShowDropdown(false);
        setSortFavorited("");
        setSortIndexOrder("");
        setSortOrder("");
        setToggleASC(false);
        setToggleDESC(false);
        setToggleIndexASC(false);
        setToggleIndexDESC(false);
        setToggleFavorited(false);
    };

    //Toggles the value for the A-Z tag. If toggled to true, the sortOrder will be set to ASC on name.
    const handleASC = (toggleASC: boolean) => {
        setToggleDESC(false);
        setToggleIndexASC(false);
        setToggleIndexDESC(false);
        setToggleFavorited(false);

        setToggleASC(toggleASC);
        if (toggleASC) {
            setSortOrder("ASC");
            setSortIndexOrder("");
            setSortFavorited("");
        } else {
            setSortOrder("");
        }
    };

    //Toggles the value for the Z-A tag. If toggled to true, the sortOrder will be set to DESC on name.
    const handleDESC = (toggleDESC: boolean) => {
        setToggleASC(false);
        setToggleIndexASC(false);
        setToggleIndexDESC(false);
        setToggleFavorited(false);

        setToggleDESC(toggleDESC);
        if (toggleDESC) {
            setSortOrder("DESC");
            setSortIndexOrder("");
            setSortFavorited("");
        } else {
            setSortOrder("");
        }
    };

    //Handles the sort-values for the "Lowest No."-tag
    const handleIndexASC = (toggleIndexASC: boolean) => {
        setToggleIndexDESC(false);
        setToggleASC(false);
        setToggleDESC(false);
        setToggleFavorited(false);

        setToggleIndexASC(toggleIndexASC);
        if (toggleIndexASC) {
            setSortIndexOrder("ASC");
            setSortOrder("");
            setSortFavorited("");
        } else {
            setSortIndexOrder("");
        }
    };

    //Handles the sort-values for the "Highest No."-tag
    const handleIndexDESC = (toggleIndexDESC: boolean) => {
        setToggleIndexASC(false);
        setToggleASC(false);
        setToggleDESC(false);
        setToggleFavorited(false);

        setToggleIndexDESC(toggleIndexDESC);
        if (toggleIndexDESC) {
            setSortIndexOrder("DESC");
            setSortOrder("");
            setSortFavorited("");
        } else {
            setSortIndexOrder("");
        }
    };

    //Handles the sort-values for the "Most favorited"-tag
    const handleFavorited = (toggleFavorited: boolean) => {
        setToggleIndexASC(false);
        setToggleIndexDESC(false);
        setToggleASC(false);
        setToggleDESC(false);

        setToggleFavorited(toggleFavorited);
        if (toggleFavorited) {
            setSortFavorited("DESC");
            setSortOrder("");
            setSortIndexOrder("");
        } else {
            setSortFavorited("");
        }
    };

    // Handles enter press in RandomButton
    const handleKeyDownRandom = (event: { keyCode: number; }) => {
        if (event.keyCode === 13) {
            setSurpriseMe(!surpriseMe);
            setInit(false);
        }
    };

    // Handles enter press in Search Bar
    const handleKeyDownSearch = (event: { keyCode: number; }) => {
        if (event.keyCode === 13) {
            setSearchTerm(searchBarSearch);
            setFilterSearch(!filterSearch);
            setShowDropdown(false);
        }
    };

    // Handles enter press in Pikadex
    const handleKeyDownHome = (event: { keyCode: number; }) => {
        if (event.keyCode === 13) {
            handleReset();
        }
    };

    //Handles enter on dropdown
    const handleKeyDownDropDown = (event: { keyCode: number; }) => {
        if (event.keyCode === 13) {
            setShowDropdown(!showDropdown);
        }
    };

    //Handles enter on reset
    const handleKeyDownReset = (event: { keyCode: number; }) => {
        if (event.keyCode === 13) {
            handleReset();
        }
    };

    //Handles enter on type
    const handleKeyDownType = (event: { key: string; }) => {
        if (event.key === 'Enter') {
          console.log("i tried")
        } 
    };

    //Handles enter on type remove
    const handleKeyDownTypeRemove = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            console.log("i tried");
        }
    };

    //Handles enter on AZ
    const handleKeyDownAZ = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            handleASC(!toggleASC)
        }
    };

    //Handles enter on AZ
    const handleKeyDownZA = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            handleDESC(!toggleDESC)
        }
    };

    //Handles enter on index->
    const handleKeyDown1andUp = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            handleIndexASC(!toggleIndexASC)
        }
    };

    //Handles enter on index<-
    const handleKeyDown801andDown = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            handleIndexDESC(!toggleIndexDESC)
        }
    };

    //Handles enter on Fav
    const handleKeyDownFav = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            handleFavorited(!toggleFavorited)
        }
    };

    return (
        <>
            <NavbarOuter transition={small ? true : false} height={checkHeight()}>
                <OverflowWrapper
                    aria-label={"Navbar"}
                    style={{
                        minHeight: small ? "63px" : "173px",
                        overflowY: !showDropdown ? "hidden" : "scroll",
                    }}
                >
                    <LogoContainer>
                        <LogoTextbox onKeyDown={handleKeyDownHome} tabIndex={0} onClick={() => handleReset()}>
                            <Logo src={logo} aria-label={"Pikadex logo"} />
                            <div aria-label={"Pikadex"}>Pikadex</div>
                        </LogoTextbox>
                    </LogoContainer>
                    {!showDropdown && (
                        <img
                            src={pikachu}
                            alt="pikachu"
                            className="pikachu"
                            style={{ display: !small || showDropdown ? "block" : "none" }}
                        />
                    )}
                    {!showDropdown && (
                        <PokemonContainer style={{ display: !small || showDropdown ? "block" : "none" }}>
                            <img src={pikachu} alt="pikachu" className="pikachu-small" />
                            <img src={bulbasaur} alt="bulbasaur" className="bulbasaur" />
                            <img src={charmander} alt="charizard" className="charmander" />
                            <img src={squirtle} alt="squirtle" className="squirtle" />
                        </PokemonContainer>
                    )}
                    <PokeBall src={pokeball} />
                    {small && !showDropdown ? (
                        ""
                    ) : (
                        <GridContainer>
                            {/* Grid row 1 */}
                            <SearchOuter>
                                <div className="filler"></div>
                                {/* Grid column 1 */}
                                <div className="searchContainer">
                                    <form onSubmit={handleSubmit}>
                                        <input
                                            tabIndex={0}
                                            type="text"
                                            placeholder="Search by name or index"
                                            className="searchbar"
                                            onChange={(e) => setSearchBarSearch(e.target.value)}
                                        />
                                    </form>
                                    <HiMagnifyingGlass
                                        onKeyDown={handleKeyDownSearch}
                                        tabIndex={0}
                                        size={25}
                                        className="searchIcon"
                                        onClick={handleSubmit}
                                        aria-label={"Search button"}
                                    />
                                </div>
                                {/* Grid column 2 */}
                                <PokeBallBtnContainer
                                    onClick={() => {
                                        setSurpriseMe(!surpriseMe);
                                        setInit(false);
                                    }}
                                >
                                    <PokeballBoxSurpriseMe aria-label={"Surprise me button"} tabIndex={0} onKeyDown={handleKeyDownRandom}>
                                            <PokeballBoxSurpriseMeText>Surprise me!</PokeballBoxSurpriseMeText>
                                        <PokeBallBtn src={pokeballIcon} />
                                    </PokeballBoxSurpriseMe>
                                </PokeBallBtnContainer>
                            </SearchOuter>
                            {/* Grid row 2: selected type tags are displayed */}
                            <SelectedTags>
                                {/*Click on a tag in the filter and display them here*/}
                                {tags?.map((tag: string, index: number) => {
                                    return (
                                        <FilterTags
                                            tabIndex={0}
                                            onKeyDown={handleKeyDownTypeRemove}
                                            backgroundColor={tag[1]}
                                            key={index}
                                            onClick={() => removeTag(tag[0], tags)}
                                            aria-label={tag[0]}
                                        >
                                            {tag[0]}
                                        </FilterTags>
                                    );
                                })}
                            </SelectedTags>
                        </GridContainer>
                    )}

                    {showDropdown && (
                        <>
                            <DropdownContainer>
                                <DropdownOuter>
                                    <DropdownGridRow>
                                        <DropdownHeader>Types</DropdownHeader>
                                        <TypesBox aria-label={"Filter on types"}>
                                            <TagGrid>
                                                {/* Map over the list of tags with colors and text */}            
                                                {colorList.map((item: Array<string>, index: number) => (
                                                    <Tag
                                                        tabIndex={0}
                                                        onKeyDown={handleKeyDownType}
                                                        backgroundColor={item[1]}
                                                        /* style={{
                                                            border:
                                                                item[2] === "picked"
                                                                    ? "2px solid black"
                                                                    : "2px solid transparent",
                                                        }} */
                                                        key={index}
                                                        onClick={() => addTag(item, tags, index)}
                                                        aria-label={item[0]}
                                                    >
                                                        {item[0]}
                                                    </Tag>
                                                ))}
                                            </TagGrid>
                                        </TypesBox>
                                    </DropdownGridRow>
                                    <DropdownGridRow>
                                        <DropdownHeader>Sort By</DropdownHeader>
                                        <SortByBox aria-label={"Sort by"}>
                                            <SortTag
                                                tabIndex={0}
                                                onKeyDown={handleKeyDownAZ}
                                                aria-label={"A to Z"}
                                                onClick={() => handleASC(!toggleASC)}
                                                style={{ backgroundColor: toggleASC ? "rgb(20, 20, 20)" : "" }}
                                            >
                                                A - Z
                                            </SortTag>
                                            <SortTag
                                                tabIndex={0}
                                                onKeyDown={handleKeyDownZA}
                                                aria-label={"Z to A"}
                                                onClick={() => handleDESC(!toggleDESC)}
                                                style={{ backgroundColor: toggleDESC ? "rgb(20, 20, 20)" : "" }}
                                            >
                                                Z - A
                                            </SortTag>
                                            <SortTag
                                                onKeyDown={handleKeyDown1andUp}
                                                tabIndex={0}
                                                aria-label={"ID low to high"}
                                                onClick={() => handleIndexASC(!toggleIndexASC)}
                                                style={{ backgroundColor: toggleIndexASC ? "rgb(20, 20, 20)" : "" }}
                                            >
                                                Lowest No.
                                            </SortTag>
                                            <SortTag
                                                onKeyDown={handleKeyDown801andDown}
                                                tabIndex={0}
                                                aria-label={"ID high to low"}
                                                onClick={() => handleIndexDESC(!toggleIndexDESC)}
                                                style={{ backgroundColor: toggleIndexDESC ? "rgb(20, 20, 20)" : "" }}
                                            >
                                                Highest No.
                                            </SortTag>
                                            <SortTag
                                                tabIndex={0}
                                                onKeyDown={handleKeyDownFav}
                                                aria-label={"Most favorited"}
                                                onClick={() => handleFavorited(!toggleFavorited)}
                                                style={{ backgroundColor: toggleFavorited ? "rgb(20, 20, 20)" : "" }}
                                            >
                                                Most favorited
                                            </SortTag>
                                        </SortByBox>
                                    </DropdownGridRow>
                                    <DropdownGridRow>
                                        <ButtonsContainer>
                                            <ButtonOuter>
                                                <ResetBtn tabIndex={0} onKeyDown={handleKeyDownReset} onClick={handleReset} aria-label={"Reset filter and sorting"}>
                                                    Reset
                                                </ResetBtn>
                                                <form onSubmit={handleSubmit} className="formButton">
                                                    <SearchBtn type="submit" aria-label={"Search"}>
                                                        Search
                                                    </SearchBtn>
                                                </form>
                                            </ButtonOuter>
                                        </ButtonsContainer>
                                    </DropdownGridRow>
                                </DropdownOuter>
                            </DropdownContainer>
                        </>
                    )}
                </OverflowWrapper>
                <FilterOuter>
                    <NavbarEdge
                        tabIndex={0}
                        aria-label={"Toggle navbar dropdown"}
                        className="navbarDropdown"
                        onKeyDown={handleKeyDownDropDown}
                        // style={{ marginTop: small || showDropdown ? "50px" : "10px" }}
                        src={navbarEdge}
                        onClick={() => setShowDropdown(!showDropdown)}
                    />
                </FilterOuter>
            </NavbarOuter>
            <LeftEdge src={leftEdge} height={lineHeight} top={lineTop} offset={lineOffset} />
            <RightEdge src={rightEdge} height={lineHeight} top={lineTop} offset={lineOffset} />
        </>
    );
};
export default Navbar;
