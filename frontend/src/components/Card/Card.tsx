import React, { useState } from "react";

import {
    CardContainer,
    InformationContainer,
    NameTag,
    PokeIndex,
    Tag,
    Tags,
    CardExpandContainer,
    BackButtonContainer,
    IndexRow,
    StatsContainer,
    StatsText,
    InfoContainerExpanded,
    PokemonImg,
    NameContainer,
    NameTagExpanded,
    StarContainer,
    InfoGrid,
    ImgContainer,
    TagsExpanded,
    Favorited,
    NameTagOuter,
    IndexOuter,
    IndexOuterBg,
    InformationBg,
    CardOverlay,
} from "./CardStyles";

import { pokemonTypesColors } from "../../types/mappings";

import hexRgb from "hex-rgb";
import { IoArrowBackCircle } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";

import { gql, useMutation } from "@apollo/client";

interface Pokemon {
    index: number;
    img: string;
    name: string;
    type_1: string;
    type_2: string;
    height: number;
    weight: number;
    exp: number;
    toggleClick: boolean;
    setToggleClick: React.Dispatch<React.SetStateAction<boolean>>;
    favorited: number;
    isFavorited: boolean;
    newList: Array<string>;
}

const checkIndex = (index: Number) => {
    if (index >= 10 && index < 100) return `#0${index}`;
    if (index >= 100) return `#${index}`;
    else return `#00${index}`;
};

const UPDATE_FAVORITES = gql`
    mutation UpdatePokemon($where: PokemonWhere, $update: PokemonUpdateInput) {
        updatePokemon(where: $where, update: $update) {
            pokemon {
                favorited
            }
        }
    }
`;

