export interface decideWhichQueryToUseI {
    tags: Array<Array<string>>;
    searchTerm: string;
    setVariables: React.Dispatch<React.SetStateAction<object>>;
    setMode: React.Dispatch<React.SetStateAction<string | any>>;
    searchAndTagVariables: object;
    QUERY_POKEMON: string | any;
    searchVariables: object;
    tagVariables: object;
    noVariables: object;
    sortOrder: string;
    sortIndexOrder: string;
}
