import { decideWhichQueryToUseI } from "../types/types";

//The queries below take in the page number and use it to calculate the offset. The sortOrder is for sorting on names, and the 
//sortIndexOrder is used for sorting on the pokemon-ID. Checks if one of the variables is an empty string
//and use the one that is not empty. If both are empty, sort is set to null.
export const searchVariablesObject = (page: number, searchTerm: string, sortOrder: string, sortIndexOrder: string, sortFavorited: string) => {
    return {
        variables: {
            options: {
                offset: 20 * page,
                limit: 20,
                sort: sortOrder != "" && sortIndexOrder == "" ? [
                    {
                        name: sortOrder
                    },
                ] : sortOrder == "" && sortIndexOrder != "" ? 
                [
                    {
                        id: sortIndexOrder
                    }
                ] : sortFavorited != "" ? [
                    {
                        favorited: sortFavorited
                    }
                ] : null
            },
            where: {
                name_CONTAINS: searchTerm,
            },
        },
    };
};

export const noVariablesObject = (page: number, sortOrder: string, sortIndexOrder: string, sortFavorited: string) => {
    return {
        variables: {
            options: {
                offset: 20 * page,
                limit: 20,
                sort: sortOrder != "" && sortIndexOrder == "" ? [
                    {
                        name: sortOrder
                    },
                ] : sortOrder == "" && sortIndexOrder != "" ? 
                [
                    {
                        id: sortIndexOrder
                    }
                ] : sortFavorited != "" ? [
                    {
                        favorited: sortFavorited
                    }
                ] : null
            },
        },
    };
};

export const tagVariablesObject = (page: number, tags: Array<Array<string>>, sortOrder: string, sortIndexOrder: string, sortFavorited: string) => {
    return {
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
                sort: sortOrder != "" && sortIndexOrder == "" ? [
                    {
                        name: sortOrder
                    },
                ] : sortOrder == "" && sortIndexOrder != "" ? 
                [
                    {
                        id: sortIndexOrder
                    }
                ] : sortFavorited != "" ? [
                    {
                        favorited: sortFavorited
                    }
                ] : null
            },
        },
    };
};

export const searchAndTagVariablesObject = (page: number, tags: Array<Array<string>>, searchTerm: string, sortOrder: string, sortIndexOrder: string, sortFavorited: string) => {
    return {
        variables: {
            options: {
                offset: 20 * page,
                limit: 20,
                sort: sortOrder != "" && sortIndexOrder == "" ? [
                    {
                        name: sortOrder
                    },
                ] : sortOrder == "" && sortIndexOrder != "" ? 
                [
                    {
                        id: sortIndexOrder
                    }
                ] : sortFavorited != "" ? [
                    {
                        favorited: sortFavorited
                    }
                ] : null
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
};

export const surpriseMeVariablesObject = (randIntList: Array<number>, page: number) => {
    return {
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
};

// Based on which options are chosen by the user, find out which query to use
export const decideWhichQueryToUse = ({
    tags,
    searchTerm,
    setVariables,
    setMode,
    searchAndTagVariables,
    QUERY_POKEMON,
    searchVariables,
    tagVariables,
    noVariables,
}: decideWhichQueryToUseI) => {
    if (tags.length > 0 && searchTerm.length > 0) {
        setVariables(searchAndTagVariables);
        setMode(QUERY_POKEMON);
    } else if (searchTerm.length > 0 && tags.length === 0) {
        setVariables(searchVariables);
        setMode(QUERY_POKEMON);
    } else if (tags.length > 0) {
        setVariables(tagVariables);
        setMode(QUERY_POKEMON);
    } else {
        setVariables(noVariables);
        setMode(QUERY_POKEMON);
    }
};
