import { gql } from "@apollo/client";

export const QUERY_POKEMON = gql`
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