const Card = ({
    index,
    img,
    name,
    type_1,
    type_2,
    height,
    weight,
    exp,
    toggleClick,
    setToggleClick,
    favorited,
    isFavorited,
    newList,
}: Pokemon) => {
    const types: Array<string> = [type_1, type_2];
    const [isExpanded, setIsExpanded] = useState(false);
    const [updateFavorite] = useMutation(UPDATE_FAVORITES);
    const [favoritesClicked, setFavoritesClicked] = useState<boolean>(isFavorited);
    const [favoritesCount, setFavoritesCount] = useState<number>(favorited);

    const handlePopup = (isExpanded: boolean) => {
        if (toggleClick) {
            setIsExpanded(isExpanded);
            setToggleClick(!toggleClick);
        }
    };

    const handleRemovePopup = (isExpanded: boolean) => {
        setIsExpanded(isExpanded);
        setToggleClick(true);
    };

    const handleTypeColor = () => {
        return hexRgb(pokemonTypesColors[type_1 as keyof typeof pokemonTypesColors], {
            format: "css",
        })
            .replace("(", "")
            .replace(")", "")
            .replace("rgb", "")
            .replace(" ", ",")
            .replace(" ", ",")
            .replace(" ", ",");
    };

    const handleFavorites = (id: number, favorites: number) => {
        // if the favorites button was clicked and the card is favorited, then check if card-id is in storage
        if (!favoritesClicked) {
            // if there is a existing user - return
            updateFavorite({
                variables: {
                    where: {
                        id,
                    },
                    update: {
                        favorited: favorited + 1,
                    },
                },
            })
                .then((res) => {
                    setFavoritesClicked(true);
                    newList?.push(id.toString());
                    localStorage.setItem("addedToFavorites", newList.toString());
                    setFavoritesCount((favoritesCount) => (favoritesCount += 1));
                })
                .catch((err) => {});

            // If the favorites button was unclicked
        } else if (favoritesClicked) {
            updateFavorite({
                variables: {
                    where: {
                        id,
                    },
                    update: {
                        favorited: favorited - 1,
                    },
                },
            })
                .then(() => {
                    setFavoritesClicked(false);
                    let listWithRemovedId = newList.filter((x: string) => {
                        return x !== id.toString();
                    });

                    localStorage.setItem("addedToFavorites", listWithRemovedId.toString());

                    setFavoritesCount((favoritesCount) => (favoritesCount -= 1));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    // Handles enter on card
    const handleKeyDownCard = (event: { keyCode: number }) => {
        if (event.keyCode === 13) {
            handlePopup(true);
        }
    };

    //Handle enter on back
    const handleKeyDownCardBack = (event: { keyCode: number }) => {
        if (event.keyCode === 13) {
            handleRemovePopup(false);
        }
    };

    // Handle enter on star
    const handleKeyDownCardStar = (event: { keyCode: number }) => {
        if (event.keyCode === 13) {
            handleFavorites(index, favorited);
        }
    };

    return (
        <>
            {!isExpanded ? (
                <CardContainer
                    tabIndex={0}
                    onKeyDown={handleKeyDownCard}
                    className="cardContainer"
                    onClick={() => handlePopup(!isExpanded)}
                    backgroundColor={handleTypeColor()}
                >
                    <IndexOuter>
                        <IndexOuterBg backgroundColor={handleTypeColor()}>
                            <PokeIndex
                                className="pokeIndex"
                                backgroundColor={handleTypeColor()}
                                aria-label={checkIndex(index)}
                            >
                                {checkIndex(index)}
                            </PokeIndex>
                        </IndexOuterBg>
                    </IndexOuter>
                    <InformationBg backgroundColor={handleTypeColor()}>
                        <InformationContainer className="infoContainer" backgroundColor={handleTypeColor()}>
                            <div>
                                <img className="imageContainer" src={img} alt={name} />
                            </div>
                        </InformationContainer>
                        <Tags className="tags" backgroundColor={handleTypeColor()}>
                            {types.map((type: string, index: number) => {
                                if (type !== null) {
                                    return (
                                        <Tag
                                            aria-label={type}
                                            backgroundColor={
                                                pokemonTypesColors[type as keyof typeof pokemonTypesColors]
                                            }
                                            key={index}
                                        >
                                            {type.charAt(0).toUpperCase() + type.slice(1)}
                                        </Tag>
                                    );
                                }
                            })}
                        </Tags>
                    </InformationBg>
                    <NameTagOuter>
                        <NameTag
                            aria-label={name.charAt(0).toUpperCase() + name.slice(1)}
                            className="nameTag"
                            backgroundColor={handleTypeColor()}
                        >
                            {name.charAt(0).toUpperCase() + name.slice(1)}
                        </NameTag>
                    </NameTagOuter>
                </CardContainer>
            ) : (
                //Expanded version of a clicked card.
                <CardExpandContainer className="expandendCardContainer" backgroundColor={handleTypeColor()}>
                    <IndexRow backgroundColor={handleTypeColor()}>
                        <BackButtonContainer>
                            <IoArrowBackCircle
                                tabIndex={0}
                                size={45}
                                className="arrowBack"
                                onKeyDown={handleKeyDownCardBack}
                                onClick={() => handleRemovePopup(!isExpanded)}
                            />
                        </BackButtonContainer>
                        <PokeIndex backgroundColor={handleTypeColor()} style={{ color: "#000000" }}>
                            {checkIndex(index)}
                        </PokeIndex>
                    </IndexRow>
                    <InfoContainerExpanded backgroundColor={handleTypeColor()}>
                        <InfoGrid>
                            <ImgContainer>
                                <PokemonImg src={img} alt={name} />
                            </ImgContainer>
                            <StatsContainer backgroundColor={handleTypeColor()}>
                                <StatsText aria-label={"XP"} className="exp">
                                    EXP: {exp}
                                </StatsText>
                                <StatsText aria-label={"Height"} className="height">
                                    Height: {height}
                                </StatsText>
                                <StatsText aria-label={"Height"} className="weight">
                                    Weight: {weight}
                                </StatsText>
                            </StatsContainer>
                            <TagsExpanded>
                                {types.map((type: string, index: number) => {
                                    if (type !== null) {
                                        return (
                                            <Tag
                                                aria-label={type}
                                                backgroundColor={
                                                    pokemonTypesColors[type as keyof typeof pokemonTypesColors]
                                                }
                                                key={index}
                                            >
                                                {type.charAt(0).toUpperCase() + type.slice(1)}
                                            </Tag>
                                        );
                                    }
                                })}
                            </TagsExpanded>
                        </InfoGrid>
                    </InfoContainerExpanded>
                    <NameContainer backgroundColor={handleTypeColor()}>
                        <NameTagExpanded>{name.charAt(0).toUpperCase() + name.slice(1)}</NameTagExpanded>
                        <StarContainer>
                            <AiFillStar
                                onKeyDown={handleKeyDownCardStar}
                                tabIndex={0}
                                className="star"
                                size={30}
                                onClick={() => handleFavorites(index, favorited)}
                                style={{ color: favoritesClicked ? "yellow" : "white" }}
                            />
                            <Favorited>{favoritesCount}</Favorited>
                        </StarContainer>
                    </NameContainer>
                </CardExpandContainer>
            )}
            {isExpanded ? <CardOverlay /> : <></>}
        </>
    );
};

export default Card;
