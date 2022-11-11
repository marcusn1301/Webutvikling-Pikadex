const { Neo4jGraphQL } = require("@neo4j/graphql");
const { ApolloServer, gql } = require("apollo-server");
const neo4j = require("neo4j-driver");

const typeDefs = gql`
    type Pokemon {
        id: Int
        weight: Int
        name: String
        species_id: Int
        height: Int
        base_experience: Int
        is_default: Int
        order_id: Int
        sprite_url: String
        type_1: String
        type_2: String
        favorited: Int
    }
`;

const driver = neo4j.driver("bolt://it2810-40.idi.ntnu.no:7687/browser/", neo4j.auth.basic("neo4j", "it281040"));

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

neoSchema.getSchema().then((schema) => {
    const server = new ApolloServer({
        schema,
        cors: {
            origin: "*", // <- allow request from all domains
        },
    });

    server.listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
});
