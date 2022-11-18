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

//Retrieved from https://gist.github.com/apaleslimghost/0d25ec801ca4fc43317bcff298af43c3
const list = [
    ["normal", "#A8A77A"],
    ["fire", "#EE8130"],
    ["water", "#6390F0"],
    ["electric", "#F7D02C"],
    ["grass", "#7AC74C"],
    ["ice", "#96D9D6"],
    ["fighting", "#C22E28"],
    ["poison", "#A33EA1"],
    ["ground", "#E2BF65"],
    ["flying", "#A98FF3"],
    ["psychic", "#F95587"],
    ["bug", "#A6B91A"],
    ["rock", "#B6A136"],
    ["ghost", "#735797"],
    ["dragon", "#6F35FC"],
    ["dark", "#705746"],
    ["steel", "#B7B7CE"],
    ["fairy", "#D685AD"],
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
}

const Navbar = ({ searchTerm, setSearchTerm, tags, setTags, filterSearch, setFilterSearch, surpriseMe, setSurpriseMe, init, setInit }: NavbarI) => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [height, setHeight] = useState<string>("172px");
    const [update, setUpdate] = useState<boolean>(false);
    const [searchBarSearch, setSearchBarSearch] = useState("");

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

    const addTag = (tag: Array<string>, tagList: Array<Array<string>>) => {
        if (tagList.length >= 2) {
            tagList.pop();
            tagList.unshift(tag);
        } else {
            tagList.push(tag);
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
    };

    const handleReset = () => {
        setTags([]);
        setSearchTerm("");
        setFilterSearch(!filterSearch);
        setSearchBarSearch("");
        setShowDropdown(false);
    };

    return (
        <>
            <NavbarOuter transition={small ? true : false} height={checkHeight()}>
                <OverflowWrapper
                    style={{
                        minHeight: small ? "63px" : "173px",
                        overflowY: !showDropdown ? "hidden" : "scroll",
                    }}
                >
                    <LogoContainer>
                        <LogoTextbox>
                            <Logo src={logo} />
                            <div>Pikadex</div>
                        </LogoTextbox>
                    </LogoContainer>
                    {!showDropdown && (
                        <img src={pikachu} alt="pikachu" className="pikachu" style={{ display: !small || showDropdown ? "block" : "none" }} />
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
                                            type="text"
                                            placeholder="Search by name or index"
                                            className="searchbar"
                                            onChange={(e) => setSearchBarSearch(e.target.value)}
                                        />
                                    </form>
                                    <HiMagnifyingGlass size={25} className="searchIcon" onClick={handleSubmit} />
                                </div>
                                {/* Grid column 2 */}
                                <PokeBallBtnContainer
                                    onClick={() => {
                                        setSurpriseMe(!surpriseMe);
                                        setInit(false);
                                    }}
                                >
                                    <PokeballBoxSurpriseMe>
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
                                        <FilterTags background={tag[1]} key={index} onClick={() => removeTag(tag[0], tags)}>
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
                                        <TypesBox>
                                            <TagGrid>
                                                {/* Map over the list of tags with colors and text */}

                                                {list.map((item: Array<string>, index: number) => (
                                                    <Tag backgroundColor={item[1]} key={index} onClick={() => addTag(item, tags)}>
                                                        {item[0]}
                                                    </Tag>
                                                ))}
                                            </TagGrid>
                                        </TypesBox>
                                    </DropdownGridRow>
                                    <DropdownGridRow>
                                        <DropdownHeader>Sort By</DropdownHeader>
                                        <SortByBox>
                                            <SortTag
                                            /* onClick={() =>
                                                    setSortBy({
                                                        options: {
                                                            sort: [
                                                                {
                                                                    name: "DESC",
                                                                },
                                                            ],
                                                        },
                                                    })
                                                } */
                                            >
                                                A - Z
                                            </SortTag>
                                            <SortTag>Z - A</SortTag>
                                            <SortTag>Lowest No.</SortTag>
                                            <SortTag>Highest No.</SortTag>
                                            <SortTag style={{}}>Favorites</SortTag>
                                        </SortByBox>
                                    </DropdownGridRow>
                                    <DropdownGridRow>
                                        <ButtonsContainer>
                                            <ButtonOuter>
                                                <ResetBtn onClick={handleReset}>Reset</ResetBtn>
                                                <form onSubmit={handleSubmit} className="formButton">
                                                    <SearchBtn type="submit">Search</SearchBtn>
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
                        className="navbarDropdown"
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
