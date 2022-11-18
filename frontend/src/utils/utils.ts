interface handleSurpriseMeI {
    page: number;
    setVariables: (variables: any) => void;
    setMode: any;
    POKEMON_SURPRISE_ME: any;
}

export const handleSurpriseMe = ({ page, setVariables, setMode, POKEMON_SURPRISE_ME }: handleSurpriseMeI) => {
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

export const searchVariablesObject = (page: number, searchTerm: string) => {
    return {
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
};

export const noVariablesObject = (page: number) => {
    return {
        variables: {
            options: {
                offset: 20 * page,
                limit: 20,
            },
        },
    };
};

export const tagVariablesObject = (page: number, tags: Array<Array<string>>) => {
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
            },
        },
    };
};

export const searchAndTagVariablesObject = (page: number, tags: Array<Array<string>>, searchTerm: string) => {
    return {
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

interface decideWhichQueryToUseI {
    tags: Array<Array<string>>;
    searchTerm: string;
    setVariables: React.Dispatch<React.SetStateAction<object>>;
    setMode: React.Dispatch<React.SetStateAction<string | any>>;
    searchAndTagVariables: object;
    QUERY_POKEMON: string | any;
    searchVariables: object;
    tagVariables: object;
    noVariables: object;
}

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
