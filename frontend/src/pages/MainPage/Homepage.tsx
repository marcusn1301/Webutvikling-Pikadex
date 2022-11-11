import React, { useState, useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";

// import SearchBox from "../../components/SearchBox/SearchBox";
import leftEdge from "../../assets/pageEdges/leftEdge.svg";
import rightEdge from "../../assets/pageEdges/rightEdge.svg";
import footerEdge from "../../assets/pageEdges/footerEdge.svg";
import up from "../../assets/icons/up.svg";

import styled from "styled-components";
import { useScroll } from "../../hooks/useScroll";

import { useQuery, gql, ApolloClient, InMemoryCache, ApolloProvider, useLazyQuery } from "@apollo/client";

import { CardGrid, FooterEdge, PageCounter, SadPika, UpButton } from "./HomepageStyles";
import Loading from "../../components/Loading/Loading";

import sadPikaGIF from "../../assets/gifs/sadpika.gif";

const QUERY_POKEMON_CACHE = gql`
    query Pokemon($options: PokemonOptions, $where: PokemonWhere) {
        pokemon(options: $options, where: $where) {
            species_id
            sprite_url
            base_experience
            name
            weight
            id
            is_default
            order_id
            height
            type_1
            type_2
            favorited
        }
    }
`;

const POKEMON_SEARCH_BY_NAME = gql`
    query Pokemon($options: PokemonOptions, $where: PokemonWhere) {
        pokemon(options: $options, where: $where) {
            species_id
            sprite_url
            base_experience
            name
            weight
            id
            is_default
            order_id
            height
            type_1
            type_2
            favorited
        }
    }
`;

const POKEMON_FILTER_TAGS = gql`
    query Pokemon($options: PokemonOptions, $where: PokemonWhere) {
        pokemon(options: $options, where: $where) {
            species_id
            sprite_url
            base_experience
            name
            weight
            id
            is_default
            order_id
            height
            type_1
            type_2
            favorited
        }
    }
`;

const POKEMON_SEARCH_TAG_AND_NAME = gql`
    query Pokemon($options: PokemonOptions, $where: PokemonWhere) {
        pokemon(options: $options, where: $where) {
            species_id
            sprite_url
            base_experience
            name
            weight
            id
            is_default
            order_id
            height
            type_1
            type_2
            favorited
        }
    }
`;

const POKEMON_SURPRISE_ME = gql`
    query Pokemon($options: PokemonOptions, $where: PokemonWhere) {
        pokemon(options: $options, where: $where) {
            species_id
            sprite_url
            base_experience
            name
            weight
            id
            is_default
            order_id
            height
            type_1
            type_2
            favorited
        }
    }
`;

type Dispatch<A> = (value: A) => void;

interface PokemonI {
    sprite_url: string;
    id: number;
    name: string;
    type_1: string;
    type_2: string;
    height: number;
    weight: number;
    base_experience: number;
    favorited: number;
}

const MainPage = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [toggleClick, setToggleClick] = useState<boolean>(true);

    // Decides which gql query to use
    const [mode, setMode] = useState(QUERY_POKEMON_CACHE);
    const [tags, setTags] = useState<Array<Array<string>>>([]);
    const [filterSearch, setFilterSearch] = useState<boolean>(false);
    const [surpriseMe, setSurpriseMe] = useState<boolean>(false);

    const [init, setInit] = useState<boolean>(true);

    const [page, setPage] = useState<number>(0);

    useEffect(() => {
        if (localStorage.getItem("addedToFavorites")) {
            return;
        } else {
            localStorage.setItem("addedToFavorites", "");
        }
    }, []);

    let likedPokemon: Array<string | null | any> = [localStorage?.getItem("addedToFavorites")];
    let newList = likedPokemon[0]?.split(",");

    let searchVariables: object = {
        variables: {
            options: {
                offset: 20 * page,
                limit: 20,
            },
            where: {
                name_CONTAINS: searchTerm,
            },
        },
    };
    let noVariables: object = {
        variables: {
            options: {
                offset: 20 * page,
                limit: 20,
            },
        },
    };

    let tagVariables: object = {
        variables: {
            where: {
                type_1_IN: tags[0],
                OR: [
                    {
                        type_2_IN: tags[1],
                    },
                ],
            },
            options: {
                offset: 20 * page,
                limit: 20,
            },
        },
    };

    let searchAndTagVariables: object = {
        variables: {
            options: {
                offset: 20 * page,
                limit: 20,
            },
            where: {
                type_1_IN: tags[0],
                OR: [
                    {
                        type_2_IN: tags[1],
                    },
                ],
                AND: [
                    {
                        name_CONTAINS: searchTerm,
                    },
                ],
            },
        },
    };

    const [variables, setVariables] = useState(searchVariables);

    // creates a data object with all the pokemon from the query
    let { data, loading } = useQuery(mode, variables);

    const decideWhichQueryToUse = () => {
        if (tags.length > 0 && searchTerm.length > 0) {
            setVariables(searchAndTagVariables);
            setMode(POKEMON_SEARCH_TAG_AND_NAME);
        } else if (searchTerm.length > 0 && tags.length === 0) {
            setVariables(searchVariables);
            setMode(POKEMON_SEARCH_BY_NAME);
        } else if (tags.length > 0) {
            setVariables(tagVariables);
            setMode(POKEMON_FILTER_TAGS);
        } else {
            setVariables(noVariables);
            setMode(QUERY_POKEMON_CACHE);
        }
    };

    // When the user clicks on search, set the mode to the search term
    useEffect(() => {
        setPage(0);
        decideWhichQueryToUse();
    }, [searchTerm, filterSearch]);

    const handleSurpriseMe = () => {
        let fetchAmount = 20;
        const randIntList = [];

        for (let i = 0; i < fetchAmount; i++) {
            let randInt = Math.floor(Math.random() * 801);
            randIntList.push(randInt);
        }

        let surpriseMeVariables: object = {
            variables: {
                options: {
                    offset: 20 * page,
                    limit: 20,
                },
                where: {
                    id_IN: randIntList,
                },
            },
        };
        setVariables(surpriseMeVariables);
        setMode(POKEMON_SURPRISE_ME);
    };

    useEffect(() => {
        setPage(0);

        if (init) {
            setInit(false);
            return;
        } else {
            handleSurpriseMe();
        }
    }, [surpriseMe]);

    useEffect(() => {
        decideWhichQueryToUse();
    }, [page]);

    return (
        <>
            {loading && <Loading />}
            <Navbar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                tags={tags}
                setTags={setTags}
                filterSearch={filterSearch}
                setFilterSearch={setFilterSearch}
                surpriseMe={surpriseMe}
                setSurpriseMe={setSurpriseMe}
                init={init}
                setInit={setInit}
            />
            <PageCounter>
                <div style={{ visibility: page === 0 ? "hidden" : "visible" }} onClick={() => setPage(page > 0 ? page - 1 : 0)}>
                    &lt;
                </div>
                Page {page + 1}
                <div style={{ visibility: data?.pokemon?.length === 0 ? "hidden" : "visible" }} onClick={() => setPage((page) => (page += 1))}>
                    &gt;
                </div>
            </PageCounter>
            <CardGrid>
                {data?.pokemon?.length === 0 && (
                    <SadPika>
                        <img src={sadPikaGIF} alt="sad pika :(" />
                        <div>No more Pokemon :(</div>
                    </SadPika>
                )}
                {data?.pokemon?.map((pokemon: any, index: number) => {
                    return (
                        <Card
                            key={index}
                            img={pokemon.sprite_url}
                            index={pokemon.id}
                            name={pokemon.name}
                            type_1={pokemon.type_1}
                            type_2={pokemon.type_2}
                            height={pokemon.height}
                            weight={pokemon.weight}
                            exp={pokemon.base_experience}
                            toggleClick={toggleClick}
                            setToggleClick={setToggleClick}
                            favorited={pokemon.favorited}
                            isFavorited={newList?.includes(pokemon.id.toString()) ? true : false}
                            newList={newList}
                        />
                    );
                })}
                <UpButton
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }
                >
                    <img src={up} alt="up" />
                </UpButton>
            </CardGrid>
            <FooterEdge src={footerEdge} />
        </>
    );
};
export default MainPage;
