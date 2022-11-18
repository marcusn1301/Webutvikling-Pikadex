import { useState, useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";

import footerEdge from "../../assets/pageEdges/footerEdge.svg";
import up from "../../assets/icons/up.svg";
import Loading from "../../components/Loading/Loading";
import sadPikaGIF from "../../assets/gifs/sadpika.gif";

import { useQuery } from "@apollo/client";
import { QUERY_POKEMON } from "../../GraphQL/queries";
import {
  noVariablesObject,
  searchVariablesObject,
  tagVariablesObject,
  searchAndTagVariablesObject,
  surpriseMeVariablesObject,
  decideWhichQueryToUse,
} from "../../utils/utils";

import {
  CardGrid,
  FooterEdge,
  PageCounter,
  SadPika,
  UpButton,
} from "./HomepageStyles";

type Dispatch<A> = (value: A) => void;

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [toggleClick, setToggleClick] = useState<boolean>(true);

  // Decides which gql query to use
  const [mode, setMode] = useState(QUERY_POKEMON);
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

  let likedPokemon: Array<string | null | any> = [
    localStorage?.getItem("addedToFavorites"),
  ];
  let newList = likedPokemon[0]?.split(",");

    // Set the different query variables imported from utils.ts
    let searchVariables: object = searchVariablesObject(page, searchTerm);
    let noVariables: object = noVariablesObject(page);
    let tagVariables: object = tagVariablesObject(page, tags);
    let searchAndTagVariables = searchAndTagVariablesObject(page, tags, searchTerm);

  // State for saving the current query variables
  const [variables, setVariables] = useState(searchVariables);

  // creates a data object with all the pokemon from the query
  let { data, loading } = useQuery(mode, variables);

  // When the user clicks on search, set the mode to the search term
  useEffect(() => {
    setPage(0);
    decideWhichQueryToUse({
      tags,
      searchTerm,
      setVariables,
      setMode,
      searchAndTagVariables,
      QUERY_POKEMON,
      searchVariables,
      tagVariables,
      noVariables,
    });
  }, [searchTerm, filterSearch]);

  const handleSurpriseMe = () => {
    let fetchAmount = 20;
    const randIntList = [];

    for (let i = 0; i < fetchAmount; i++) {
      let randInt = Math.floor(Math.random() * 801);
      randIntList.push(randInt);
    }

    let surpriseMeVariables: object = surpriseMeVariablesObject(
      randIntList,
      page
    );
    setVariables(surpriseMeVariables);
    setMode(QUERY_POKEMON);
  };

  // Whenthe user clicks on the surprise me button, set the page number to 0
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
    decideWhichQueryToUse({
      tags,
      searchTerm,
      setVariables,
      setMode,
      searchAndTagVariables,
      QUERY_POKEMON,
      searchVariables,
      tagVariables,
      noVariables,
    });
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
        <div
          style={{ visibility: page === 0 ? "hidden" : "visible" }}
          onClick={() => setPage(page > 0 ? page - 1 : 0)}
        >
          &lt;
        </div>
        Page {page + 1}
        <div
          style={{
            visibility: data?.pokemon?.length === 0 ? "hidden" : "visible",
          }}
          onClick={() => setPage((page) => (page += 1))}
        >
          &gt;
        </div>
      </PageCounter>
      <CardGrid>
        {data?.pokemon?.length === 0 && (
          <SadPika>
            <img src={sadPikaGIF} alt="sad pika :(" />
            <div>No more Pokemon :</div>
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
              isFavorited={
                newList?.includes(pokemon.id.toString()) ? true : false
              }
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
